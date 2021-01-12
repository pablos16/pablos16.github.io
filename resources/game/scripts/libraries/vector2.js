/**
 * Simple vector 2 class consisting in two integers (x,y)
 * @param {number} x x value of the vector
 * @param {number} y y value of the vector
 */
export default class vector2{
    constructor(x,y){
        this.x = x
        this.y = y
    }

    substract(vector2){
        let aux = {
            x: this.x,
            y: this.y
        }
        aux.x -= vector2.x
        aux.y -= vector2.y

        return aux
    }
}