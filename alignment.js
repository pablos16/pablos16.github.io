export default class Alignment extends Phaser.GameObjects.Container{
    constructor(scene, x, y, points){
        

        let texture = scene.add.image(x, y, 'bar');//.setScrollFactor(0);
        
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.setScrollFactor(0);

        this.points = points;

        this.indicatorTexture = scene.add.image(x,y,'indicator');
        this.add(this.indicatorTexture);

        
    }

    setPoints(points){
        this.points = points;
        this.updatePosition();
    }

    addReputation(amount){
        this.setPoints(this.points + amount);
    }

    updatePosition(){
        this.setPosition(this.x, this.y + points);
    }
  
}