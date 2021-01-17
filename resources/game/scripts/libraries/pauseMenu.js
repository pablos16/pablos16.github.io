import menu from "../../configs/menuConfig.js";
import Button from "./button.js";
import SliderButton from "./buttonWithSlider.js";

export default class PauseMenu extends Phaser.GameObjects.Container {
    constructor(scene) {
        super(scene, menu.x, menu.y)
        scene.add.existing(this);
        this.x = menu.x;
        this.y = menu.y;

        this.menu = new Button({
            x: this.x,
            y: this.y,
            context: scene,
            sprite: 'menuTira',
            function: () => { scene.changeScene('menu') }
        })

        this.musicSlider = new SliderButton({
            context: scene,
            x: this.x,
            y: this.y + 100,
            sliderX: menu.sliderX,
            sliderY: menu.sliderY,
            maxValue: 1,
            target: scene.musicList,
            attribute: 'volume',
            sprite: 'musicTira',
        })

        this.effectsSlider = new SliderButton({
            context: scene,
            x: this.x,
            y: this.y + 250,
            sliderX: menu.sliderX,
            sliderY: menu.sliderY,
            maxValue: 1,
            target: scene.soundList,
            attribute: 'volume',
            sprite: 'sonidoTira',
        })

        this.add(this.menu)
        this.add(this.musicSlider)
        this.add(this.effectsSlider)
        this.setScrollFactor(0)
    }
}