export default class Tp extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, tpLink, isInstant) {
        super(scene, x, y, 'debug');


        this.scene.add.existing(this);
        this.trigger = scene.add.zone(x, y);
        this.trigger.setSize(50, 50);
        this.scene.physics.world.enable(this.trigger);
        this.trigger.body.setAllowGravity(false);
        this.scene.physics.add.existing(this);
        this.visible = false;
        //this.body.setCollideWorldBounds();



        this.link =
        {
            x: tpLink.x,
            y: tpLink.y
        }

        // console.log("Mi posicion es " + this.x + " " + this.y)
        // console.log("La otra es:")
        // console.log(this.link)

        this.instant = isInstant;

        this.scene.physics.add.overlap(scene.player,
            this.trigger,
            () => {
                this.accion(scene);
            });
    }

    accion(scene) {
        if (scene.player.keyDown().interact) {
            scene.player.x = this.link.x
            scene.player.y = this.link.y
        }
    }

}