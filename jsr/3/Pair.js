
import { type, construct, plus, min } from "./Base.js"

export const Pair = type()
export const pair = (x, y) => construct(Pair, p => p.pair(x, y),
    { *[Symbol.iterator]() { yield x ; yield y } }
)

export const cata = f => p => p.match({ pair:(x, y) => f(x, y) })

export const fst = cata((x, {}) => x)
export const snd = cata(({}, y) => y)
export const pairF = (f, g) => x => pair(f(x), g(x))

Object.assign(
    Pair,
    { Bifunctor_bimap(f, g) { return this.match({ pair:(x, y) => pair(f(x), g(y)) }) } }
)

export const paired = f => cata((x, y) => f(x, y))
export const pmin = paired(min)
export const pplus = paired(plus)

export const dup = x => pair(x, x)