import Player from './player.js';
import Dialogue from './dialogue.js';
import NPC from './npc.js';
import InventoryBar from './gui_inventoryBar.js';
import DroppedItem from './item.js';

export default class Scene extends Phaser.Scene{
  constructor(){
    super({ key: 'scene' });
  }
  //Aqui te crea todo lo que necesites al inicio para todo el juego
  create(){
    this.cursors = this.input.keyboard.addKeys({
        up:     Phaser.Input.Keyboard.KeyCodes.W,
        down:   Phaser.Input.Keyboard.KeyCodes.S,
        right:  Phaser.Input.Keyboard.KeyCodes.D,
        left:   Phaser.Input.Keyboard.KeyCodes.A
      });
    this.action = this.input.keyboard.addKey('E');
    /*this.pointer = this.input.activePointer;*/

    //Deshabilitar menú contextual
    this.input.mouse.disableContextMenu();

    //Mapa
    this.add.image(200, 300, 'map');
    //this.add.image(200, 525, 'dialogTest');

    //Personaje
    this.player = new Player(this, 200, 300);

    //NPC
    this.NPC = new NPC(this,600,300);
    this.NPC.moveRight(); //Velocidad inicial
    this.physics.add.overlap(this.player, this.NPC.trigger, (o1, o2) =>{
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

    //Fondo del dialogo
    this.dialogueImage = this.add.image(1300/2, 800/1.25, 'dialogTest');
    this.dialogueImage.setScrollFactor(0);
    this.dialogueImage.setVisible(false);
    
    //Barra de alineamiento
    this.alignBar = this.add.image(1400, 100, 'bar');
    this.alignBar.setScale(1.75);
    this.alignBar.setScrollFactor(0);

    //Cámara que sigue al jugador
    this.cameras.main.startFollow(this.player);
    this.cameras.main.width = 1422;
    this.cameras.main.height = 800;

    //Muros
    this.wall = this.physics.add.staticGroup();
    this.wall.create(500, 250, 'Wall');
    this.wall.create(600, 450, 'Wall');

    //Barra de Inventario
    this.inventoryBar = new InventoryBar(this, -180, 290);

    //_____-----Entidad en la que se usa un objeto (dinamita en este caso)-----_____
    this.clickableDebug = this.add.image(-100, 100, 'debug').setInteractive();
    this.clickableDebug.requires = 1;
    this.clickableDebug.on('pointerdown', pointer =>{
      if (this.player.inventory.getItemAt(this.inventoryBar.getSelection()) === this.clickableDebug.requires){
        this.inventoryBar.useCurrentItem();
        console.log('grasias loko uwu');
        this.clickableDebug.destroy(this);
      }
      else console.log('oye dame dinamita :v');
    });

    //Objetos en el suelo
    this.dropped1 = new DroppedItem(this, 20, 50, 1);
    this.droppedItems = this.physics.add.staticGroup();
    this.droppedItems.add(this.dropped1);
    this.physics.add.overlap(this.player, this.droppedItems, (o1, o2) =>{
      // recoger
      if (this.action.isDown){
        if (this.player.inventory.addItem(o2.id)) o2.destroy();
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
      else{
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
    this.inventoryBar.relocateTo(this.player.x - 450, this.player.y + 35);
  }
}