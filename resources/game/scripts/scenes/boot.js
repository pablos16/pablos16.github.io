export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'boot' });
  }

  //Este .js solo sirve para cargar recursos y dar comienzo a la escena

  preload() {
    let width = this.cameras.main.width;
    let height = this.cameras.main.height;

    //Loading screen
    let barPosX = width / 2 - 260;
    let barPosY = height / 2 + 30;
    let progressBar = this.add.graphics();
    let progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(barPosX, barPosY, 500, 35);

    let loadingText = this.make.text({
      x: width / 2,
      y: height / 2,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    let percentText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5);

    let fileText = this.make.text({
      x: width / 2,
      y: height / 2 + 100,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    fileText.setOrigin(0.5, 0.5);

    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(barPosX + 5, barPosY + 5, 480 * value, 25);
    });

    this.load.on('complete', function () {
      fileText.destroy();
      percentText.destroy()
      loadingText.destroy();
      progressBar.destroy();
      progressBox.destroy();
    });


    this.load.on('fileprogress', function (file) {
      fileText.setText(file.src)
    });

    //Dameros
    this.load.image('debug', 'resources/game/textures/debug.png');
    this.load.spritesheet('debugSheet', 'resources/game/textures/debugSheet.png', { frameWidth: 64, frameHeight: 64 });

    //Menu principal
    this.load.image('mainMenu', 'resources/game/textures/gui/menu/menuBackground.png');
    this.load.image('menuTitle', 'resources/game/textures/gui/menu/menuTitle.png');
    this.load.image('play', 'resources/game/textures/gui/menu/playButton.png');
    this.load.image('controls', 'resources/game/textures/gui/menu/controlsButton.png');
    this.load.image('background', 'resources/game/textures/gui/menu/fondoNegro.png');
    this.load.image('back', 'resources/game/textures/gui/menu/returnButton.png');
    this.load.image('controlsImage', 'resources/game/textures/gui/menu/controls.png');

    //Menú fin
    this.load.image('loseRegime','resources/game/textures/gui/menu/end/loseRegime.png');
    this.load.image('loseVillage','resources/game/textures/gui/menu/end/loseVillage.png');
    this.load.image('winRegime','resources/game/textures/gui/menu/end/winRegime.png');
    this.load.image('winVillage','resources/game/textures/gui/menu/end/winVillage.png');

    //Pantalla en negro al teletransportar
    this.load.image('tpImg', 'resources/game/textures/tpTransition.png');

    //Jugador
    this.load.spritesheet('player', 'resources/game/textures/NPCs/police.png', { frameWidth: 32, frameHeight: 32 });

    //NPCs
    this.load.spritesheet('leandro', 'resources/game/textures/NPCs/leandro.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('coronel', 'resources/game/textures/NPCs/coronel.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('dictador', 'resources/game/textures/NPCs/dictador.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('cura', 'resources/game/textures/NPCs/cura.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('ladron', 'resources/game/textures/NPCs/ladron.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('anciano', 'resources/game/textures/NPCs/anciano.png', { frameWidth: 32, frameHeight: 32 });

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
    this.load.spritesheet('npc4', 'resources/game/textures/NPCs/npc4.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('npc5', 'resources/game/textures/NPCs/npc5.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('npc6', 'resources/game/textures/NPCs/npc6.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('npc7', 'resources/game/textures/NPCs/npc7.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('npc8', 'resources/game/textures/NPCs/npc8.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('npc9', 'resources/game/textures/NPCs/npc9.png', { frameWidth: 32, frameHeight: 32 });


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

    //Imagenes Menu
    this.load.image('sliderBar', 'resources/game/textures/gui/pause/audioBar.png')
    this.load.image('indicatorVolume', 'resources/game/textures/gui/pause/indicator.png')
    this.load.image('menuTira', 'resources/game/textures/gui/pause/menu.png')
    this.load.image('musicTira', 'resources/game/textures/gui/pause/musica.png')
    this.load.image('sonidoTira', 'resources/game/textures/gui/pause/sonidos.png')

    //MUSICA

    //Menu
    this.load.audio('backgroundMenu', 'resources/game/sounds/backgroundMenu.wav');

    //Juego
    this.load.audio('bar', 'resources/game/sounds/bar.mp3');
    this.load.audio('castle', 'resources/game/sounds/castle.wav');
    this.load.audio('pueblo', 'resources/game/sounds/pueblo.wav');
    this.load.audio('casa', 'resources/game/sounds/casa.wav');
    this.load.audio('victory', 'resources/game/sounds/victory.wav');
    this.load.audio('defeat', 'resources/game/sounds/defeat.wav');

    //Efectos de sonido
    this.load.audio('dialogSound', 'resources/game/sounds/dialog/blip.wav')
    this.load.audio('selection', 'resources/game/sounds/dialog/selection.wav')
    this.load.audio('pickup', 'resources/game/sounds/inventory/pickup.wav')
    this.load.audio('hit', 'resources/game/sounds/events/hit.wav')
    this.load.audio('slider', 'resources/game/sounds/pause/slider.wav')
    this.load.audio('sliderEnd', 'resources/game/sounds/pause/sliderEnd.wav')
  }

  create() { this.scene.start('menu'); }
}