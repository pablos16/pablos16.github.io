import NPCImage from './npcSprite.js';
import PathNode from '../libraries/pathNode.js'
import PathFollower from '../libraries/pathFollower.js'

export default class NPC extends Phaser.GameObjects.Container {
  constructor(scene, x, y, npcImage) {
    super(scene, x, y);


    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);

    //Trigger del container
    this.trigger = scene.add.zone(0, 0);
    this.trigger.setSize(100, 100);
    this.scene.physics.world.enable(this.trigger);
    this.trigger.body.setAllowGravity(false);
    this.trigger.body.moves = false;

    //Sprite del container
    this.spriteImage = new NPCImage(scene, 0, 0, npcImage);

    this.isTalking = false

    this.pathFollower = new PathFollower({
      path: [
        new PathNode({
          x: this.body.position.x,
          y: this.body.position.y,
          delay: 3500,
        }),
        new PathNode({
          x: this.body.position.x + 100,
          y: this.body.position.y,
          delay: 1500,
        }),
        new PathNode({
          x: this.body.position.x + 50,
          y: this.body.position.y + 100,
          delay: 400,
        })
      ],
      sceneRef: scene,
      body: this.body,
      xBody: this.body.position.x,
      xBody: this.body.position.y,
      condition: !this.isTalking,
      onFinish: (context) => {context.currentPath = 0}
    })

    this.theScene = scene;

    this.add(this.trigger);
    this.add(this.spriteImage);
    //Variables
    this.initialPosX = x;
    this.initialPosY = y;

    //this.moveRight();

    this.scene.physics.add.overlap(scene.player,
      this.trigger,
      () => {
        this.accion(scene);
      });

    this.dirX;
    this.dirY;
  }



  moveX(left, right) {
    //TODO quitar velocidad, con el container no tendria que estar

    if (this.body.position.x >= this.initialPosX + right) {
      this.moveLeft();
    }
    else if (this.body.position.x <= this.initialPosX + left) {
      this.moveRight()
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
    this.dirY = -1;
    this.body.setVelocityY(-50);
  }
  moveDown() {
    this.dirY = 1;
    this.dirY = this.body.setVelocityY(50);
  }
  moveLeft() {
    this.dirX = -1;
    this.body.setVelocityX(-50);
  }
  moveRight() {
    this.dirX = 1;
    this.body.setVelocityX(50);
  }
  stopX() {
    this.dirX = 0;
    this.body.setVelocityX(0);
  }
  stopY() {
    this.dirY = 0;
    this.body.setVelocityY(0);
  }

  stop() {
    this.stopX()
    this.stopY()
  }

  checkAnims() {
    if (this.dirX === 0) {
      //Si esta quieto
      if (this.dirY === 0)
        this.spriteImage.play('idleNPC_' + this.spriteImage.frame.texture.key, true);
      else if (this.dirY < 0) //arriba
        this.spriteImage.play('upNPC_' + this.spriteImage.frame.texture.key, true);
      else //abajo
        this.spriteImage.play('downNPC_' + this.spriteImage.frame.texture.key, true);
    }
    else if (this.dirX < 0) //izquierda
      this.spriteImage.play('leftNPC_' + this.spriteImage.frame.texture.key, true);
    else //derecha
      this.spriteImage.play('rightNPC_' + this.spriteImage.frame.texture.key, true);

  }

  preUpdate() {

    //Movimiento del npc
    // if (!this.isTalking) {
    //   this.moveX(-50, 50);
    // }

    this.checkAnims();
  }

}
