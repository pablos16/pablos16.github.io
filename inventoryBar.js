import Item from './item.js'

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
            if (this.selection !== null && scene.player.getInventoryItemAt(this.selection) !== 0)
            {
                scene.player.dropInventoryItemAt(this._selection)
                ///  /* PONER AQUI(o en otro lugar pero en este instante) EL SPAWN DEL NUEVO droppedITEM */
                this.selectionTexture.visible = false;
                this._selection = null;
            }
        });

        this.box0 = scene.add.image(-180, 224, 'inventorySlot').setInteractive();
        this.box1 = scene.add.image(-180, 158, 'inventorySlot').setInteractive();
        this.box2 = scene.add.image(-180, 92, 'inventorySlot').setInteractive();
        this.box3 = scene.add.image(-180, 26, 'inventorySlot').setInteractive();
        this.box4 = scene.add.image(-180, -40, 'inventorySlot').setInteractive();
        this.img0 = new Item(scene, this.box0.x, this.box0.y, scene.player.getInventoryItemAt(0));
        this.img1 = new Item(scene, this.box1.x, this.box1.y, scene.player.getInventoryItemAt(1));
        this.img2 = new Item(scene, this.box2.x, this.box2.y, scene.player.getInventoryItemAt(2));
        this.img3 = new Item(scene, this.box3.x, this.box3.y, scene.player.getInventoryItemAt(3));
        this.img4 = new Item(scene, this.box4.x, this.box4.y, scene.player.getInventoryItemAt(4));
        this.selectionTexture = scene.add.image(-180, 290, 'inventorySlotSelection');
        this.selectionTexture.visible = false;
        this.add([this.box0, this.box1, this.box2, this.box3, this.box4]);
        this.add([this.img0, this.img1, this.img2, this.img3, this.img4]);
        this.add(this.selectionTexture);

        this.box0.on('pointerdown', pointer =>
        {
            if (this._selection === 0)
            {
                this._selection = null;
                this.selectionTexture.visible = false;
            }
            else
            {
                this._selection = 0;
                this.selectionTexture.x = this.box0.x;
                this.selectionTexture.y = this.box0.y;
                this.selectionTexture.visible = true;
            }
        });
        this.box1.on('pointerdown', pointer =>
        {
            if (this._selection === 1)
            {
                this._selection = null;
                this.selectionTexture.visible = false;
            }
            else
            {
                this._selection = 1;
                this.selectionTexture.x = this.box1.x;
                this.selectionTexture.y = this.box1.y;
                this.selectionTexture.visible = true;
            }
        });
        this.box2.on('pointerdown', pointer =>
        {
            if (this._selection === 2)
            {
                this._selection = null;
                this.selectionTexture.visible = false;
            }
            else
            {
                this._selection = 2;
                this.selectionTexture.x = this.box2.x;
                this.selectionTexture.y = this.box2.y;
                this.selectionTexture.visible = true;
            }
        });
        this.box3.on('pointerdown', pointer =>
        {
            if (this._selection === 3)
            {
                this._selection = null;
                this.selectionTexture.visible = false;
            }
            else
            {
                this._selection = 3;
                this.selectionTexture.x = this.box3.x;
                this.selectionTexture.y = this.box3.y;
                this.selectionTexture.visible = true;
            }
        });
        this.box4.on('pointerdown', pointer =>
        {
            if (this._selection === 4)
            {
                this._selection = null;
                this.selectionTexture.visible = false;
            }
            else
            {
                this._selection = 4;
                this.selectionTexture.x = this.box4.x;
                this.selectionTexture.y = this.box4.y;
                this.selectionTexture.visible = true;
            }
        });
    }

    updateStatus(scene)
    {
        this.img0.change(scene.player.getInventoryItemAt(0));
        this.img1.change(scene.player.getInventoryItemAt(1));
        this.img2.change(scene.player.getInventoryItemAt(2));
        this.img3.change(scene.player.getInventoryItemAt(3));
        this.img4.change(scene.player.getInventoryItemAt(4));
    }

    //select(slot) { this._selection = slot; }
    //selected() { return this._selection; }
    //joder() { this.x = 0;}
}