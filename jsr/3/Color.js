
import { type, construct, curry } from './Base.js'

export const Color = type()
export const color = (r, g, b) => construct(Color, p => p.color(r, g, b))
export const cata = f => c => c.match({ color:(r, g, b) => f(r)(g)(b) })

export const multSC = (k, c) => c.match({ color:(r, g, b) => color(k * r, k * g, k * b) })
export const cmultSC = curry(multSC)

export const plus = (l, r) => l.match({color:(r1, g1, b1) => r.match({ color:(r2, g2, b2) => color(r1 + r2, g1 + g2, b1 + b2) })} )
export const cplus = curry(plus)
