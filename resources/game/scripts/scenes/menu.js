import Button from '../libraries/button.js';

export default class Menu extends Phaser.Scene {
  constructor() {
    super({ key: 'menu' });
    this.playButton;
    this.controlsButton;
    this.background;
    this.controlsImage;
    this.canPlay = true;
    //Configuracion para la musica

    this.music;

  }

  //Aqui te crea todo lo que necesites al inicio para todo el juego
  create() {

    const config = {
      mute: false,
      volume: 0.2,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0
    };
    //Añadimos la musica
    this.music = this.sound.add('backgroundMenu', config);

    this.music.play();
    //Deshabilitar menú contextual
    this.input.mouse.disableContextMenu();

    //Tecla de pantalla completa
    this.fullScreen = this.input.keyboard.addKey('F');

    //Mapa
    this.add.image(640, 400, 'mainMenu');

    this.menuTittle = this.add.image(640, 200, 'menuTittle');
    this.menuTittle.setScale(0.6);

    // this.playButton = new Button({
    //   x: 200,
    //   y: 400,
    //   context: this,
    //   sprite: 'play',
    //   scale: 5,
    //   config: {
    //     context: this.scene,
    //     music: this.music,
    //   },
    //   function: (config) => {
    //     if (this.canPlay) {
    //       config.music.stop();
    //       config.context.start('day0', {
    //         objectLayerName: 'Objects',
    //       });
    //     }
    //   }
    // })

    this.playButton = this.add.image(200, 400, 'play').setInteractive();
    this.playButton.setScale(5);
    this.controlsButton = this.add.image(200, 525, 'controls').setInteractive();
    this.controlsButton.setScale(5);

    this.background = this.add.image(640, 400, 'background');
    this.backButton = this.add.image(1200, 600, 'back').setInteractive();
    this.controlsImage = this.add.image(640, 400, 'controlsImage');

    //TODO eliminar escala y coger una imagen mas grande
    this.background.setScale(3);
    this.background.setVisible(false);
    this.backButton.setScale(5);
    this.backButton.setVisible(false);
    this.controlsImage.setVisible(false);


    //Si pulsas el botton play
    this.playButton.on('pointerdown', function () {
      if (this.canPlay) {
        this.music.stop();
        this.scene.start('day0', {
          objectLayerName: 'Objects',
        });
      }
    }, this);

    //Si pulsas el botton controls
    this.controlsButton.on('pointerdown', function () {
      this.controlsImage.setVisible(true);

      this.canPlay = false;
      this.background.setVisible(true);
      this.backButton.setVisible(true);

    }, this);

    //Si pulsas el botton de return
    this.backButton.on('pointerdown', function () {
      this.canPlay = true;
      this.controlsImage.setVisible(false);

      this.background.setVisible(false);
      this.backButton.setVisible(false);

    }, this);
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(this.fullScreen)) {
      this.scale.toggleFullscreen()
    }
  }
}
