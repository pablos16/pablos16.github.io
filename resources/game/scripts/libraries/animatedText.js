import Dialog from '../../configs/dialogConfig.js'

/**
 * Class that creates a text and animate it character by character
 * @param {Phaser.Scene} scene Phaser scene where the text is constructed
 * @param {string} text text to construct
 */
export default class AnimatedText extends Phaser.GameObjects.BitmapText {
    constructor(scene, text) {
        super(scene, text.x, text.y, Dialog.dialogFont, text.text
            , Dialog.dialogSize, Dialog.dialogAlign)

        scene.add.existing(this)
        this.depth = 100
        this.setScrollFactor(0)

        let copy = this.text
        this.text = ""
        this.i = 0
        this.timer = scene.time.addEvent({
            callback: () => {
                this.text += copy[this.i]
                this.i++
            },
            repeat: copy.length - 1,
            delay: Dialog.dialogSpeed,
        })

        this.visible = true
    }

    stopAnimation() {
        this.timer.remove();
        this.destroy(true)
    }
}