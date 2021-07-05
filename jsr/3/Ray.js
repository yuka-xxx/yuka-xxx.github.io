import { construct, type, flip } from "./Base.js";

export const Ray = type()
export const ray = (endpoint, direction) => construct(Ray, p => p.ray(endpoint, direction))

export const cata = f => r => r.match({ ray:(O, D) => f(O)(D) })
export const cataR = flip(cata)

export const endpoint = cata(O => _ => O)
export const direction = cata(_ => D => D)