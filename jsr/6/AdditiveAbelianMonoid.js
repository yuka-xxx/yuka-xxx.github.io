
import { AdditiveAbelianSemigroup } from './AdditiveAbelianSemigroup.js'
import { typeclass } from './Base.js'

export { plus } from './AdditiveAbelianSemigroup.js'

//  class AdditiveAbelianSemigroup a => AdditiveAbelianMonoid a where

//      zero :: a
export const zero = t => t.AdditiveAbelianMonoid_zero ()


export const AdditiveAbelianMonoid = typeclass (AdditiveAbelianSemigroup)