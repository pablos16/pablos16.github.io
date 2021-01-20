import DroppedItem from './item.js';
import ItemImage from './gui_item.js';
import CT from '../../configs/constants.js';

export default class InventoryBar extends Phaser.GameObjects.Container {
    constructor(scene, x, y) {
        let texture = scene.add.image(x, y, 'inventory', 0).setInteractive().setScrollFactor(0);
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.setScrollFactor(0);
        this.depth = 10;

        let boxOffset = texture.height;
        texture.on('pointerdown', pointer => {
            // tirar
            if (this.selection !== -1 && scene.player.inventory.getItemAt(this.selection) !== CT.inventoryVoid) {
                let drop = new DroppedItem(scene, scene.player.x, scene.player.y, scene.player.inventory.getItemAt(this.selection));
                scene.player.inventory.removeItemAt(this.selection);
                this.updateSlot(this.selection);
                this.selectionTexture.visible = false;
                this.selection = -1;
                scene.pickItem.play()
            }
        });

        this.selection = -1;

        this.text = scene.add.bitmapText(CT.textPosX - CT.invBarPosX, CT.textPosY - CT.invBarPosY, CT.textFont, '(texto)', CT.textextSize, CT.textAlign);
        this.text.letterSpacing = CT.textSpacing;
        this.text.visible = false;
        this.add(this.text);

        this.boxes = [];
        this.images = [];
        for (let i = 0; i < CT.numSlots; i = i + 1) {
            this.boxes[i] = scene.add.image(x, y - boxOffset * (i + 1), 'inventory', 1).setInteractive().setScrollFactor(0);
            this.add(this.boxes[i]);
            this.boxes[i].on('pointerdown', pointer => {
                this.manageItem(i);
            });
            this.boxes[i].on('pointerover', pointer => {
                if (scene.player.inventory.getItemAt(i) !== CT.inventoryVoid) {
                    this.setText(i);
                    this.text.visible = true;
                }
            });
            this.boxes[i].on('pointerout', pointer => {
                this.text.visible = false;
            });
            this.images[i] = new ItemImage(scene, this.boxes[i].x, this.boxes[i].y, scene.player.inventory.getItemAt(i));
            this.add(this.images[i]);
        }
        this.selectionTexture = scene.add.image(x, y + boxOffset, 'inventory', 2);
        this.selectionTexture.visible = false;
        this.add(this.selectionTexture);

        this.pl = scene.player;
    }

    manageItem(i) {
        // seleccionar
        if (this.selection === -1) {
            this.selection = i;
            this.selectionTexture.x = this.boxes[i].x;
            this.selectionTexture.y = this.boxes[i].y;
            this.selectionTexture.visible = true;
        }
        // (mover y) deseleccionar
        else {
            if (this.selection !== i) {
                this.pl.inventory.moveItemsIn(this.selection, i);
                this.updateSlot(this.selection);
                this.updateSlot(i);
            }
            this.selection = -1;
            this.selectionTexture.visible = false;
        }
    }

    useCurrentItem() {
        // usar
        this.pl.inventory.removeItemAt(this.selection);
        this.updateSlot(this.selection);
        this.selectionTexture.visible = false;
        this.selection = -1;
    }

    updateSlot(slot) {
        this.images[slot].changeTo(this.pl.inventory.getItemAt(slot));
    }

    setText(i) {
        /*this.text.text = 'Lorem ipsum:\n\n============================================================================\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';*/

        let title = this.images[i].name;
        let description = this.images[i].desc;

        this.text.text = '';
        this.text.text += String(title);
        this.text.text += '\n================================================\n';
        this.text.text += String(description);
    }
}