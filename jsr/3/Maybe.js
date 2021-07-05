
import { construct, type } from './Base.js'


export const Maybe = type()
export const nothing = () => construct(Maybe, p => p.nothing())
export const just = x => construct(Maybe, p => p.just(x))
export const cata = (z, f) => m => m.match({ nothing:() => z, just:(x) => f(x) })

Object.assign(
    Maybe,
    { Functor_map(f) { return this.match({ nothing:() => nothing(), just:(x) => just(f(x)) }) } }
)