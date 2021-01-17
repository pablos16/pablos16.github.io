import menu from "../../configs/menuConfig.js";
import Button from "./button.js";
import SliderButton from "./buttonWithSlider.js";

export default class PauseMenu extends Phaser.GameObjects.Container {
    constructor(scene) {
        super(scene, menu.hiddenX, menu.y)
        scene.add.existing(this);
        this.hidden = true;
        this.locked = false;
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
    }

    ToggleMenu(scene) {
        if(this.locked) return;
        this.stopAnimation();
        this.animation = scene.tweens.add({
            targets: this,
            duration: menu.animationDuration,
            x: this.hidden ? menu.x : menu.hiddenX,
            ease: 'Circ',
            onComplete: () => { this.hidden = !this.hidden }
        })
    }

    stopAnimation() {
        if (this.animation && this.animation.isPlaying()) {
            this.animation.stop();
            this.hidden = !this.hidden;
        }
    }
}