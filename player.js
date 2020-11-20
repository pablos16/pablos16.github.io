
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
  
  preUpdate() {
    //MOVIMIENTO

    //Si pulsas arriba...
    if (this.cursors.up.isDown) {
      //NO SE USA FISICAS
      this.body.setVelocityY(-this.speed);
    }
    //Si pulsas abajo...
    else if(this.cursors.down.isDown){
      //NO SE USA FISICAS
      this.body.setVelocityY(this.speed)
    }
    //Si pulsas izquierda...
    else if (this.cursors.left.isDown) {
      //NO SE USA FISICAS
      this.body.setVelocityX(-this.speed);
    }
    //Si pulsas derecha...
    else if (this.cursors.right.isDown) {
      //NO SE USA FISICAS
      this.body.setVelocityX(this.speed);

    }
    else {
      this.body.setVelocityX(0);
      this.body.setVelocityY(0);

    }
  }
}