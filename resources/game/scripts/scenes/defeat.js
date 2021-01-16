import CT from '../../configs/constants.js';

export default class Defeat extends Phaser.Scene {
  constructor() {
    super({ key: 'lose' });
  }

  init(data) {
    //Guardamos los puntos
    this.puntos = data.points;
  }

  //Aqui te crea todo lo que necesites al inicio para todo el juego
  create() {
    //Deshabilitar menú contextual
    this.input.mouse.disableContextMenu();

    //Tecla de pantalla completa
    this.fullScreen = this.input.keyboard.addKey('F');

    // Música
    const musicConfig = {
      mute: false,
      volume: 0.08,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0
    };
    this.music = this.sound.add('defeat', musicConfig);

    // Pantalla
    this.add.image(640, 150, 'loseTitle');
    let img;
    let des;
    if (this.points >= 0){
      img = 'loseVillage';
      des = 'Has sido asesinado por un opositor del régimen en un levantamiento.';
    }
    else{
      img = 'loseRegime';
      des = 'La autoridad ha descubierto tus vínculos con los rebeldes y has sido condenado.';
    }
    this.add.image(640, 400, img);
    this.add.bitmapText(0, 350, CT.textFont, des, CT.textextSize, CT.textAlign);

    //Botón
    this.returnButton = new Button({
      x: 640,
      y: 550,   
      context: this,
      sprite: 'back',
      function: () => {
        this.music.stop();
        this.scene.start('menu', { points: 0});
      }
    })
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(this.fullScreen)) {
      this.scale.toggleFullscreen()
    }
  }
}