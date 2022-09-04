import { Vector2 } from '@/math/vector2'

export class IntersectPolygonPolygon {
	private _isColliding = false;

	constructor(verticesA: Vector2[], verticesB: Vector2[]) {
		this._Start(verticesA, verticesB)
	}

	public get isColliding(): boolean {
		return this._isColliding
	}

	private _Start(polygonA: Vector2[], polygonB: Vector2[]): void {
		for (let index = 0; index < polygonA.length; index++) {
			const va = polygonA[index]
			const vb = polygonA[index + 1] || polygonA[0]

			const normal = Vector2.Normal(va, vb)

			const [minA, maxA] = IntersectPolygonPolygon._ProjectVertices(polygonA, normal)
			const [minB, maxB] = IntersectPolygonPolygon._ProjectVertices(polygonB, normal)

			if (minA >= maxB || minB >= maxA) {
				this._isColliding = false

				return
			}
		}

		for (let index = 0; index < polygonB.length; index++) {
			const va = polygonB[index]
			const vb = polygonB[index + 1] || polygonB[0]

			const normal = Vector2.Normal(vb, va)

			const [minA, maxA] = IntersectPolygonPolygon._ProjectVertices(polygonA, normal)
			const [minB, maxB] = IntersectPolygonPolygon._ProjectVertices(polygonB, normal)

			if (minA >= maxB || minB >= maxA) {
				this._isColliding = false

				return
			}
		}

		this._isColliding = true
	}

	private static _ProjectVertices(vertices: Vector2[], axis: Vector2): number[] {
		let min = Number.MAX_VALUE
		let max = Number.MIN_VALUE

		 vertices.forEach((vertex) => {
			const projection = Vector2.Dot(vertex, axis)

			if (projection < min) {
				min = projection
			}

			if (projection > max) {
				max = projection
			}
		})

		return [min, max]
	}
}
