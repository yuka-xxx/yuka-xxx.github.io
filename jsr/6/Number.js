
import { Field } from './Field.js'

Object.assign(Number.prototype,
    Field,
    {
        AdditiveAbelianSemigroup_plus (y) { return x + y },
        MultiplicativeSemigroup_mult (y) { return this * y },
        AdditiveAbelianMonoid_zero () { return 0 },
        MultiplicativeMonoid_one () { return 1 },
        MultiplicativePIMonoid_inv () { return 1 / this }
    }
)