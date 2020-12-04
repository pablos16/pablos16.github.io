import DroppedItem from './item.js';
import ItemImage from './gui_item.js';

export default class InventoryBar extends Phaser.GameObjects.Container{
    constructor(scene, x, y){
        //TODO magiaaa! :D
        let NUM_SLOTS = 5;
        let BOX_POSX = -180;
        let BOX_POSY = 224;
        let BOX_OFFSET = 66;
        let DROPPEDITEM_HALFSIZE = 16;
        let TEXT_OFFSETX = -30;
        let TEXT_OFFSETY = -680;

        let texture = scene.add.image(x, y, 'dropSlot').setInteractive();
        super(scene, x, y, texture);
        scene.add.existing(this);
        //this.setScrollFactor(1, 1, true);      ////////////////////////

        texture.on('pointerdown', pointer =>{
            // tirar
            if (this.selection !== null && scene.player.inventory.getItemAt(this.selection) !== 0){
                let drop = new DroppedItem(scene, scene.player.x - DROPPEDITEM_HALFSIZE, scene.player.y - DROPPEDITEM_HALFSIZE, scene.player.inventory.getItemAt(this.selection));
                scene.droppedItems.add(drop);
                scene.player.inventory.removeItemAt(this.selection);
                this.selectionTexture.visible = false;
                this.selection = null;
            }
        });

        this.selection = null;

        this.text = scene.add.bitmapText(x + TEXT_OFFSETX, y + TEXT_OFFSETY , 'Font', '(texto)', 20, 0);
        this.text.letterSpacing = 2;
        this.text.visible = false;
        this.add(this.text);

        this.boxes = [];
        this.images = [];
        for (let i = 0; i < NUM_SLOTS; i = i + 1){
            this.boxes[i] = scene.add.image(BOX_POSX, BOX_POSY - BOX_OFFSET * i, 'inventorySlot').setInteractive();
            this.add(this.boxes[i]);
            this.boxes[i].on('pointerdown', pointer =>{
                this.manageItem(i);
            });
            this.boxes[i].on('pointerover', pointer =>{
                if(this.images[i].name !== '-'){
                    this.setText(i);
                    this.text.visible = true;
                }
            });
            this.boxes[i].on('pointerout', pointer =>{
                this.text.visible = false;
            });
            this.images[i] = new ItemImage(scene, this.boxes[i].x, this.boxes[i].y, scene.player.inventory.getItemAt(i));
            this.add(this.images[i]);
        }
        this.selectionTexture = scene.add.image(BOX_POSX, BOX_POSY + BOX_OFFSET, 'inventorySlotSelection');
        this.selectionTexture.visible = false;
        this.add(this.selectionTexture);

        this.pl = scene.player;
    }

    manageItem(i){
        // seleccionar
        if (this.selection === null){
            this.selection = i;
            this.selectionTexture.x = this.boxes[i].x;
            this.selectionTexture.y = this.boxes[i].y;
            this.selectionTexture.visible = true;
        }
        // (mover y) deseleccionar
        else{
            if (this.selection !== i) this.pl.inventory.moveItemsIn(this.selection, i);
            this.selection = null;
            this.selectionTexture.visible = false;
        }
    }

    useCurrentItem(){
        // usar
        this.pl.inventory.removeItemAt(this.selection);
        this.selectionTexture.visible = false;
        this.selection = null;
    }

    updateStatus(){
        for (let i = 0; i < this.images.length; i = i + 1){
            this.images[i].changeTo(this.pl.inventory.getItemAt(i))
        };
    }

    relocateTo(xPos, yPos){//////BORRRRR/////////////
        this.x = xPos;
        this.y = yPos;
    }

    setText(i){
        /*this.text.text = 'Lorem ipsum:\n\n============================================================================\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';*/

        let title = this.images[i].name;
        let description = this.images[i].desc;

        this.text.text = '';
        this.text.text += String(title);
        this.text.text += '\n\n================================================\n\n';
        this.text.text += String(description);
    }
}