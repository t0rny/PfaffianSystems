var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = PfaffianSystems","category":"page"},{"location":"#PfaffianSystems","page":"Home","title":"PfaffianSystems","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for PfaffianSystems.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [PfaffianSystems]","category":"page"},{"location":"#AbstractAlgebra.coefficients-Tuple{T} where T<:PfaffianSystems.AbstractDiffOp","page":"Home","title":"AbstractAlgebra.coefficients","text":"coefficients(f::T) where T <: AbstractDiffOp\n\nExtract the coefficients of a differential operator.\n\nArguments:\n\nf::T: A differential operator to extract the coefficients from.\n\nReturns:\n\nAn array of instances of T representing the coefficients of the differential operator.\n\n\n\n\n\n","category":"method"},{"location":"#AbstractAlgebra.evaluate-Union{Tuple{T}, Tuple{DIdeal{T}, Vector{T}, Vector{T}}} where T<:PfaffianSystems.WAlgElem","page":"Home","title":"AbstractAlgebra.evaluate","text":"evaluate(I::DIdeal{T}, vrs::Vector{T}, vals::Vector{T}) where T <: WAlgElem\n\nReturn the ideal that is obtained by evaluating I at vrs equal to vals.\n\n#Examples\n\njulia> D, (x, y), (dx, dy) = weyl_algebra([\"x\", \"y\"])\n(2-d Weyl algebra in [x,y], PfaffianSystems.WAlgElem{AbstractAlgebra.Generic.MPoly{AbstractAlgebra.Generic.MPoly{Rational{BigInt}}}}[x, y], PfaffianSystems.WAlgElem{AbstractAlgebra.Generic.MPoly{AbstractAlgebra.Generic.MPoly{Rational{BigInt}}}}[dx, dy])\njulia> I = DIdeal(D, [dx + x])\nIdeal of 2-d Weyl algebra in [x,y] generated by [dx + x]\njulia> evaluate(I, [x, dx], [y, dy])\nIdeal of 2-d Weyl algebra in [x,y] generated by [dy + y]\n\n\n\n\n\n","category":"method"},{"location":"#AbstractAlgebra.evaluate-Union{Tuple{T}, Tuple{T, Vector{T}, Vector{T}}} where T<:PfaffianSystems.AbstractDiffOp","page":"Home","title":"AbstractAlgebra.evaluate","text":"evaluate(dop::T, vars::Vector{T}, vals::Vector{T}) where T <: AbstractDiffOp\n\nEvaluate a differential operator with respect to a set of variables and their corresponding values.\n\nArguments\n\ndop::T: A differential operator to evaluate.\nvars::Vector{T}: A vector of variables to evaluate the differential operator with respect to.\nvals::Vector{T}: A vector of values corresponding to the variables.\n\nReturns\n\nAn instance of T representing the result of evaluating the differential operator.\n\nThe vars and vals vectors must have the same length, and each element in vars must be of the same type as its corresponding element in vals.\n\nExamples\n\njulia> D, (x, y), (dx, dy) = weyl_algebra([\"x\", \"y\"])\n(2-d Weyl algebra in [x,y], PfaffianSystems.WAlgElem{AbstractAlgebra.Generic.MPoly{AbstractAlgebra.Generic.MPoly{Rational{BigInt}}}}[x, y], PfaffianSystems.WAlgElem{AbstractAlgebra.Generic.MPoly{AbstractAlgebra.Generic.MPoly{Rational{BigInt}}}}[dx, dy])\njulia> evaluate(x*dx+y, [x], [x + y])\n(x + y)*dx + y\njulia> evaluate(x*dx + y, [dx], [dx+dy])\nx*dx + x*dy + y\n\n\n\n\n\n","category":"method"},{"location":"#AbstractAlgebra.exponent_vectors-Tuple{T} where T<:PfaffianSystems.AbstractDiffOp","page":"Home","title":"AbstractAlgebra.exponent_vectors","text":"exponent_vectors(f::T) where T <: AbstractDiffOp\n\nExtract the exponent vectors of a differential operator.\n\nArguments:\n\nf::T: A differential operator to extract the exponent vectors from.\n\nReturns:\n\nAn array of arrays representing the exponent vectors of the differential operator.\n\n\n\n\n\n","category":"method"},{"location":"#AbstractAlgebra.monomials-Tuple{T} where T<:PfaffianSystems.AbstractDiffOp","page":"Home","title":"AbstractAlgebra.monomials","text":"monomials(f::T) where T <: AbstractDiffOp\n\nExtract the monomials of a differential operator.\n\nArguments:\n\nf::T: A differential operator to extract the monomials from.\n\nReturns:\n\nAn array of instances of T representing the monomials of the differential operator.\n\n\n\n\n\n","category":"method"},{"location":"#AbstractAlgebra.vars-Tuple{T} where T<:PfaffianSystems.AbstractDiffOp","page":"Home","title":"AbstractAlgebra.vars","text":"vars(wae::T) where T <: AbstractDiffOp\n\nExamples\n\njulia> D, (x, y), (dx, dy) = weyl_algebra([\"x\", \"y\"])\n(2-d Weyl algebra in [x,y], PfaffianSystems.WAlgElem{AbstractAlgebra.Generic.MPoly{AbstractAlgebra.Generic.MPoly{Rational{BigInt}}}}[x, y], PfaffianSystems.WAlgElem{AbstractAlgebra.Generic.MPoly{AbstractAlgebra.Generic.MPoly{Rational{BigInt}}}}[dx, dy])\njulia> vars(x+y)\n2-element Vector{PfaffianSystems.WAlgElem{AbstractAlgebra.Generic.MPoly{AbstractAlgebra.Generic.MPoly{Rational{BigInt}}}}}:\n x\n y\n\n\n\n\n\n","category":"method"},{"location":"#PfaffianSystems.diff_op_ring-Tuple{AbstractAlgebra.Field, AbstractVector{<:AbstractString}}","page":"Home","title":"PfaffianSystems.diff_op_ring","text":"Ring of differential operators over rational functions\n\n\n\n\n\n","category":"method"},{"location":"#PfaffianSystems.dvars-Tuple{T} where T<:PfaffianSystems.AbstractDiffOp","page":"Home","title":"PfaffianSystems.dvars","text":"dvars(wae::T) where T <: AbstractDiffOp\n\nExamples\n\njulia> D, (x, y), (dx, dy) = weyl_algebra([\"x\", \"y\"])\n(2-d Weyl algebra in [x,y], PfaffianSystems.WAlgElem{AbstractAlgebra.Generic.MPoly{AbstractAlgebra.Generic.MPoly{Rational{BigInt}}}}[x, y], PfaffianSystems.WAlgElem{AbstractAlgebra.Generic.MPoly{AbstractAlgebra.Generic.MPoly{Rational{BigInt}}}}[dx, dy])\njulia> dvars(dx^2+y)\n1-element Vector{PfaffianSystems.WAlgElem{AbstractAlgebra.Generic.MPoly{AbstractAlgebra.Generic.MPoly{Rational{BigInt}}}}}:\n dx\n\n\n\n\n\n","category":"method"},{"location":"#PfaffianSystems.evalAsir-Union{Tuple{T}, Tuple{AbstractString, Vector{T}}} where T<:PfaffianSystems.AbstractDiffOp","page":"Home","title":"PfaffianSystems.evalAsir","text":"evalAsir(asir_res::AbstractString, vars_list::Vector{T}) where T <: AbstractDiffOp\n\nEvaluate asir_res as a Julia expression.\n\n\n\n\n\n","category":"method"},{"location":"#PfaffianSystems.integration_DIdeal-Union{Tuple{T}, Tuple{DIdeal{T}, OrderedCollections.OrderedSet{T}}} where T<:PfaffianSystems.WAlgElem","page":"Home","title":"PfaffianSystems.integration_DIdeal","text":"integration_DIdeal(I::DIdeal{T}, integ_vars::OrderedSet{T}) where T <: WAlgElem\nintegration_DIdeal(I::DIdeal{T}, integ_vars::Vector{T}) where T <: WAlgElem\n\nReturn the integration ideal of I with respect to integ_vars.\n\nExamples\n\njulia> D, (x, y), (dx, dy) = weyl_algebra([\"x\", \"y\"])\n(2-d Weyl algebra in [x,y], PfaffianSystems.WAlgElem{AbstractAlgebra.Generic.MPoly{AbstractAlgebra.Generic.MPoly{Rational{BigInt}}}}[x, y], PfaffianSystems.WAlgElem{AbstractAlgebra.Generic.MPoly{AbstractAlgebra.Generic.MPoly{Rational{BigInt}}}}[dx, dy])\njulia> I = DIdeal(D, [dx+x, dy+y])\nIdeal of 2-d Weyl algebra in [x,y] generated by [dx + x, dy + y]\njulia> integration_DIdeal(I, [x])\nIdeal of 2-d Weyl algebra in [x,y] generated by [dy + y]\n\n\n\n\n\n","category":"method"},{"location":"#PfaffianSystems.intersection_DIdeals-Union{Tuple{Vararg{DIdeal{T}}}, Tuple{T}} where T<:PfaffianSystems.WAlgElem","page":"Home","title":"PfaffianSystems.intersection_DIdeals","text":"intersection_DIdeals(Is::Ideal...)\n\nReturn the intersection of the D-ideals Is[1], Is[2], ...\n\nExamples\n\njulia> D, x, dx = weyl_algebra(\"x\")\n(1-d Weyl algebra in [x], x, dx)\njulia> I1 = DIdeal(D, [dx^2 + 1])\nIdeal of 1-d Weyl algebra in [x] generated by [dx^2 + 1]\njulia> I2 = DIdeal(D, [dx + x])\nIdeal of 1-d Weyl algebra in [x] generated by [dx + x]\njulia> intersection_DIdeals(I1, I2)\nIdeal of 1-d Weyl algebra in [x] generated by [x*dx^3 + (x^2 - 2)*dx^2 + x*dx + x^2 - 2, dx^5 + x*dx^4 + 6*dx^3 + 2*x*dx^2 + 5*dx + x]\n\n\n\n\n\n","category":"method"},{"location":"#PfaffianSystems.isAsirAvailable-Tuple{}","page":"Home","title":"PfaffianSystems.isAsirAvailable","text":"Return the version of available Asir as an integer if exists, and otherwise return nothing. \n\n\n\n\n\n","category":"method"},{"location":"#PfaffianSystems.leading_term","page":"Home","title":"PfaffianSystems.leading_term","text":"leading_term(f::DORElem, order::Symbol=:lex)\n\nReturn the leading term of f with respect to order.  Only order=:lex is supported now.\n\n\n\n\n\n","category":"function"},{"location":"#PfaffianSystems.multiplication_DIdeal-Union{Tuple{T}, Tuple{DIdeal{T}, DIdeal{T}}} where T<:PfaffianSystems.WAlgElem","page":"Home","title":"PfaffianSystems.multiplication_DIdeal","text":"multiplication_DIdeal(I::DIdeal{T}, J::DIdeal{T}) where T <: WAlgElem\n\nReturn an ideal that annihilates the product fg where f and g are annihilated by I and J, respectively. \n\nExmaples\n\njulia> D, x, dx = weyl_algebra(\"x\")\n(1-d Weyl algebra in [x], x, dx)\njulia> I1 = DIdeal(D, [dx^2 + 1])\nIdeal of 1-d Weyl algebra in [x] generated by [dx^2 + 1]\njulia> I2 = DIdeal(D, [dx + x])\nIdeal of 1-d Weyl algebra in [x] generated by [dx + x]\njulia> multiplication_DIdeal(I1, I2)\nIdeal of 1-d Weyl algebra in [x] generated by [-dx^2 - 2*x*dx - x^2 - 2]\n\n\n\n\n\n","category":"method"},{"location":"#PfaffianSystems.normalform-Union{Tuple{T}, Tuple{T, Vector{T}}} where T<:PfaffianSystems.DORElem","page":"Home","title":"PfaffianSystems.normalform","text":"normalform(f::T, G::Vector{T}) where T<: DORElem\n\nCompute normal form of f with respect to G and return the remainder r and quotients q.\n\n\n\n\n\n","category":"method"},{"location":"#PfaffianSystems.parseAsir-Tuple{AbstractString}","page":"Home","title":"PfaffianSystems.parseAsir","text":"parseAsir(asir_res::String)\n\nAdd square brackets and separete the response into lines. \n\n\n\n\n\n","category":"method"},{"location":"#PfaffianSystems.pfaffian_system-Union{Tuple{T}, Tuple{Vector{T}, Vector{T}}} where T<:PfaffianSystems.DORElem","page":"Home","title":"PfaffianSystems.pfaffian_system","text":"pfaffian_system(G::Vector{T}, S::Vector{T}) where T <: DORElem\n\nExamples\n\njulia> R, (x, y), (dx, dy) = diff_op_ring([\"x\", \"y\"])\n(2-dimensional ring of differential opeartors in [x,y], PfaffianSystems.DORElem{AbstractAlgebra.Generic.MPoly{AbstractAlgebra.Generic.RationalFunctionFieldElem{Rational{BigInt}, AbstractAlgebra.Generic.MPoly{Rational{BigInt}}}}}[x, y], PfaffianSystems.DORElem{AbstractAlgebra.Generic.MPoly{AbstractAlgebra.Generic.RationalFunctionFieldElem{Rational{BigInt}, AbstractAlgebra.Generic.MPoly{Rational{BigInt}}}}}[dx, dy])\njulia> pfaffian_system([dx^2 + 1, dy^2 + 1], [one(dx), dx, dy])\n2-element Vector{Matrix{AbstractAlgebra.Generic.RationalFunctionFieldElem{Rational{BigInt}, AbstractAlgebra.Generic.MPoly{Rational{BigInt}}}}}:\n [0 1 0; -1 0 0; 0 0 0]\n [0 0 1; 0 0 0; -1 0 0]\n\n\n\n\n\n","category":"method"},{"location":"#PfaffianSystems.restriction_DIdeal-Union{Tuple{T}, Tuple{DIdeal{T}, OrderedCollections.OrderedSet{T}}} where T<:PfaffianSystems.WAlgElem","page":"Home","title":"PfaffianSystems.restriction_DIdeal","text":"restriction_DIdeal(I::DIdeal{T}, rest_vars::OrderedSet{T}) where T <: WAlgElem\nrestriction_DIdeal(I::DIdeal{T}, rest_vars::Vector{T}) where T <: WAlgElem\n\nReturn the restriction ideal of I with respect to the subspace where every variable of rest_vars equals to zero.\n\nExamples\n\njulia> D, (x, y), (dx, dy) = weyl_algebra([\"x\", \"y\"])\n(2-d Weyl algebra in [x,y], PfaffianSystems.WAlgElem{AbstractAlgebra.Generic.MPoly{AbstractAlgebra.Generic.MPoly{Rational{BigInt}}}}[x, y], PfaffianSystems.WAlgElem{AbstractAlgebra.Generic.MPoly{AbstractAlgebra.Generic.MPoly{Rational{BigInt}}}}[dx, dy])\njulia> I = DIdeal(D, [dx^2 + 2*dx*dy + dy^2 + 1, -dy + x - y])\nIdeal of 2-d Weyl algebra in [x,y] generated by [dx^2 + 2*dx*dy + dy^2 + 1, -dy + x - y]\njulia> restriction_DIdeal(I, [y])\nIdeal of 2-d Weyl algebra in [x,y] generated by [-dx^2 - 2*x*dx - x^2 - 2]\n\n\n\n\n\n","category":"method"},{"location":"#PfaffianSystems.runAsir-Tuple{AbstractString}","page":"Home","title":"PfaffianSystems.runAsir","text":"runAsir(commands::AbstractString)\n\nRun commands on Asir. The raw response of Asir is returned as a string. \n\n\n\n\n\n","category":"method"},{"location":"#PfaffianSystems.stdmon-Union{Tuple{T}, Tuple{DIdeal{T}, OrderedCollections.OrderedSet{T}}} where T<:PfaffianSystems.DORElem","page":"Home","title":"PfaffianSystems.stdmon","text":"stdmon!(I::DIdeal[, ordered_vars::Vector{Num}])\n\nCompute standard monomials if I is zero-dimensional as an ideal of R-ring. The order of varaibles in the computation of Grobner bases can be provided as ordered_vars, which can be omitted as long as the computational time is not crutial. \n\n\n\n\n\n","category":"method"},{"location":"#PfaffianSystems.vec2str-Tuple{AbstractVector}","page":"Home","title":"PfaffianSystems.vec2str","text":"vec2str(v::AbstractVector; delim=\",\")\nvec2str(v::AbstractDiffOp; delim=\",\")\nvec2str(vs...; delim=\",\")\n\nReturn a string consiting of all elements of v with delimiter delim. \n\n\n\n\n\n","category":"method"},{"location":"#PfaffianSystems.weyl_algebra-Tuple{AbstractAlgebra.Field, AbstractVector{<:AbstractString}}","page":"Home","title":"PfaffianSystems.weyl_algebra","text":"WeylAlgebra\n\n\n\n\n\n","category":"method"},{"location":"#PfaffianSystems.wnormalform-Union{Tuple{T}, Tuple{T, Vector{T}}} where T<:PfaffianSystems.DORElem","page":"Home","title":"PfaffianSystems.wnormalform","text":"wnormalform(f::T, G::Vector{T}) where T<: DORElem Compute weak normal form of f with respect to G and return the remainder r and quotients q.\n\n\n\n\n\n","category":"method"}]
}
