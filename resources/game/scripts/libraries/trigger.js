export default class Trigger extends Phaser.GameObjects.GameObject {
    constructor(scene, x, y, data) {
        super(scene, x, y)
        this.scene.add.existing(this)

        this.trigger = scene.add.zone(x, y);
        this.trigger.setSize(data.xSize, data.ySize);
        this.scene.physics.world.enable(this.trigger);
        this.trigger.body.setAllowGravity(false);
        this.scene.physics.add.existing(this);
        this.playerRef = scene.player

        this.hasEntered = false;

        this.onTriggerEnter = () => { console.log("enter"); this.hasEntered = true; data.enter() }
        this.onTriggerExit = () => { console.log("exit"); data.enter() }
        this.onTriggerStay = () => { console.log("stay"); data.enter() }
    }

    checkOverlap(){

        var boundsA = this.trigger.getBounds();
        var boundsB = this.playerRef.getBounds();

        return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB);
    }

    preUpdate() {

        if(this.checkOverlap())
        {
            if(!this.hasEntered) this.onTriggerEnter();
            else this.onTriggerStay();
        }
        else if(this.hasEntered) 
        {
            this.onTriggerExit()
            this.hasEntered = false;
        }
    }

}