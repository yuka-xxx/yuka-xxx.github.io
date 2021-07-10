
import { AdditiveAbelianMonoid } from './AdditiveAbelianMonoid.js'
import { MultiplicativeMonoid } from './MultiplicativeMonoid.js'
import { typeclass } from './Base.js'

export { zero, plus } from './AdditiveAbelianMonoid.js'
export { one, mult } from './MultiplicativeMonoid.js'

//  class (AdditiveAbelianMonoid a, MultiplicativeMonoid a) => Semiring a where


export const Semiring = typeclass (AdditiveAbelianMonoid, MultiplicativeMonoid)