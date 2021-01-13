import NPCImage from './npcSprite.js';
import PathNode from '../libraries/pathNode.js'
import PathFollower from '../libraries/pathFollower.js'
import Trigger from '../libraries/trigger.js'

export default class NPC extends Phaser.GameObjects.Container {
  constructor(scene, x, y, npcImage) {
    super(scene, x, y);

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);

    this.theScene = scene;

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
      onFinish: (context) => { context.currentPath = 0 }
    })

    this.add(this.spriteImage);
    //Variables
    this.initialPosX = x;
    this.initialPosY = y;

    this.dirX;
    this.dirY;
  }

  checkAnims() {
    if (this.body.newVelocity.x === 0) {
      //Si esta quieto
      if (this.body.newVelocity.y === 0)
        this.spriteImage.play('idleNPC_' + this.spriteImage.frame.texture.key, true);
      else if (this.body.newVelocity.y < 0) //arriba
        this.spriteImage.play('upNPC_' + this.spriteImage.frame.texture.key, true);
      else //abajo
        this.spriteImage.play('downNPC_' + this.spriteImage.frame.texture.key, true);
    }
    else if (this.body.newVelocity.x < 0) //izquierda
      this.spriteImage.play('leftNPC_' + this.spriteImage.frame.texture.key, true);
    else //derecha
      this.spriteImage.play('rightNPC_' + this.spriteImage.frame.texture.key, true);

  }

  preUpdate() {
    this.checkAnims();
  }

}
