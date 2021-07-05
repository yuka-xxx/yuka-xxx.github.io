import { construct, type } from "./Base.js";

export const Sphere = type()
// sphere :: (Color, float, Vec3) -> Sphere
export const sphere = (color, specular, radius, center) => construct(Sphere, p => p.sphere(color, specular, radius, center))
export const cata = f => s => s.match({ sphere:(k, s, r, c) => f(k, s, r, c) })

export const color = cata((k, {}, {}, {}) => k)
export const specular = cata(({}, s, {}, {}) => s)
export const radius = cata(({}, {}, r, {}) => r)
export const center = cata(({}, {}, {}, c) => c)
