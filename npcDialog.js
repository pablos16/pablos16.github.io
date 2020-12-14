import CT from './constants.js';
import NPC from './npc.js';

export default class NPCDialog extends NPC {
    constructor(scene, x, y, dialog2, npcImage) {
        super(scene, x, y, npcImage);
        this.currentScene = scene;
        this.isTalking = false;
        this.state = 0;
        this.dialog = dialog2
        this.index = 0;
        this.description = this.currentScene.add.bitmapText(CT.xDialogTextPos, CT.yDialogTextPos, CT.dialogFont, this.d().text, CT.dialogSize, CT.dialogAlign);
        this.name = this.currentScene.add.bitmapText(CT.xDialogNamePos, CT.yDialogNamePos, CT.dialogFont, this.d().name, CT.dialogSize, CT.dialogAlign);
        this.description.visible = false;
        this.name.visible = false;
        this.timerStart = 0;
        this.timerEnd = 1000;
    }

    StartDialog() {
        this.description.visible = true;
        this.name.visible = true;
        this.timerStart = this.currentScene.time.now
    }

    accion(scene) {

        if (Phaser.Input.Keyboard.JustDown(scene.player.action)) {
            //if (this.player.action.isDown && !this.flipFlop) {
            if (!scene.player.isTalking) {

                //Hablas con el
                //PONER AQUI DIÁLOGO
                scene.player.isTalking = true;
                this.isTalking = true;
                this.stopX();
                this.stopY();
                scene.player.stopX();
                scene.player.stopY();

                //this.testDialogue = new Dialogue(this, 1280/2, 720 - 720/5, 'A: ', 'Hola');
                scene.dialogueImage.setVisible(true);
                console.log("hey")
                this.ContinueDialog()
                this.StartDialog()
            }
            else if (this.isTalking) {
                //console.log("Hola");
                this.ContinueDialog()
            }
            if (!this.isTalking) {
                //Volvemos a mover al personaje
                this.moveRight();

                scene.dialogueImage.setVisible(false);
                scene.player.isTalking = false;
                //this.NPC.isTalking = false;
                //texto.destroy();
            }
        }
    }

    CanDialog() {
        return this.timerStart + this.timerEnd < this.currentScene.time.now
    }

    ContinueDialog() {
        //if (this.timerStart + this.timerEnd > this.currentScene.time.now) return;
        //console.log(this.index)
        if (this.index === -1) {
            this.FinishDialog()
            return;
        }

        this.description.text = this.d().text
        this.description.name = this.d().name

        if (this.d().numOptions.length === 0) {
            //console.log(this.d().state)
            for (let i = 0; i < this.d().state.length; i++) {
                if (this.d().state[i].targetState === this.state) {
                    this.state = this.d().state[i].nextState;
                    this.index = this.d().state[i].nextIndex;
                    break;
                }
            }
        }
        else {
            for (let i = 0; i < this.d().numOptions.lengt; i++) {

                this.description = this.currentScene.add.bitmapText(CT.xDialogTextPos, CT.yDialogTextPos, CT.dialogFont, this.d().text, CT.dialogSize, CT.dialogAlign);

            }

        }

        this.timerStart = this.currentScene.time.now
    }

    d() {
        return this.dialog[this.index];
    }

    FinishDialog() {
        this.isTalking = false
        this.index = this.dialog.length - 1
        for (let i = 0; i < this.d().state.length; i++) {
            if (this.d().state[i].targetState === this.state) {
                this.index = this.d().state[i].nextIndex;
                break;
            }
        }
        //this.index = 0;
        this.description.visible = false;
        this.name.visible = false;
    }

    preUpdate() {

    }
}

