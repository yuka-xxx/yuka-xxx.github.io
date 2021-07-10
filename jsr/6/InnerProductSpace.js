
import { VectorSpace } from './VectorSpace.js'
import { typeclass } from './Base.js'

export { zero, plus, one, mult, smult, neg, minus, inv, div, mults, divs } from './VectorSpace.js'


//  class VectorSpace a => InnerProductSpace a

//      dot :: a -> a -> Scalar a

export const dot = v => w => v.VectorSpace_dot (w)


export const InnerProductSpace = typeclass (VectorSpace)