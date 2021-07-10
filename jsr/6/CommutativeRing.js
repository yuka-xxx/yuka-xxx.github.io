
import { AdditiveAbelianGroup } from './AdditiveAbelianGroup.js'
import { CommutativeSemiring } from './CommutativeSemiring.js'
import { typeclass } from './Base.js'

export { neg, minus } from './AdditiveAbelianGroup.js'
export { zero, plus, one, mult } from './CommutativeSemiring.js'

//  class (Ring a) => CommutativeRing a where


export const CommutativeRing = typeclass (AdditiveAbelianGroup, CommutativeSemiring)