//TODO Container con sprite y trigger 
//TODO Esto no hereda de sprite, hereda de container
export default class NPCImage extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'npc');

    this.scene.add.existing(this);


  }

  //PreUpdate con las animaciones del sprite
}