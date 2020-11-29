import Player from './player.js'
import Dialogue from './Dialogue.js'
import NPC from './npc.js'
import Item from './item.js'
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

    //Muros creados
    let wall;
    this.wall = this.physics.add.staticGroup();
    this.wall.create(30, 400, 'Wall');
    this.wall.create(300, 200, 'Wall');

    //Barra de Inventario
    this.box0 = this.add.image(-180, 224, 'inventorySlot').setInteractive();
    this.box1 = this.add.image(-180, 158, 'inventorySlot').setInteractive();
    this.box2 = this.add.image(-180, 92, 'inventorySlot').setInteractive();
    this.box3 = this.add.image(-180, 26, 'inventorySlot').setInteractive();
    this.box4 = this.add.image(-180, -40, 'inventorySlot').setInteractive();
    this.img0 = new Item(this, this.box0.x, this.box0.y, this.player.getInventoryItemAt(0));
    this.img1 = new Item(this, this.box1.x, this.box1.y, this.player.getInventoryItemAt(1));
    this.img2 = new Item(this, this.box2.x, this.box2.y, this.player.getInventoryItemAt(2));
    this.img3 = new Item(this, this.box3.x, this.box3.y, this.player.getInventoryItemAt(3));
    this.img4 = new Item(this, this.box4.x, this.box4.y, this.player.getInventoryItemAt(4));
    this.selectionTexture = this.add.image(-180, 290, 'inventorySlotSelection');
    this.selectionTexture.visible = false;
    let inventoryBar = new InventoryBar(this, -180, 290);
    inventoryBar.add(this.box0); inventoryBar.add(this.box1); inventoryBar.add(this.box2); inventoryBar.add(this.box3); inventoryBar.add(this.box4);
    inventoryBar.add(this.img0); inventoryBar.add(this.img1); inventoryBar.add(this.img2); inventoryBar.add(this.img3); inventoryBar.add(this.img4);
    inventoryBar.add(this.selectionTexture);
    this.box0.on('pointerdown', pointer =>
    {
      if (this.player.getInventoryItemAt(0) !== 0)
      {
        if (inventoryBar.selected() === 0)
        {
          inventoryBar.select(null);
          this.selectionTexture.visible = false;
        }
        else
        {
          inventoryBar.select(0);
          this.selectionTexture.x = this.box0.x;
          this.selectionTexture.y = this.box0.y;
          this.selectionTexture.visible = true;
        }
      }
    });
    this.box1.on('pointerdown', pointer =>
    {
      if (this.player.getInventoryItemAt(1) !== 0)
      {
        if (inventoryBar.selected() === 1)
        {
        inventoryBar.select(null);
        this.selectionTexture.visible = false;
        }
        else
        {
        inventoryBar.select(1);
        this.selectionTexture.x = this.box1.x;
        this.selectionTexture.y = this.box1.y;
        this.selectionTexture.visible = true;
        }
      }
    });
    this.box2.on('pointerdown', pointer =>
    {
      if (this.player.getInventoryItemAt(2) !== 0)
      {
        if (inventoryBar.selected() === 2)
        {
        inventoryBar.select(null);
        this.selectionTexture.visible = false;
        }
        else
        {
        inventoryBar.select(2);
        this.selectionTexture.x = this.box2.x;
        this.selectionTexture.y = this.box2.y;
        this.selectionTexture.visible = true;
        }
      }
    });
    this.box3.on('pointerdown', pointer =>
    {
      if (this.player.getInventoryItemAt(3) !== 0)
      {
        if (inventoryBar.selected() === 3)
        {
        inventoryBar.select(null);
        this.selectionTexture.visible = false;
        }
        else
        {
        inventoryBar.select(3);
        this.selectionTexture.x = this.box3.x;
        this.selectionTexture.y = this.box3.y;
        this.selectionTexture.visible = true;
        }
      }
    });
    this.box4.on('pointerdown', pointer =>
    {
      if (this.player.getInventoryItemAt(4) !== 0)
      {
        if (inventoryBar.selected() === 4)
        {
        inventoryBar.select(null);
        this.selectionTexture.visible = false;
        }
        else
        {
        inventoryBar.select(4);
        this.selectionTexture.x = this.box4.x;
        this.selectionTexture.y = this.box4.y;
        this.selectionTexture.visible = true;
        }
      }
    });

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
    this.img0.change(this.player.getInventoryItemAt(0));
    this.img1.change(this.player.getInventoryItemAt(1));
    this.img2.change(this.player.getInventoryItemAt(2));
    this.img3.change(this.player.getInventoryItemAt(3));
    this.img4.change(this.player.getInventoryItemAt(4));
  }
}