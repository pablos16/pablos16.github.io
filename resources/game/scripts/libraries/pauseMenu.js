import Button from "./button.js";
import SliderButton from "./buttonWithSlider.js";

export default class PauseMenu{
    constructor(scene)
    {
        this.x = 900;
        this.y = 300;

        this.menu = new Button({
            x: this.x,
            y: this.y,
            context: scene,
            sprite: 'menuTira',
            function: () => {scene.changeScene('menu')}
        })

        this.musicSlider = new SliderButton({
            context: scene,
            x: this.x,
            y: this.y + 100,
            maxValue: 1,
            target: scene.musicList,
            attribute: 'volume',
            sprite: 'musicTira',
        })

        this.effectsSlider = new SliderButton({
            context: scene,
            x: this.x,
            y: this.y + 250,
            maxValue: 1,
            target: scene.soundList,
            attribute: 'volume',
            sprite: 'sonidoTira',
        })
    }
}