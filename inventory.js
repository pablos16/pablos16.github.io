export default class Inventory
{
    constructor()
    {
        this._slots = [0, 0, 0, 0, 0];
    }

    _searchForRoom()
    {
        let index = 0;
        while (index < this._slots.lenght && this._slots[index] !== 0) index = index + 1;
        if (index === this._slots.lenght) return null;
        else return index;
    }

    addItem(ItemID)
    {
        let slotNumber = _searchForRoom();
        if (slotNumber !== null) this._slots[slotNumber] = ItemID;
    }

    moveItemsIn(slotNumber1, slotNumber2)
    {
        let tmp = this._slots[slotNumber1];
        this._slots[slotNumber1] = this._slots[slotNumber2];
        this._slots[slotNumber2] = tmp;
    }

    removeItemAt(slotNumber) { this._slots[slotNumber] = 0; }
}