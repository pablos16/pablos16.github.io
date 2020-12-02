
export default class NPC extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'npc');

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds();

    //Trigger
    this.trigger = scene.add.zone(x, y);
    this.trigger.setSize(100,100);
    this.scene.physics.world.enable(this.trigger);
    this.trigger.body.setAllowGravity(false);
    this.trigger.body.moves = false;

    this.initialPosX = x;
    this.initialPosY = y;

    this.isTalking = false;
    
  }
  
  moveX(left,right){
    this.trigger.x = this.body.position.x+25;

    if(this.body.position.x>=this.initialPosX+right){
      this.moveLeft();
      this.setFlipX(true);
    }
    else if(this.body.position.x<=this.initialPosX+left){
      this.moveRight()
      this.setFlipX(false);
    }

  }
  moveY(top,down){

    this.trigger.y = this.body.position.y;
    
    if(this.body.y>this.initialPosY+top){
      this.moveDown()

    }
    else if(this.body.y<this.initialPosY+down){
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