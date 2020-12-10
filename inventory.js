import CT from './constants.js';

export default class Inventory{
    constructor(){
        this.slots = [];
        for (let i = 0; i < CT.NUM_SLOTS; i = i + 1) { this.slots[i] = 0; }
    }

    searchForRoom(){
        let i = 0;
        while (i < this.slots.length && this.slots[i] !== 0) { i = i + 1; }
        if (i === this.slots.length) return -1;
        else return i;
    }

    addItem(ItemId){
        let slotNumber = this.searchForRoom();
        if (slotNumber !== -1)
        {
            this.slots[slotNumber] = ItemId;
            return true;
        }
        else return false;
    }

    validSlot(slotNumber){
        return (slotNumber >= 0 && slotNumber <= this.slots.length - 1);
    }
 
    moveItemsIn(slotNumber1, slotNumber2){
        if (this.validSlot(slotNumber1) && this.validSlot(slotNumber2))
        {
            let tmp = this.slots[slotNumber1];
            this.slots[slotNumber1] = this.slots[slotNumber2];
            this.slots[slotNumber2] = tmp;
        }
    }

    removeItemAt(slotNumber){
        if (this.validSlot(slotNumber)) this.slots[slotNumber] = 0;
    }

    getItemAt(slotNumber){
        if (this.validSlot(slotNumber)) return this.slots[slotNumber];
    }
}