export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'boot' });
  }
  //Carga las imagenes necesarias para el juego
  //Este .js solo sirve para eso y dar comienzo a la escena
  
  preload()
  {
    //Damero
    this.load.image('debug', 'resources/game/textures/debug.png');
    
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
    this.load.image('inventorySlot', 'resources/game/textures/inventory/box.png');
    this.load.image('inventorySlotSelection', 'resources/game/textures/inventory/selection.png');
    this.load.image('dropSlot', 'resources/game/textures/inventory/box_drop.png');

    //Objetos de Inventario
    this.load.image('Item_-', 'resources/game/textures/inventory/void_.png');
    
    this.load.image('Item_TNT', 'resources/game/textures/items/tnt.png');
    this.load.image('Item_CheapCarpet', 'resources/game/textures/items/carpet_cheap.png');
    this.load.image('Item_ExpensiveCarpet', 'resources/game/textures/items/carpet_expensive.png');
    this.load.image('Item_Cushion', 'resources/game/textures/items/cushion.png');
    this.load.image('Item_CircusSign', 'resources/game/textures/items/sign_circus.png');
    this.load.image('Item_RebelsSign', 'resources/game/textures/items/sign_rebels.png');
    this.load.image('Item_WantedSign', 'resources/game/textures/items/sign_wanted.png');
    this.load.image('Item_SoapAndBrush', 'resources/game/textures/items/soap_and_brush.png');
    this.load.image('Item_Dye', 'resources/game/textures/items/dye.png');
    this.load.image('Item_OilAndMatches', 'resources/game/textures/items/oil_and_matches.png');
    this.load.image('Item_CoinBag', 'resources/game/textures/items/coin_bag.png');
    this.load.image('Item_Coins', 'resources/game/textures/items/coins.png');
    this.load.image('Item_Message', 'resources/game/textures/items/message.png');

    this.load.image('Item_Diary', 'resources/game/textures/items/diary.png');
    this.load.image('Item_Photo', 'resources/game/textures/items/photo.png');
    this.load.image('Item_BearPlush', 'resources/game/textures/items/plush_bear.png');
    this.load.image('Item_Rune', 'resources/game/textures/items/rune.png');
    this.load.image('Item_Ring', 'resources/game/textures/items/ring.png');

    //Fuente
    this.load.bitmapFont('Font', 'resources/game/font/font.png', 'resources/game/font/font.fnt');

    // Destruir:
    ////Item_TNT.destroy();
  }

  create() { this.scene.start('scene'); }
}