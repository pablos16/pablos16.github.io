import CT from '../../configs/missionConfig.js';
import Tweener from '../libraries/tween.js';

export default class Missions extends Phaser.GameObjects.Container {
    constructor(scene, missionList) {
        super(scene, CT.missionListX, CT.missionListY);

        this.desplegado = false
        this.scene.add.existing(this)
        this.setScrollFactor(0)
        this.img = scene.add.sprite(0, 0, 'mission').setInteractive()
        this.depth = 100;
        this.img.depth = 99
        this.img.setScrollFactor(0)
        this.missionList = missionList

        this.outAnim = new Tweener({
            onStart: () => {
                this.resetCompletedTexts()
                if (!this.outAnim.hidden) scene.pause.animation.locked = true;
                if (!scene.pause.animation.hidden) scene.pause.animation.ForceToggle();
            },
            onComplete: () => {
                if (scene.pause.animation.locked && this.outAnim.hidden) scene.pause.animation.locked = false
            },
            context: scene,
            target: this,
            duration: 150,
            ease: 'Circ',
            locked: false,
            hidden: true,
            attribs: [
                {
                    propertie: 'y',
                    hidden: this.y - CT.missionOffsetToggle,
                    notHidden: this.y
                },
            ]
        })


        this.hideAnim = new Tweener({
            onStart: () => {
                this.resetCompletedTexts()
            },
            context: scene,
            target: this,
            duration: 150,
            ease: 'Circ',
            locked: false,
            hidden: false,
            attribs: [
                {
                    propertie: 'y',
                    hidden: this.y,
                    notHidden: this.y + CT.hideOffset
                },
            ]
        })

        this.img.on('pointerdown', pointer => { this.outAnim.Toggle() })
        this.sceneRef = scene
        this.missionTexts = []
        this.completedTexts = []
        this.addText("Sal fuera", false)

        this.add(this.img)
        this.removeFromThis()
        this.reAdd()
    }

    removeFromThis() {
        this.remove(this.missionTexts)
        this.remove(this.completedTexts)
    }

    reAdd() {
        this.add(this.missionTexts)
        this.add(this.completedTexts)
    }

    initialiceTexts() {
        console.log(this.missionTexts)
        this.deleteAll()
        let l = this.missionList.length
        for (let i = 0; i < l; i++) {
            this.addText(this.missionList[i].text, true)
        }
    }

    deleteAt(index) {
        this.missionTexts[index].destroy(true)
        this.completedTexts[index].destroy(true)
        this.missionTexts.splice(index, 1)
        this.completedTexts.splice(index, 1)
    }

    deleteAll() {
        while (this.missionTexts.length !== 0) this.deleteAt(0)
    }

    addText(text, hasNum) {
        this.removeFromThis()
        let i = this.missionTexts.length;
        this.missionTexts.push(this.sceneRef.add.bitmapText(
            CT.xMissionText,
            CT.yMissionText + i * CT.yMissionOffset,
            CT.font,
            text,
            CT.missionTextSize
        ))

        this.missionTexts[i].setScrollFactor(0)
        this.missionTexts[i].depth = 100


        this.completedTexts.push(this.sceneRef.add.bitmapText(
            CT.xMissionText,
            (CT.yMissionText + CT.ySubMissionTextOffset) + i * CT.yMissionOffset,
            CT.subFont,
            hasNum ? (this.missionList[i].completed + "/" + this.missionList[i].total) : ' ',
            CT.subMissionTextSize,
        ))

        this.completedTexts[i].setScrollFactor(0)
        this.completedTexts[i].depth = 100

        this.reAdd()
    }

    resetCompletedTexts() {
        let l = this.completedTexts.length
        for (let i = 0; i < l; i++) {

            if (this.completedTexts[i].text === ' ') continue;
            this.completedTexts[i].text = (this.missionList[i].completed + "/" + this.missionList[i].total)
        }
    }

    allMissionsCompleted() {
        let length = this.missionList.length;
        let index = 0;
        while (index < length) {
            if (!this.missionCompleted(index)) return false;
            index++;
        }
        return true;

    }

    missionCompleted(missionIndex) {
        return this.missionList[missionIndex].completed === this.missionList[missionIndex].total
    }

    setCompleted(mission) {
        this.missionList[mission].completed++
        console.log("Completada " + this.missionList[mission].completed + " de " + this.missionList[mission].total)
        if (this.allMissionsCompleted()) {
            if (this.missionList.length >= 5) this.deleteFirst()
            this.addText("Misiones terminadas. Vuelve a casa", false)

            //this.loadNextDay();
        }
    }

    deleteFirst() {
        this.deleteAt(0)
        this.resetHeightText()
    }

    resetHeightText() {
        let i = 0;
        this.missionTexts.forEach(element => {
            element.y = CT.yMissionText + i * CT.yMissionOffset
            i++;
        });
        i = 0;
        this.completedTexts.forEach(element => {
            element.y = (CT.yMissionText + CT.ySubMissionTextOffset) + i * CT.yMissionOffset
            i++;
        });
    }

    setPoints(points, scene) {
        scene.align.addReputation(points)
    }

    loadNextDay() {
        this.sceneRef.changeScene()
    }
}
