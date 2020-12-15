import CT from './constants.js';
import NPC from './npc.js';

export default class NPCDialog extends NPC {
    constructor(scene, x, y, dialog2, npcImage) {
        super(scene, x, y, npcImage);
        this.currentScene = scene;
        this.isTalking = false;
        this.choosing = false
        this.state = 0;
        this.dialog = dialog2
        this.index = 0;
        this.selection = 0
        this.description = this.currentScene.add.bitmapText(CT.xDialogTextPos, CT.yDialogTextPos, CT.dialogFont, this.d().text, CT.dialogSize, CT.dialogAlign);
        this.name = this.currentScene.add.bitmapText(CT.xDialogNamePos, CT.yDialogNamePos, CT.dialogFont, this.d().name, CT.dialogSize, CT.dialogAlign);
        this.dialogOptions = [1, 2, 3]
        this.arrow = scene.add.image(CT.xDialogTextPos + CT.xSubDialogSpacing + CT.xDialogSelection,
            CT.yDialogTextPos + CT.subDialogInSpacing + CT.yDialogSelection, 'arrow');
        this.initializeText([this.name, this.description, this.arrow], false)
    }

    StartDialog() {

        this.arrow.visible = true
        this.description.visible = true;
        this.name.visible = true;
    }

    initializeText(texts, visibility) {
        for (let i = 0; i < texts.length; i++) {
            texts[i].visible = visibility;
            texts[i].setScrollFactor(0);
            texts[i].depth = 100
        }
    }

    accion(scene) {

        if (!this.choosing) {
            if (scene.player.keyDown().interact) {
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
                    this.ContinueDialog(scene)
                    this.StartDialog()
                }
                else if (this.isTalking) {
                    //console.log("Hola");
                    this.ContinueDialog(scene)
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
        else if (this.choosing) {
            let input = scene.player.keyDown()
            if (input.any) 
            {
                this.chooseOption(scene, input)
            }
        }
    }

    ContinueDialog(scene) {
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

            //Creacion opciones de dialogo
            this.dialogOptions = []

            for (let i = 0; i < this.d().numOptions.length; i++) {
                this.dialogOptions.push(this.currentScene.add.bitmapText(
                    CT.xDialogTextPos + CT.xSubDialogSpacing, CT.yDialogTextPos + CT.subDialogInSpacing + i * CT.ySubDialogSpacing,
                    CT.dialogFont, this.d().numOptions[i].text, CT.subDialogSize, CT.dialogAlign))
            }
            this.initializeText(this.dialogOptions, true)

            this.choosing = true;
        }
    }

    chooseOption(scene, input) {
        let down = input.down
        let up = input.up
        //console.log("Choosing " + down +" "+up)
        if (up || down) {
            this.selection = up ? this.selection - 1 : this.selection + 1;
            console.log("First " + this.selection)
            this.selection = this.loop(this.selection, this.d().numOptions.length)
            console.log("Second " + this.selection)

        }

        this.arrow.y = CT.yDialogTextPos +
            CT.subDialogInSpacing + CT.yDialogSelection +
            this.selection * (CT.subDialogInSpacing - CT.yDialogSelection)
    }

    loop(id, lenght) {
        return (Math.abs(id + lenght) % lenght);
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
}

