
import { CommutativeRing } from './CommutativeRing.js'
import { MultiplicativePIMonoid } from './MultiplicativePIMonoid.js'
import { typeclass } from './Base.js'

export { zero, plus, one, mult, neg, minus } from './CommutativeRing.js'
export { inv, div } from './MultiplicativePIMonoid.js'

//  class (CommutativeRing a, MultiplicativePIMonoid a) => Field where


export const Field = typeclass (CommutativeRing, MultiplicativePIMonoid)