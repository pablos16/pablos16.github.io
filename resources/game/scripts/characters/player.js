import Inventory from "../inventory/inventory.js";
import { normalizeVector } from "../libraries/mathFunc.js";
import Missions from "../missionSystem/missionList.js";

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, missionList) {
    super(scene, x, y, 'player');

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    //this.body.setCollideWorldBounds();
    this.speed = 300;

    //Movimiento
    this.dirX;
    this.dirY;

    this.isTalking = false;


    //Inventario
    this.inventory = new Inventory();

    this.missionList = new Missions(scene, missionList)

    const { LEFT, RIGHT, UP, DOWN, W, A, S, D } = Phaser.Input.Keyboard.KeyCodes;
    this.cursors = scene.input.keyboard.addKeys({
      left: A,
      right: D,
      up: W,
      down: S
    })
    this.action = scene.input.keyboard.addKey('E');

    //ANIMACIONES    
    scene.anims.create({
      key: 'left',
      frames: scene.anims.generateFrameNumbers('player', { start: 3, end: 5 }),
      frameRate: 7,
      repeat: -1
    });

    scene.anims.create({
      key: 'up',
      frames: scene.anims.generateFrameNumbers('player', { start: 9, end: 11 }),
      frameRate: 7,
      repeat: -1
    });
    scene.anims.create({
      key: 'idle',
      frames: scene.anims.generateFrameNumbers('player', { start: 1, end: 1 }),
      frameRate: 7,
      repeat: -1
    });

    scene.anims.create({
      key: 'down',
      frames: scene.anims.generateFrameNumbers('player', { start: 0, end: 2 }),
      frameRate: 7,
      repeat: -1
    });
    scene.anims.create({
      key: 'right',
      frames: scene.anims.generateFrameNumbers('player', { start: 6, end: 8 }),
      frameRate: 7,
      repeat: -1
    });
  }

  keyDown() {
    let playerInput = {}

    playerInput.interact = Phaser.Input.Keyboard.JustDown(this.action)
    playerInput.left = Phaser.Input.Keyboard.JustDown(this.cursors.left)
    playerInput.right = Phaser.Input.Keyboard.JustDown(this.cursors.right)
    playerInput.down = Phaser.Input.Keyboard.JustDown(this.cursors.down)
    playerInput.up = Phaser.Input.Keyboard.JustDown(this.cursors.up)
    playerInput.any = playerInput.interact ||
      playerInput.lef ||
      playerInput.right ||
      playerInput.down ||
      playerInput.up;

    return playerInput
  }

  calculateVelocity() {


    this.dirY = 0;
    this.dirX = 0;

    if (this.cursors.up.isDown) { //arriba
      this.dirY = -1;
    }
    if (this.cursors.down.isDown) { //abajo
      this.dirY = 1;
    }
    if (this.cursors.left.isDown) { //izquierda
      this.dirX = -1;
    }
    if (this.cursors.right.isDown) { //derecha
      this.dirX = 1;
    }

    let object = { x: this.dirX, y: this.dirY }

    normalizeVector(object);

    this.body.setVelocityX(object.x * this.speed);
    this.body.setVelocityY(object.y * this.speed);

  }

  verticalMove(dir) {
    this.body.setVelocityY(dir);
    //this.play('walk', true)
  }

  horizontalMove(dir) {
    //this.setFlipX(dir === -1)
    this.body.setVelocityX(dir);
    //this.play('walk', true)
  }

  stopX() {
    this.dirX = this.body.setVelocityX(0);
  }

  stopY() {
    this.dirY = this.body.setVelocityY(0);
  }

  checkAnims() {
    if (this.dirX === 0) {
      //Si esta quieto
      if (this.dirY === 0)
        this.anims.play('idle', true);
      else if (this.dirY < 0) //arriba
        this.anims.play('up', true);
      else //abajo
        this.anims.play('down', true);
    }
    else if (this.dirX < 0) //izquierda
      this.anims.play('left', true);
    else //derecha
      this.anims.play('right', true);

  }
  preUpdate(t, d) {
    super.preUpdate(t, d);

    //Al principio de cada preUpdate, el Player se para
    this.stopX()
    this.stopY()


    if (!this.isTalking) {

      this.calculateVelocity()

      this.checkAnims();

    }
  }
}
