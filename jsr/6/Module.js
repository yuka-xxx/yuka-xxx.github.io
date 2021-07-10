
import { AdditiveAbelianGroup } from './AdditiveAbelianGroup.js'
import { Semimodule } from './Semimodule.js'
import { typeclass } from './Base.js'

export { zero, plus, one, mult, smult } from './Semimodule.js'
export { neg, minus } from './AdditiveAbelianGroup.js'

//  class (Semimodule a, AdditiveGroup a, Ring (Scalar a)) => Module a where


export const Module = typeclass (Semimodule, AdditiveAbelianGroup)