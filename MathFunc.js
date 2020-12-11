export default class Maths {

  static normalizeVector(obj) {
    if (!(obj.x === 0 && obj.y === 0)) {
      let module = Math.sqrt(obj.x * obj.x + obj.y * obj.y);
      
      obj.x /= module;
      obj.y /= module;
    }
  }
}