import Player from './player.js';
import NPC from './npc.js';
import InventoryBar from './gui_inventoryBar.js';
import DroppedItem from './item.js';
import Obstacle from './obstacle.js';
import Alignment from './alignment.js';
import CT from './constants.js';
import NPCDialog from './npcDialog.js';
import testDialogue from './resources/game/dialogs/testDialog.js'

export default class Scene extends Phaser.Scene {
  constructor() {
    super({ key: 'scene' });
  }
  //Aqui te crea todo lo que necesites al inicio para todo el juego
  create() {
    //Deshabilitar menú contextual
    this.input.mouse.disableContextMenu();

    //Mapa
    //this.add.image(200, 525, 'dialogTest');
    this.map = this.make.tilemap({ 
      key: 'tileMap',
      tileWidth: 16,
      tileHeight: 16
    });
    let tileSet = this.map.addTilesetImage('tiles', 'mapTiles');
    this.mapGround = this.map.createStaticLayer('Ground' , tileSet);
    this.mapBorder = this.map.createStaticLayer('Border' , tileSet);
    this.mapPathway = this.map.createStaticLayer('Pathway' , tileSet);
    this.mapFences = this.map.createStaticLayer('Fences' , tileSet);
    this.mapDecorations = this.map.createStaticLayer('Decorations' , tileSet);
    this.player = new Player(this, 200, 300); //Personaje
    this.mapBuildings = this.map.createStaticLayer('Buildings' , tileSet);
    this.mapRooftops = this.map.createStaticLayer('Rooftops' , tileSet);
    this.mapCollisions = this.map.createStaticLayer('Collisions' , tileSet);
    this.mapCollisions.setCollisionBetween(0, 999);
    this.physics.add.collider(this.player, this.mapCollisions);

    //NPC
    this.NPC = new NPCDialog(this, 200, 300, testDialogue);
    //Fondo del dialogo
    this.dialogueImage = this.add.image(CT.gameWidth / 2, CT.gameHeight / 1.25, 'dialogTest');
    this.dialogueImage.setScrollFactor(0);
    this.dialogueImage.setVisible(false);

    this.physics.add.overlap(this.player, this.NPC.trigger, (o1, o2) => {
      // Si pulsas la E...
      if (this.player.action.isDown) {
        if (!this.player.isTalking) {

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
          this.NPC.StartDialog()
        }
        else if(this.NPC.isTalking)
        {
          //console.log("Hola");
          this.NPC.ContinueDialog()
        }
        else {
          //Volvemos a mover al personaje
          this.NPC.moveRight();

          this.dialogueImage.setVisible(false);
          this.player.isTalking = false;
          this.NPC.isTalking = false;
          //texto.destroy();
        }
      }
    });
    //this.physics.add.collider(this.player, this.NPCs);
    /*this.physics.add.collider(this.NPCs, this.walls);*/ //Esto debería de sobrar




    //Barra de alineamiento
    this.align = new Alignment(this, 700, 50);


    //Cámara que sigue al jugador
    this.cameras.main.startFollow(this.player);
    //TODO CREAR CLASE CON VARIABLES
    this.cameras.main.width = CT.gameWidth;
    this.cameras.main.height = CT.gameHeight;
    this.cameras.main.zoom = CT.cameraZoom;    

    //Barra de Inventario
    this.inventoryBar = new InventoryBar(this, 45, 360);

    //Objetos en el suelo
    this.droppedItems = this.physics.add.staticGroup();
    this.physics.add.overlap(this.player, this.droppedItems, (o1, o2) => {
      // recoger
      if (this.player.action.isDown) {
        if (this.player.inventory.addItem(o2.id)) o2.destroy();
      }
    });
    this.dropped = new DroppedItem(this, 50, 200, 1, this.droppedItems);

    //Obstáculo (entidad en la que se usa un objeto)
    this.obtacle = new Obstacle(this, 100, 100, 'debug', 1);
  }
}