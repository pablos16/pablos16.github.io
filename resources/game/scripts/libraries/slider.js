export default class Slider extends Phaser.GameObjects.Sprite {
    constructor(data) {
        super(data.context, data.x, data.y, data.sprite)
        //Inicializar atribugos básicos
        let scene = data.context;
        scene.add.existing(this)
        scene.physics.add.existing(this);
        this.body.allowGravity = false;
        this.setInteractive({ draggable: true, dropZone: true });
        this.setScrollFactor(0)
        this.target = data.target;
        this.attribute = data.attribute
        this.dragOrigin;
        this.maxValue = data.maxValue;

        //  Sonidos slider
        this.slider = data.context.slider;
        this.sliderEnd = data.context.sliderEnd;

        //Barra visual del slider
        this.bar = scene.add.image(data.x, data.y, 'sliderBar');
        this.bar.setScrollFactor(0)

        //Controlar cuando ha llegado al final solo en un frame para el sonido
        this.endThisFrame = true;

        //Posicionar botón según valor del atributo y limitar su movimiento
        //Pendiente de descablear el 60 y el -145 (que no sé respecto que son relativos para parametrizarlo)
        this.buttonOffset = 60 - this.x;
        this.correctionOffset = -145;
        this.endValue = this.buttonOffset + this.correctionOffset // 1
        this.startValue = -this.buttonOffset // 0
        //this.x -= this.buttonOffset + this.targetUnitToLocalUnit(this.target[0].config[this.attribute]) + this.x
        //this.x -= this.buttonOffset + this.x
        this.repositionIndicator()

        this.on('drag', pointer => { this.onDrag(pointer) }, scene);
        this.on('dragstart', pointer => { this.onDragStart(pointer) }, scene);
        this.changeValue(this.target[0].config[this.attribute])
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
        if (Math.floor(this.x) % 5 === 0) {
            this.slider.play();
            this.endThisFrame = false;
        }
        this.changeValue(this.localUnitToTargetUnit(this.x))
    }

    changeValue(value) {
        for (const music of this.target)
            music[this.attribute] = value
    }

    localUnitToTargetUnit(value) {
        return 1 - Math.abs((value - this.endValue) / (this.endValue - this.startValue))
    }

    repositionIndicator() {
        this.x = this.targetUnitToLocalUnit(this.target[0].config[this.attribute])
    }

    //Manually lerps de position between endValue and startValue
    targetUnitToLocalUnit(value) {
        return (this.startValue + (this.endValue - this.startValue) * value)
    }
} 