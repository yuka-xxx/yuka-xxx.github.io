

import { min, on, lt, flip, compose, inRange, cmult, saturate, sqrt } from './Base.js'
import { vec3, minus, dot } from './Vec3.js'
import { fst, pair, snd, cata as cataPair } from './Pair.js'
import { map } from './Functor.js'
import { seq, flat, csnoc, filter, range, cartesian, minimumBy, zip, iota, forEach, iterate } from './Seq.js'
import *  as A from './Array.js'
import * as C from './Color.js'
import * as S from './Sphere.js'

const cw = 500
const ch = 500
const vw = 1
const vh = 1
const d = 1
const O = vec3(0, 0, 0)
const bgColor = C.color(0.5, 0.5, 0.5)

const redSphere = S.sphere(C.color(1, 0, 0), 1, vec3(0, -1, -3))
const blueSphere = S.sphere(C.color(0, 1, 0), 1, vec3(2, 0, -4))
const greenSphere = S.sphere(C.color(0, 0, 1), 1, vec3(-2, 0, -4))
const spheres = [redSphere, blueSphere, greenSphere]

const canvasToViewport = p => vec3(-snd(p) * vw / cw, -fst(p) * vh / ch, -d)

// intersectRaySphere :: (Vec3, Vec3) -> Sphere -> Pair float float
const intersectRaySphere = (O, D) => S.cata(({}, r, center) => {
    const CO = minus(O, center)
    const a = dot(D, D)
    const b = 2 * dot(CO, D)
    const c = dot(CO, CO) - r*r
    const discr = b*b - 4*a*c
    return discr < 0 ? pair(Infinity, Infinity)
                     : pair((-b + sqrt(discr)) / (2*a), (-b - sqrt(discr)) / (2*a))
})

const traceRay = (tMin, tMax) => O => D => compose(
    snd,
    minimumBy(on(lt)(fst)),
    flip(csnoc)(pair(Infinity, bgColor)),
    filter(compose(inRange(tMin, tMax), fst)),
    map(s => cataPair((t1, t2) => pair(min(t1, t2), S.color(s)))(intersectRaySphere(O, D)(s)))
)(spheres)

const toWebColor = compose(Math.floor, cmult(256), saturate)

const canvas = Object.assign(document.createElement('canvas'), { width: cw, height: ch })
document.body.append(canvas)
const ctx = canvas.getContext('2d')
const img = ctx.createImageData(cw, ch)

compose(
    forEach(([i, p]) => img.data[i] = p),
    zip(iota(0)),
    flat,
    map(compose(C.cata((r,g,b) => seq(toWebColor(r), toWebColor(g), toWebColor(b), 256)),
                traceRay(1, Infinity)(O),
                canvasToViewport)),
    cartesian
)(range(-ch/2,ch/2), range(-cw/2, cw/2))

ctx.putImageData(img, 0, 0)
