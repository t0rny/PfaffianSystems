function Bijection{S, T}(dict::AbstractDict{S, T}) where S where T
	return Bijection(dict)
end

abstract type AbstractIdeal end

"""
	DIdeal <: AbstractIdeal

D-Ideal type
"""
struct DIdeal <: AbstractIdeal
	gens::Vector{Num} 
	v2d::Bijection{Num, Num}
	flags::Dict{String, Bool}

	function DIdeal(gens::Vector{Num}, v2d::Bijection{Num, Num})
		gen_vars = get_variables.(gens) .|> Set |> (s->union(s...))
		dict_vars = union(v2d.domain, v2d.range)

		@assert issubset(gen_vars, dict_vars) "Error: generators include unknown variables"
		_v2d = empty(v2d)
		for (k, v) in v2d
			if k in gen_vars || v in gen_vars
				_v2d[k] = v
			end
		end
		new(copy(gens), _v2d, Dict{String, Bool}("isZeroDim"=>false))
	end
end

function makeTestVarsAndIdeal()
	x, dx, v2d = genVars("x", 3)
	return x, dx, v2d, DIdeal([dx[1]^2 + 1, x[2]*dx[2] - 2, x[3]*dx[3] - 1], v2d)
end

"""
	stdmon!(I::DIdeal[, ordered_vars::Vector{Num}])

Compute standard monomials if `I` is zero-dimensional as an ideal of R-ring. The order of varaibles in the computation of Grobner bases can be provided as `ordered_vars`, which can be omitted as long as the computational time is not crutial. 
"""
function stdmon!(I::DIdeal, ordered_vars::OrderedSet{Num})
	@assert isequal(I.v2d.domain, ordered_vars) "Error: invalid vector for second argument"
	asir_cmd = 
	"""
	load("yang.rr")\$
	V = [$(vec2str(ordered_vars))]\$
	yang.define_ring(["partial", V])\$
	Gb = yang.gr([$(vec2str(I.gens))])\$
	In = yang.in(Gb)\$
	yang.stdmon(Gb);
	"""

	asir_res = runAsir(asir_cmd) |> parseAsir
	asir_res = filter!((s->startswith(s, "[")), asir_res)

	# (length(asir_res) != 1) && return nothing
	if length(asir_res) != 1
		I.flags["isZeroDim"] = false
		return nothing
	end

	I.flags["isZeroDim"] = true
	vars_list = cat(collect(I.v2d.domain), collect(I.v2d.range); dims=1)
	eval(Meta.parse("stdmon_tmpFunc($(vec2str(vars_list))) = $(asir_res[1])"))
	return Base.invokelatest(stdmon_tmpFunc, vars_list...)
end
stdmon!(I::DIdeal) = stdmon!(I, I.v2d.domain |> OrderedSet{Num})

"""
	isZeroDimensional(I::DIdeal)

Check if DIdeal `I` is zero-dimensional. 
"""
function isZeroDimensional(I::DIdeal)
	if I.flags["isZeroDim"]
		return true
	else
		stdmon!(I)
		return I.flags["isZeroDim"]
	end
end

"""
	eliminationIdeal(I::DIdeal, elim_vars::OrderedSet{Num})
	eliminationIdeal(I::DIdeal, elim_vars::Vector{Num})

Return elimination ideal of `I` that does not include any variable of `elim_vars`. 
"""
function eliminationIdeal(I::DIdeal, elim_vars::OrderedSet{Num})
	@assert issubset(elim_vars, I.v2d.domain) "Error: unknown"

	elim_dos = map(s->I.v2d[s], elim_vars |> collect)
	rem_vars = setdiff(I.v2d.domain, elim_vars) |> collect
	rem_dos = map(s->I.v2d[s], rem_vars |> collect)
	elim_vars = collect(elim_vars)
	m = length(elim_vars)
	n = length(I.v2d.domain)

	asir_cmd = 
	"""
	load("nk_restriction.rr")\$
	V = [$(vec2str(elim_vars, rem_vars, elim_dos, rem_dos))]\$
	M = nk_restriction.make_elim_order_mat($(2*m), $(2*(n - m)))\$
	J = [$(vec2str(I.gens))]\$
	GB = nd_weyl_gr(J, V, 0, M);
	"""

	asir_res = asir_cmd |> runAsir |> parseAsir
	asir_res = filter!((s)->(startswith(s, "[")), asir_res)

	(length(asir_res) != 1) && return nothing

	vars_list = cat(rem_vars, elim_vars, rem_dos, elim_dos; dims=1)
	eval(Meta.parse("elim_tmpFunc($(vec2str(vars_list))) = $(asir_res[1])"))
	elimOrdGens = Base.invokelatest(elim_tmpFunc, vars_list...)

	notHasElimVar(diffOp) = (get_variables(diffOp), [elim_vars; elim_dos]) .|> Set |> (s->intersect(s...)) |> isempty

	return DIdeal(filter(notHasElimVar, elimOrdGens), Dict((v, d) for (v,d) in zip(rem_vars, rem_dos)) |> Bijection)
end
eliminationIdeal(I::DIdeal, elim_vars::Vector{Num}) = eliminationIdeal(I, OrderedSet(elim_vars))

"""
	idealIntersection(Is::DIdeal...)

Return the intersection of the D-ideals `Is[1]`, `Is[2]`, ...
"""
function idealIntersection(Is::DIdeal...)
	m = length(Is)
	t, dt, v2d_t = genVars("t", m)
	v2d_all = Bijection{Num, Num}()

	genJ = [reduce(+, t)-1]
	for i = 1:m
		append!(genJ, Is[i].gens .* t[i])
		for p in Is[i].v2d
			!haskey(v2d_all, p.first) && (v2d_all[p.first] = p.second)
		end
	end

	vars = collect(v2d_all.domain)
	diffops = [v2d_all[v] for v in vars]

	asir_cmd = 
	"""
	load("nk_restriction.rr")\$
	V = [$(vec2str(t, vars, dt, diffops))]\$
	M = nk_restriction.make_elim_order_mat($m, $(length(vars)))\$
	J = [$(vec2str(genJ))]\$
	GB = nd_weyl_gr(J, V, 0, M);
	"""

	asir_res = asir_cmd |> runAsir |> parseAsir
	asir_res = filter!((s)->(startswith(s, "[")), asir_res)

	(length(asir_res) != 1) && return nothing

	vars_list = cat(t, vars, dt, diffops; dims=1)
	eval(Meta.parse("intersect_tmpFunc($(vec2str(vars_list))) = $(asir_res[1])"))
	elimOrdGens = Base.invokelatest(intersect_tmpFunc, vars_list...)

	notHasTmpVar(diffOp) = (get_variables(diffOp), [t; dt]) .|> Set |> (s->intersect(s...)) |> isempty

	return DIdeal(filter(notHasTmpVar, elimOrdGens), Dict((v, d) for (v,d) in zip(vars, diffops)) |> Bijection)
end