import { construct, flip, type } from "./Base.js";

export const Sphere = type()
// sphere :: (Color, float, Vec3) -> Sphere
export const sphere = (color, specular, reflective, radius, center) =>
    construct(Sphere, p => p.sphere(color, specular, reflective, radius, center))
export const cata = f => s => s.match({ sphere:(k, s, l, r, c) => f(k)(s)(l)(r)(c) })

export const color = cata(k => _ => _ => _ => _ => k)
export const specular = cata(_ => s => _ => _ => _ => s)
export const reflective = cata(_ => _ => l => _ => _ => l)
export const radius = cata(_ => _ => _ => r => _ => r)
export const center = cata(_ => _ => _ => _ => c => c)
