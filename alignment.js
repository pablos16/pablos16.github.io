

export default class Alignment extends Phaser.GameObjects.Container{
    constructor(scene, x, y){
        

        let texture = scene.add.image(x, y, 'bar');//.setScrollFactor(0);
        
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.setScrollFactor(0);

        
    }

  
}