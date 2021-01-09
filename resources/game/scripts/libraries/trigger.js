export default class Trigger extends Phaser.GameObjects.GameObject {
    constructor(data) {
        super(data.scene, data.x, data.y)
        this.scene.add.existing(this)

        this.trigger = data.scene.add.zone(data.x, data.y);
        this.trigger.setSize(data.xSize, data.ySize);
        data.scene.physics.world.enable(this.trigger);
        this.trigger.body.setAllowGravity(false);
        data.scene.physics.add.existing(this);
        this.playerRef = data.scene.player

        this.hasEntered = false;

        this.onTriggerEnter = () => {this.hasEntered = true; data.enter() }
        this.onTriggerExit = () => { data.exit() }
        this.onTriggerStay = () => { data.stay() }
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