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
    this.load.image('play', 'resources/game/textures/gui/menu/playButton.png');
    this.load.image('controls', 'resources/game/textures/gui/menu/controlsButton.png');
    this.load.image('background', 'resources/game/textures/gui/menu/fondoNegro.png');
    this.load.image('back', 'resources/game/textures/gui/menu/returnButton.png');
    this.load.image('controlsImage', 'resources/game/textures/gui/menu/controls.png');

    //Pantalla en negro al teletransportar
    this.load.image('tpImg', 'resources/game/textures/tpTransition.png');

    //Jugador
    //this.load.image('player', 'resources/game/textures/policeman.png');
    this.load.spritesheet('player', 'resources/game/textures/NPCs/police.png', { frameWidth: 32, frameHeight: 32 });

    //NPC
    
    this.load.image('police', 'resources/game/textures/NPCs/police.png');
    this.load.image('leandro', 'resources/game/textures/NPCs/leandro.png');
    this.load.image('coronel', 'resources/game/textures/NPCs/coronel.png');
    this.load.image('dictator', 'resources/game/textures/NPCs/dictador.png');
    this.load.image('cura', 'resources/game/textures/NPCs/cura.png');

    this.load.image('feriante', 'resources/game/textures/NPCs/feriante.png');
    this.load.image('ferianta', 'resources/game/textures/NPCs/ferianta.png');
    this.load.image('srtoFeriante', 'resources/game/textures/NPCs/hijoFeriante.png');

    this.load.image('loco', 'resources/game/textures/NPCs/loco.png');
    this.load.image('embajador', 'resources/game/textures/NPCs/embajador.png');
    this.load.image('embajadora', 'resources/game/textures/NPCs/embajadora.png');
    this.load.image('srtaEmbajadora', 'resources/game/textures/NPCs/srtaEmbajadora.png');

    this.load.image('carcelero', 'resources/game/textures/NPCs/carcelero.png');
    this.load.image('lolaMento', 'resources/game/textures/NPCs/lolaMento.png');
    this.load.image('srtaMento', 'resources/game/textures/NPCs/srtaMento.png');

    this.load.image('empeñista', 'resources/game/textures/NPCs/empeñista.png');

    this.load.image('paca', 'resources/game/textures/NPCs/paca.png');
    this.load.image('sona', 'resources/game/textures/NPCs/sona.png');

    this.load.image('tabernero', 'resources/game/textures/NPCs/tabernero.png');
    this.load.image('tabernera', 'resources/game/textures/NPCs/tabernera.png');












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

    //Musica

    //Menu
    this.load.audio('backgroundMenu', 'resources/game/sounds/Dark Fantasy Studio- Knight song.wav');
  }

  create() { this.scene.start('menu'); }
}