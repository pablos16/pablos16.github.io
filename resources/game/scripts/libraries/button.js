/**
 * Button sprite interactuable with cursor
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
//TEMPLATE
// let button = new Button({
//     x: 100,
//     y: 150,
//     context: this,
//     sprite: 'playButton',
//     function: () => {
//       console.log("Button clicked")
//     }
//   })
export default class Button extends Phaser.GameObjects.Sprite {
    constructor(data) {
        super(data.context, data.x, data.y, data.sprite)
        data.context.add.existing(this)
        this.setInteractive();

        this.on('pointerdown', data.function, data.context)
    }
}