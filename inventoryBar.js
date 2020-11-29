export default class InventoryBar extends Phaser.GameObjects.Container
{
    constructor(scene, x, y)
    {
        let texture = scene.add.image(x, y, 'dropSlot');
        texture.setScrollFactor(1, 1, true);    ////////////////////////
        texture.setInteractive()                ////////////////////////
        super(scene, x, y, texture);
        scene.add.existing(this);

        this.selection = null;
    }

    joder()
    {
        this.x = 100;
    }
}
    /*
    this.sprite.on('pointerdown', pointer => { });
    */