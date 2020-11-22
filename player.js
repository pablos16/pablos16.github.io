export default class Player extends Phaser.GameObjects.sprite {

  constructor(scene,x,y){
    super(scene,x,y,'player');

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds();
    this.speed = 300;
    this.cursors = this.scene.input.keyboard.createCursorKeys();
  }
  preUpdate() {
    if (this.cursors.up.isDown) {
      this.body.setVelocityY(this.speed);
    }
    else if(this.cursors.down.isDown){
        this.body.setVelocityX(-this.speed);
    }
    if (this.cursors.left.isDown) {
      this.body.setVelocityX(-this.speed);
    }
    else if (this.cursors.right.isDown) {
      this.body.setVelocityX(this.speed);
    }
    //Creo que esto sobra
    else {
      this.body.setVelocityX(0);
    }
  }  
}
