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


    accion(scene) {
        if (!this.choosing && scene.player.keyDown().interact) {
            if (!this.isTalking) {
                this.StartDialog(scene)
            }
            else if (this.isTalking) {
                //console.log("Hola");
                this.ContinueDialog(scene)
            }
            if (!this.isTalking) {
                this.FinishDialog(scene)
            }
        }
        else if (this.choosing) {
            let input = scene.player.keyDown()
            if (input.any) {
                this.chooseOption(scene, input)
            }
        }
    }


    initializeText(texts, visibility) {
        for (let i = 0; i < texts.length; i++) {
            texts[i].visible = visibility;
            texts[i].setScrollFactor(0);
            texts[i].depth = 100
        }
    }

    setVisiblity(objects, visibility) {
        for (let i = 0; i < objects.length; i++) {
            objects[i].visible = visibility;
        }
    }

    loop(id, lenght) {
        return (Math.abs(id + lenght) % lenght);
    }

    d() {
        return this.dialog[this.index];
    }

    StartDialog(scene) {

        scene.player.isTalking = true;
        this.isTalking = true;
        this.stopX();
        this.stopY();
        scene.player.stopX();
        scene.player.stopY();

        scene.dialogueImage.setVisible(true);
        console.log("hey")
        this.ContinueDialog(scene)

        this.description.visible = true;
        this.name.visible = true;
    }

    ContinueDialog(scene) {
        //console.log(this.index)
        if (this.index === -1) {
            this.FinishDialog(scene)
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

            this.arrow.visible = true

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

        //Actualizar selección y posicion del cursor
        if (up || down) {
            //Actualiza internamente el indice
            this.selection = up ? this.selection - 1 : this.selection + 1;
            this.selection = this.loop(this.selection, this.d().numOptions.length)

            //Actualiza la posicion del cursor en pantalla
            this.arrow.y = CT.yDialogTextPos +
            CT.subDialogInSpacing + CT.yDialogSelection +
            this.selection * (CT.subDialogInSpacing - CT.yDialogSelection)
        }

        //En caso de elegir opción
        /*
         Lo que hacemos es:
         1- Actualizar el índice
         2- Decir que ya hemos acabado de elegir
         3- Ocultar opciones de diálogo y cursor
         4- Finalizar dialogo o continuarlo según corresponda
        */
        if (input.interact) {
            this.index = this.d().numOptions[this.selection].nextIndex
            this.choosing = false
            this.setVisiblity(this.dialogOptions, false)
            this.arrow.visible = false
            if (this.index === -1) this.FinishDialog(scene)
            else this.ContinueDialog()
        }
    }


    FinishDialog(scene) {

        //Volvemos a mover al personaje
        this.moveRight();

        //Ocultamos la imagen de dialogo y player ya no está hablando
        scene.dialogueImage.setVisible(false);
        scene.player.isTalking = false;

        //Ya no se está hablando
        this.isTalking = false

        //Preparar indice para la siguiente vez que se hable
        this.index = this.dialog.length - 1
        for (let i = 0; i < this.d().state.length; i++) {
            if (this.d().state[i].targetState === this.state) {
                this.index = this.d().state[i].nextIndex;
                break;
            }
        }

        //Ocultar textos
        this.description.visible = false;
        this.name.visible = false;
    }
}

