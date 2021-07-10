
import { AdditiveAbelianGroup } from './AdditiveAbelianGroup.js'
import { Semiring } from './Semiring.js'
import { typeclass } from './Base.js'

export { neg, minus } from './AdditiveAbelianGroup.js'
export { zero, one, plus, mult } from './Semiring.js'

//  class (AdditiveAbelianGroup a, Semiring a) => Ring a where


export const Ring = typeclass (AdditiveAbelianGroup, Semiring)