import CT from '../../configs/constants.js';

export default class Misions extends Phaser.GameObjects.Container {
    constructor(scene, misionList) {
        super(scene, 0, 0);
        this.desplegado = false
        this.scene.add.existing(this)
        this.depth = 100
        this.setScrollFactor(0)
        this.img = scene.add.sprite(CT.misionListX, CT.misionListY, 'mision').setInteractive()
        this.img.depth = 99
        this.img.setScrollFactor(0)
        this.misionList = misionList
        this.img.on('pointerdown', pointer => { this.toggleListInterface() })
        this.sceneRef = scene
        this.orign = this.y
        this.misionTexts = []
        this.completedTexts = []
        this.initialiceTexts()

        this.add(this.img)
        this.add(this.misionTexts)
        this.add(this.completedTexts)
    }

    initialiceTexts() {
        let l = this.misionList.length
        console.log(this.sceneRef)
        for(let i = 0; i< l;i++)
        {
            this.misionTexts.push(this.sceneRef.add.bitmapText(
                CT.xMisionText,
                CT.yMisionText + i * CT.yMissionOffset,
                'font',
                this.misionList[i].text,
                CT.misionTextSize
                ))
                
                this.misionTexts[i].setScrollFactor(0)
                this.misionTexts[i].depth = 100

                this.completedTexts.push(this.sceneRef.add.bitmapText(
                    CT.xMisionText,
                    (CT.yMisionText + CT.ySubMisionTextOffset) + i * CT.yMissionOffset,
                    'font',
                    "foo",
                    CT.subMisionTextSize,
                    ))
                    
                    this.completedTexts[i].setScrollFactor(0)
                    this.completedTexts[i].depth = 100
        }
    }

    missionCompleted(misionIndex) {
        return this.misionList[misionIndex].completed === this.misionList[misionIndex].total
    }

    setCompleted(mision) {
        this.misionList[mision].completed++
        console.log("Completada " + this.misionList[mision].completed + " de " + this.misionList[mision].total)
        //if(this.missionCompleted(mision)) 
    }

    setPoints(points, scene) {
        scene.align.addReputation(points)
    }

    animateInterface() {

        this.y = !this.desplegado ? this.orign : this.orign - CT.misionOffsetToggle

        let signo = this.desplegado ? 1 : -1
        this.sceneRef.tweens.add({
            targets: this,
            duration: 150,
            y: this.y + CT.misionOffsetToggle * signo,
            ease: 'Circ',
            onComplete: () => {
                this.desplegado = !this.desplegado
                this.y = !this.desplegado ? this.orign : this.orign - CT.misionOffsetToggle

            }
        })
    }

    toggleListInterface() {

        this.animateInterface()
        return
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
