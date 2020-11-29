export default class InventoryBar extends Phaser.GameObjects.Container
{
    constructor(scene, x, y)
    {
        let texture = scene.add.image(x, y, 'dropSlot').setInteractive();
        super(scene, x, y, texture);
        scene.add.existing(this);
        //this.setScrollFactor(0);      ////////////////////////

        this._selection = null;

        texture.on('pointerdown', pointer =>
        {
            if (this.selection !== null)
            {
                scene.player.dropInventoryItemAt(this._selection)
                ///  /* PONER AQUI(o en otro lugar pero en este instante) EL SPAWN DEL NUEVO droppedITEM */
                scene.selectionTexture.visible = false;
                this.select(null);
            }
        });
    }

    select(slot) { this._selection = slot; }

    selected() { return this._selection; }

    joder() { this.x = 0;}
}