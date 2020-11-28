
export default class NPC extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'npc');

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds();
  }
  
  moveX(left,right){

    
    if(this.body.position.x<=left){
      this.moveRight()
      this.setFlipX(false);

    }
    else if(this.body.position.x>=right){
      this.moveLeft();
      this.setFlipX(true);
    }    

  }
  moveY(top,down){
    if(this.body.y>top){
      this.moveDown()

    }
    else if(this.body.y<down){
      this.moveUp();
    }    
  }


  moveUp(){
    this.body.setVelocityY(-50);
    //this.play('walk', true)

  }
  moveDown(){
    this.body.setVelocityY(50);
    //this.play('walk', true)

  }
  moveLeft(){
    //Para utilizar menos sprites
    this.setFlipX(true)
    this.body.setVelocityX(-50);
    //this.play('walk', true)

  }
  moveRight(){
    this.setFlipX(false)
    this.body.setVelocityX(50);
    //this.play('walk', true)

  }
  stopX(){
    this.body.setVelocityX(0);
  }
  stopY(){
    this.body.setVelocityY(0);
  }
  getX(){
  return this.body.velocity.x;
  }
  getY(){
  return this.body.velocity.y;
  }
  
}