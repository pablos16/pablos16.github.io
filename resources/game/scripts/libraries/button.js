export default class Button extends Phaser.GameObjects.Sprite {
    constructor(data) {
        super(data.context, data.x, data.y, data.sprite)
        data.context.add.existing(this)
        this.setInteractive();
        this.setScale(data.scale);

        this.config = data.config;

        this.on('pointerdown', data.function(this.config), data.context)
    }
}