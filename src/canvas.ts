const COLORS_TYPE = {
	black: '#2e2e2e',
	orange: 'tomato',
	blue: 'royalblue',
	purple: 'rebeccapurple',
};

export class Canvas {
	private _scalar = 50;

	private _ctx: CanvasRenderingContext2D;

	private _origin = { x: 0, y: 0 };

	constructor() {
		const canvas = document.querySelector('canvas')!;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		this._ctx = canvas.getContext('2d')!;
		this._DrawGrid();
	}

	public Draw(callback: () => void): void {
		this._ctx.beginPath();
		this._ctx.lineWidth = 2;
		this._ctx.translate(this._origin.x, this._origin.y);
		this._ctx.moveTo(0, 0);

		callback();

		this._ctx.stroke();
		this._ctx.closePath();
	}

	public LineTo(x: number, y: number, color: keyof typeof COLORS_TYPE = 'black'): void {
		this._ctx.strokeStyle = COLORS_TYPE[color];
		this._ctx.fillStyle = COLORS_TYPE[color];
		this._ctx.font = '16px Arial';
		this._ctx.lineTo(x * this._scalar, y * this._scalar * -1);
		this._ctx.fillText(`[${x}, ${y}]`, (x * this._scalar) + 15, y * this._scalar * -1);
	}

	private _DrawGrid(): void {
		const gridStep = 1;
		const rows = Math.ceil(window.innerWidth / (gridStep * this._scalar));
		const columns = Math.ceil(window.innerHeight / (gridStep * this._scalar));

		this._origin = {
			x: Math.floor(rows / 2) * this._scalar,
			y: Math.ceil(columns / 2) * this._scalar,
		};

		this._ctx.beginPath();
		this._ctx.lineWidth = 0.2;

		for (let row = 0; row <= columns; row++) {
			this._ctx.moveTo(0, row * this._scalar);
			this._ctx.lineTo(window.innerWidth, row * this._scalar);
		}

		for (let column = 0; column <= rows; column++) {
			this._ctx.moveTo(column * this._scalar, 0);
			this._ctx.lineTo(column * this._scalar, window.innerHeight);
		}

		this._ctx.stroke();
		this._ctx.closePath();
	}
}
