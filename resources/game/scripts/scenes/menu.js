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
      volume: 0.08,
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

    this.add.image(640, 150, 'menuTittle');

    this.playButton = new Button({
      x: 180,
      y: 420,   
      context: this,
      sprite: 'play',
      function: () => {
        if (this.canPlay) {
          this.music.stop();
          this.scene.start('day0', {
            points: 0,
          });
        }
      }
    })

    this.controlsButton = new Button({
      x: 180,
      y: 630,
      context: this,
      sprite: 'controls',
      function: () => {
        this.controlsImage.setVisible(true);

        this.canPlay = false;
        this.background.setVisible(true);
        this.backButton.setVisible(true);
      }
    })

    this.background = this.add.image(640, 400, 'background');

    this.backButton = new Button({
      x: 1200,
      y: 600,
      context: this,
      sprite: 'back',
      function: () => {
        this.canPlay = true;
        this.controlsImage.setVisible(false);

        this.background.setVisible(false);
        this.backButton.setVisible(false);
      }
    })

    this.controlsImage = this.add.image(640, 400, 'controlsImage');

    //this.background.setScale(3);
    this.background.setVisible(false);
    this.backButton.setVisible(false);
    this.controlsImage.setVisible(false);
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(this.fullScreen)) {
      this.scale.toggleFullscreen()
    }
  }
}
