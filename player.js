import Inventory from "./inventory.js";

export default class Player extends Phaser.GameObjects.Sprite{
  constructor(scene, x, y){
    super(scene, x, y, 'player');

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds();
    this.speed = 300;

    this.isTalking = false;

    //Texto de prueba para comprobar la velocidad del player
    this.label = this.scene.add.text(10, 10);

    //Inventario
    this.inventory = new Inventory();

    const {LEFT,RIGHT,UP,DOWN,W,A,S,D} = Phaser.Input.Keyboard.KeyCodes;
    this.cursors = scene.input.keyboard.addKeys({
      left: A,
      right: D,
      up: W,
      down: S
    })
    this.action = scene.input.keyboard.addKey('E');
  }

  normalizeVector(){
    let x = this.body.velocity.x;
    let y = this.body.velocity.y;

    let module = Math.sqrt(x*x + y*y);

    x /= module;
    y /= module;

    this.body.setVelocityX(x * this.speed);
    this.body.setVelocityY(y * this.speed);
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
    this.setFlipX(false)
    this.body.setVelocityX(-50);
    //this.play('walk', true)
  }

  moveRight(){
    this.setFlipX(true)
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
  preUpdate(time,delta){
    
    //Algo de este estilo
    if(!this.isTalking){
      
      if(!(this.cursors.left.isDown || this.cursors.right.isDown) && !(this.cursors.up.isDown || this.cursors.down.isDown)){
      //this.player.setIdle();
      this.stopX();
      this.stopY();
      }
      else{
      //Movimiento horizontal
      if (this.cursors.left.isDown) this.moveLeft();
      else if (this.cursors.right.isDown) this.moveRight();      
      else this.stopX();
      }
      
      //Movimiento vertical        
      if (this.cursors.up.isDown) this.moveUp();
      else if (this.cursors.down.isDown) this.moveDown();
      else this.stopY();
    
      //Normalizamos el vector
      if(this.getX() !== 0 || this.getY() !== 0) this.normalizeVector();

      //Escribe en pantalla el vector
      this.label.text = this.getX()+ '   ' + this.getY();
    }
  }
}