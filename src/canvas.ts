const COLORS_TYPE = {
  black: "#2e2e2e",
  orange: "tomato",
  blue: "royalblue",
  purple: "rebeccapurple",
}

export class Canvas {
  private scalar = 50;
  private ctx: CanvasRenderingContext2D;
  private origin = { x: 0, y: 0 };

  constructor() {
    const canvas = document.querySelector('canvas')!
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.ctx = canvas.getContext('2d')!;
    this.drawGrid();
  }

  private drawGrid() {
    const gridStep = 1;
    const rows = Math.ceil(window.innerWidth / (gridStep * this.scalar));
    const columns = Math.ceil(window.innerHeight / (gridStep * this.scalar));

    this.origin = {
      x: Math.floor(rows / 2) * this.scalar,
      y: Math.ceil(columns / 2) * this.scalar
    }

    this.ctx.beginPath();
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

  public Draw(callback: () => void) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 2;
    this.ctx.translate(this.origin.x, this.origin.y);
    this.ctx.moveTo(0, 0);

    callback();

    this.ctx.stroke();
    this.ctx.closePath();
  }

  public LineTo(x: number, y: number, color: keyof typeof COLORS_TYPE = "black") {
    console.log(x, y)
    this.ctx.strokeStyle = COLORS_TYPE[color];
    this.ctx.fillStyle = COLORS_TYPE[color];
    this.ctx.font = "16px Arial";
    this.ctx.lineTo(x * this.scalar, y * this.scalar * -1);
    this.ctx.fillText(`[${x}, ${y}]`, (x * this.scalar) + 15, y * this.scalar * -1);
  }
}
