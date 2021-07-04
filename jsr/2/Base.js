
export const id = x => x

const compose = (f, g) => (...args) => f(g(...args))
export const comp = (...fs) => fs.reduce(compose)

export const flip = f => x => y => f(y)(x)

export const curry = f => x => y => f(x, y)
export const uncurry = f => (x, y) => f(x)(y)

export const type = (t = null) => Object.create(t)
export const construct = (t, f, ...o) => comp(Object.seal, Object.freeze, Object.assign)(Object.create(t), { match: f }, ...o)

export const on = f => g => (x, y) => f(g(x), g(y))


export const plus = (x, y) => x + y
export const cplus = curry(plus)

export const minus = (x, y) => x - y
export const cminus = curry(minus)

export const inc = x => x + 1
export const dec = x => x - 1

export const mult = (x, y) => x * y
export const cmult = curry(mult)

export const floor = Math.floor

export const div = (x, y) => floor(x / y)
export const cdiv = curry(div)

export const fdiv = (x, y) => x / y
export const cfdiv = curry(fdiv)

export const mod = (x, y) => x % y
export const cmod = curry(mod)

export const lt = (x, y) => x < y
export const clt = curry(lt)

export const clamp = (min, max) => x => Math.min(Math.max(min, x), max)

export const saturate = clamp(0, 1)

export const sqrt = Math.sqrt

export const min = Math.min

// x ∈ [min, max)
export const inRange = (min, max) => x => min <= x && x < max