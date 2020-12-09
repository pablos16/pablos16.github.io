export default class DroppedItem extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, id, group){
        super(scene, x, y, 'debug');
        this.changeTo(id);
        this.scene.add.existing(this);
        //this.scene.physics.add.existing(this); ???
        //this.body.setImmovable(true); ???
        group.add(this);
    }

    changeTo(id){
        this.setTexture('items', id);
        this.id = id;
        this.setScale(0.5) // (por defecto: 1)
        this.setSize(32, 32); // (por defecto: 64, 64)
        this.setDisplayOrigin(0,0); // ???
    }
}