
export default class Player extends Phaser.GameObjects.Sprite {
  //remember de QUITAR FISICAS
  constructor(scene, x, y) {
    super(scene, x, y, 'player');
    this.score = 0;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds();
    this.speed = 300;
    this.label = this.scene.add.text(10, 10);
    this.cursors = this.scene.input.keyboard.createCursorKeys();
  }
  
  normalizeVector()
  {
    let x = this.body.velocity.x
    let y = this.body.velocity.y

    let module =   Math.sqrt(Math.pow(x, 2) +  Math.pow(y, 2))

    x /= module
    y /= module

    this.body.setVelocityX(x*this.speed);
    this.body.setVelocityY(y*this.speed);
  }

  preUpdate() 
  {
    //MOVIMIENTO
    this.body.setVelocityX(0);
    this.body.setVelocityY(0);

    //Si pulsas arriba...
    if (this.cursors.up.isDown) {
      //NO SE USA FISICAS
      this.body.setVelocityY(-1);
    }
    //Si pulsas abajo...
    else if(this.cursors.down.isDown){
      //NO SE USA FISICAS
      this.body.setVelocityY(1)
    }
    //Si pulsas izquierda...
    if (this.cursors.left.isDown) {
      //NO SE USA FISICAS
      this.body.setVelocityX(-1);
    }
    //Si pulsas derecha...
    else if (this.cursors.right.isDown) {
      //NO SE USA FISICAS
      this.body.setVelocityX(1);
    }

    if(this.body.velocity.x !== 0 || this.body.velocity.y !== 0) this.normalizeVector();
    this.label.text = this.body.velocity.x + '   ' + this.body.velocity.y
  }
}
