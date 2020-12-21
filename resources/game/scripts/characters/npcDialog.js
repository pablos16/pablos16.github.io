import Dialog from '../../configs/dialogConfig.js';
import NPC from './npc.js';
import { loop } from "../libraries/mathFunc.js";
import { getRandomInt } from "../libraries/mathFunc.js";
import * as utils from '../libraries/phaserUtilities.js'
import SocialStatePeople from '../../configs/npcSocialGroups.js'
//import SocialStateName from '../../configs/socialGroupNames.js'
import Vector2 from '../libraries/vector2.js'
//import vector2 from '../libraries/vector2.js';


export default class NPCDialog extends NPC {
    constructor(scene, x, y, dialog, npcImage) {
        super(scene, x, y, npcImage);
        this.isTalking = false;
        this.choosing = false
        this.state = 0;
        this.dialog = dialog
        this.index = -1;
        this.selection = 0
        this.description = this.scene.add.bitmapText(Dialog.xDialogTextPos, Dialog.yDialogTextPos, Dialog.dialogFont, "foo", Dialog.dialogSize, Dialog.dialogAlign);
        this.name = this.scene.add.bitmapText(Dialog.xDialogNamePos, Dialog.yDialogNamePos, Dialog.dialogFont, "foo", Dialog.dialogSize, Dialog.dialogAlign);
        this.dialogOptions = [1, 2, 3]
        this.arrow = scene.add.image(Dialog.xDialogTextPos + Dialog.xSubDialogSpacing + Dialog.xDialogSelection,
            Dialog.yDialogTextPos + Dialog.subDialogInSpacing + Dialog.yDialogSelection, 'arrow');
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

    StartDialog(scene) {
        //this.startTween(scene);
        scene.player.misionList.hideInterface()
        this.animateDialog(scene, 50)
        this.setTalking(scene, true)
        this.stop();
        utils.setVisiblity([this.description, this.name, scene.dialogueImage], true)
        this.initializeIndex(scene)
        this.ContinueDialog(scene)
    }

    checkCallbacks(scene) {
        if ("callback" in this.currentDialog()) {
            this.currentDialog().callback(this, scene);
        }
    }

    ContinueDialog(scene) {

        //console.log("hey " + this.index)
        //console.log(this.currentDialog().state)

        //Actualizar textos
        this.updateTexts()

        this.animateText(scene, this.description)
        //this.animateText(scene, this.name)

        this.checkCallbacks(scene)

        //Miramos si este dialogo era necesario para completar alguna mision
        this.checkMisionCompleted(scene, this.currentDialog())

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
                    Dialog.xDialogTextPos + Dialog.xSubDialogSpacing, Dialog.yDialogTextPos + Dialog.subDialogInSpacing + i * Dialog.ySubDialogSpacing,
                    Dialog.dialogFont, this.currentDialog().options[i].text, Dialog.subDialogSize, Dialog.dialogAlign))

                this.animateText(scene, this.dialogOptions[i])
            }

            //Poner textos visible
            this.initializeText(this.dialogOptions, true)

            this.choosing = true;
        }
    }

    FinishDialog(scene) {
        scene.player.misionList.showInterface()
        this.moveRight();
        this.animateDialog(scene, 50, false)
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
            this.arrow.y = (Dialog.yDialogTextPos +
                            Dialog.subDialogInSpacing +
                           (this.selection * Dialog.ySubDialogSpacing) +
                            Dialog.yDialogSelection)
        }

        if (input.interact) {
            this.checkMisionCompleted(scene, this.currentDialog().options[this.selection])
            this.arrow.visible = false
            this.choosing = false
            this.index = this.currentDialog().options[this.selection].nextIndex
            utils.setVisiblity(this.dialogOptions, false)
            if (this.index === -1) this.FinishDialog(scene)
            else this.ContinueDialog(scene)
        }
    }

    //Metoodos auxiliares

    animateDialog(scene, value, start = true) {
        let imgAlpha = 0
        scene.dialogueImage.y = Dialog.yDialogImage
        if (start) {
            scene.dialogueImage.y += value
            scene.dialogueImage.alpha = 0
            imgAlpha = 1
            value *= -1
        }

        scene.tweens.add({
            targets: scene.dialogueImage,
            duration: 150,
            y: scene.dialogueImage.y + value,
            alpha: imgAlpha,
            ease: 'Circ',
            onComplete: () => { if (!start) scene.dialogueImage.y -= value }
        })
    }

    animateText(scene, target) {
        let copy = target.text
        target.text = ""
        let aux = ""
        let i = 0
        scene.time.addEvent({
            callback: () => {
                aux += copy[i]
                target.text = aux
                ++i
            },
            repeat: copy.length - 1,
            delay: Dialog.dialogSpeed,
        })
    }

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

    checkMisionCompleted(scene, context) {
        if ("completed" in context) scene.player.misionList.setCompleted(context.completed)
        if ("points" in context) scene.player.misionList.setPoints(context.points, scene)

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
        for (let i = Dialog.textLimit; i < l; i += Dialog.textLimit) {
            let wordEnd = i
            while (wordEnd < l && text[wordEnd] !== " ") { wordEnd++; }
            wordEnd++;

            let wordBeggining = i
            while (wordBeggining > 0 && text[wordBeggining] !== " ") { wordBeggining--; }
            wordBeggining++

            let final = (wordEnd - i) >= (i - wordBeggining) ? wordBeggining : wordEnd
            text = text.insert(final, "\n")
        }
        return text;
    }

    indentTexts(texts) {
        for (let i = 0; i < texts.length; i++) this.indentText(texts[i]);
    }

    initializeIndex(scene) {
        if (this.index === -1) {
            //Preparar indice para la siguiente vez que se hable
            this.index = this.dialog.length - 1
            this.getTogether(scene)
            //console.log(this.currentDialog().state.length)
            //console.log(this.currentDialog().state[0].targetState.length)
            this.iterateStates(this.updateIndex)
        }
    }

    getTogether(scene) {
        console.log("Vamos a juntarnos")

        //Uso mi propia clase vector2 porque la de Phaser me da problemas
        let playerPos = new Vector2(scene.player.x, scene.player.y)
        let thisPos = new Vector2(this.x, this.y)

        let Offset = playerPos.substract(thisPos);

        scene.tweens.add({
            targets: scene.player,
            duration: 250,
            y: this.y + Dialog.characterOffset * Math.sign(Offset.y),
            x: this.x + Dialog.characterOffset * Math.sign(Offset.x),
        })
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

