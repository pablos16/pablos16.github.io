import Player from '../scripts/characters/player.js';
import InventoryBar from '../scripts/inventory/gui_inventoryBar.js';
import DroppedItem from '../scripts/inventory/item.js';
import Obstacle from '../scripts/inventory/obstacle.js';
import Alignment from '../scripts/misionSystem/alignment.js';
import CT from '../configs/constants.js';
import NPCDialog from '../scripts/characters/npcDialog.js';
import testDialogue from '../dialogs/day0/testDialog.js'
import dialogs from '../dialogs/packedDialogs/dialogs0.js'
import tabernero0 from '../dialogs/day0/tabernero.js'
import tabernera0 from '../dialogs/day0/tabernera.js'
import Misions from '../misions/misionsDay0.js';

export default class Scene extends Phaser.Scene {
  constructor() {
    super({ key: 'scene' });
  }
  //Aqui te crea todo lo que necesites al inicio para todo el juego
  create() {
    //Deshabilitar menú contextual
    this.input.mouse.disableContextMenu();
    
    //Tecla de pantalla completa
    this.fullScreen = this.input.keyboard.addKey('F');


    //Mapa
    this.dropped = [];
    this.map = this.make.tilemap({
      key: 'tileMap',
      tileWidth: 32,
      tileHeight: 32
    });
    let tileSet = this.map.addTilesetImage('tiles', 'mapTiles');
    this.mapGround = this.map.createStaticLayer('Ground', tileSet);
    this.mapBorder = this.map.createStaticLayer('Border', tileSet);
    this.mapPathway = this.map.createStaticLayer('Pathway', tileSet);
    this.mapFences = this.map.createStaticLayer('Fences', tileSet);
    this.mapDecorations = this.map.createStaticLayer('Decorations', tileSet);
    this.mapFoundations = this.map.createStaticLayer('Foundations', tileSet);

    //Entidades en el mapa
    for (const objeto of this.map.getObjectLayer('Objects').objects) {
      const props = {};
      if (objeto.properties) { for (const { name, value } of objeto.properties) { props[name] = value; } }
      switch (objeto.name) {
        case 'Player': //Personaje
          this.player = new Player(this, objeto.x, objeto.y, Misions);
          break;
        case 'Item': //Objetos en el suelo
          this.dropped.push(new DroppedItem(this, objeto.x, objeto.y, parseInt(objeto.type)));
          break;
        case 'Obstacle': //Obstáculo (entidad en la que se usa un objeto)
          this.obtacle = new Obstacle(this, objeto.x, objeto.y, props.texture, parseInt(objeto.type));
          break;
        case 'Npc': //NPC
          this.NPC = new NPCDialog(this, objeto.x, objeto.y, dialogs[props.dialog], props.sprite);
          break;
      }
    }

    //Grupo físico para los objetos en el suelo
    this.droppedItems = this.physics.add.staticGroup();
    this.physics.add.overlap(this.player, this.droppedItems, (o1, o2) => {
      // recoger
      if (this.player.action.isDown) {
        if (this.player.inventory.addItem(o2.id)) o2.destroy();
      }
    });
    for (let i = 0; i < this.dropped.length; i = i + 1) { this.droppedItems.add(this.dropped[i]); }

    this.mapBuildings = this.map.createStaticLayer('Buildings', tileSet);
    this.mapRooftops = this.map.createStaticLayer('Rooftops', tileSet);
    this.mapCollisions = this.map.createStaticLayer('Collisions', tileSet);
    this.mapCollisions.setCollisionBetween(0, 999);
    this.physics.add.collider(this.player, this.mapCollisions);
    this.mapCollisions.visible = false;


    //Barra de alineamiento
    this.align = new Alignment(this, CT.alignmentBarX, CT.alignmentBarY, 0);

    //Fondo del dialogo
    this.dialogueImage = this.add.image(CT.gameWidth / 2, CT.gameHeight / 1.25, 'dialogFinal');
    this.dialogueImage.setScrollFactor(0);
    this.dialogueImage.setVisible(false);

    //NPC
    ////this.NPC = new NPCDialog(this, 200, 300, testDialogue);

    //this.physics.add.collider(this.player, this.NPCs);
    /*this.physics.add.collider(this.NPCs, this.walls);*/ //Esto debería de sobrar

    //Cámara que sigue al jugador
    this.cameras.main.startFollow(this.player);
    //TODO CREAR CLASE CON VARIABLES
    this.cameras.main.width = CT.gameWidth;
    this.cameras.main.height = CT.gameHeight;
    this.cameras.main.zoom = CT.cameraZoom;

    //Barra de Inventario
    this.inventoryBar = new InventoryBar(this, CT.invBarPosX, CT.invBarPosY);
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(this.fullScreen)) {
      this.scale.toggleFullscreen()
    }
  }
}