import NPC from './npc.js';

export default class NPCDialog extends NPC {
    constructor(scene, x, y, dialog) {
        super(scene, x, y);
        this.isTalking = false;
        this.state = 0;
        this.dialog = dialog
    }

    StartDialog() {

    }

}

