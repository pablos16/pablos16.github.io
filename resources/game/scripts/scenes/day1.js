import BaseDay from './dayBase.js'
import dialogs from '../../dialogs/packedDialogs/dialogs1.js'
import Missions from '../../missions/missionsDay1.js';
import Trigger from '../libraries/trigger.js';
import CT from '../../configs/constants.js';

export default class Day0F extends BaseDay {
    constructor() {
        super({
            key: 'day1',
            dialog: dialogs,
            missions: Missions,
            objectLayerName: 'Dia1',
            nextLevel: 'day2',
        })
    }

    create() {
        super.create()
        this.addMision = new Trigger({
            x: this.player.x,
            y: this.player.y,
            scene: this,
            xSize: 100,
            ySize: 100,
            enter: () => {
                this.player.missionList.addText("Ve a hablar con el dictador", false)
                this.addMision.destroy()
            }
        })

        this.hitSound = this.sound.add('hit', CT.effectSounds);

        //No hacemos una clase porque esto es solo para un evento
        this.crowd = this.add.image(this.paca.x, this.paca.y + 100, 'crowd');
        this.add.existing(this.crowd);
        this.physics.add.existing(this.crowd);
        this.physics.add.collider(this.crowd, this.player)
        this.crowd.body.setImmovable();
    }
}