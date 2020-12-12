import CT from './constants.js';

export default class Menu extends Phaser.Scene{
  constructor(){
    super({ key: 'scene' });
  }
  //Aqui te crea todo lo que necesites al inicio para todo el juego
  create(){
    //Mapa
    this.add.image(200, 300, 'mainMenu');

  }
  
  update(){
    
  }
}