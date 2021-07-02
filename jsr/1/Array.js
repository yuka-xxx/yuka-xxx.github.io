
import { curry } from './Base.js'
import * as T from './Pair.js'

Object.assign(Array.prototype,
    { Functor_map(f) { return this.map(f) } },
)

export const cartesian = (xs, ys) => xs.flatMap(x => ys.map(y => T.pair(x, y)))

// range(fst, lst) = [fst, fst + 1, ... lst - 1]
export const range = (fst, lst) => Array.from({ length: lst - fst }, (_, i) => fst + i )

export const filter = p => xs => xs.filter(p)

export const reduce = f => z => xs => xs.reduce(f, z)

export const minimumBy = pred => xs => xs.reduce((x, y) => pred(x, y) ? x : y)

export const cons = (x, xs) => [x].concat(xs)
export const ccons = curry(cons)

export const snoc = (xs, x) => xs.concat([x])
export const csnoc = curry(snoc)

export const flat = xs => xs.flat()