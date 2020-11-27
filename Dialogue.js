import EventDialoge from './EventDialogue.js'

export default class Dialogue extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, name, message) { 
        super(scene, x, y, 'dialogTest')
        this.scene.add.existing(this);
        this.characterName = this.scene.add.text(x, y).text = name;
        this.message = this.scene.add.text(x-x/2, y).text = message;
        this.setScrollFactor(0);
        this.option = 0;

        //EventDialoge dialogues //Esto por alguna razón da error
        
        //this.spriteBg = this.add.image(200, 525, 'dialogTest');
        //this.spriteBg.setScrollFactor(0);
        //this.label = this.scene.add.text(20, 20).text = this.message;
    }

    GetName() {
        return this.characterName
    }

    DisplayDialog() {

    }

    HideDialog() 
    {

    }

    update() 
    {
        //this.label.text = this.message
    }
}