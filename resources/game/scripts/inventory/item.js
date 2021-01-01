import CT from '../../configs/constants.js';

export default class DroppedItem extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, id){
        super(scene, x, y, 'debug');
        this.changeTo(id);
        this.scene.add.existing(this);

        this.sc = scene;
    }

    changeTo(id){
        this.setTexture('items', id);
        this.id = id;
        this.setOrigin(0);
        this.setScale(CT.droppedItemSize);
        this.setSize(this.width * CT.droppedItemSize, this.height * CT.droppedItemSize);
        this.setPosition(this.x - this.width / 2, this.y - this.height / 2);
    }

    checkPickUp(){
        // recoger
        if (this.sc.player.action.isDown){
            if (Phaser.Geom.Intersects.RectangleToRectangle(this.sc.player.getBounds(), this.getBounds())){
                let placeIn = this.sc.player.inventory.addItem(this.id);
                if (placeIn != -1){
                    this.destroy();
                    this.sc.inventoryBar.updateSlot(placeIn);
                }
            }
        }
    }

    preUpdate(){
        this.checkPickUp();
    }
}