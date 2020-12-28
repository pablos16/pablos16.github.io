import Names from '../../configs/npcNames.js'

const Dialog =
    [
        {
            id: 0,
            name: Names.Muro,
            text: ["Es una zona para colocar carteles de búsqueda"],
            state: [
                {
                    targetState: [0],
                    nextState: 1,
                    nextIndex: 1
                },
            ]
        },
        {
            id: 1,
            name: Names.Muro,
            text: ["¿Quieres colocar carteles de se busca ahora?"],
            options:
                [
                    {
                        text: "Si",
                        completed: 1,
                        points: 10,
                        nextIndex: -1
                    },
                    {
                        text: "No",
                        nextIndex: 2
                    },
                ],
        },
        {
            id: 2,
            name: Names.Muro,
            text: ["Nada que hacer aqui"],
            state: [
                {
                    targetState: [0,1],
                    nextState: 1,
                    nextIndex: -1
                }
            ]
        },
        {
            id: 3,
            name: Names.Muro,
            text: ["Hecho"],
            state: [
                {
                    targetState: [1],
                    nextState: 1,
                    nextIndex: -1
                }
            ]
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
                    nextIndex: 2
                },

            ]
        },
    ]

export default Dialog;