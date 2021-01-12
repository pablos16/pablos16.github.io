//TODO Container con sprite y trigger 
//TODO Esto no hereda de sprite, hereda de container
export default class NPCImage extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, imageName) {
    super(scene, x, y, imageName);

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);

    this.scene.physics.add.collider(this,scene.player);
    this.body.setImmovable();


    //ANIMACIONES    
    scene.anims.create({
      key: 'leftNPC_' + imageName,
      frames: scene.anims.generateFrameNumbers(imageName, { start: 3, end: 5 }),
      frameRate: 7,
      repeat: -1
    });

    scene.anims.create({
      key: 'upNPC_' + imageName,
      frames: scene.anims.generateFrameNumbers(imageName, { start: 9, end: 11 }),
      frameRate: 7,
      repeat: -1
    });
    scene.anims.create({
      key: 'idleNPC_' + imageName,
      frames: scene.anims.generateFrameNumbers(imageName, { start: 1, end: 1 }),
      frameRate: 7,
      repeat: -1
    });

    scene.anims.create({
      key: 'downNPC_' + imageName,
      frames: scene.anims.generateFrameNumbers(imageName, { start: 0, end: 2 }),
      frameRate: 7,
      repeat: -1
    });
    scene.anims.create({
      key: 'rightNPC_' + imageName,
      frames: scene.anims.generateFrameNumbers(imageName, { start: 6, end: 8 }),
      frameRate: 7,
      repeat: -1
    });
  }

  

  preUpdate(t, d) {
    //Llamamos al super para las animaciones
    super.preUpdate(t, d);
  }
}
