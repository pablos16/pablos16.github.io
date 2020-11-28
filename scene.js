import Player from './player.js'
import Dialogue from './Dialogue.js'
import NPC from './npc.js'

export default class Scene extends Phaser.Scene {
  constructor() {
    super({ key: 'scene' });
  }
  //Aqui te crea todo lo que necesites al inicio para todo el juego
  create() {
    //this.cursors = this.input.keyboard.createCursorKeys();
    this.w = this.input.keyboard.addKey('W');
    this.a = this.input.keyboard.addKey('A');
    this.s = this.input.keyboard.addKey('S');
    this.d = this.input.keyboard.addKey('D');
    this.e = this.input.keyboard.addKey('E');

    //Mapa
    this.add.image(200, 300, 'map');
    //this.add.image(200, 525, 'dialogTest');

    //Personaje
    this.player = new Player(this, 200, 300);
    this.testDialogue = new Dialogue(this, 1280/2, 720 - 720/5, 'A: ', 'Hola');

    //NPC
    this.NPC = new NPC(this,300,300);

    //Camara que sigue al jugador
    this.cameras.main.startFollow(this.player);

    //Muros creados
    let wall;
    this.wall = this.physics.add.staticGroup();
    this.wall.create(30, 400, 'Wall');
    this.wall.create(300, 200, 'Wall');    

    //Colliders personaje
    //this.physics.add.collider(this.player, this.cobers);
    //this.physics.add.collider(this.player, this.UpWall);
    //this.physics.add.collider(this.player, this.DownWall);
    //Esto es para poner que el collider del jugador choque con los muros

    this.physics.add.collider(this.player, this.wall);
    //this.physics.add.collider(this.NPC, this.player);

    //Esto debería de sobrar
    //this.physics.add.collider(this.NPC, this.wall);

    //ANIMACIONES
    //No implementadas todavia porque no tenemos sprites
    /*
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
  });

  this.anims.create({
      key: 'turn',
      frames: [ { key: 'dude', frame: 4 } ],
      frameRate: 20
  });

  this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
  });*/
  }
  
  update(){
    if(!(this.a.isDown || this.d.isDown) && !(this.w.isDown || this.s.isDown)){
      //this.player.setIdle();
      this.player.stopX();
      this.player.stopY();
    }
    else {
      //Movimiento horizontal
      if (this.a.isDown)
        this.player.moveLeft();
      else if (this.d.isDown)
        this.player.moveRight();      
      else
        this.player.stopX();
    }
    //Movimiento vertical        
    if (this.w.isDown) this.player.moveUp();
    else if (this.s.isDown) this.player.moveDown();
    else this.player.stopY();
    
    //Normalizamos el vector
    if(this.player.getX() !== 0 || this.player.getY() !== 0) this.player.normalizeVector();

    //Escribe en pantalla el vector
    this.player.label.text = this.player.getX()+ '   ' + this.player.getY();

    //Cosas de Nico
    this.testDialogue.update()
    //this.testDialogue.label.text = this.testDialogue.GetName();

    this.NPC.moveX(280,350);

  }
}