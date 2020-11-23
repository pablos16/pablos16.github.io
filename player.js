
export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'player');
    this.score = 0;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds();
    this.speed = 300;
    this.label = this.scene.add.text(10, 10);
  }
  
  normalizeVector()
  {
    let x = this.body.velocity.x;
    let y = this.body.velocity.y;

    let module =   Math.sqrt(Math.pow(x, 2) +  Math.pow(y, 2))

    x /= module
    y /= module

    this.body.setVelocityX(x*this.speed);
    this.body.setVelocityY(y*this.speed);
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
