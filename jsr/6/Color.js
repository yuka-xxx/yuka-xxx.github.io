
import { type, construct } from './Base.js'
import { VectorSpace } from './VectorSpace.js'
import {} from './Number.js'

export const Color = type()
export const color = r => g => b => construct (Color, p => p.color (r, g, b))
export const cata = f => c => c.match({ color:(r, g, b) => f (r) (g) (b) })

Object.assign (Color,
    VectorSpace,
    {
        AdditiveAbelianSemigroup_plus (c) {
            return this.match({ color:(r1, g1, b1) => c.match({ color:(r2, g2, b2) => color (r1+r2) (g1+g2) (b1+b2) }) })
        },
        AdditiveAbelianMonoid_zero () { return 0 },
        AdditiveAbelianGroup_neg () { return this.match({ color:(r, g, b) => color (-r) (-g) (-b) }) },
        Semimodule_smult (k) { return this.match({ color:(r, g, b) => color (k*r) (k*g) (k*b) }) }
    }
)