import Names from '../../configs/npcNames.js'

//TODO ACABAR DIALOGO EMPEÑISTA. NICO NO SUPO QUE PERSONALIDAD DEBERÍA DE TENER
const Dialog =
    [
        {
            id: 0,
            name: Names.Embajadora,
            text: ["Uy! ¿Qué te trae por aquí? ¿Podemos hacer algo por ti?"],
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
            text: ["(¿Quieres entregar la carta a la embajadora?)"],
            options:
                [
                    {
                        text: "Claro",
                        nextIndex: 2,
                        points: -10
                    },
                    {
                        text: "Mm...mejor me la quedo yo",
                        nextIndex: 3,
                        points: 20
                    },
                ],
        },
        {
            id: 2,
            name: Names.Police,
            text: ["Tome, esta es una carta del dictador que iba dirigida a <Paca>, pero creo que a usted le será más útil"],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 4
                },
            ],
        },
        {
            id: 3,
            name: Names.Police,
            text: ["Mm,no gracias. Solo estaba de paso, que tenga un buen dia"],
            state: [
                {
                    targetState: ["any"],
                    nextState: 1,
                    nextIndex: -1
                },
            ]
        },
        {
            id: 4,
            name: Names.Embajadora,
            text: ["Mm esto me será bastante util, gracias por apoyar al dictador. Te debo una. Ten un buen dia"],
            state: [
                {
                    targetState: ["any"],
                    nextState: 2,
                    nextIndex: -1
                },
            ]
        },
        {
            id: 5,
            name: Names.Embajadora,
            text: ["Gracias por la carta y el favor, me gusta ver tu apoyo hacia nuestro lado", "Gracias por el favor"],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: -1
                },
            ]
        },
        {
            id: 6,
            name: Names.Embajadora,
            text: ["Seguro que estás muy ocupado trabajando, mucha suerte","Pasa un buen dia tu tambien"],
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
                    nextIndex: 6
                },
                {
                    targetState: [2],
                    nextIndex: 5
                }
            ]
        }
    ]

export default Dialog;