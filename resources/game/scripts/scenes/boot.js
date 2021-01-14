export default class Boot extends Phaser.Scene{
  constructor(){
    super({ key: 'boot' });
  }

  //Este .js solo sirve para cargar recursos y dar comienzo a la escena

  preload(){
    //Dameros
    this.load.image('debug', 'resources/game/textures/debug.png');
    this.load.spritesheet('debugSheet', 'resources/game/textures/debugSheet.png', { frameWidth: 64, frameHeight: 64 });

    //Menu principal
    this.load.image('mainMenu', 'resources/game/textures/gui/menu/menuBackground.png');
    this.load.image('menuTittle', 'resources/game/textures/gui/menu/menuTittle.png');
    this.load.image('play', 'resources/game/textures/gui/menu/playButton.png');
    this.load.image('controls', 'resources/game/textures/gui/menu/controlsButton.png');
    this.load.image('background', 'resources/game/textures/gui/menu/fondoNegro.png');
    this.load.image('back', 'resources/game/textures/gui/menu/returnButton.png');
    this.load.image('controlsImage', 'resources/game/textures/gui/menu/controls.png');

    //Pantalla en negro al teletransportar
    this.load.image('tpImg', 'resources/game/textures/tpTransition.png');

    //Jugador
    this.load.spritesheet('player', 'resources/game/textures/NPCs/police.png', { frameWidth: 32, frameHeight: 32 });

    //NPCs
    this.load.spritesheet('leandro', 'resources/game/textures/NPCs/leandro.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('coronel', 'resources/game/textures/NPCs/coronel.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('dictador', 'resources/game/textures/NPCs/dictador.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('cura', 'resources/game/textures/NPCs/cura.png', { frameWidth: 32, frameHeight: 32 });

    this.load.spritesheet('feriante', 'resources/game/textures/NPCs/feriante.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('ferianta', 'resources/game/textures/NPCs/ferianta.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('srtoFeriante', 'resources/game/textures/NPCs/hijoFeriante.png', { frameWidth: 32, frameHeight: 32 });

    this.load.spritesheet('loco', 'resources/game/textures/NPCs/loco.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('embajador', 'resources/game/textures/NPCs/embajador.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('embajadora', 'resources/game/textures/NPCs/embajadora.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('srtaEmbajadora', 'resources/game/textures/NPCs/srtaEmbajadora.png', { frameWidth: 32, frameHeight: 32 });

    this.load.spritesheet('carcelero', 'resources/game/textures/NPCs/carcelero.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('lolaMento', 'resources/game/textures/NPCs/lolaMento.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('srtaMento', 'resources/game/textures/NPCs/srtaMento.png', { frameWidth: 32, frameHeight: 32 });

    this.load.spritesheet('empeñista', 'resources/game/textures/NPCs/empeñista.png', { frameWidth: 32, frameHeight: 32 });

    this.load.spritesheet('paca', 'resources/game/textures/NPCs/paca.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('sona', 'resources/game/textures/NPCs/sona.png', { frameWidth: 32, frameHeight: 32 });

    this.load.spritesheet('tabernero', 'resources/game/textures/NPCs/tabernero.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('tabernera', 'resources/game/textures/NPCs/tabernera.png', { frameWidth: 32, frameHeight: 32 });

    //NPCs decorativos
    this.load.spritesheet('npc1', 'resources/game/textures/NPCs/npc1.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('npc2', 'resources/game/textures/NPCs/npc2.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('npc3', 'resources/game/textures/NPCs/npc3.png', { frameWidth: 32, frameHeight: 32 });


    //Mapa
    this.load.tilemapTiledJSON('tileMap', 'resources/game/tilemap/map.json');
    this.load.image('mapTiles', 'resources/game/textures/map/tiles.png');
    this.load.image('mapTilesIndoors', 'resources/game/textures/map/tiles_indoors.png');
    this.load.image('mapTilesCastle', 'resources/game/textures/map/tiles_castle.png');

    //Fondo de dialogo
    this.load.spritesheet('dialogFinal', 'resources/game/textures/gui/dialog/dialogBackground.png', { frameWidth: 900, frameHeight: 300 });

    //Fondo de sub-dialogo
    this.load.image('arrow', 'resources/game/textures/gui/dialog/dialogArrow.png');

    //Lista de misiones
    this.load.image('mission', 'resources/game/textures/gui/missionBackground.png');

    //Inventario
    this.load.spritesheet('inventory', 'resources/game/textures/gui/inventory.png', { frameWidth: 66, frameHeight: 66 });

    //Objetos de Inventario
    this.load.spritesheet('items', 'resources/game/textures/gui/items.png', { frameWidth: 64, frameHeight: 64 });

    //Fuente
    this.load.bitmapFont('font', 'resources/game/fonts/mainFont.png', 'resources/game/fonts/mainFont.fnt');
    this.load.bitmapFont('subMission', 'resources/game/fonts/missionSub.png', 'resources/game/fonts/missionSub.fnt');
    this.load.bitmapFont('missionText', 'resources/game/fonts/mission.png', 'resources/game/fonts/mission.fnt');

    //Barra de alineamiento
    this.load.image('bar', 'resources/game/textures/gui/alignmentBar/alignmentBar.png');
    this.load.image('indicator', 'resources/game/textures/gui/alignmentBar/indicator.png');

    //MUSICA

    //Menu
    this.load.audio('backgroundMenu', 'resources/game/sounds/backgroundMenu.wav');

    //Juego
    this.load.audio('bar', 'resources/game/sounds/bar.mp3');
    this.load.audio('castle', 'resources/game/sounds/castle.wav');
    this.load.audio('pueblo', 'resources/game/sounds/pueblo.wav');
    this.load.audio('casa', 'resources/game/sounds/casa.wav');

    //Efectos de sonido
    this.load.audio('dialogSound', 'resources/game/sounds/dialog/blip.wav')
    this.load.audio('selection', 'resources/game/sounds/dialog/selection.wav')
    this.load.audio('pickup', 'resources/game/sounds/inventory/pickup.wav')

    
  }

  create() { this.scene.start('menu'); }
}