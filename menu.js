import CT from './constants.js';

export default class Menu extends Phaser.Scene{
  constructor(){
    super({ key: 'scene' });
    this.playButton;
    this.controlsButton;
  }
  //Aqui te crea todo lo que necesites al inicio para todo el juego
  create(){
    //Mapa
    this.add.image(640, 400, 'mainMenu');
    this.playButton = this.add.image(200,400,'play');
    this.playButton.setScale(5);
    this.controlsButton = this.add.image(200,525,'controls');
    this.controlsButton.setScale(5);


  }
  
  update(){
    
  }
}