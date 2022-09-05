import { Canvas } from '@/renderer'
import { SAT } from '@/collisions'
import { Vector2 } from '@/math'

Canvas.canvas.addEventListener('mousemove', (event) => {
	Canvas.Refresh()

	const shapeA = [
		new Vector2(550, -200),
		new Vector2(600, -300),
		new Vector2(500, -300),
	]

	const shapeMain = [
		new Vector2(50 + event.offsetX, 0 - event.offsetY),
		new Vector2(100 + event.offsetX, -100 - event.offsetY),
		new Vector2(0 + event.offsetX, -100 - event.offsetY),
	]

	Canvas.Polygon(shapeMain, "black")
	Canvas.Polygon(shapeA, "blue")

	const isCollidingA = SAT.IntersectPolygonPolygon(shapeMain, shapeA).isColliding

	console.log(isCollidingA)
})

