import CT from '../../configs/constants.js';
import NPC from './npc.js';
import { loop } from "../libraries/mathFunc.js";
import { getRandomInt } from "../libraries/mathFunc.js";
import * as utils from '../libraries/phaserUtilities.js'
import SocialStatePeople from '../../configs/npcSocialGroups.js'
import SocialStateName from '../../configs/socialGroupNames.js'


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

    //Metodos principales

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

    startTween(scene) {
        scene.dialogueImage.y += 50
        scene.dialogueImage.alpha = 0

        scene.tweens.add({
            targets: scene.dialogueImage,
            duration: 250,
            y: scene.dialogueImage.y - 50,
            alpha: 1,
            ease: 'Circ',
        })
    }

    finishTween(scene)
    {
        let origin = scene.dialogueImage.y

        scene.tweens.add({
            targets: scene.dialogueImage,
            duration: 250,
            y: scene.dialogueImage.y + 50,
            alpha: 0,
            ease: 'Circ',
            onComplete: () =>
            {
                scene.dialogueImage.y -= 50
            }

        })
    }

    StartDialog(scene) {
        //Debug
        //console.log("hey " + this.index)


        this.startTween(scene);
        this.setTalking(scene, true)
        this.stop();
        utils.setVisiblity([this.description, this.name, scene.dialogueImage], true)
        this.initializeIndex()
        this.ContinueDialog(scene)
    }

    ContinueDialog(scene) {

        //console.log("hey " + this.index)
        //console.log(this.currentDialog().state)

        //Actualizar textos
        this.updateTexts()

        //Miramos si este dialogo era necesario para completar alguna mision
        this.checkMisionCompleted(scene)

        this.changeDialogImage(this.checkSocialGroup(), scene)

        //Actualizar índice y estado (el indice cambia en función del estado actual)
        if (!("options" in this.currentDialog())) this.iterateStates(this.updateStateAndIndex)
        else {
            this.arrow.visible = true

            //Creacion opciones de dialogo
            this.dialogOptions = []

            //Actualizar textos
            for (let i = 0; i < this.currentDialog().options.length; i++) {
                this.dialogOptions.push(scene.add.bitmapText(
                    CT.xDialogTextPos + CT.xSubDialogSpacing, CT.yDialogTextPos + CT.subDialogInSpacing + i * CT.ySubDialogSpacing,
                    CT.dialogFont, this.currentDialog().options[i].text, CT.subDialogSize, CT.dialogAlign))
            }

            //Poner textos visible
            this.initializeText(this.dialogOptions, true)

            this.choosing = true;
        }
    }

    FinishDialog(scene) {
        this.moveRight();
        this.finishTween(scene)
        utils.setVisiblity([this.description, this.name], false)
        this.setTalking(scene, false)
    }

    chooseOption(scene, input) {
        let down = input.down
        let up = input.up

        //Actualizar selección y posicion del cursor
        if (up || down) {
            //Actualiza internamente el indice
            this.selection = up ? this.selection - 1 : this.selection + 1;
            this.selection = loop(this.selection, this.currentDialog().options.length)

            //Actualiza la posicion del cursor en pantalla
            this.arrow.y = CT.yDialogTextPos +
                CT.subDialogInSpacing + CT.yDialogSelection +
                this.selection * (CT.subDialogInSpacing - CT.yDialogSelection) +
                this.selection * CT.extra
        }

        if (input.interact) {
            this.checkMisionCompleted(scene, this.selection)
            this.arrow.visible = false
            this.choosing = false
            this.index = this.currentDialog().options[this.selection].nextIndex
            utils.setVisiblity(this.dialogOptions, false)
            if (this.index === -1) this.FinishDialog(scene)
            else this.ContinueDialog(scene)
        }
    }

    //Metoodos auxiliares

    changeDialogImage(SocialName, scene) {
        scene.dialogueImage.setFrame(SocialName)
    }

    checkSocialGroup() {
        let groups = SocialStatePeople.length
        for (let i = 0; i < groups; i++) {
            if (SocialStatePeople[i].peopleIn.includes(this.currentDialog().name)) {
                return SocialStatePeople[i].name
            }
        }
    }

    checkMisionCompleted(scene, index = -1) {
        let completed = "completed" in this.currentDialog()
        if (completed) {
            scene.player.misionList.setCompleted(this.currentDialog().completed, this.currentDialog().points)
        }

        if (index === -1) return;
        completed = "completed" in this.currentDialog().options[index]
        if (completed) {
            //console.log()
            scene.player.misionList.setCompleted(this.currentDialog().options[index].completed,
                this.currentDialog().options[index].points)

        }
    }

    updateTexts() {
        this.initializeIndex()
        this.name.text = this.currentDialog().name
        //console.log(this.index + " " +this.currentDialog().text)    
        let random = getRandomInt(this.currentDialog().text.length)
        this.description.text = this.currentDialog().text[random]
        this.description.text = this.indentText(this.description.text)
        this.description.update()
    }

    indentText(text) {
        let l = text.length
        for (let i = 0; i < l; i++) {
            if (i % CT.textLimit === 0 && i !== 0) {

                let wordEnd = i
                while (text[wordEnd] !== " " && wordEnd < l) { wordEnd++; }
                wordEnd++;

                let wordBeggining = i
                while (text[wordBeggining] !== " " && wordBeggining < l) { wordBeggining--; }
                wordBeggining++

                let final = (wordEnd - i) >= (i - wordBeggining) ? wordBeggining : wordEnd
                text = text.insert(final, "\n\n")
            }
        }
        return text;
    }

    indentTexts(texts) {
        for (let i = 0; i < texts.length; i++) this.indentText(texts[i]);
    }

    initializeIndex() {
        if (this.index === -1) {
            //Preparar indice para la siguiente vez que se hable
            this.index = this.dialog.length - 1
            //console.log(this.currentDialog().state.length)
            //console.log(this.currentDialog().state[0].targetState.length)
            this.iterateStates(this.updateIndex)
        }
    }

    updateIndex(context, i = 0) {
        context.index = context.currentDialog().state[i].nextIndex;
    }

    updateState(context, i = 0) {
        if ("nextState" in context.currentDialog().state[i]) {
            context.state = context.currentDialog().state[i].nextState;
        }
    }

    updateStateAndIndex(context, i = 0) {
        context.updateState(context, i)
        context.updateIndex(context, i)
    }

    iterateStates(doThing) {
        loop:
        for (let i = 0; i < this.currentDialog().state.length; i++) {
            for (let j = 0; j < this.currentDialog().state[i].targetState.length; j++) {
                if (this.currentDialog().state[i].targetState[j] === this.state
                    || this.currentDialog().state[i].targetState[j] === "any") {
                    doThing(this, i)
                    break loop;
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

