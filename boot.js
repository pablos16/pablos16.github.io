export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'boot' });
  }
  //Carga las imagenes necesarias para el juego
  //Este .js solo sirve para eso y dar comienzo a la escena
  preload() {
    //Personaje
    this.load.image('player', 'police.png');

    //Fondo MAPA
    this.load.image('map', 'fondoPrueba.png');

    //MUROS
    this.load.image('Wall', 'muro.png');
  }
  create() {
    this.scene.start('scene');
  }
}