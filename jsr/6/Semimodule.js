
import { AdditiveAbelianMonoid } from './AdditiveAbelianMonoid.js'
import { typeclass } from './Base.js'

export { zero, plus, one, mult } from './CommutativeSemiring.js'

//  class (AdditiveAbelianMonoid a, CommutativeSemiring (Scalar a)) => Semimodule a where
//      type Scalar a

//      -- scalar multiplication
//      multS :: Scalar a -> a -> a

export const smult = s => x => x.Semimodule_smult (s)


export const Semimodule = typeclass (AdditiveAbelianMonoid)