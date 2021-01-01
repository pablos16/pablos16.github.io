export default class Derrota extends Phaser.Scene {
  constructor() {
    super({ key: 'lose' });
    this.playButton;
    this.controlsButton;
    this.controlsImage;
    this.canPlay = true;
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

    //Si los puntos que le pasas son mayor que X... 

    //Cambias el texto o imagen o algo


    //Sin embargo si los puntos son menor que X...

    //Cambias el texto o imagen o algo

  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(this.fullScreen)) {
      this.scale.toggleFullscreen()
    }
    //console.log(this.puntos)
  }
}
