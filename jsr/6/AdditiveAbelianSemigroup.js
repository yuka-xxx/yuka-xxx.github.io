
//  class AdditiveAbelianSemigroup a where

import { typeclass } from './Base.js'

//      plus :: a -> a -> a
export const plus = x => y => x.AdditiveAbelianSemigroup_plus (y)


export const AdditiveAbelianSemigroup = typeclass ()
