import menu from "../../configs/menuConfig.js";
import Button from "./button.js";
import SliderButton from "./buttonWithSlider.js";
import Tweener from "./tween.js";

export default class PauseMenu extends Phaser.GameObjects.Container {
    constructor(scene) {
        super(scene, menu.hiddenX, menu.y)
        scene.add.existing(this);

        this.menu = new Button({
            x: 0,
            y: this.y,
            context: scene,
            sprite: 'menuTira',
            function: () => { scene.changeScene('menu') }
        })

        this.musicSlider = new SliderButton({
            context: scene,
            x: 0,
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
            x: 0,
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

        this.animation = new Tweener({
            context: scene,
            target: this,
            duration: menu.animationDuration,
            ease: 'Circ',
            locked: false,
            hidden: true,
            attribs: [
                {
                    propertie: 'x',
                    hidden: menu.x,
                    notHidden: menu.hiddenX
                }
            ]
        })
    }
}