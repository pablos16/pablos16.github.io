import NPC from './npc.js';
import Dialoguer from '../libraries/dialoguer.js'
import Dialog from '../../configs/dialogConfig.js';
import Vector2 from '../libraries/vector2.js'

export default class NPCDialog extends NPC {
    constructor(scene, x, y, dialog, npcImage, pathName) {
        super(scene, x, y, npcImage, pathName);
        this.dialog = new Dialoguer({
            scene: scene,
            dialog: dialog,
            x: 0,
            y: 0,
            isForced: false,
            callbackArguments: {npc: this},
            onStart: () => {
                this.path.setMove(false)
                this.path.stop();
                this.getTogether(scene);
            },
            onFinish: () => { 
                this.path.setMove(true)
                this.path.setVelocity()
             },
        });
        this.add(this.dialog.trigger.trigger)
    }

    getTogether(scene) {
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
}

