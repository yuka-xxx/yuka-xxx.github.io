

import { color, cata as cataColor } from './Color.js'
import { minus, divs } from './VectorSpace.js'

const k1 = color (0.3) (0.2) (0.1)
const k2 = color (0.2) (0.5) (-0.1)

cataColor(r => g => b => console.log (`(${r}, ${g}, ${b})`))(divs (minus (k1) (k2)) (2))


const cw = 500
const ch = 500

const canvas = Object.assign(document.createElement('canvas'), { width: cw, height: ch })
const ctx = canvas.getContext('2d')
const img = ctx.createImageData(cw, ch)



ctx.putImageData(img, 0, 0)
document.body.replaceChildren(canvas)