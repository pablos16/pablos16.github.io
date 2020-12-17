export function normalizeVector(obj) {
  if (!(obj.x === 0 && obj.y === 0)) {
    let module = Math.sqrt(obj.x * obj.x + obj.y * obj.y);

    obj.x /= module;
    obj.y /= module;
  }
}

export function loop(id, lenght) {
  return (Math.abs(id + lenght) % lenght);
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
