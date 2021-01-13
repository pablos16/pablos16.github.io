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
        this.velocity = {x: 0, y: 0}
        this.setVelocity()
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
                    this.nextPath();
                    this.setVelocity()
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
        let tupla = { x: this.getPath().speed, y: this.getPath().speed };
        let diferencia = {
            x: this.body.x - this.getPath().x,
            y: this.body.y - this.getPath().y,
        }

        let divisor = 0;
        if (Math.abs(diferencia.x) < Math.abs(diferencia.y)) divisor = diferencia.y
        else divisor = diferencia.x


        diferencia.x /= divisor
        diferencia.y /= divisor

        tupla.y *= diferencia.y;
        tupla.x *= diferencia.x;
        return tupla;
    }

    nextPath() {
        this.currentPath++;
        if (this.currentPath >= this.path.length) {
            this.onFinish(this);
            if (this.loop) this.currentPath = 0;
            else this.destroy(true)
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