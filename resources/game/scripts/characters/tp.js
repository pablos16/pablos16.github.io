import Trigger from '../libraries/trigger.js'

export default class Tp extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, tpLink, offset) {
        super(scene, x, y, 'tpImg');

        this.scene.add.existing(this);
        this.visible = true;
        this.alpha = 0
        this.playerRef = scene.player
        this.depth = 200;

        this.offset = offset;

        this.link = {
            x: tpLink.x,
            y: tpLink.y,
        }

        this.canTp = true;
        this.pair = this.findTp(scene);

        this.internalTP = new Trigger({
            x: this.x,
            y: this.y,
            scene: scene,
            xSize: 50,
            ySize: 50,
            enter: () => { if (this.canTp) this.animateTp(scene); },
            exit: () => { this.tpActivated(scene, true); this.cancelPairTp(scene) },
            stay: () => { },
        })
    }


    tp(scene) {
        console.log(this.pair)
        this.playerRef.x = this.link.x
        this.playerRef.y = this.link.y + this.offset;
        this.tpActivated(scene, false)
    }

    tpActivated(scene, isActivated) {
        for (const tp of scene.tpList) tp.canTp = isActivated;
    }

    cancelPairTp(scene) {
        if("pair" in this) this.pair = this.findTp(scene);
        this.pair.canTp = false;
    }

    findTp(scene) {
        for (const tp of scene.tpList) {
            if (tp.y === this.link.y && tp.x === this.link.x) return tp;
        }
    }

    animateTp(scene) {
        scene.tweens.add({
            targets: this,
            duration: 250,
            alpha: 1,
            ease: 'Circ',
            onStart: () => {
                this.playerRef.isTalking = true
            },
            onComplete: () => {
                scene.tweens.add({
                    targets: this,
                    duration: 1000,
                    alpha: 0,
                    ease: 'Circ',
                    onStart: () => {
                        this.tp(scene)
                        this.playerRef.isTalking = false
                    }
                })
            }
        })
    }
}