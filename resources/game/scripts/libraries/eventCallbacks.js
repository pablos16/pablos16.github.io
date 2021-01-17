const events = 
{
    RemoveItem: (data, itenName) => {
        let foo = data.scene.player.inventory.removeItemById(itemName)
        if(foo !== -1) data.scene.inventoryBar.updateSlot(foo);
    },
    AddItem: (data, itemName) => {
        let foo = data.scene.player.inventory.addItem(itemName)
        if(foo !== -1) data.scene.inventoryBar.updateSlot(foo);}
}

export default events;