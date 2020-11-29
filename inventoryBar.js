import Item from './item.js'

export default class InventoryBar extends Phaser.GameObjects.Container
{
    constructor(scene, x, y)
    {
        let texture = scene.add.image(x, y, 'dropSlot').setInteractive();
        super(scene, x, y, texture);
        scene.add.existing(this);

        this.selection = null;
        this.setScrollFactor(1, 1, true);
    }

    joder()
    {
        this.x = 100;
    }
}

/*
    //////////////TESTJAVI//////////////TESTJAVI//////////////TESTJAVI//////////////TESTJAVI//////////////TESTJAVI//////////////TESTJAVI
    this.img0 = new Item(this, 50, 50, this.player.getInventoryItemAt(0));
    this.img1 = new Item(this, 50, 100, this.player.getInventoryItemAt(1));
    this.img2 = new Item(this, 50, 150, this.player.getInventoryItemAt(2));
    this.img3 = new Item(this, 50, 200, this.player.getInventoryItemAt(3));
    this.img4 = new Item(this, 50, 250, this.player.getInventoryItemAt(4));
    //////////////TESTJAVI//////////////TESTJAVI//////////////TESTJAVI//////////////TESTJAVI//////////////TESTJAVI//////////////TESTJAVI
*/
    /*
    this.sprite.on('pointerdown', pointer => { });
    */