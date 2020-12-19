export default class Tp extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, tpLink, isInstant) {
        super(scene, x, y, 'debug');

        console.log("Creado");

        this.scene.add.existing(this);
        this.trigger = scene.add.zone(x, y);
        this.trigger.setSize(50, 50);
        this.scene.physics.world.enable(this.trigger);
        this.trigger.body.setAllowGravity(false);
        this.scene.physics.add.existing(this);
        //this.body.setCollideWorldBounds();

        this.link =
        {
            x: tpLink.x,
            y: tpLink.y
        }

        this.instant = isInstant;

        this.scene.physics.add.overlap(scene.player,
            this.trigger,
            () => {
                this.accion();
            });
    }

    accion() {
        console.log("Holi tp");
    }

}