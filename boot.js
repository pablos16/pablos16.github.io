export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'boot' });
  }
  preload() {
    this.load.image('player', 'police.png');
  }
  create() {
    this.scene.start('scene');
  }
}