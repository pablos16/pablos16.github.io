import CT from '../../configs/constants.js';

export default class DroppedItem extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, id){
        super(scene, x, y, 'debug');
        this.sc = scene;
        this.changeTo(id);
        this.scene.add.existing(this);
    }

    changeTo(id){
        this.setTexture('items', id);
        this.id = id;
        this.setScale(CT.droppedItemSize);
        this.y += 8;
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
        super.preUpdate();
        this.checkPickUp();
    }
}