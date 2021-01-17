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
        this.target = data.target;
        this.attribute = data.attribute
        this.dragOrigin;
        this.maxValue = data.maxValue;

        this.slider = data.context.slider;
        this.sliderEnd = data.context.sliderEnd;

        //Barra visual del slider
        this.bar = scene.add.image(data.x, data.y, 'sliderBar');
        this.bar.setScrollFactor(0)
        this.endThisFrame = true;

        this.buttonOffset = 120;
        this.correctionOffset = -10;
        this.x -= this.buttonOffset + this.target[0][this.attribute]

        this.on('drag', pointer => { this.onDrag(pointer) }, scene);
        this.on('dragstart', pointer => { this.onDragStart(pointer) }, scene);

    }

    onDragStart(pointer) {
        this.dragOrigin = {
            x: pointer.x - this.x,
            y: pointer.x - this.y
        }
    }


    onDrag(pointer) {
        if (pointer.x - this.dragOrigin.x + this.buttonOffset < 0 ||
            pointer.x - this.dragOrigin.x > (this.buttonOffset + this.correctionOffset)) {
            if (!this.endThisFrame) this.sliderEnd.play()
            this.endThisFrame = true;
            return;
        }

        this.x = pointer.x - this.dragOrigin.x
        if (Math.floor(this.x) % 10 === 0) {
            this.slider.play();
            this.endThisFrame = false;
        }
        for (const music of this.target)
            music[this.attribute] = this.localUnitToTargetUnit(this.x + this.buttonOffset)

    }

    localUnitToTargetUnit(value) {
        return ((this.maxValue * value) / (this.buttonOffset - this.correctionOffset))
    }
} 