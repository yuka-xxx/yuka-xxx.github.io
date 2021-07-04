import { construct, type } from "./Base.js";

export const Sphere = type()
// sphere :: (Color, float, Vec3) -> Sphere
export const sphere = (color, radius, center) => construct(Sphere, p => p.sphere(color, radius, center))
export const cata = f => s => s.match({ sphere:(k, r, c) => f(k, r, c) })

export const color = cata((k, {}, {}) => k)
export const radius = cata(({}, r, {}) => r)
export const center = cata(({}, {}, c) => c)
