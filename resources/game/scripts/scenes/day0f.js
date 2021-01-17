import BaseDay from './dayBase.js'
import dialogs from '../../dialogs/packedDialogs/dialogs0.js'
import Missions from '../../missions/missionsDay0.js';

export default class Day0F extends BaseDay {
    constructor() {
        super({
            key: 'day0',
            dialog: dialogs,
            missions: Missions,
            objectLayerName: 'Dia0',
            nextLevel: 'day1',
        })
    }
}