type Vector2 = {
  x: number,
  y: number
}

type Polygon = {
  vertices: Vector2[]
}

function perpendicular(v: Vector2) {
  return {
    x: v.y,
    y: v.x * -1
  }
}

function dot(a: Vector2, b: Vector2) {
  return a.x * b.x + a.y * b.y;
}

function subtract(a: Vector2, b: Vector2) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  }
}

function findMinimumSeparationOfPolygons(a: Polygon, b: Polygon): number {
  let separation: number = Number.MIN_VALUE;

  for (const va of a.vertices) {
    const normal: Vector2 = perpendicular(va);
    let minSep: number = Number.MAX_VALUE;

    for (const vb of b.vertices) {
      minSep = Math.min(minSep, dot(subtract(vb, va), normal));
    }

    if (minSep > separation) {
      separation = minSep;
    }
  }

  return separation;
}

export function isCollidingPolygonPolygon(a: Polygon, b: Polygon): boolean {
  const ab = findMinimumSeparationOfPolygons(a, b);
  const ba = findMinimumSeparationOfPolygons(b, a);

  console.log(ab, ba);

  return ab <= 0 && ba <= 0;
}
