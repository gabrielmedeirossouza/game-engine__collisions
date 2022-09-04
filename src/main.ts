import { SAT } from '@/collisions/SAT'
import { Vector2 } from '@/math/vector2'

const canvas = document.querySelector('canvas')!
const context = canvas.getContext('2d')!

function draw(vertices: Vector2[], origin = Vector2.zero): void {
	context.beginPath()
	context.translate(origin.x, origin.y)
	context.moveTo(vertices[0].x, vertices[0].y * -1)

	vertices.forEach((vertex) => {
		context.lineTo(vertex.x, vertex.y * -1)
	})

	context.stroke()
	context.fill()
	context.closePath()
}

canvas.addEventListener('mousemove', (event) => {
	context.clearRect(0, 0, 9999, 9999)

	const shapeA = [
		new Vector2(450, -200), // x50 y-100
		new Vector2(500, -300), // x100
		new Vector2(400, -300),
	]

	const shapeC = [
		new Vector2(650, -200), // x50 y-100
		new Vector2(700, -300), // x100
		new Vector2(600, -300),
	]

	const shapeB = [
		new Vector2(50 + event.offsetX, 0 - event.offsetY),
		new Vector2(100 + event.offsetX, -100 - event.offsetY),
		new Vector2(0 + event.offsetX, -100 - event.offsetY),
	]

	draw(shapeA)
	draw(shapeB)
	draw(shapeC)

	const shapesToCheck = [
		shapeA,
		shapeC
	]

	const isColliding = shapesToCheck.some((shape) => SAT.IntersectPolygonPolygon(shapeB, shape).isColliding)
	console.log(isColliding)
})

