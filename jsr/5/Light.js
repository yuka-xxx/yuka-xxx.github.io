
import { construct, type } from "./Base.js";

export const Light = type()

export const ambient = intensity => construct(Light, p => p.ambient(intensity))
export const point = (intensity, position) => construct(Light, p => p.point(intensity, position))
export const directional = (intensity, direction) => construct(Light, p => p.directional(intensity, direction))

export const cata = (f, g, h) => l => l.match({
    ambient:(i) => f(i),
    point:(i, p) => g(i)(p),
    directional:(i, d) => h(i)(d)
})