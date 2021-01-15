import Names from '../../configs/npcNames.js'

const Dialog =
    [
        {
            id: 0,
            name: Names.Dictator,
            text: ["Muy buenas novato, aquí te dejo las misiones que tienes que hacer hoy. Espero que no me defraudes"],
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
            text: ["(Vamos a empezar el primer dia oficial con alegria)"],
            options:
            [
                {
                    text: "A su merced",
                    nextState: 1,
                    nextIndex: -1,
                    completed:0
                },
                {
                    text: "¡Por el reino!",
                    nextState: 1,
                    nextIndex: -1,
                    completed:0
                }
            ],
        },
        {
            id: 2,
            name: Names.Dictator,
            text: ["Cuando acabes todas las misiones puedes irte a casa, lo que hagas el resto del dia me da igual","Deja de perder el tiempo y ponte a trabajar"],
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