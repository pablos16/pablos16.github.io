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

    this.isTalking = false;

    //Texto de prueba para comprobar la velocidad del player
    this.label = this.scene.add.text(10, 10);

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
      frames: scene.anims.generateFrameNumbers('player', { start: 4, end: 6 }),
      frameRate: 10,
      repeat: -1
    });

    scene.anims.create({
      key: 'up',
      frames: scene.anims.generateFrameNumbers('player', { start: 10, end: 12 }),
      frameRate: 10,
      repeat: -1
    });

    scene.anims.create({
      key: 'idle',
      frames: scene.anims.generateFrameNumbers('player', { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1
    });
    scene.anims.create({
      key: 'right',
      frames: scene.anims.generateFrameNumbers('player', { start: 7, end: 9 }),
      frameRate: 10,
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

    let object = { x: this.body.velocity.x, y: this.body.velocity.y }

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
    this.body.setVelocityX(0);
  }

  stopY() {
    this.body.setVelocityY(0);
  }

  preUpdate() {

    this.play('idle', true);

    //Al principio de cada preUpdate, el Player se para
    this.stopX()
    this.stopY()

    if (!this.isTalking) {

      //Movimiento horizontal
      if (this.cursors.left.isDown) {
        this.horizontalMove(-1);
        this.play('left');
      }
      else if (this.cursors.right.isDown) {
        this.horizontalMove(1);
        this.play('right');
      }

      //Movimiento vertical        
      if (this.cursors.up.isDown) {
        this.verticalMove(-1);
        this.play('up');
      }
      else if (this.cursors.down.isDown) this.verticalMove(1);

      this.calculateVelocity()

      //Escribe en pantalla el vector
      this.label.text = this.body.velocity.x + '   ' + this.body.velocity.y;
    }
  }
}
