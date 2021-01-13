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
    }

    preUpdate() {
        if (this.condition) this.makePath()
    }

    setMove(boolean) {
        this.condition = boolean
    }

    makePath() {
        if (!this.pathReached() && !this.changinPath) {
            if (this.body.x < this.getPath().x) this.moveRight();
            else if (this.body.x > this.getPath().x) this.moveLeft();
            if (this.body.y < this.getPath().y) this.moveDown();
            else if (this.body.y > this.getPath().y) this.moveUp();
        }
        else if (!this.changinPath) {
            this.changinPath = true;
            this.stop();
            this.scene.time.addEvent({
                callback: () => {
                    this.changinPath = false;
                    this.nextPath();
                },
                delay: this.getPath().delay
            })
        }

    }

    nextPath() {
        this.currentPath++;
        if (this.currentPath >= this.path.length) this.onFinish(this);
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
        this.body.setVelocityY(-50);
    }
    moveDown() {
        this.body.setVelocityY(50);
    }
    moveLeft() {
        this.body.setVelocityX(-50);
    }
    moveRight() {
        this.body.setVelocityX(50);
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