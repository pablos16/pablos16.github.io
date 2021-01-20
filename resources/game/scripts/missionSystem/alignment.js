import CT from '../../configs/constants.js';
export default class Alignment extends Phaser.GameObjects.Container {
    constructor(scene, x, y, points) {
        super(scene, x, y);

        this.texture = scene.add.image(x, y, 'bar');


        scene.add.existing(this);
        this.depth = 10;
        //Fijamos la barra
        this.setScrollFactor(0);

        //Puntos que tiene el player
        this.points = points;

        this.indicatorTexture = scene.add.image(x, y, 'indicator');
        this.indicatorTexture.depth = 11;
        this.add(this.texture);
        this.add(this.indicatorTexture);

        this.sceneRef = scene;
    }
    
    addReputation(amount) {
        this.points += amount
        if (Math.abs(this.points) >= CT.alignmentMaxPoints) {
            //Cargas la escena
            this.sceneRef.changeScene('lose');
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