import Player from './player.js'
<<<<<<< HEAD
import Platform from './platform.js';
=======
>>>>>>> refs/remotes/origin/main

export default class Scene extends Phaser.Scene {
  constructor() {
    super({ key: 'scene' });
  }

  create() {
<<<<<<< HEAD
    this.stars = 10;
    this.bases = this.add.group();
    this.player = new Player(this, 200, 300);

    this.spawn();
  }

  spawn(from = null) {
    Phaser.Math.RND.pick(from || this.bases.children.entries).spawn();
=======
    this.player = new Player(this, 200, 300);

    //ANIMACIONES
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
>>>>>>> refs/remotes/origin/main
  }
}