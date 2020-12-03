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



    //NPC
    this.NPC = new NPC(this,600,300);

    //Velocidad inicial
    this.NPC.moveRight();

    //Fondo del dialogo
    this.dialogueImage = this.add.image(1300/2, 800/1.25, 'dialogTest');
    this.dialogueImage.setScrollFactor(0);
    this.dialogueImage.setVisible(false);
    
    //Barra de alineamiento
    this.alignBar = this.add.image(1400, 100, 'bar');
    this.alignBar.setScale(1.75);
    this.alignBar.setScrollFactor(0);

    //Camara que sigue al jugador
    this.cameras.main.startFollow(this.player);
    this.cameras.main.width = 1422;
    this.cameras.main.height = 800;

    //Muros creados
    this.wall = this.physics.add.staticGroup();
    this.wall.create(500, 250, 'Wall');
    this.wall.create(600, 450, 'Wall');

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
    this.dropped1 = new DroppedItem(this, 20, 50, 1);
    this.dropped2 = new DroppedItem(this, 20, 82, 2);
    this.dropped3 = new DroppedItem(this, 20, 114, 3);
    this.dropped4 = new DroppedItem(this, 20, 146, 4);
    this.dropped5 = new DroppedItem(this, 20, 178, 5);
    this.dropped6 = new DroppedItem(this, 20, 210, 6);
    this.dropped7 = new DroppedItem(this, 20, 242, 7);
    this.dropped8 = new DroppedItem(this, 20, 274, 8);
    this.dropped9 = new DroppedItem(this, 20, 306, 9);
    this.dropped10 = new DroppedItem(this, 20, 338, 10);
    this.dropped11 = new DroppedItem(this, 20, 370, 11);
    this.dropped12 = new DroppedItem(this, 20, 402, 12);
    this.dropped13 = new DroppedItem(this, 20, 434, 13);
    this.dropped14 = new DroppedItem(this, 20, 466, 14);
    this.dropped15 = new DroppedItem(this, 20, 498, 15);
    this.dropped16 = new DroppedItem(this, 20, 530, 16);
    this.dropped17 = new DroppedItem(this, 20, 562, 17);
    this.dropped18 = new DroppedItem(this, 20, 594, 18);
    this.droppedItems = this.physics.add.staticGroup();
    this.droppedItems.add(this.dropped1);
    this.droppedItems.add(this.dropped2);
    this.droppedItems.add(this.dropped3);    
    this.droppedItems.add(this.dropped4);
    this.droppedItems.add(this.dropped5);    
    this.droppedItems.add(this.dropped6);
    this.droppedItems.add(this.dropped7);    
    this.droppedItems.add(this.dropped8);
    this.droppedItems.add(this.dropped9);    
    this.droppedItems.add(this.dropped10);
    this.droppedItems.add(this.dropped11);    
    this.droppedItems.add(this.dropped12);
    this.droppedItems.add(this.dropped13);    
    this.droppedItems.add(this.dropped14);
    this.droppedItems.add(this.dropped15);
    this.droppedItems.add(this.dropped16);
    this.droppedItems.add(this.dropped17);
    this.droppedItems.add(this.dropped18);

    this.physics.add.overlap(this.player, this.droppedItems, (o1, o2) =>
    {
      // recoger
      if (this.action.isDown) { if (this.player.pickUpInventoryItem(o2.getID())) o2.destroy(); }
    });

    this.physics.add.overlap(this.player, this.NPC.trigger, (o1, o2) =>
    {
      // Si pulsas la E...
      if (this.action.isDown) 
      { 
        if( !this.player.isTalking){
          
        //Hablas con el
        //PONER AQUI DIÁLOGO
        this.player.isTalking = true;
        this.NPC.isTalking = true;
        this.NPC.stopX();
        this.NPC.stopY();
        this.player.stopX();
        this.player.stopY();


        //this.testDialogue = new Dialogue(this, 1280/2, 720 - 720/5, 'A: ', 'Hola');
        this.dialogueImage.setVisible(true);

        }
        else{
          //Volvemos a mover al personaje
          this.NPC.moveRight();

          this.dialogueImage.setVisible(false);
          this.player.isTalking=false;
          this.NPC.isTalking = false;
          //texto.destroy();
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
    if(!this.player.isTalking){
      
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
    }

    //Cosas de Nico
    //this.testDialogue.update()
    //this.testDialogue.label.text = this.testDialogue.GetName();

    //Movimiento del npc
    if(!this.NPC.isTalking){
      this.NPC.moveX(-50,50);
    }

    //Actualización del Inventario
    this.inventoryBar.updateStatus();

    //Fijar Barra de Inventario
    this.inventoryBar.relocateTo(this.player.getXPos() - 450, this.player.getYPos() + 35);
  }
}