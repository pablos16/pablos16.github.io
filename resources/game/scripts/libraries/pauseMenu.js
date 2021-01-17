import SliderButton from "./buttonWithSlider.js";
import Button from './button.js'

export default class PauseMenu{
    constructor(scene)
    {
        console.log(scene.currentPlaying)
        this.musicSlider = new SliderButton({
            context: scene,
            x: 900,
            y: 300,
            maxValue: 1,
            target: scene.musicList,
            attribute: 'volume',
            sprite: 'menuTira',
        })
    }
}