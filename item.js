import CT from "./constants.js";

export default class DroppedItem extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, id){
        super(scene, x, y, 'debug');
        this.changeTo(id);
        this.scene.add.existing(this);
    }

    changeTo(id){
        this.setTexture('items', id);
        this.id = id;
        this.setOrigin(0);
        this.setScale(CT.DROPPED_ITEM_SIZE);
        this.setSize(this.width * CT.DROPPED_ITEM_SIZE, this.height * CT.DROPPED_ITEM_SIZE);
        this.setPosition(this.x - this.width / 2, this.y - this.height / 2);
    }
}