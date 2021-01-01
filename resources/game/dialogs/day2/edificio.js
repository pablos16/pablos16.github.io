import Names from '../../configs/npcNames.js'

const Dialog =
    [
        {
            id: 0,
            name: Names.Edificio,
            text: ["(Observas un edificio deteriorado)"],
            state: [
                {
                    targetState: [0],
                    nextIndex: 1
                },
            ]
        },
        {
            id: 1,
            name: Names.Police,
            text: ["¿Quieres inspeccionar la construcción?"],
            options:
                [
                    {
                        text: "Si",
                        points: 10,
                        nextIndex: 3
                    },
                    {
                        text: "No",
                        nextIndex: -1
                    },
                ],
        },
        {
            id: 2,
            name: Names.Police,
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
            name: Names.Edificio,
            text: ["Analizas la construcción y ves que está en mal estado, ¿Qué quieres hacer?"],
            options:
                [
                    {
                        text: "Crear un informe del edificio",
                        completed: 1,
                        points: -10,
                        nextIndex: 4
                    },
                    {
                        text: "Hm...mejor dejarlo así y no decir nada",
                        nextState:1,
                        completed:1,
                        nextIndex: -1,
                        points: 10,
                    },
                ],
        },
        {
            id: 4,
            name: Names.Police,
            text: ["Hecho"],
            state: [
                {
                    targetState: ["any"],
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