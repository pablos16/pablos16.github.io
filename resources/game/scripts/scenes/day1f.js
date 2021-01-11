import BaseDay from './dayBase.js'
import dialogs from '../../dialogs/packedDialogs/dialogs1.js'
import Missions from '../../missions/missionsDay1.js';

export default class Day0F extends BaseDay {
    constructor() {
        super({
            key: 'day1',
            dialog: dialogs,
            missions: Missions,
            objectLayerName: 'Day1',
            nextLevel: 'day2',
        })
    }
}