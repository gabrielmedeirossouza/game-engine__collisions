import { Vector2 } from '@/math'
import { IntersectPolygonPolygon } from './intersect-polygon-polygon'

export class SAT {
	public static IntersectPolygonPolygon(polygonA: Vector2[], polygonB: Vector2[]): IntersectPolygonPolygon {
		return new IntersectPolygonPolygon(polygonA, polygonB)
	}
}
