
import { AdditiveAbelianMonoid, plus } from './AdditiveAbelianMonoid.js'
import { typeclass } from './Base.js'

export { plus, zero } from './AdditiveAbelianMonoid.js'

//  class AdditiveAbelianMonoid a => AdditiveAbelianGroup a where

//      neg :: a -> a
export const neg = x => x.AdditiveAbelianGroup_neg ()

//      minus :: a -> a -> a
//      minus x y = plus x (neg y)
export const minus = x => y => x.AdditiveAbelianGroup_minus (y)


export const AdditiveAbelianGroup = typeclass ( 
    AdditiveAbelianMonoid,
    { AdditiveAbelianGroup_minus (y) { return plus (this) (neg (y)) } }
)
