export class Vector2 {
	private _x: number;

	private _y: number;

	constructor(x: number, y: number) {
		this._x = x;
		this._y = y;
	}

	public static get one(): Vector2 {
		return new Vector2(1, 1);
	}

	public static get zero(): Vector2 {
		return new Vector2(0, 0);
	}

	public static get up(): Vector2 {
		return new Vector2(0, 1);
	}

	public static get down(): Vector2 {
		return new Vector2(0, -1);
	}

	public static get left(): Vector2 {
		return new Vector2(-1, 0);
	}

	public static get right(): Vector2 {
		return new Vector2(1, 0);
	}

	public static Sum(a: Vector2, b: Vector2): Vector2 {
		return new Vector2(a.x + b.x, a.y + b.y);
	}

	public static Subtract(a: Vector2, b: Vector2): Vector2 {
		return new Vector2(a.x - b.x, a.y - b.y);
	}

	public static Multiply(a: Vector2, b: Vector2): Vector2 {
		return new Vector2(a.x * b.x, a.y * b.y);
	}

	public static MultiplyScalar(a: Vector2, b: number): Vector2 {
		return new Vector2(a.x * b, a.y * b);
	}

	public static Divide(a: Vector2, b: Vector2): Vector2 {
		return new Vector2(a.x / b.x, a.y / b.y);
	}

	public static Dot(a: Vector2, b: Vector2): number {
		return a.x * b.x + a.y * b.y;
	}

	public static Normal(a: Vector2, b: Vector2): Vector2 {
		const directionToBNormalized = Vector2.Subtract(b, a).normalized;

		return new Vector2(directionToBNormalized.y, directionToBNormalized.x * -1);
	}

	public get x(): number {
		return this._x;
	}

	public get y(): number {
		return this._y;
	}

	public get magnitude(): number {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}

	public get normalized(): Vector2 {
		const normalizedX = this.x / this.magnitude || 0;
		const normalizedY = this.y / this.magnitude || 0;

		return new Vector2(normalizedX, normalizedY);
	}

	public Sum(other: Vector2): Vector2 {
		this._x += other.x;
		this._y += other.y;

		return this;
	}

	public Subtract(other: Vector2): Vector2 {
		this._x -= other.x;
		this._y -= other.y;

		return this;
	}

	public Multiply(other: Vector2): Vector2 {
		this._x *= other.x;
		this._y *= other.y;

		return this;
	}

	public MultiplyScalar(scalar: number): Vector2 {
		this._x *= scalar;
		this._y *= scalar;

		return this;
	}

	public Divide(other: Vector2): Vector2 {
		this._x /= other.x;
		this._y /= other.y;

		return this;
	}

	public Equals(other: Vector2): boolean {
		return this.x === other.x && this.y === other.y;
	}

	public Normalize(): void {
		const { magnitude } = this;
		this._x /= magnitude;
		this._y /= magnitude;
	}

	public ToString(): string {
		return `(${this.x}, ${this.y})`;
	}
}
