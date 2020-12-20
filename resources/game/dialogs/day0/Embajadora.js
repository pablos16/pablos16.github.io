import Names from '../../configs/npcNames.js'

const Dialog =
    [
        {
            id: 0,
            name: Names.Embajadora,
            text: ["Uy! Tu eres el nuevo Policía no? Recuerda que estoy de tu parte eh,mi marido apoya lealmente al dictador, y espero que tú tambien a nosotros."],
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
            text: ["(Que interesada,pero en el fondo me conviene)"],
            options:
            [
                {
                    text: "Emm...claro claro",
                    nextIndex: 2
                },
                {
                    text: "Bueno...estaremos en contacto",
                    nextIndex: 2
                },
                {
                    text: "Por supuesto, no lo dudes!",
                    nextIndex: 2
                }
            ],
        },
        {
            id: 2,
            name: Names.Embajadora,
            text: ["Por fin viene un policia decente a la ciudad, me gusta tu iniciativa"],
            state: [
                {
                    targetState: ["any"],
                    nextState: 1,
                    nextIndex: -1
                },
            ]
        },
        {
            id: 3,
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
                    nextIndex: 3
                }
            ]
        }
    ]

export default Dialog;