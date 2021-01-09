import Player from '../characters/player.js';
import InventoryBar from '../inventory/gui_inventoryBar.js';
import DroppedItem from '../inventory/item.js';
import Obstacle from '../inventory/obstacle.js';
import Alignment from '../missionSystem/alignment.js';
import CT from '../../configs/constants.js';
import Dialog from '../../configs/dialogConfig.js';
import NPCDialog from '../characters/npcDialog.js';
import dialogs from '../../dialogs/packedDialogs/dialogs0.js'
import Missions from '../../missions/missionsDay0.js';
import TPLINK from '../characters/tp.js'

export default class Scene extends Phaser.Scene{
  constructor(){
    super({ key: 'scene' });
  }
  //Aqui te crea todo lo que necesites al inicio para todo el juego
  create(){
    //Deshabilitar menú contextual
    this.input.mouse.disableContextMenu();

    //Tecla de pantalla completa
    this.fullScreen = this.input.keyboard.addKey('F');

    //Mapa
    this.map = this.make.tilemap({
      key: 'tileMap',
      tileWidth: 16,
      tileHeight: 16
    });
    //Mapa - Capas Normales 1 - Parte 1
    let tileSet = this.map.addTilesetImage('tiles', 'mapTiles');
    this.mapGround = this.map.createStaticLayer('Ground', tileSet);
    this.mapBorder = this.map.createStaticLayer('Border', tileSet);
    this.mapPathway = this.map.createStaticLayer('Pathway', tileSet);
    this.mapFences = this.map.createStaticLayer('Fences', tileSet);
    this.mapFoundations = this.map.createStaticLayer('Foundations', tileSet);
    this.mapDecorations = this.map.createStaticLayer('Decorations', tileSet);
    //Mapa - Capas Normales 2 - Parte 1
    let tileSetIndoors = this.map.addTilesetImage('tiles_indoors', 'mapTilesIndoors');
    this.mapIndoors1 = this.map.createStaticLayer('Indoors1', tileSetIndoors);
    this.mapIndoors2 = this.map.createStaticLayer('Indoors2', tileSetIndoors);
    this.mapIndoors3 = this.map.createStaticLayer('Indoors3', tileSetIndoors);
    this.mapCarnivalFoundations = this.map.createStaticLayer('Carnival Foundations', tileSetIndoors);
    //Mapa - Capas Normales 3  - Parte 1
    let tileSetCastle = this.map.addTilesetImage('tiles_castle', 'mapTilesCastle');
    this.mapCastleFoundations = this.map.createStaticLayer('Castle Foundations', tileSetCastle);
    //Mapa - Capa De Objetos
    let mapObjects = this.map.getObjectLayer('Objects').objects;
    for (const objeto of mapObjects){
      const props = {};
      if (objeto.properties) { for (const { name, value } of objeto.properties) { props[name] = value; } }
      switch (objeto.name){
        case 'Player': //Personaje
          this.player = new Player(this, objeto.x, objeto.y, Missions);
          break;
        case 'Item': //Objetos en el suelo
          this.dropped = new DroppedItem(this, objeto.x, objeto.y, parseInt(objeto.type));
          break;
        case 'Obstacle': //Obstáculo (entidad en la que se usa un objeto)
          this.obtacle = new Obstacle(this, objeto.x, objeto.y, props.texture, parseInt(objeto.type));
          break;
        case 'Npc': //NPC
          this.NPC = new NPCDialog(this, objeto.x, objeto.y, dialogs[props.dialog], props.sprite);
          break;
        case 'Tp':
          let it = 0;
          loop: for (const tpstatus of mapObjects){
            if (props.tplink === tpstatus.id){
              props.tplink = it;
              break loop;
            }
            it++;
          }
          this.TP = new TPLINK(this, objeto.x, objeto.y, mapObjects[props.tplink], props.offset);
          break;
      }
    }
    //Mapa - Capas Normales 3 - Parte 2
    this.mapCastles1 = this.map.createStaticLayer('Castles1', tileSetCastle);
    this.mapCastles2 = this.map.createStaticLayer('Castles2', tileSetCastle);
    this.mapCastleRooftops = this.map.createStaticLayer('Castle Rooftops', tileSetCastle);
    //Mapa - Capas Normales 2 - Parte 2
    this.mapCarnival = this.map.createStaticLayer('Carnival', tileSetIndoors);
    //Mapa - Capas Normales 1 - Parte 2
    this.mapBuildings = this.map.createStaticLayer('Buildings', tileSet);
    this.mapRooftops = this.map.createStaticLayer('Rooftops', tileSet);
    this.mapCollisions = this.map.createStaticLayer('Collisions', tileSet);
    this.mapCollisions.setCollisionBetween(0, 999);
    this.physics.add.collider(this.player, this.mapCollisions);
    this.mapCollisions.visible = false;

    //Barra de Inventario
    this.inventoryBar = new InventoryBar(this, CT.invBarPosX, CT.invBarPosY);

    //Barra de alineamiento
    this.align = new Alignment(this, CT.alignmentBarX, CT.alignmentBarY, 0);

    //Fondo del dialogo
    this.dialogueImage = this.add.image(Dialog.xDialogImage, Dialog.yDialogImage, 'dialogFinal');
    this.dialogueImage.setScrollFactor(0);
    this.dialogueImage.setVisible(false);

    //Cámara que sigue al jugador
    this.cameras.main.startFollow(this.player);
    this.cameras.main.width = CT.gameWidth;
    this.cameras.main.height = CT.gameHeight;
    this.cameras.main.zoom = CT.cameraZoom;
  }

  update(){
    if (Phaser.Input.Keyboard.JustDown(this.fullScreen)){
      this.scale.toggleFullscreen()
    }
  }
}