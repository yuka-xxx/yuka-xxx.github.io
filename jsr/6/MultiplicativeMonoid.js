
import { MultiplicativeSemigroup } from './MultiplicativeSemigroup.js'
import { typeclass } from './Base.js'

export { mult } from './MultiplicativeSemigroup.js'

//  class MultiplicativeSemigroup a => MultiplicativeMonoid a where

//      one :: a
export const one = t => t.MultiplicativeMonoid_one ()


export const MultiplicativeMonoid = typeclass(MultiplicativeSemigroup)