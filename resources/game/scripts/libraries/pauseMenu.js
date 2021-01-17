import SliderButton from "./buttonWithSlider.js";
import Button from './button.js'

export default class PauseMenu{
    constructor(scene)
    {
        this.musicSlider = new SliderButton({
            context: scene,
            x: 900,
            y: 300,
            sprite: 'menuTira',
        })
    }
}