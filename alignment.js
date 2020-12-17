import CT from './constants.js';
export default class Alignment extends Phaser.GameObjects.Container{
    constructor(scene, x, y, points){
        super(scene, x, y);

        this.texture = scene.add.image(x, y, 'bar');//.setScrollFactor(0);
        
        
        scene.add.existing(this);
        this.setScrollFactor(0);

        this.points = points;

        this.indicatorTexture = scene.add.image(x,y,'indicator');
        this.add(this.texture);
        this.add(this.indicatorTexture);
        

        this.texture.setInteractive();
        this.texture.on('pointerdown', pointer => { this.test() })
    }

    test(){
        console.log('testing');
        this.addReputation(5);
    }

    setPoints(points){
        this.points = points;
        this.updatePosition();
    }

    addReputation(amount){
        this.setPoints(this.points + amount);
        
    }

    updatePosition(){
        console.log(this.indicatorTexture.y)
        this.indicatorTexture.y += (CT.alignmentMaxOffset / (CT.alignmentMaxPoints/this.points));
        console.log(this.indicatorTexture.y)
    }

                         //point 5 return 40
                        //point 10 return 80
                        //point -5 return -40
  
}