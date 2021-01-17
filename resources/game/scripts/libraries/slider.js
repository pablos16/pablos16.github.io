export default class Slider extends Phaser.GameObjects.Sprite {
    constructor(data) {
        super(data.context, data.x, data.y, data.sprite)
        let scene = data.context;
        scene.add.existing(this)
        scene.physics.add.existing(this);
        this.body.allowGravity = false;
        //this.setInteractive();
        this.setInteractive({ draggable: true, dropZone: true });
        this.setScrollFactor(0)

        this.dragOrigin;

        //Barra visual del slider
        this.bar = scene.add.image(data.x, data.y, 'sliderBar');
        this.bar.setScrollFactor(0)

        this.on('drag', pointer => { this.onDrag(pointer) }, scene);
        this.on('dragstart', pointer => { this.onDragStart(pointer) }, scene);
    }

    onDragStart(pointer)
    {
        this.dragOrigin = {x:pointer.worldX - this.x, 
            y:pointer.worldY - this.y}
    }


    onDrag(pointer) {
        this.x = pointer.worldX - this.dragOrigin.x
    }
} 