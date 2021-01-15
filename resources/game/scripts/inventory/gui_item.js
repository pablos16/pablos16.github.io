import CT from '../../configs/constants.js';
import itemData from '../../configs/itemData.js'

export default class ItemImage extends Phaser.GameObjects.Image {
        constructor(scene, x, y, id) {
                super(scene, x, y, 'debug');
                this.changeTo(id);
                this.scene.add.existing(this);
        }

        changeTo(id) {
                if (id === CT.inventoryVoid) this.setTexture('inventory', 3);
                else this.setTexture('items', id);
                let itemData = this.setItemData(id);
                this.desc = itemData.desc;
                this.name = itemData.name;
        }

        setItemData(id) {
                return (id >= itemData.length || id < 0) ? itemData[0] : itemData[id];
        }
}
