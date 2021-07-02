import { construct, type } from "./Base.js";

export const Sphere = type()
// sphere :: (Color, float, Vec3) -> Sphere
export const sphere = (color, radius, center) => construct(Sphere, p => p.sphere(color, radius, center))

export const color = s => s.match({ sphere:(c, {}, {}) => c })
export const radius = s => s.match({ sphere:({}, r, {}) => r })
export const center = s => s.match({ sphere:({}, {}, c) => c })