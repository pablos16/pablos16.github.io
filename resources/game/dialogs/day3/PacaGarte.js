import Names from '../../configs/npcNames.js'

const Dialog =
    [
        {
            id: 0,
            name: Names.Paca,
            text: ["Qué haces aquí, te dije que no quería tener nada que que ver contigo. Vete"],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 1
                },
            ]
        },
        {
            id: 1,
            name: Names.Police,
            text: ["¿Entregarás la carta a Paca Garte?"],
            options:
            [
                {
                    text: "No se merece ningún mal, darle la carta",
                    nextIndex: 2,
                    points: -10
                },
                {
                    text: "Parece una hoja de un revolucionario...prefiero guardármela",
                    nextIndex: 5,
                    points: 10
                }
            ],
        },
        {
            id: 2,
            name: Names.Paca,
            text: ["AAAAAAAAA TENGO QUE PREPARAR ESTO FUCK"],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: -1
                },
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
                }
            ]
        }
    ]

export default Dialog;