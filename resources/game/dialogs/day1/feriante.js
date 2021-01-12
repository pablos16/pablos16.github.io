import Names from '../../configs/npcNames.js'

const Dialog =
    [
        {
            id: 0,
            name: Names.Feriante,
            text: ["Hombre, ya iba siendo hora. Ayer no pude ir a presentarme. Nosotros somos los feriantes del pueblo"],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 1
                },
            ]
        },
        {
            id: 1,
            name: Names.Feriante,
            text: ["Si alguna vez necesitas algo siempre solemos estar por el sur de la ciudad. La gente por esta zona es muy humilde y sencilla..."],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 2
                },
            ],
        },
        {
            id: 2,
            name: Names.Feriante,
            text: ["Pero bueno que me desvio"],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 3
                },
            ]
        },
        {
            id: 3,
            name: Names.Feriante,
            text: ["Supongo que Reltih te habrá dado ya los carteles. ¿Los tienes?"],
            options:
                [
                    {
                        text: "Claro",
                        nextIndex: 5,
                    },
                    {
                        text: "Todavia no",
                        nextIndex: 4,
                    }
                ],
        },
        {
            id: 4,
            name: Names.Feriante,
            text: ["Ven a verme cuando los tengas"],
            state: [
                {
                    targetState: ["any"],
                    nextState:1,
                    nextIndex: -1

                },
            ]
        },
        {
            //TODO
            //CALLBACK QUE COMPRUEBA 
            id: 5,
            name: Names.Feriante,
            text: [""],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 6
                },
            ]
        },
        {
            id: 6,
            name: Names.Feriante,
            text: [""],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 7
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
                    nextIndex: 3
                },
                {
                    targetState: [2],
                    nextIndex: 10
                }
            ]
        }
    ]

export default Dialog;