import CT from './constants.js';

export default class Misions extends Phaser.GameObjects.Sprite {
    constructor(scene, misionList) {
        super(scene, CT.misionListX, CT.misionListY, 'mision');
        this.setInteractive()
        this.desplegado = false
        this.scene.add.existing(this)
        this.depth = 100
        this.setScrollFactor(0)
        this.misionList = misionList
        this.initializeMisionsList()
        this.visible = false
        this.on('pointerdown', pointer => { this.toggleListInterface() })
    }

    initializeMisionsList() {
        let iLenght = this.misionList.length

        for (let i = 0; i < iLenght; i++) {
            this.misionList[i].parts.length = this.misionList[i].total
            this.misionList[i].parts.fill(false)
        }
        //console.log(this.misionList)
    }

    missionCompleted(misionIndex) {
        return this.misionList[misionIndex].completed === this.misionList[misionIndex].total
    }

    setCompleted(mision) {
        this.misionList[mision].completed++
        console.log("Completada " + this.misionList[mision].completed + " de "+ this.misionList[mision].total)
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