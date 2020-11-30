import Player from './player.js'
import Dialogue from './Dialogue.js'
import NPC from './npc.js'
import InventoryBar from './inventoryBar.js'
import DroppedItem from './droppedItem.js'

export default class Scene extends Phaser.Scene {
  constructor() {
    super({ key: 'scene' });
  }
  //Aqui te crea todo lo que necesites al inicio para todo el juego
  create() {
    this.cursors = this.input.keyboard.addKeys(
      {
        up:     Phaser.Input.Keyboard.KeyCodes.W,
        down:   Phaser.Input.Keyboard.KeyCodes.S,
        right:  Phaser.Input.Keyboard.KeyCodes.D,
        left:   Phaser.Input.Keyboard.KeyCodes.A
      });
    this.action = this.input.keyboard.addKey('E');
    this.pointer = this.input.activePointer;

    //Deshabilitar menú contextual
    this.input.mouse.disableContextMenu();

    //Mapa
    this.add.image(200, 300, 'map');
    //this.add.image(200, 525, 'dialogTest');

    //Personaje
    this.player = new Player(this, 200, 300);
    this.testDialogue = new Dialogue(this, 1280/2, 720 - 720/5, 'A: ', 'Hola');

    //NPC
    this.NPC = new NPC(this,300,300);

    //Camara que sigue al jugador
    this.cameras.main.startFollow(this.player);
    this.cameras.main.width = 1280;
    this.cameras.main.height = 720;

    //Muros creados
    this.wall = this.physics.add.staticGroup();
    this.wall.create(-100, 250, 'Wall');
    this.wall.create(-100, 450, 'Wall');

    //Barra de Inventario
    this.inventoryBar = new InventoryBar(this, -180, 290);

    //_____-----Entidad en la que se usa un objeto (dinamita en este caso)-----_____
    this.clickableDebug = this.add.image(-100, 100, 'debug').setInteractive();
    this.clickableDebug.requires = 1;
    this.clickableDebug.on('pointerdown', pointer =>
    {
      if (this.player.getInventoryItemAt(this.inventoryBar.getSelection()) === this.clickableDebug.requires)
      {
        this.inventoryBar.useCurrentItem();
        console.log('grasias loko uwu');
        this.clickableDebug.destroy(this);
      }
      else console.log('oye dame dinamita :v');
    });

    //Objetos en el suelo
    this.droppedItems = this.physics.add.staticGroup();
    this.droppedItems.create(new DroppedItem(this, 20, 100, 1));
    this.droppedItems.create(new DroppedItem(this, 20, 100, 1));
    this.droppedItems.create(new DroppedItem(this, 20, 200, 2));
    this.droppedItems.create(new DroppedItem(this, 20, 300, 3));
    this.droppedItems.create(new DroppedItem(this, 20, 400, 4));
    this.droppedItems.create(new DroppedItem(this, 20, 500, 5));
    this.droppedItems.create(new DroppedItem(this, 120, 100, 6));
    this.droppedItems.create(new DroppedItem(this, 120, 200, 7));
    this.droppedItems.create(new DroppedItem(this, 120, 300, 8));
    this.droppedItems.create(new DroppedItem(this, 120, 400, 9));
    this.droppedItems.create(new DroppedItem(this, 120, 500, 10));
    this.droppedItems.create(new DroppedItem(this, 220, 100, 11));
    this.droppedItems.create(new DroppedItem(this, 220, 200, 12));
    this.droppedItems.create(new DroppedItem(this, 220, 300, 13));
    this.droppedItems.create(new DroppedItem(this, 220, 400, 14));
    this.droppedItems.create(new DroppedItem(this, 220, 500, 15));
    this.droppedItems.create(new DroppedItem(this, 320, 100, 16));
    this.droppedItems.create(new DroppedItem(this, 320, 200, 17));
    this.droppedItems.create(new DroppedItem(this, 320, 300, 18));

    this.physics.add.overlap(this.player, this.droppedItems, (o1, o2) => { console.log('Pedro'); });

    //Colliders personaje
    //this.physics.add.collider(this.player, this.cobers);
    //this.physics.add.collider(this.player, this.UpWall);
    //this.physics.add.collider(this.player, this.DownWall);
    //Esto es para poner que el collider del jugador choque con los muros

    this.physics.add.collider(this.player, this.wall);
    //this.physics.add.collider(this.NPC, this.player);

    //Esto debería de sobrar
    //this.physics.add.collider(this.NPC, this.wall);

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
  
  update(){
    if(!(this.cursors.left.isDown || this.cursors.right.isDown) && !(this.cursors.up.isDown || this.cursors.down.isDown)){
      //this.player.setIdle();
      this.player.stopX();
      this.player.stopY();
    }
    else {
      //Movimiento horizontal
      if (this.cursors.left.isDown) this.player.moveLeft();
      else if (this.cursors.right.isDown) this.player.moveRight();      
      else this.player.stopX();
    }
    //Movimiento vertical        
    if (this.cursors.up.isDown) this.player.moveUp();
    else if (this.cursors.down.isDown) this.player.moveDown();
    else this.player.stopY();
    
    //Normalizamos el vector
    if(this.player.getX() !== 0 || this.player.getY() !== 0) this.player.normalizeVector();

    //Escribe en pantalla el vector
    this.player.label.text = this.player.getX()+ '   ' + this.player.getY();

    //Cosas de Nico
    this.testDialogue.update()
    //this.testDialogue.label.text = this.testDialogue.GetName();

    this.NPC.moveX(280,350);

    //Actualización del Inventario
    this.inventoryBar.updateStatus();

    if (this.action.isDown && this.physics.overlap(this.player, this.droppedItems)) { console.log('Wasamba'); };
  }
}