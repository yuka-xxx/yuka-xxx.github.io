
import { construct, type } from "./Base.js";

export const Vec3 = type()
// vec3 :: (float, float, float) -> Vec3
export const vec3 = (x, y, z) => construct(Vec3, p => p.vec3(x, y, z))

export const x = v => v.match({ vec3:(x, {}, {}) => x })
export const y = v => v.match({ vec3:({}, y, {}) => y })
export const z = v => v.match({ vec3:({}, {}, z) => z })

export const dot = (v1, v2) => v1.match({ vec3:(x1, y1, z1) => v2.match({ vec3:(x2, y2, z2) => x1*x2 + y1*y2 + z1*z2 }) })

export const plus = (v1, v2) => v1.match({ vec3:(x1, y1, z1) => v2.match({ vec3:(x2, y2, z2) => vec3(x1+x2, y1+y2, z1+z2) }) })
export const minus = (v1, v2) => v1.match({ vec3:(x1, y1, z1) => v2.match({ vec3:(x2, y2, z2) => vec3(x1-x2, y1-y2, z1-z2) }) })