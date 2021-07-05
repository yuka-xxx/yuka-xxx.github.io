
import { construct, type, uncurry, sqrt, comp, id } from "./Base.js";
import { dup, paired, pairF } from "./Pair.js";

export const Vec3 = type()
// vec3 :: (float, float, float) -> Vec3
export const vec3 = (x, y, z) => construct(Vec3, p => p.vec3(x, y, z))

export const cata = f => v => v.match({ vec3:(x, y, z) => f(x, y, z) })

export const x = cata((x, {}, {}) => x)
export const y = cata(({}, y, {}) => y)
export const z = cata(({}, {}, z) => z)

export const cdot = cata((x1, y1, z1) => cata((x2, y2, z2) => x1*x2 + y1*y2 + z1*z2))
export const dot = uncurry(cdot)
export const pdot = paired(dot)

export const cplus = cata((x1, y1, z1) => cata((x2, y2, z2) => vec3(x1+x2, y1+y2, z1+z2)))
export const plus = uncurry(cplus)
export const pplus = paired(plus)

export const cminus = cata((x1, y1, z1) => cata((x2, y2, z2) => vec3(x1-x2, y1-y2, z1-z2)))
export const minus = uncurry(cminus)
export const pminus = paired(minus)

export const norm = comp(sqrt, pdot, dup)

export const cmultSV = k => cata((x, y, z) => vec3(k*x, k*y, k*z))
export const multSV = uncurry(cmultSV)
export const pmultSV = paired(multSV)

export const divVS = (v, k) => cata((x, y, z) => vec3(x/k, y/k, z/k))(v)
export const cdivVS = uncurry(divVS)
export const pdivVS = paired(divVS)

export const negV = cata((x, y, z) => vec3(-x, -y, -z))

export const normalize = comp(pdivVS, pairF(id, norm))

export const cosBetween = (v, w) => dot(v, w) / (norm(v) * norm(w))