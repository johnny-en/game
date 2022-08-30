export function random(min, max) {
  return Math.floor(Math.random() * max) + min;
}

export function hitTest(objA, objB) {
  return (
    objA.x + objA.width >= objB.x &&
    objA.y + objA.height >= objB.y &&
    objB.x + objB.width >= objA.x &&
    objB.y + objB.height >= objA.y
  );
}
