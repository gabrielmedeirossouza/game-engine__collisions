import { Canvas } from './canvas';
const canvas = new Canvas();

class Vector2 {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public Perpendicular(vector: Vector2) {
    return new Vector2(vector.y, -vector.x);
  }
}

const v1 = new Vector2(1, -1);

canvas.Draw(() => {
  canvas.LineTo(v1.x, v1.y);
})

canvas.Draw(() => {
  canvas.LineTo(v1.x * -1, v1.y * -1);
})

