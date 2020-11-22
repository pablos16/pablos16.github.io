export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'boot' });
  }
  preload() {
<<<<<<< HEAD
    //this.load.image('platform', 'platform.png');
    //this.load.image('base', 'base.png');
    //this.load.image('star', 'star.png');
    this.load.image('player', 'favicon.png');
  }

=======
    this.load.image('player', 'police.png');
  }
>>>>>>> refs/remotes/origin/main
  create() {
    this.scene.start('scene');
  }
}