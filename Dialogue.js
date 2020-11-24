import EventDialoge from './EventDialogue.js'

export default class Dialogue extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, name, message) {
        super(scene, x, y, 'dialogTest', name, message)
        this.characterName = this.scene.add.text(20, 20).text = name;
        this.message = this.scene.add.text(30, 20).text = message;
        //EventDialoge dialogues //Esto por alguna razón da error
        this.option = 0;
        //this.label = this.scene.add.text(20, 20).text = this.message;
    }

    GetName() {
        return this.characterName
    }

    DisplayDialog() {

    }

    HideDialog() {

    }

    update() {
        //this.label.text = this.message
    }
}