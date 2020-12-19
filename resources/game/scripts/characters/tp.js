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
        //this.canTp = true;
        this.playerRef = scene.player
        //this.body.setCollideWorldBounds();

        this.tpThisFrame = true;

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

    preUpdate() {
        if (!this.tpThisFrame && !this.playerRef.canTp && !this.checkOverlap()) {
            this.playerRef.canTp = true;
        }

        if(this.playerRef.canTp && !this.checkOverlap()) this.tpThisFrame = false
    }

    tp() {
        this.tpThisFrame = true;
        this.playerRef.canTp = false;
        this.playerRef.x = this.link.x
        this.playerRef.y = this.link.y
    }

    checkOverlap() {

        var boundsA = this.trigger.getBounds();
        var boundsB = this.playerRef.getBounds();

        //return Phaser.Rectangle.intersects(boundsA, boundsB);
        return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB);

    }

    accion(scene) {
        if ((!this.instant && this.playerRef.keyDown().interact) || (this.instant && this.playerRef.canTp)) {
            this.tp(scene)
        }
    }
}