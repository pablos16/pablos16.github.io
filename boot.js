export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'boot' });
  }
  //Carga las imagenes necesarias para el juego
  //Este .js solo sirve para eso y dar comienzo a la escena
  
  preload()
  {
    //Dameros
    this.load.image('debug', 'resources/game/textures/debug.png');
    this.load.spritesheet('debugSheet', 'resources/game/textures/debugSheet.png', { frameWidth: 64, frameHeight: 64 });
    
    //Personaje
    this.load.image('player', 'resources/game/textures/policeman.png');

    //NPC
    this.load.image('npc', 'resources/game/textures/npc.png');

    //Fondo MAPA
    this.load.image('map', 'resources/game/textures/background.png');

    //MUROS
    this.load.image('Wall', 'resources/game/textures/wall.png');

    //Imagen de prueba dialogo
    this.load.image('dialogTest', 'resources/game/textures/dialoguePlaceholder.png');

    //Inventario
    this.load.spritesheet('inventory', 'resources/game/textures/inventory.png', { frameWidth: 66, frameHeight: 66 });

    //Objetos de Inventario
    this.load.spritesheet('items', 'resources/game/textures/items.png', { frameWidth: 64, frameHeight: 64 });

    //Fuente
    this.load.bitmapFont('Font', 'resources/game/font/font.png', 'resources/game/font/font.fnt');

    //Barra de alineamiento (prototipo)
    this.load.image('bar', 'resources/game/textures/protobarra1.png');

    // Destruir:
    ////Item_TNT.destroy();
  }

  create() { this.scene.start('scene'); }
}