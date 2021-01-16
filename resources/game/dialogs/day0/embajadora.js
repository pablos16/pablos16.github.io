import Names from '../../configs/npcNames.js'

const Dialog =
    [
        {
            id: 0,
            name: Names.Embajadora,
            text: ["¡Uy! ¿Tú eres el nuevo Policía no? "],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 1
                },
            ]
        },
        {
            id: 1,
            name: Names.Embajadora,
            text: ["Yo soy la embajadora del pueblo. Mi marido tiene una tienda de empeños justo aquí, así que ya sabes a donde ir a comprar objetos si el dictador necesita algo."],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 2
                },
            ]
        },
        {
            id: 2,
            name: Names.Police,
            text: ["(A la izquierda tienes el inventario. Puedes recoger objetos con la 'E' además de interaccionar con ellos con el ratón)"],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 3
                },
            ]
        },
        {
            id: 3,
            name: Names.Embajadora,
            text: ["Recuerda que estoy de tu parte eh,mi marido apoya lealmente al dictador, y espero que tú tambien a nosotros."],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 4
                },
            ]
        },
        {
            id: 4,
            name: Names.Police,
            text: ["(Que interesada,pero en el fondo me conviene)"],
            options:
            [
                {
                    text: "Emm...claro claro.",
                    nextIndex: 5,
                    completed:0,
                    points: 5
                },
                {
                    text: "Bueno...estaremos en contacto.",
                    nextIndex: 5,
                    completed:0,
                    points: 0
                },
                {
                    text: "¡Por supuesto, no lo dudes!",
                    nextIndex: 5,
                    completed:0,
                    points:-10
                }
            ],
        },
        {
            id: 5,
            name: Names.Embajadora,
            text: ["Por fin viene un policia decente a la ciudad, me gusta tu iniciativa"],
            state: [
                {
                    targetState: ["any"],
                    nextState: 1,
                    nextIndex: -1
                },
            ],
        },
        {
            id: 6,
            name: Names.Embajadora,
            text: ["Cualquier cosa ya sabes","Aquí me tienes para todo","Recuerda que estoy de tu parte"],
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
                }
            ]
        }
    ]

export default Dialog;