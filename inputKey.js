export default class InputKey extends Phaser.GameObjects.Container {
    constructor(scene, keyName) {
        super(scene, 0, 0)
        this.key = scene.input.keyboard.addKey(keyName)
        this.flipflop = false;
    }

    isPressed() {
        return this.key.isDown;
    }

    isDown() 
    {
        if(this.key.isDown && !this.flipFlop)
        {
            this.flipFlop = true;
            return this.flipFlop;
        }

        if (this.key.isUp) {
            this.flipFlop = false;
        }
    }

    preUpdate() {
        console.log("Me ejecuto")
        // if (this.key.isUp) {
        //     this.flipFlop = false;
        // }
    }
}