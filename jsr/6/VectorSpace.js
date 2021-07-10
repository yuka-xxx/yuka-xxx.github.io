
import { flip, typeclass } from './Base.js'
import { Module, smult } from './Module.js'
import { inv } from './Field.js'

export { zero, plus, one, mult, smult, neg, minus } from './Module.js'
export { inv, div } from './Field.js'

//  class (Module a, Field (Scalar a)) => VectorSpace a

//  mults :: (VectorSpace a, Field s) => a -> s -> a
//  mults = flip smult
export const mults = flip (smult)

//  divs :: (VectorSpace a, Field s) => a -> s -> a
//  divs v x = smult (inv x) v
export const divs = v => x => smult (inv (x)) (v)


export const VectorSpace = typeclass (Module)