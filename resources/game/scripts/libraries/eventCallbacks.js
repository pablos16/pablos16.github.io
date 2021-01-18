const events =
{
    RemoveItem: (data, itemName) => {
        let foo = data.scene.player.inventory.removeItemById(itemName)
        if (foo !== -1) data.scene.inventoryBar.updateSlot(foo);
    },
    AddItem: (data, itemName) => {
        let foo = data.scene.player.inventory.addItem(itemName)
        if (foo !== -1) data.scene.inventoryBar.updateSlot(foo);
    },
    PegarPaliza: (data) => {
        let npc = data.arguments.npc;
        if (npc.hitEvenet && !npc.dialog.dialogSttoped) {
            //Si ya existe y no hay otro en segundo plano, volvemos a empezarlo
            npc.hitEvenet()
            npc.dialog.dialogSttoped = true;
        }
        //Si no existe el tween, es que es la primera vez que se ejecuta
        //Asi que lo creo la funcion que lo crea (hay que crearlo cada vez porque el onStart
        //No funciona el recrear
        else {
            npc.hitEvenet = () => {
                if (npc.hit) npc.hit.remove();
                npc.hit = data.scene.tweens.add({
                    targets: data.scene.transitionImg,
                    duration: 250,
                    alpha: 1,
                    ease: 'Circ',
                    onStart: () => { data.scene.hitSound.play(); },
                    onComplete: () => {
                        data.scene.tweens.add({
                            targets: data.scene.transitionImg,
                            duration: 1000,
                            alpha: 0,
                            onComplete: () => {
                                npc.dialog.dialogSttoped = false;
                            }
                        })
                    }
                })
            }
            npc.hitEvenet();
        }
    },
}

export default events;