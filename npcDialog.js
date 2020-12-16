import CT from './constants.js';
import NPC from './npc.js';
import { loop } from "./mathFunc.js";
import { getRandomInt } from "./mathFunc.js";
import * as utils from './phaserUtilities.js'


export default class NPCDialog extends NPC {
    constructor(scene, x, y, dialog, npcImage) {
        super(scene, x, y, npcImage);
        this.isTalking = false;
        this.choosing = false
        this.state = 0;
        this.dialog = dialog
        this.index = -1;
        this.selection = 0
        this.description = this.scene.add.bitmapText(CT.xDialogTextPos, CT.yDialogTextPos, CT.dialogFont, "foo", CT.dialogSize, CT.dialogAlign);
        this.name = this.scene.add.bitmapText(CT.xDialogNamePos, CT.yDialogNamePos, CT.dialogFont, "foo", CT.dialogSize, CT.dialogAlign);
        this.dialogOptions = [1, 2, 3]
        this.arrow = scene.add.image(CT.xDialogTextPos + CT.xSubDialogSpacing + CT.xDialogSelection,
            CT.yDialogTextPos + CT.subDialogInSpacing + CT.yDialogSelection, 'arrow');
        this.initializeText([this.name, this.description, this.arrow], false)
    }


    accion(scene) {
        if (!this.choosing && scene.player.keyDown().interact) {
            if (!this.isTalking) this.StartDialog(scene)
            else if (this.isTalking) {
                if (this.index === -1) this.FinishDialog(scene)
                else this.ContinueDialog(scene)
            }
        }
        else if (this.choosing) {
            let input = scene.player.keyDown()
            if (input.any) this.chooseOption(scene, input)
        }
    }

    StartDialog(scene) {
        //Debug
        console.log("hey " + this.index)

        this.setTalking(scene, true)
        this.stop();
        utils.setVisiblity([this.description, this.name, scene.dialogueImage], true)
        this.initializeIndex()
        this.ContinueDialog(scene)
    }

    updateTexts() {
        this.name.text = this.currentDialog().name
        let random = getRandomInt(this.currentDialog().text.length)
        this.description.text = this.currentDialog().text[random]
    }

    ContinueDialog(scene) {

        //Actualizar textos
        this.updateTexts()

        //Actualizar índice y estado (el indice cambia en función del estado actual)
        if (this.currentDialog().numOptions.length === 0) {
            for (let i = 0; i < this.currentDialog().state.length; i++) {
                if (this.currentDialog().state[i].targetState === this.state) {
                    this.state = this.currentDialog().state[i].nextState;
                    this.index = this.currentDialog().state[i].nextIndex;
                    break;
                }
            }
        }
        else {
            this.arrow.visible = true

            //Creacion opciones de dialogo
            this.dialogOptions = []

            //Actualizar textos
            for (let i = 0; i < this.currentDialog().numOptions.length; i++) {
                this.dialogOptions.push(scene.add.bitmapText(
                    CT.xDialogTextPos + CT.xSubDialogSpacing, CT.yDialogTextPos + CT.subDialogInSpacing + i * CT.ySubDialogSpacing,
                    CT.dialogFont, this.currentDialog().numOptions[i].text, CT.subDialogSize, CT.dialogAlign))
            }

            //Poner textos visible
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
            this.selection = loop(this.selection, this.currentDialog().numOptions.length)

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
            this.arrow.visible = false
            this.choosing = false
            this.index = this.currentDialog().numOptions[this.selection].nextIndex
            utils.setVisiblity(this.dialogOptions, false)
            if (this.index === -1) this.FinishDialog(scene)
            else this.ContinueDialog()
        }
    }

    FinishDialog(scene) {
        this.moveRight();
        utils.setVisiblity([this.description, this.name, scene.dialogueImage], false)
        this.setTalking(scene, false)
    }

    initializeIndex() {
        if (this.index === -1) {
            //Preparar indice para la siguiente vez que se hable
            this.index = this.dialog.length - 1
            for (let i = 0; i < this.currentDialog().state.length; i++) {
                if (this.currentDialog().state[i].targetState === this.state) {
                    this.index = this.currentDialog().state[i].nextIndex;
                    break;
                }
            }
        }
    }

    initializeText(texts, visibility) {
        utils.setVisiblity(texts, visibility)
        utils.setStatic(texts)
        utils.setDepth(texts, 100)
    }

    currentDialog() {
        return this.dialog[this.index];
    }

    setTalking(scene, bool) {
        scene.player.isTalking = bool;
        this.isTalking = bool
    }
}

