import Slider from "./slider.js";

/**
 * Button sprite with slider
 * @param {object} data needed for constructing the class
 * 
 * /// PARAMS NEEDED TO PASS AS AN OBJECT WHEN CREATING ///
 * 
 * @param {Phaser.Scene} context reference to the Phase scene
 * @param  {number} x    x position of the button in the scene
 * @param  {number} y    y position of the button in the scene
 * @param  {number} sliderX  relative x position of the slider respect the button
 * @param  {number} sliderY  relative y position of the slider respect the button
 * @param {string} sprite sprite name for the button to load
 * @param {function} function function to call when the button is clicked
 */
export default class SliderButton extends Phaser.GameObjects.Container {
    constructor(data) {
        super(data.context, data.x, data.y)

        let scene = data.context;
        scene.add.existing(this);

        this.button = scene.add.image(0, 0, data.sprite);

        this.indicator = new Slider({
            context: scene,
            x: data.sliderX,
            y: data.sliderY,
            maxValue: data.maxValue,
            target: data.target,
            attribute: data.attribute,
            sprite: 'indicatorVolume'
        })

        this.add(this.button)
        this.add(this.indicator.bar)
        this.add(this.indicator)
        this.setScrollFactor(0)
    }
}