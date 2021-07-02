
import { type, construct } from "./Base.js"

export const Pair = type()
export const pair = (x, y) => construct(Pair, p => p.pair(x, y))

export const cata = f => p => p.match({ pair:(x, y) => f(x, y) })

export const fst = cata((x, {}) => x)
export const snd = cata(({}, y) => y)

Object.assign(
    Pair,
    { Bifunctor_bimap(f, g) { return this.match({ pair:(x, y) => pair(f(x), g(y)) }) } }
)
