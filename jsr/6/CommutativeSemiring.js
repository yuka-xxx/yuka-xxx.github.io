
import { Semiring } from './Semiring.js'
import { typeclass } from './Base.js'

export { zero, plus, one, mult } from "./Semiring.js"

//  class (Semiring a) => CommutativeSemiring a where


export const CommutativeSemiring = typeclass(Semiring)