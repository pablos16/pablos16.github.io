import itemNames from '../../configs/itemNames.js';
import Names from '../../configs/npcNames.js'


const Dialog = [
    {
        id: 0,
        name: Names.Tabernero,
        required: {
            item: [itemNames.AlfomombraBarata],
            mustHaveAll: false,
            hasItemIndex: 1,
        },
        points: -120,
        text: ["No vuelvas hasta traerme la tela persa"],
        state: [
            {
                targetState: ["any"],
                nextIndex: -1
            },
        ],
    },
    {
        id: 1,
        name: Names.Tabernero,
        text: ["Oh bien me has traido la tela persa, ¿Me la das?"],
        state: [
            {
                targetState: ["any"],
                nextIndex: 2
            },
        ],
    },
    {
        id: 2,
        name: Names.Police,
        text: ["Elige"],
        options:
            [
                {
                    text: "Emm...claro claro.",
                    nextIndex: 5,
                    callback: (data) => {
                        let foo = data.scene.player.inventory.removeItemById(itemNames.AlfomombraBarata)
                        if(foo !== -1) data.scene.inventoryBar.updateSlot(foo);
                    },
                },
                {
                    text: "Jaja no lol.",
                    nextIndex: 4,
                },
            ],
    },
    {
        id: 3,
        name: Names.Tabernero,
        text: ["Que miras, ¿Espera que te pague o algo?"],
        state: [
            {
                targetState: ["any"],
                nextIndex: -1
            },
        ],
    },
    {
        id: 4,
        name: Names.Tabernero,
        text: ["Entonces pa que vienes payaso"],
        state: [
            {
                targetState: ["any"],
                nextIndex: -1
            },
        ],
    },
    {
        id: 5,
        name: Names.Tabernero,
        text: ["Muchas gracias"],
        state: [
            {
                targetState: ["any"],
                nextState: 1,
                nextIndex: -1
            },
        ],
    },
    {
        id: -1,
        name: Names.Police,
        text: ['foo'],
        state: [
            {
                targetState: [0],
                nextIndex: 0
            },
            {
                targetState: [1],
                nextIndex: 3
            },
        ],
    },
]

export default Dialog;