
import { InnerProductSpace, dot } from './InnerProductSpace.js'
import { typeclass } from './Base.js'
import {} from './Number.js'

export { zero, plus, one, mult, smult, neg, minus, inv, div, mults, divs, dot } from './InnerProductSpace.js'

//  class (InnerProductSpace a, Scalar a ~ Number) => EuclideanSpace a where

//  norm :: a -> Scalar a
export const norm = v => Math.sqrt (dot (v) (v))

//  normalize :: a -> a
export const normalize = v => divs (v) (norm (v))


export const EuclideanSpace = typeclass (InnerProductSpace)