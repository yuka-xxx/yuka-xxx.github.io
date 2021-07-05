

import { pow, max, on, lt, flip, comp, inRange, cmult, saturate, sqrt, cdiv, cmod, div, cminus, curry, floor, clt, id } from './Base.js'
import { vec3, minus, dot, norm, multSV, plus as plusV, minus as minusV, normalize, negV } from './Vec3.js'
import { pmin, fst, pair, snd, pairF, cata as pairCata } from './Pair.js'
import { map } from './Functor.js'
import { bimap } from './Bifunctor.js'
import { seq, flat, csnoc, filter, range, minimumBy, zip, iota, forEach, sum } from './Seq.js'
import *  as A from './Array.js'
import * as C from './Color.js'
import * as R from './Ray.js'
import * as S from './Sphere.js'
import * as L from './Light.js'
import { cata as cataMaybe } from './Maybe.js'

const cw = 500
const ch = 500
const vw = 1
const vh = 1
const d = 1
const O = vec3(0, 0, 0)
const bgColor = C.color(0.5, 0.5, 0.5)

const redSphere = S.sphere(C.color(1, 0, 0), 500, 1, vec3(0, -1, -3))
const blueSphere = S.sphere(C.color(0, 0, 1), 500, 1, vec3(2, 0, -4))
const greenSphere = S.sphere(C.color(0, 1, 0), 10, 1, vec3(-2, 0, -4))
const yellowSphere = S.sphere(C.color(1, 1, 0), 1000, 5000, vec3(0, -5001, 0))
const spheres = seq(redSphere, blueSphere, greenSphere, yellowSphere)

const ambientLight = L.ambient(0.2)
const pointLight = L.point(0.6, vec3(2, 1, 0))
const directionalLight = L.directional(0.2, vec3(1, 4, -4))
const lights = seq(ambientLight, pointLight, directionalLight)

// intersect :: Ray -> Sphere -> Pair float float
const intersect = R.cata((O, D) => S.cata(({}, {}, r, C) => {
    const CO = minus(O, C)
    const a = dot(D, D)
    const b = 2 * dot(CO, D)
    const c = dot(CO, CO) - r*r
    const discr = b*b - 4*a*c
    return discr < 0 ? pair(Infinity, Infinity)
                     : pair((-b + sqrt(discr)) / (2*a), (-b - sqrt(discr)) / (2*a)) }))

const diffuse = (N, L) => max(0, dot(N, L) / (norm(N) * norm(L)))
const specular = (R, V, s) => max(0, pow(dot(R, V) / (norm(R) * norm(V)), s))
const diffspec = (N, L, V, s) => diffuse(N, L) + specular(minusV(multSV(2*dot(N, L), N), L), V, s)

// illuminate :: (Vec3, Vec3, Vec3, float) -> float
const illuminate = (P, N, V, s) => comp(
    sum,
    map(L.cata(id,
               (i, p) => i * diffspec(N, minusV(p, P), V, s),
               (i, L) => i * diffspec(N, L, V, s) ))
)(lights)

// trace :: (float, float) -> Ray -> Color
const trace = (tMin, tMax) => ray => R.cataR(ray)((O, D) => comp(
    cataMaybe(bgColor,
              pairCata((t, s) => { const P = plusV(O, multSV(t, D))
                                   const N = normalize(minusV(P, S.center(s)))
                                   return C.multSC(illuminate(P, N, negV(D), S.specular(s)), S.color(s)) })),
    minimumBy(on(lt)(fst)),
    filter(comp(inRange(tMin, tMax), fst)),
    map(pairF(comp(pmin, intersect(ray)), id))
)(spheres))

const canvas = Object.assign(document.createElement('canvas'), { width: cw, height: ch })
const ctx = canvas.getContext('2d')
const img = ctx.createImageData(cw, ch)

const toScreenCoord = pairF(flip(cmod)(cw), flip(cdiv)(cw))
const toCanvasCoord = bimap(flip(cminus)(div(cw, 2)), cminus(div(ch, 2) - 1))
const toViewport = pairCata((cx, cy) => vec3(cx * vw / cw, cy * vh / ch, -d))
const toWebColorComponet = comp(floor, cmult(256), saturate)
const toWebColor = C.cata((r,g,b) => seq(toWebColorComponet(r), toWebColorComponet(g), toWebColorComponet(b), 256))

comp(
    forEach(([i, p]) => img.data[i] = p),
    zip(iota(0)),
    flat,
    map(comp(toWebColor,
             trace(1, Infinity),
             curry(R.ray)(O),
             toViewport,
             toCanvasCoord,
             toScreenCoord)),
)(range(0, cw * ch))

ctx.putImageData(img, 0, 0)
document.body.replaceChildren(canvas)