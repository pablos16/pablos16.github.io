import DroppedItem from './item.js';
import ItemImage from './gui_item.js'

export default class InventoryBar extends Phaser.GameObjects.Container
{
    constructor(scene, x, y)
    {
        let texture = scene.add.image(x, y, 'dropSlot').setInteractive();
        super(scene, x, y, texture);
        scene.add.existing(this);
        //this.setScrollFactor(1, 1, true);      ////////////////////////

        this.selection = null;

        this.text = scene.add.bitmapText(x - 30, y - 680, 'Font', '(texto)', 20, 0);
        this.text.letterSpacing = 2;
        this.text.visible = false;

        texture.on('pointerdown', pointer =>
        {
            // tirar
            if (this.selection !== null && scene.player.inventory.getItemAt(this.selection) !== 0)
            {
                let drop = new DroppedItem(scene, scene.player.x - 16, scene.player.y - 16, scene.player.inventory.getItemAt(this.selection));
                scene.droppedItems.add(drop);
                scene.player.inventory.removeItemAt(this.selection);
                this.selectionTexture.visible = false;
                this.selection = null;
            }
        });

        this.box0 = scene.add.image(-180, 224, 'inventorySlot').setInteractive();
        this.box1 = scene.add.image(-180, 158, 'inventorySlot').setInteractive();
        this.box2 = scene.add.image(-180, 92, 'inventorySlot').setInteractive();
        this.box3 = scene.add.image(-180, 26, 'inventorySlot').setInteractive();
        this.box4 = scene.add.image(-180, -40, 'inventorySlot').setInteractive();
        this.img0 = new ItemImage(scene, this.box0.x, this.box0.y, scene.player.inventory.getItemAt(0));
        this.img1 = new ItemImage(scene, this.box1.x, this.box1.y, scene.player.inventory.getItemAt(1));
        this.img2 = new ItemImage(scene, this.box2.x, this.box2.y, scene.player.inventory.getItemAt(2));
        this.img3 = new ItemImage(scene, this.box3.x, this.box3.y, scene.player.inventory.getItemAt(3));
        this.img4 = new ItemImage(scene, this.box4.x, this.box4.y, scene.player.inventory.getItemAt(4));
        this.selectionTexture = scene.add.image(-180, 290, 'inventorySlotSelection');
        this.selectionTexture.visible = false;
        this.add([this.box0, this.box1, this.box2, this.box3, this.box4]);
        this.add([this.img0, this.img1, this.img2, this.img3, this.img4]);
        this.add(this.selectionTexture);
        this.add(this.text);
        this.box0.on('pointerdown', pointer => { this.manageItem(0) });
        this.box0.on('pointerover', pointer => { if (this.img0.name() !== '-') { this.setText(0); this.text.visible = true; } });
        this.box0.on('pointerout', pointer => { this.text.visible = false; });
        this.box1.on('pointerdown', pointer => { this.manageItem(1) });
        this.box1.on('pointerover', pointer => { if (this.img1.name() !== '-') { this.setText(1); this.text.visible = true; } });
        this.box1.on('pointerout', pointer => { this.text.visible = false; });
        this.box2.on('pointerdown', pointer => { this.manageItem(2) });
        this.box2.on('pointerover', pointer => { if (this.img2.name() !== '-') { this.setText(2); this.text.visible = true; } });
        this.box2.on('pointerout', pointer => { this.text.visible = false; });
        this.box3.on('pointerdown', pointer => { this.manageItem(3) });
        this.box3.on('pointerover', pointer => { if (this.img3.name() !== '-') { this.setText(3); this.text.visible = true; } });
        this.box3.on('pointerout', pointer => { this.text.visible = false; });
        this.box4.on('pointerdown', pointer => { this.manageItem(4) });
        this.box4.on('pointerover', pointer => { if (this.img4.name() !== '-') { this.setText(4); this.text.visible = true; } });
        this.box4.on('pointerout', pointer => { this.text.visible = false; });

        this.pl = scene.player;
    }

    selectionToBox(number)
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

    selectionToImage(number)
    {
        switch(number)
        {
            case 0: return this.img0;
            case 1: return this.img1;
            case 2: return this.img2;
            case 3: return this.img3;
            case 4: return this.img4;
        }
    }

    manageItem(number)
    {
        // seleccionar
        if (this.selection === null)
        {
            this.selection = number;
            this.selectionTexture.x = this.selectionToBox(number).x;
            this.selectionTexture.y = this.selectionToBox(number).y;
            this.selectionTexture.visible = true;
        }
        // (mover y) deseleccionar
        else
        {
            if (this.selection !== number) this.pl.inventory.moveItemsIn(this.selection, number);
            this.selection = null;
            this.selectionTexture.visible = false;
        }
    }

    updateStatus()
    {
        this.img0.changeTo(this.pl.inventory.getItemAt(0));
        this.img1.changeTo(this.pl.inventory.getItemAt(1));
        this.img2.changeTo(this.pl.inventory.getItemAt(2));
        this.img3.changeTo(this.pl.inventory.getItemAt(3));
        this.img4.changeTo(this.pl.inventory.getItemAt(4));
    }

    useCurrentItem()
    {
        // usar
        this.pl.inventory.removeItemAt(this.selection);
        this.selectionTexture.visible = false;
        this.selection = null;
    }

    getSelection() { return this.selection; }

    relocateTo(xPos, yPos)
    {
        this.x = xPos;
        this.y = yPos;
    }

    setText(number)
    {
        /*
        this.text.text = 'Lorem ipsum:\n\n============================================================================\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
        */

        let title = this.selectionToImage(number).name();
        let description = this.selectionToImage(number).desc();

        this.text.text = '';
        this.text.text += String(title);
        this.text.text += '\n\n================================================\n\n';
        this.text.text += String(description);
    }
}