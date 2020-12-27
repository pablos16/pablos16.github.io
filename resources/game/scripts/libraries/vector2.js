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