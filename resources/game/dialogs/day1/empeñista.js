import Names from '../../configs/npcNames.js'
import event from '../../scripts/libraries/eventCallbacks.js'
import item from '../../configs/itemNames.js'

const Dialog =
    [
        {
            id: 0,
            required: {
                item: [item.BolsaDinero, item.Monedas],
                hasItemIndex: 1
            },
            name: Names.Empeñista,
            text: ["Mientras no tengas dinerito en el inventario no te molestes en hablarme. Necesito ver los jurdeles"],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: -1
                },
            ]
        },
        {
            id: 1,
            name: Names.Empeñista,
            text: ["El empeñista, si soy. Todos me conocen así"],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 2
                },
            ]
        },
        {
            id: 2,
            name: Names.Empeñista,
            text: ["Tengo todo tipo de cosas que te puedes imaginar. ¿Que necesitas?"],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 3
                },
            ]
        },
        {
            id: 3,
            name: Names.Police,
            text: ["(Hm..)"],
            options:
                [
                    {
                        text: "Piedra mística. Se puede mojar",
                        nextIndex: 4,
                    },
                    {
                        text: "Almohada con agujero. Tú verás lo que haces con ella",
                        nextIndex: 7
                    },

                    {
                        text: "Mejor nada...",
                        nextIndex: -1
                    }
                ],
        },
        {
            id: 4,
            name: Names.Empeñista,
            text: ["Muy buena elección. Para la piedra solo necesitas una bolsa de dinero. ¿Deseas comprarla?"],
            options:
                [
                    {
                        text: "Si",
                        nextIndex: 5,
                    },
                    {
                        text: "No",
                        nextIndex: -1
                    }
                ],
        },
        {
            id: 5,

            required: {
                item: [item.BolsaDinero],
                hasItemIndex: 6
            },

            name: Names.Empeñista,
            text: ["Muchacho si no tienes lo que pido no te lo voy a dar. Cuando tengas lo que necesito vuelve."],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: -1
                },
            ]
        },
        {
            id: 6,
            //Te da el muñeco la alfombra y te quita la bolsa de dinero
            callback: (data) => {
                event.RemoveItem(data, item.BolsaDinero);
                event.AddItem(data, item.ReliquiaExtraña);
            },
            name: Names.Empeñista,
            text: ["Muchas gracias. Me encanta hacer negocios contigo"],
            state: [
                {
                    targetState: ["any"],
                    nextState: 1,
                    nextIndex: -1
                },
            ]
        },

        ,
        {
            id: 7,
            name: Names.Police,
            text: ["Muy buena elección. Para la piedra solo necesitas unas monedas. ¿Deseas comprarla?"],
            options:
                [
                    {
                        text: "Si",
                        nextIndex: 8,
                    },
                    {
                        text: "No",
                        nextIndex: -1,
                    }
                ],
        },

        {
            id: 8,

            required: {
                item: [item.Monedas],
                hasItemIndex: 9
            },

            name: Names.Empeñista,
            text: ["Muchacho si no tienes lo que pido no te lo voy a dar. Cuando tengas lo que necesito vuelve."],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: -1
                },
            ]
        },
        {
            id: 9,
            //Te da el muñeco la alfombra y te quita la bolsa de dinero
            callback: (data) => {
                event.RemoveItem(data, item.Monedas);
                event.AddItem(data, item.CojinPersa);
            },
            name: Names.Empeñista,
            text: ["Muchas gracias. Me encanta hacer negocios contigo"],
            state: [
                {
                    targetState: ["any"],
                    nextState: 1,
                    nextIndex: -1
                },
            ]
        },
        {
            id: 10,

            name: Names.Empeñista,
            text: ["¡Que tengas un buen día!", "Vuelve siempre que quieras"],
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
            state: [
                {
                    targetState: [0],
                    nextIndex: 0
                },
                {
                    targetState: [1],
                    nextIndex: 10
                }
            ]
        }
    ]

export default Dialog;