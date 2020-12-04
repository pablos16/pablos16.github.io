import Inventory from "./inventory.js";

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'player');

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds();
    this.speed = 300;

    this.isTalking = false;
    //Texto de prueba para comprobar la velocidad del player
    this.label = this.scene.add.text(10, 10);

    //Inventario
    this._inventory = new Inventory();


  }

  normalizeVector() {
    let x = this.body.velocity.x;
    let y = this.body.velocity.y;

    let module = Math.sqrt(x*x + y*y);

    x /= module;
    y /= module;

    this.body.setVelocityX(x * this.speed);
    this.body.setVelocityY(y * this.speed);
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
    this.setFlipX(false)
    this.body.setVelocityX(-50);
    //this.play('walk', true)
  }
  moveRight() {
    this.setFlipX(true)
    this.body.setVelocityX(50);
    //this.play('walk', true)
  }
  stopX() {
    this.body.setVelocityX(0);
  }
  stopY() {
    this.body.setVelocityY(0);
  }
  getX() {
    return this.body.velocity.x;
  }
  getY() {
    return this.body.velocity.y;
  }

  // Manejo de Inventario
  getInventoryItemAt(slotNumber) { 
    return this._inventory.getItemAt(slotNumber); 
  }
  dropInventoryItemAt(slotNumber) { 
    this._inventory.removeItemAt(slotNumber); 
  }
  moveInventoryItemsIn(slotNumber1, slotNumber2) { 
    this._inventory.moveItemsIn(slotNumber1, slotNumber2); 
  }
  pickUpInventoryItem(ItemID) { 
    return this._inventory.addItem(ItemID) 
  }

  //Obtener Posición
  getXPos() { 
    return this.x; 
  }
  getYPos() { 
    return this.y; 
  }
}