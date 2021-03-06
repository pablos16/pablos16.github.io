import BaseDay from './dayBase.js'
import dialogs from '../../dialogs/packedDialogs/dialogs2.js'
import Missions from '../../missions/missionsDay2.js';
import Trigger from '../libraries/trigger.js';
import CT from '../../configs/constants.js';

export default class Day0F extends BaseDay {
    constructor() {
        super({
            key: 'day2',
            dialog: dialogs,
            missions: Missions,
            objectLayerName: 'Dia2',
            nextLevel: 'win',
        })
    }

    create(){
        super.create()
        this.addMision = new Trigger({
            x: this.player.x,
            y: this.player.y,
            scene: this,
            xSize: 100,
            ySize: 100,
            enter: () =>{
                this.player.missionList.addText("Ve a hablar con el dictador", false)
                this.addMision.destroy()
            }
        })
        this.hitSound = this.sound.add('hit', CT.effectSounds);
    }
}