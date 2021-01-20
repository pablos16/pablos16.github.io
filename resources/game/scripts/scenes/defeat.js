import CT from '../../configs/constants.js';
import Button from '../libraries/button.js'

export default class Defeat extends Phaser.Scene {
  constructor() {
    super({ key: 'lose' });
  }

  init(data) {
    // Guardamos los puntos
    this.points = data.points;
    this.musicVolume = data.musicVolume
    this.soundVolume = data.soundVolume
  }

  create() {
    // Deshabilitar menú contextual
    this.input.mouse.disableContextMenu();

    // Tecla de pantalla completa
    this.fullScreen = this.input.keyboard.addKey('F');

    // Música
    this.music = this.sound.add('defeat', CT.backgroundMusic);
    this.musicList = [this.music]
    this.soundList = []
    this.soundList.push(this.slider = this.sound.add('slider', CT.effectSounds))
    this.soundList.push(this.sliderEnd = this.sound.add('sliderEnd', CT.effectSounds))
    if (this.musicVolume) this.musicList[0].volume = this.musicVolume;
    if (this.soundVolume) this.soundList[0].volume = this.soundVolume;
    
    this.music.play();


    // Pantalla
    let img = (this.points >= 0) ? 'loseRegime' : 'loseVillage';
    this.add.image(640, 360, img);

    // Botón
    this.returnButton = new Button({
      x: 640,
      y: 660,
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