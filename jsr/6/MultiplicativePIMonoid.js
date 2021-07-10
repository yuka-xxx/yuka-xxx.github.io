
import { MultiplicativeMonoid, mult } from "./MultiplicativeMonoid.js"
import { typeclass } from './Base.js'

export { one, mult } from "./MultiplicativeMonoid.js"

//  class MultiplicativeMonoid a => MultiplicativePIMonoid a where

//      inv :: a -> a
export const inv = x => x.MultiplicativePIMonoid_inv ()

//      div :: a -> a -> a
//      div x y = mult x (inv y)
export const div = x => y => x.MultiplicativePIMonoid_div (y)


export const MultiplicativePIMonoid = typeclass(
    MultiplicativeMonoid,
    { MultiplicativePIMonoid_div (y) { return mult (this) (inv (y)) } }
)