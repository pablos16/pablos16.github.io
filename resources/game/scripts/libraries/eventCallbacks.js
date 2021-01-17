const events = 
{
    RemoveItem: (data, itenName) => {
        let foo = data.scene.player.inventory.removeItemById(data)
        if(foo !== -1) data.scene.inventoryBar.updateSlot(foo);
    },
    AddItem: (data, itemName) => {data.scene.player.inventory.addItem(data)}
}

export default events;