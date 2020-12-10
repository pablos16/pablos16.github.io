import NPCImage from './npcSprite.js';

//Diego tk <3
export default class NPC extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x, y);

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds();

    //Trigger del container
    this.trigger = scene.add.zone(0, 0);
    this.trigger.setSize(100, 100);
    this.scene.physics.world.enable(this.trigger);
    this.trigger.body.setAllowGravity(false);
    this.trigger.body.moves = false;

    //Sprite del container
    this.spriteImage = new NPCImage(scene,0,0);

    this.add(this.trigger);
    this.add(this.spriteImage);
    //Variables
    this.initialPosX = x;
    this.initialPosY = y;
    this.isTalking = false;

    this.moveRight();
    
  }
  
  moveX(left, right) {
    //TODO quitar velocidad, con el container no tendria que estar

    if (this.body.position.x >= this.initialPosX + right) {
      this.moveLeft();
      this.spriteImage.setFlipX(true);
    }
    else if (this.body.position.x <= this.initialPosX + left) {
      this.moveRight()
      this.spriteImage.setFlipX(false);
    }
  }
  moveY(top, down) {


    if (this.body.y > this.initialPosY + top) {
      this.moveDown()

    }
    else if (this.body.y < this.initialPosY + down) {
      this.moveUp();
    }
  }

  moveUp() {
    this.body.setVelocityY(-50);
    //this.play('walk', true)
  }
  moveDown() {
    this.body.setVelocityY(50);
    //this.play('walk', true)
  }
  moveLeft() {
    //Para utilizar menos sprites
    this.spriteImage.setFlipX(true)

    this.body.setVelocityX(-50);
    //this.play('walk', true)
  }
  moveRight() {
    //Para utilizar menos sprites
    this.spriteImage.setFlipX(false)

    this.body.setVelocityX(50);
    //this.play('walk', true)
  }
  stopX() {
    this.body.setVelocityX(0);
  }
  stopY() {
    this.body.setVelocityY(0);
  }
  preUpdate(){
    //Movimiento del npc
    if(!this.isTalking){
      this.moveX(-50,50);
    }
  }
  
}