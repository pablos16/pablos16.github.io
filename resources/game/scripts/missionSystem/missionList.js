import CT from '../../configs/missionConfig.js';

export default class Missions extends Phaser.GameObjects.Container {
    constructor(scene, missionList) {
        super(scene, CT.missionListX, CT.missionListY);
        this.desplegado = false
        this.scene.add.existing(this)
        this.depth = 100
        this.setScrollFactor(0)
        this.img = scene.add.sprite(0, 0, 'mission').setInteractive()
        this.img.depth = 99
        this.img.setScrollFactor(0)
        this.missionList = missionList
        this.img.on('pointerdown', pointer => { this.toggleListInterface() })
        this.sceneRef = scene
        this.orign = this.y
        this.missionTexts = []
        this.completedTexts = []
        this.initialiceTexts()
        this.hidden = false;

        this.add(this.img)
        this.add(this.missionTexts)
        this.add(this.completedTexts)
    }

    toggleInterface() {
        let sign = this.hidden ? 1 : -1
        this.sceneRef.tweens.add({
            targets: this,
            duration: 150,
            y: this.y + CT.hideOffset * sign,
            ease: 'Circ',
        })
    }

    hideInterface() {
        this.hidden = true

        if (this.desplegado) this.animateInterface(this.toggleInterface(1))
        else this.toggleInterface(1)
    }

    showInterface() {
        this.hidden = false
        //console.log("showing")
        this.toggleInterface()
    }

    initialiceTexts() {
        let l = this.missionList.length
        for (let i = 0; i < l; i++) {
            this.initialiceText(i)
        }
    }

    initialiceText(i) {
        this.missionTexts.push(this.sceneRef.add.bitmapText(
            CT.xMissionText,
            CT.yMissionText + i * CT.yMissionOffset,
            CT.font,
            this.missionList[i].text,
            CT.missionTextSize
        ))

        this.missionTexts[i].setScrollFactor(0)
        this.missionTexts[i].depth = 100


        this.completedTexts.push(this.sceneRef.add.bitmapText(
            CT.xMissionText,
            (CT.yMissionText + CT.ySubMissionTextOffset) + i * CT.yMissionOffset,
            CT.subFont,
            (this.missionList[i].completed + "/" + this.missionList[i].total),
            CT.subMissionTextSize,
        ))

        this.completedTexts[i].setScrollFactor(0)
        this.completedTexts[i].depth = 100
    }

    resetCompletedTexts() {
        let l = this.completedTexts.length
        for (let i = 0; i < l; i++) {

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
            this.missionList.push({
                text: "Misiones terminadas. Vuelve a casa",
                completed: 0,
                total: 1,
            })

            this.initialiceText(this.missionList.length - 1)

            this.add(this.missionTexts)

            this.loadNextDay();
        }
    }

    setPoints(points, scene) {
        scene.align.addReputation(points)
    }

    animateInterface(onComplete) {

        this.resetCompletedTexts()

        console.log("Animating")
        this.y = !this.desplegado ? this.orign : this.orign - CT.missionOffsetToggle

        let signo = this.desplegado ? 1 : -1
        this.sceneRef.tweens.add({
            targets: this,
            duration: 150,
            y: this.y + CT.missionOffsetToggle * signo,
            ease: 'Circ',
            onComplete: () => {
                this.desplegado = !this.desplegado
                this.y = !this.desplegado ? this.orign : this.orign - CT.missionOffsetToggle
                if (this.hidden) this.toggleInterface()
            }
        })
    }

    toggleListInterface() {

        if (!this.hidden) this.animateInterface()
    }

    loadNextDay() {
       this.sceneRef.changeScene()
    }
}
