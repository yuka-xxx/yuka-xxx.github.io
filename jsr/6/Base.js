
export const id = x => x

const compose = (f, g) => (...args) => f(g(...args))
export const comp = (...fs) => fs.reduce(compose)

export const konst = k => _ => k

export const flip = f => x => y => f (y) (x)

export const type = (t = null) => Object.create(t)
export const construct = (t, f, ...o) => comp(Object.seal, Object.freeze, Object.assign)(Object.create(t), { match: f }, ...o)

export const typeclass = (...o) => Object.assign(Object.create(null), ...o)