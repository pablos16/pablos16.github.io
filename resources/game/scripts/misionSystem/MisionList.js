import CT from '../../configs/constants.js';

export default class Misions extends Phaser.GameObjects.Sprite {
    constructor(scene, misionList) {
        super(scene, CT.misionListX, CT.misionListY, 'mision');
        this.setInteractive()
        this.alignment = scene.align
        this.desplegado = false
        this.scene.add.existing(this)
        this.depth = 100
        this.setScrollFactor(0)
        this.misionList = misionList
        this.visible = false
        this.on('pointerdown', pointer => { this.toggleListInterface() })
    }

    missionCompleted(misionIndex) {
        return this.misionList[misionIndex].completed === this.misionList[misionIndex].total
    }

    setCompleted(mision, points) {
        this.misionList[mision].completed++
        console.log("Completada " + this.misionList[mision].completed + " de "+ this.misionList[mision].total+ " puntos: "+points)
        if(this.missionCompleted(mision)) this.alignment.addReputation(points)
    }

    toggleListInterface() {
        if (!this.desplegado) {
            console.log("Holi")
            this.y -= CT.misionOffsetToggle
            this.desplegado = true
        }
        else {
            this.desplegado = false
            this.y += CT.misionOffsetToggle
        }

    }
}