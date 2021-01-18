import CT from '../../configs/constants.js';
import Button from '../libraries/button.js';
import PauseMenu from '../libraries/pauseMenu.js';
import Tweener from '../libraries/tween.js';

export default class Menu extends Phaser.Scene {
  constructor() {
    super({ key: 'menu' });

    this.canPlay = true;
  }

  //Aqui te crea todo lo que necesites al inicio para todo el juego
  create() {
    //Animacion de transicion
    this.transitionImg = this.add.image(CT.transitionX, CT.transitionY, 'tpImg')
    this.transitionImg.depth = 100
    this.transitionImg.setScrollFactor(0)
    this.transitionImg.alpha = 0
    this.fade = new Tweener({
      context: this,
      target: this.transitionImg,
      duration: CT.fadeOutTime,
      ease: 'Circ',
      locked: false,
      hidden: false,
      onComplete: (tween) => { if(!tween.hidden) this.scene.start('day0', {
        points: 0,
      });},
      attribs: [
        {
          propertie: 'alpha',
          hidden: 1,
          notHidden: 0
        }
      ]
    })
    this.fade.Toggle()

    this.music = this.sound.add('backgroundMenu', CT.menuMusicConfig);
    this.musicList = [this.music]
    this.soundList = []
    this.soundList.push(this.slider = this.sound.add('slider', CT.effectSounds))
    this.soundList.push(this.sliderEnd = this.sound.add('sliderEnd', CT.effectSounds))

    this.music.play();
    //Deshabilitar menú contextual
    this.input.mouse.disableContextMenu();

    //Tecla de pantalla completa
    this.fullScreen = this.input.keyboard.addKey('F');
    this.menu = this.input.keyboard.addKey('M')

    //Mapa
    this.add.image(640, 400, 'mainMenu');

    this.add.image(640, 150, 'menuTitle');

    this.playButton = new Button({
      x: 180,
      y: 420,
      context: this,
      sprite: 'play',
      function: () => {
        if (this.canPlay) {
          this.music.stop();
          this.fade.Toggle()
        }
      }
    })

    //Menu de ajustes
    this.configMenu = new PauseMenu(this)

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
    if (Phaser.Input.Keyboard.JustDown(this.menu)) {
      this.configMenu.animation.Toggle()
    }
  }
}
