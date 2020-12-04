export default class Inventory
{
    constructor()
    {
        this._slots = [0, 0, 0, 0, 0];
    }

    _searchForRoom()
    {
        if (this._slots[0] === 0) return 0;
        else if (this._slots[1] === 0) return 1;
        else if (this._slots[2] === 0) return 2;
        else if (this._slots[3] === 0) return 3;
        else if (this._slots[4] === 0) return 4;
        else return -1;
    }

    addItem(ItemID)
    {
        let slotNumber = this._searchForRoom();
        if (slotNumber !== -1)
        {
            this._slots[slotNumber] = ItemID;
            return true;
        }
        else return false;
    }

    _validSlot(slotNumber) { return (slotNumber === 0 || slotNumber === 1 || slotNumber === 2 || slotNumber === 3 || slotNumber === 4); }
 
    moveItemsIn(slotNumber1, slotNumber2)
    {
        if (this._validSlot(slotNumber1) && this._validSlot(slotNumber2))
        {
            let tmp = this._slots[slotNumber1];
            this._slots[slotNumber1] = this._slots[slotNumber2];
            this._slots[slotNumber2] = tmp;
        }
    }

    removeItemAt(slotNumber) { if (this._validSlot(slotNumber)) this._slots[slotNumber] = 0; }

    getItemAt(slotNumber) { if (this._validSlot(slotNumber)) return this._slots[slotNumber]; }
}