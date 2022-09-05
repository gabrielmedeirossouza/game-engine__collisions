import { Vector2 } from '@/math'

const COLORS_TYPE = {
	black: '#1A202C',
	red: '#E53E3E',
	blue: '#2B6CB0',
	purple: '#B83280',
};

export class Canvas     {
	public static canvas: HTMLCanvasElement;

	public static scalar = 50;

	public static ctx: CanvasRenderingContext2D;

	static {
		this.canvas = document.querySelector('canvas')!;
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.ctx = this.canvas.getContext('2d')!;
		this._DrawGrid();
	}

	public static Polygon(polygon: Vector2[], color: keyof typeof COLORS_TYPE = 'black'): void {
		this.ctx.beginPath();
		this.ctx.strokeStyle = COLORS_TYPE[color];
		this.ctx.fillStyle = COLORS_TYPE[color];
		this.ctx.lineWidth = 2;
		this.ctx.moveTo(polygon[0].x, polygon[0].y * -1);

		for (let index = 0; index <= polygon.length; index++) {
			const point = polygon[index + 1] || polygon[0]

			this.ctx.lineTo(point.x, point.y * -1)
		}

		this.ctx.stroke();
		this.ctx.closePath();
	}

	public static LineTo(x: number, y: number, color: keyof typeof COLORS_TYPE = 'black'): void {
		this.ctx.strokeStyle = COLORS_TYPE[color];
		this.ctx.fillStyle = COLORS_TYPE[color];
		this.ctx.font = '16px Arial';
		this.ctx.lineTo(x * this.scalar, y * this.scalar * -1);
		this.ctx.fillText(`[${x}, ${y}]`, (x * this.scalar) + 15, y * this.scalar * -1);
	}

	public static Refresh() {
		this.ctx.clearRect(0, 0, Canvas.canvas.width, Canvas.canvas.height)
		this._DrawGrid()
	}

	private static _DrawGrid(): void {
		const gridStep = 1;
		const rows = Math.ceil(window.innerWidth / (gridStep * this.scalar));
		const columns = Math.ceil(window.innerHeight / (gridStep * this.scalar));

		this.ctx.beginPath();
		this.ctx.strokeStyle = COLORS_TYPE["black"];
		this.ctx.fillStyle = COLORS_TYPE["black"];
		this.ctx.lineWidth = 0.2;

		for (let row = 0; row <= columns; row++) {
			this.ctx.moveTo(0, row * this.scalar);
			this.ctx.lineTo(window.innerWidth, row * this.scalar);
		}

		for (let column = 0; column <= rows; column++) {
			this.ctx.moveTo(column * this.scalar, 0);
			this.ctx.lineTo(column * this.scalar, window.innerHeight);
		}

		this.ctx.stroke();
		this.ctx.closePath();
	}
}
