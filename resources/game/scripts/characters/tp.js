export default class Tp extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, tpLink, offset){
        super(scene, x, y, 'tpTransition');

        this.scene.add.existing(this);
        this.trigger = scene.add.zone(x, y);
        this.trigger.setSize(50, 50);
        this.scene.physics.world.enable(this.trigger);
        this.trigger.body.setAllowGravity(false);
        this.scene.physics.add.existing(this);
        this.visible = true;
        this.alpha = 0
        //this.canTp = true;
        this.playerRef = scene.player
        this.depth = 200;
        //this.body.setCollideWorldBounds();

        this.tpThisFrame = true;

        this.link = {
            x: tpLink.x,
            y: tpLink.y
        }

        // console.log("Mi posicion es " + this.x + " " + this.y)
        // console.log("La otra es:")
        // console.log(this.link)

        this.offset = offset;
        this.scene.physics.add.overlap(scene.player,
            this.trigger,
            () => { this.accion(scene); });
    }

    preUpdate(){
        if (!this.tpThisFrame && !this.playerRef.canTp && !this.checkOverlap()){
            this.playerRef.canTp = true;
        }

        if (this.playerRef.canTp && !this.checkOverlap()) this.tpThisFrame = false
    }

    tp(){
        this.tpThisFrame = true;
        this.playerRef.canTp = false;
        this.playerRef.x = this.link.x
        this.playerRef.y = this.link.y;
    }

    checkOverlap(){

        var boundsA = this.trigger.getBounds();
        var boundsB = this.playerRef.getBounds();

        //return Phaser.Rectangle.intersects(boundsA, boundsB);
        return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB);
    }

    accion(scene){
        if (this.playerRef.canTp){
            scene.tweens.add({
                targets: this,
                duration: 250,
                alpha: 1,
                ease: 'Circ',
                onStart: () =>{
                    this.playerRef.isTalking = true
                },
                onComplete: () =>{
                    scene.tweens.add({
                        targets: this,
                        duration: 1000,
                        alpha: 0,
                        ease: 'Circ',
                        onStart: () =>{
                            this.tp(scene)
                            this.playerRef.isTalking = false
                        }
                    })
                }
            })
        }
    }
}