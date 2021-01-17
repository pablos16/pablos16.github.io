import Button from "./button.js";
import Slider from "./slider.js";

/**
 * Button sprite with slider
 * @param {object} data needed for constructing the class
 * 
 * /// PARAMS NEEDED TO PASS AS AN OBJECT WHEN CREATING ///
 * 
 * @param {Phaser.Scene} context reference to the Phase scene
 * @param  {number} x    x position of the object in the scene
 * @param  {number} y    y position of the object in the scene
 * @param {string} sprite sprite name for the button to load
 * @param {function} function function to call when the button is clicked
 */
export default class SliderButton extends Phaser.GameObjects.Container {
    constructor(data) {
        super(data.context, data.x, data.y)

        let scene = data.context;
        scene.add.existing(this);

        this.button = scene.add.image(0, 0, data.sprite);

        // let tempMatrix = new Phaser.GameObjects.Components.TransformMatrix();
        // let tempParentMatrix = new Phaser.GameObjects.Components.TransformMatrix();
        // this.button.getWorldTransformMatrix(tempMatrix, tempParentMatrix);
        // let d = tempMatrix.decomposeMatrix();

        this.indicator = new Slider({
            context: scene,
            x: 0,
            y: 75,
            sprite: 'indicatorVolume'
        })

        this.add(this.button)
        this.add(this.indicator.bar)
        this.add(this.indicator)
        this.setScrollFactor(0)
    }
}