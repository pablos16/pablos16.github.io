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
                    if (this.nextPath()) this.setVelocity()
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
        //Obtener velocidad del path
        let speed = { x: this.getPath().speed, y: this.getPath().speed };
        if(speed.x === 0) return speed
        //Calcular distancia del path al objeto
        let direction = {
            x: this.getPath().x - this.body.x,
            y: this.getPath().y - this.body.y,
        }

        //Normalizar la distancia
        let divisor = 0;
        if (Math.abs(direction.x) < Math.abs(direction.y)) divisor = Math.abs(direction.y)
        else divisor = Math.abs(direction.x)

        direction.x /= divisor
        direction.y /= divisor

        //Asignar la velocidad
        speed.y *= direction.y;
        speed.x *= direction.x;
        return speed;
    }

    nextPath() {
        if (this.currentPath === this.path.length-1) {
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
        let first = Math.abs(this.body.position.x - this.getPath().x) <= 1;
        let second = Math.abs(this.body.position.y - this.getPath().y) <= 1;
        return first && second;
    }

    getPath() {
        return this.path[this.currentPath];
    }

    moveUp() {
        this.body.setVelocityY(-this.getPath().speed);
    }
    moveDown() {
        this.body.setVelocityY(this.getPath().speed);
    }
    moveLeft() {
        this.body.setVelocityX(-this.getPath().speed);
    }
    moveRight() {
        this.body.setVelocityX(this.getPath().speed);
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