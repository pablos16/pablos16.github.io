export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'boot' });
  }
  //Carga las imagenes necesarias para el juego
  //Este .js solo sirve para eso y dar comienzo a la escena

  preload() {
    //Dameros
    this.load.image('debug', 'resources/game/textures/debug.png');
    this.load.spritesheet('debugSheet', 'resources/game/textures/debugSheet.png', { frameWidth: 64, frameHeight: 64 });

    //Menu principal
    this.load.image('mainMenu', 'resources/game/textures/menu.jpg');
    this.load.image('play', 'resources/game/textures/PlayButton.png');
    this.load.image('controls', 'resources/game/textures/ControlsButton.png');
    this.load.image('background', 'resources/game/textures/fondoNegro.png');
    this.load.image('back', 'resources/game/textures/return.png');
    this.load.image('controlsImage', 'resources/game/textures/controls.png');

    //TP Image
    this.load.image('tpImg', 'resources/game/textures/tpImage.png');

    //Personaje
    this.load.image('player', 'resources/game/textures/player.png');

    //NPC
    this.load.image('npc', 'resources/game/textures/npc.png');

    //Mapa
    this.load.tilemapTiledJSON('tileMap', 'resources/game/textures/tilemap/map.json');
    this.load.image('mapTiles', 'resources/game/textures/tilemap/tiles.png');
    this.load.image('mapTilesIndoors', 'resources/game/textures/tilemap/tiles_indoors.png');

    //Muro
    this.load.image('wall', 'resources/game/textures/wall.png');

    //Imagen de prueba dialogo
    this.load.spritesheet('dialogFinal', 'resources/game/textures/dialoguePlaceholder.png', { frameWidth: 900, frameHeight: 300 });

    //Imagen test dialogo sub
    this.load.image('arrow', 'resources/game/textures/dialogArrow.png');

    //Imagen de prueba de misiones
    this.load.image('mision', 'resources/game/textures/dialogInterface.png');

    //Inventario
    this.load.spritesheet('inventory', 'resources/game/textures/inventory.png', { frameWidth: 66, frameHeight: 66 });

    //Objetos de Inventario
    this.load.spritesheet('items', 'resources/game/textures/items.png', { frameWidth: 64, frameHeight: 64 });
    //TODO HACER LO MISMO QUE ESTO PERO CON LOS NPC

    //Fuente
    this.load.bitmapFont('font', 'resources/game/font/font.png', 'resources/game/font/font.fnt');

    //Barra de alineamiento (prototipo)
    this.load.image('bar', 'resources/game/textures/protobarra2.png');
    this.load.image('indicator', 'resources/game/textures/indicator.png');
  }

  create() { this.scene.start('menu'); }
}