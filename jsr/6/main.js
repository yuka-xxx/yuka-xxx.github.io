
const cw = 500
const ch = 500

const canvas = Object.assign(document.createElement('canvas'), { width: cw, height: ch })
const ctx = canvas.getContext('2d')
const img = ctx.createImageData(cw, ch)

ctx.putImageData(img, 0, 0)
document.body.replaceChildren(canvas)