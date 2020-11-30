import DroppedItem from './droppedItem.js';
import Item from './item.js'

export default class InventoryBar extends Phaser.GameObjects.Container
{
    constructor(scene, x, y)
    {
        let texture = scene.add.image(x, y, 'dropSlot').setInteractive();
        super(scene, x, y, texture);
        scene.add.existing(this);
        //this.setScrollFactor(1, 1, true);      ////////////////////////

        this._selection = null;

        texture.on('pointerdown', pointer =>
        {
            // tirar
            if (this._selection !== null && scene.player.getInventoryItemAt(this._selection) !== 0)
            {
                scene.droppedItems.create(new DroppedItem(scene, scene.player.getXPos(), scene.player.getYPos(), scene.player.getInventoryItemAt(this._selection)));
                scene.player.dropInventoryItemAt(this._selection);
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
        this.box0.on('pointerdown', pointer => { this._manageItem(0) });
        this.box1.on('pointerdown', pointer => { this._manageItem(1) });
        this.box2.on('pointerdown', pointer => { this._manageItem(2) });
        this.box3.on('pointerdown', pointer => { this._manageItem(3) });
        this.box4.on('pointerdown', pointer => { this._manageItem(4) });

        this._pl = scene.player;
    }

    _selectionToBox(number)
    {
        switch(number)
        {
            case 0: return this.box0;
            case 1: return this.box1;
            case 2: return this.box2;
            case 3: return this.box3;
            case 4: return this.box4;
        }
    }

    _manageItem(number)
    {
        // seleccionar
        if (this._selection === null)
        {
            this._selection = number;
            this.selectionTexture.x = this._selectionToBox(number).x;
            this.selectionTexture.y = this._selectionToBox(number).y;
            this.selectionTexture.visible = true;
        }
        // deseleccionar
        else if (this._selection === number)
        {
            this._selection = null;
            this.selectionTexture.visible = false;
        }
        // mover (y seleccionar el último clickado)
        else
        {
            this._pl.moveInventoryItemsIn(this._selection, number);
            this._selection = number;
            this.selectionTexture.x = this._selectionToBox(number).x;
            this.selectionTexture.y = this._selectionToBox(number).y;
            this.selectionTexture.visible = true;
        }
    }

    updateStatus()
    {
        this.img0.changeTo(this._pl.getInventoryItemAt(0));
        this.img1.changeTo(this._pl.getInventoryItemAt(1));
        this.img2.changeTo(this._pl.getInventoryItemAt(2));
        this.img3.changeTo(this._pl.getInventoryItemAt(3));
        this.img4.changeTo(this._pl.getInventoryItemAt(4));
    }

    useCurrentItem()
    {
        // usar
        this._pl.dropInventoryItemAt(this._selection);
        this.selectionTexture.visible = false;
        this._selection = null;
    }

    getSelection() { return this._selection; }
}