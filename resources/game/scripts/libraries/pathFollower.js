import Vector2 from './vector2.js'
/**
 * Class that has a serie of path and makes a body move to then, it can be looped
 * @param {Object} data needed for constructing the class
 * 
 * /// PARAMS NEEDED TO PASS AS AN OBJECT WHEN CREATING ///
 * 
 * @param {Phaser.Scene} sceneRef ref to the phaser scene
 * @param {PathNode Array} path array of paths to follow
 * @param {Phaser.Body} body body of the Phaser.GameObject
 * @param {Function} onFinish function called everytime body reached the last path
 * @param {Bool} loop if true, body will restart on the first path after reaching the last one
 */
export default class PathFollower extends Phaser.GameObjects.GameObject {
    constructor(data) {
        super(data.sceneRef, 0, 0)
        this.scene = data.sceneRef;
        this.scene.add.existing(this)
        this.path = data.path;
        this.currentPath = 0;
        this.body = data.body;
        this.condition = true;
        this.changinPath = false;
        this.onFinish = data.onFinish;
        this.loop = data.loop;
        this.velocity = { x: 0, y: 0 }
    }

    //SUPER AAAAAAAAAAAAA
    preUpdate() {
        if (this.condition) this.makePath()
    }

    setMove(boolean) {
        this.condition = boolean
    }

    makePath() {
        if (!(!this.pathReached() && !this.changinPath) && !this.changinPath) {
            this.changinPath = true;
            this.stop();
            this.scene.time.addEvent({
                callback: () => {
                    this.changinPath = false;
                    if (this.nextPath() && this.condition) this.setVelocity()
                },
                delay: this.getPath().delay
            })
        }
    }

    setVelocity() {
        this.velocity = this.calculateVelocity();
        this.body.setVelocityY(this.velocity.y)
        this.body.setVelocityX(this.velocity.x)
    }

    calculateVelocity() {
        //Calcular direccion
        let direction = Vector2.direction(this.getPath(), this.body)

        //Obtener velocidad del path
        let speed = { x: this.getPath().speed, y: this.getPath().speed };

        //Multiplicar la velocidad por la direcion
        return Vector2.multiply(speed, direction);
    }

    nextPath() {
        if (this.currentPath === this.path.length - 1) {
            this.currentPath = 0;
            this.onFinish();
            return this.loop;
        }
        else {
            this.currentPath++;
            return true;
        }

    }

    pathReached() {
        let resta = Vector2.substract(this.body.position, this.getPath())
        return Math.abs(resta.x) <= 1 && Math.abs(resta.y) <= 1
    }

    getPath() {
        return this.path[this.currentPath];
    }

    stopX() {
        this.body.setVelocityX(0);
    }
    stopY() {
        this.body.setVelocityY(0);
    }

    stop() {
        this.stopX()
        this.stopY()
    }
}