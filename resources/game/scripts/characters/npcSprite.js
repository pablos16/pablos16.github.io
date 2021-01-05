//TODO Container con sprite y trigger 
//TODO Esto no hereda de sprite, hereda de container
export default class NPCImage extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, imageName) {
    super(scene, x, y, imageName);

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);

    //this.scene.physics.add.collider(this,scene.player);

    
    //Animaciones    
    /*scene.anims.create({
      key: 'leftNPC',
      frames: scene.anims.generateFrameNumbers(imageName, { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    scene.anims.create({
      key: 'turnNPC',
      frames: [{ key: imageName, frame: 4 }],
      frameRate: 20,
      repeat: -1
    });

    scene.anims.create({
      key: 'rightNPC',
      frames: scene.anims.generateFrameNumbers(imageName, { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });*/
  }

  preUpdate() {
    //No estoy seguro
    super.preUpdate();
  }
  //PreUpdate con las animaciones del sprite
  //Las animaciones creo que van en la constructora
}
