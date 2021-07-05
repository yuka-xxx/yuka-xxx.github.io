import { construct, flip, type } from "./Base.js";

export const Sphere = type()
// sphere :: (Color, float, Vec3) -> Sphere
export const sphere = (color, specular, radius, center) => construct(Sphere, p => p.sphere(color, specular, radius, center))
export const cata = f => s => s.match({ sphere:(k, s, r, c) => f(k)(s)(r)(c) })

export const color = cata(k => _ => _ => _ => k)
export const specular = cata(_ => s => _ => _ => s)
export const radius = cata(_ => _ => r => _ => r)
export const center = cata(_ => _ => _ => c => c)
