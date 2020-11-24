export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'boot' });
  }
  //Carga las imagenes necesarias para el juego
  //Este .js solo sirve para eso y dar comienzo a la escena
  preload() {
    //Personaje
    this.load.image('player', 'resources/game/textures/policeman.png');

    //Fondo MAPA
    this.load.image('map', 'resources/game/textures/background.png');

    //MUROS
    this.load.image('Wall', 'resources/game/textures/wall.png');
  }
  create() {
    this.scene.start('scene');
  }
}