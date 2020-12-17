//TODO Container con sprite y trigger 
//TODO Esto no hereda de sprite, hereda de container
export default class NPCImage extends Phaser.GameObjects.Sprite{
  constructor(scene, x, y, imageName) {
    super(scene, x, y, imageName);

    this.scene.add.existing(this);


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

  //PreUpdate con las animaciones del sprite
  //Las animaciones creo que van en la constructora
}