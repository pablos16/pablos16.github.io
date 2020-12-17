import Inventory from "../inventory/inventory.js";
import { normalizeVector } from "../libraries/mathFunc.js";
import Misions from "../misionSystem/misionList.js";

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, misionList) {
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

    this.misionList = new Misions(scene, misionList)

    const { LEFT, RIGHT, UP, DOWN, W, A, S, D } = Phaser.Input.Keyboard.KeyCodes;
    this.cursors = scene.input.keyboard.addKeys({
      left: A,
      right: D,
      up: W,
      down: S
    })
    this.action = scene.input.keyboard.addKey('E');

    //ANIMACIONES
    //No implementadas todavia porque no tenemos sprites
    /*
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [ { key: 'dude', frame: 4 } ],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });*/

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
    this.setFlipX(dir === -1)
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

    //Al principio de cada preUpdate, el Player se para
    this.stopX()
    this.stopY()

    if (!this.isTalking) {

      //Movimiento horizontal
      if (this.cursors.left.isDown) this.horizontalMove(-1);
      else if (this.cursors.right.isDown) this.horizontalMove(1);

      //Movimiento vertical        
      if (this.cursors.up.isDown) this.verticalMove(-1);
      else if (this.cursors.down.isDown) this.verticalMove(1);

      this.calculateVelocity()

      //Escribe en pantalla el vector
      this.label.text = this.body.velocity.x + '   ' + this.body.velocity.y;
    }
  }
}
