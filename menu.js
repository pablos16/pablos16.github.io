export default class Menu extends Phaser.Scene{
  constructor(){
    super({ key: 'menu' });
    this.playButton;
    this.controlsButton;
  }
  //Aqui te crea todo lo que necesites al inicio para todo el juego
  create(){
    //Mapa
    this.add.image(640, 400, 'mainMenu');
    this.playButton = this.add.image(200,400,'play').setInteractive();
    this.playButton.setScale(5);
    this.controlsButton = this.add.image(200,525,'controls').setInteractive();
    this.controlsButton.setScale(5);

    //Si pulsas el botton play
    this.playButton.on('pointerdown', function(){
      this.scene.start('scene');
  },this);


  
  }
  
  update(){
    
  }
}