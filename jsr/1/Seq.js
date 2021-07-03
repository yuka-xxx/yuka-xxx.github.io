
import { curry, type, compose } from "./Base.js";
import { pair } from "./Pair.js";

export const Seq = type()

const mkSeq = (...o) => compose(Object.seal, Object.freeze, Object.assign)(Object.create(Seq), ...o)

export const map = f => xs => mkSeq({
    *[Symbol.iterator]() { for (const x of xs) yield f(x) }
})

Object.assign(Seq,
    { Functor_map(f) { return map(f)(this) } }
)

export const seq = (...xs) => mkSeq({
    *[Symbol.iterator]() { yield* xs }
})

export const empty = () => mkSeq({
    *[Symbol.iterator]() {}
})

export const cons = (x, xs) => mkSeq({
    *[Symbol.iterator]() { yield x ; yield* xs }
})

export const ccons = curry(cons)

export const snoc = (xs, x) => mkSeq({
    *[Symbol.iterator]() { yield* xs ; yield x }
})

export const csnoc = curry(snoc)

export const append = (xs, ys) => mkSeq({
    *[Symbol.iterator]() { yield* xs ; yield* ys }
})

export const range = (min, max) => mkSeq({
    *[Symbol.iterator]() { for (let i = min ; i < max ; ++i) yield i }
})

export const iota = min => mkSeq({
    *[Symbol.iterator]() { for (let i = min ; ; ++i) yield i }
})

export const flat = xss => mkSeq({
    *[Symbol.iterator]() { for (const xs of xss) yield* xs }
})

export const filter = p => xs => mkSeq({
    *[Symbol.iterator]() { for (const x of xs) if (p(x)) yield x }
})

export const cartesian = (xs, ys) => mkSeq({
    *[Symbol.iterator]() { for (const x of xs) for (const y of ys) yield pair(x, y) }
})

export const zipWith = f => xs => ys => mkSeq({
    *[Symbol.iterator]() {
        const ixs = xs[Symbol.iterator]()
        const iys = ys[Symbol.iterator]()
        for (let x, y ; !(x = ixs.next()).done && !(y = iys.next()).done ; )
            yield f(x.value, y.value)
    }
})

export const zip = zipWith(pair)

export const unfold = f => x => mkSeq({
    *[Symbol.iterator]() { const [a, b] = f(x) ; yield a ;  yield* unfold(f)(b) }
})

export const iterate = f => x => mkSeq({
    *[Symbol.iterator]() { yield* unfold(x => [x, f(x)])(x) }
})

export const reduce = f => z => xs => {
    let acc = z
    for (const x of xs) acc = f(acc, x)  
    return acc
}

export const reduce1 = f => xs => {
    const it = xs[Symbol.iterator]()
    let acc = it.next().value
    for (const x of it) acc = f(acc, x)  
    return acc
}

export const minimumBy = pred => reduce1((x, y) => pred(x, y) ? x : y)

export const head = xs => { for (const x of xs) return x }

export const forEach = f => xs => { for (const x of xs) f(x) }
