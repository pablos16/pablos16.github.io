import NPC from './npc.js';
import Dialoguer from '../libraries/dialoguer.js'
import Dialog from '../../configs/dialogConfig.js';
import Vector2 from '../libraries/vector2.js'

export default class NPCDialog extends NPC {
    constructor(data) {
        super(data.scene, data.x, data.y, data.sprite, data.pathName);
        this.dialog = new Dialoguer({
            scene: data.scene,
            dialog: data.dialog,
            x: 0,
            y: 0,
            xSize: data.xTriggerSize,
            ySize: data.yTriggerSize,
            isForced: false,
            callbackArguments: { npc: this },
            onStart: () => {
                this.path.setMove(false)
                this.path.stop();
                this.getTogether(data.scene, data.offset);
            },
            onFinish: () => {
                this.path.setMove(true)
                this.path.setVelocity()
            },
        });
        this.add(this.dialog.trigger.trigger)
    }

    getTogether(scene, offset) {
        //Uso mi propia clase vector2 porque la de Phaser me da problemas
        let playerPos = new Vector2(scene.player.x, scene.player.y)
        let thisPos = new Vector2(this.x, this.y)

        let Offset = playerPos.substract(thisPos);

        let charOffset = Dialog.characterOffset;
        if (offset !== undefined) charOffset = offset
        console.log(offset)
        console.log(offset !== undefined)
        if (offset === 0) return;
        scene.tweens.add({
            targets: scene.player,
            duration: 250,
            y: this.y + charOffset * Math.sign(Offset.y),
            x: this.x + charOffset * Math.sign(Offset.x),
        })
    }
}

