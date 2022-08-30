import { isCollidingPolygonPolygon } from './SAT'

const a = {
  vertices: [
    { x: 0, y: 0 },
    { x: 100, y: 0 },
    { x: 100, y: 100 },
    { x: 0, y: 100 },
    { x: 0, y: 0 },
  ]
}

const b = {
  vertices: [
    { x: 50, y: 50 },
    { x: 150, y: 50 },
    { x: 150, y: 150 },
    { x: 50, y: 150 },
    { x: 50, y: 50 },
  ]
}

const canvas = document.querySelector('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function renderPolygon(polygon: { vertices: { x: number, y: number }[] }, color = '#974d4d') {
  ctx.beginPath();
  ctx.moveTo(
    polygon.vertices[0].x,
    polygon.vertices[0].y
  );

  for (let i = 1; i < polygon.vertices.length; i++) {
    ctx.lineTo(
      polygon.vertices[i].x,
      polygon.vertices[i].y
    );
  }

  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

renderPolygon(a, '#1af42c');
renderPolygon(b);

const isColliding = isCollidingPolygonPolygon(a, b)
console.log(isColliding)