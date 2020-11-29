export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'boot' });
  }
  //Carga las imagenes necesarias para el juego
  //Este .js solo sirve para eso y dar comienzo a la escena
  
  preload() {
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

    //Objetos de inventario
    this.load.image('Item_-', 'resources/game/textures/inventory/icons/void_.png');

    this.load.image('Item_TNT', 'resources/game/textures/inventory/icons/tnt.png');
    this.load.image('Item_CheapCarpet', 'resources/game/textures/inventory/icons/carpet_cheap.png');
    this.load.image('Item_ExpensiveCarpet', 'resources/game/textures/inventory/icons/carpet_expensive.png');
    this.load.image('Item_Cushion', 'resources/game/textures/inventory/icons/cushion.png');
    this.load.image('Item_CircusSign', 'resources/game/textures/inventory/icons/sign_circus.png');
    this.load.image('Item_RebelsSign', 'resources/game/textures/inventory/icons/sign_rebels.png');
    this.load.image('Item_WantedSign', 'resources/game/textures/inventory/icons/sign_wanted.png');
    this.load.image('Item_SoapAndBrush', 'resources/game/textures/inventory/icons/soap_and_brush.png');
    this.load.image('Item_Dye', 'resources/game/textures/inventory/icons/dye.png');
    this.load.image('Item_OilAndMatches', 'resources/game/textures/inventory/icons/oil_and_matches.png');
    this.load.image('Item_CoinBag', 'resources/game/textures/inventory/icons/coin_bag.png');
    this.load.image('Item_Coins', 'resources/game/textures/inventory/icons/coins.png');
    this.load.image('Item_Message', 'resources/game/textures/inventory/icons/message.png');

    this.load.image('Item_Diary', 'resources/game/textures/inventory/icons/diary.png');
    this.load.image('Item_Photo', 'resources/game/textures/inventory/icons/photo.png');
    this.load.image('Item_BearPlush', 'resources/game/textures/inventory/icons/plush_bear.png');
    this.load.image('Item_Rune', 'resources/game/textures/inventory/icons/rune.png');
    this.load.image('Item_Ring', 'resources/game/textures/inventory/icons/ring.png');

    // Destruir:
    ////Item_TNT.destroy();
  }

  create() {
    this.scene.start('scene');
  }
}