import CT from '../../configs/constants.js';
export default class Alignment extends Phaser.GameObjects.Container {
    constructor(scene, x, y, points) {
        super(scene, x, y);

        this.texture = scene.add.image(x, y, 'bar');//.setScrollFactor(0);


        scene.add.existing(this);
        this.setScrollFactor(0);

        this.points = points;

        this.indicatorTexture = scene.add.image(x, y, 'indicator');
        this.add(this.texture);
        this.add(this.indicatorTexture);


        this.texture.setInteractive();
        this.texture.on('pointerdown', pointer => { this.test() })

        this.sceneRef = scene
    }

    test() {
        console.log('testing');
        this.addReputation(5);
    }

    addReputation(amount) {
        this.points += amount
        if (Math.abs(this.points) >= CT.alignmentMaxPoints) {
            //Cargas la escena
            this.scene.start('lose',{points:100});
        }
        this.updatePosition(amount)
    }

    updatePosition(amount) {

        this.sceneRef.tweens.add({
            targets: this.indicatorTexture,
            duration: 250,
            y: this.indicatorTexture.y + (CT.alignmentMaxOffset / (CT.alignmentMaxPoints / amount)),
            ease: 'Circ',
        })
    }
}