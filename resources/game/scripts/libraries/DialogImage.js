import Dialoguer from "./dialoguer.js";

export default class DialogImage extends  Phaser.GameObjects.Image
{
    constructor(scene, data, dialog, sprite)
    {
        super(scene, data.x, data.y, sprite)
        scene.add.existing(this);
        scene.physics.add.existing(this);
        scene.physics.add.collider(this, scene.player)
        this.body.setImmovable();

        this.dialog = new Dialoguer({
            scene: data.scene,
            dialog: dialog,
            x: data.x,
            y: data.y,
            xSize: data.width,
            ySize: data.height,
            isForced: true,
            callbackArguments: { image: this },
        });
    }
}