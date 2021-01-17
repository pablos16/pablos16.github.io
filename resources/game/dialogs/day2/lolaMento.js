import Names from '../../configs/npcNames.js'

const Dialog =
    [
        {
            id: 0,
            name: Names.Lola,
            text: ["Muy buenas señor Policía, ¿Qué le trae por aquí?"],
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
            text: ["(¿Soy discreto o voy al grano?)"],
            options:
                [
                    
                    {
                        text: "Vengo a detenerte por apoyar a la revolución a escondidas",
                        nextIndex: 2,
                    },
                    {
                        text: "Creo que sabes de sobra a qué he venido...",
                        nextIndex: 3,
                    },
                ],
        },
        {
            id: 2,
            name: Names.Lola,
            text: ["No sé de que me hablas...mi marido apoya al dictador y tengo una familia y una hija..."],
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
            text: ["(¿Se piensa que somos tontos?)"],
            options:
                [
                    
                    {
                        text: "Detener",
                        nextIndex: 4,
                    },
                    {
                        text: "Detener",
                        nextIndex: 4,
                    },
                ],
        },
        {
            id: 4,
            name: Names.Lola,
            text: ["VALE SI SOY CULPABLE. Yo incité la manifestación de ayer, pero por favor no me detengas haré lo que sea"],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 5
                },
            ]
        },
        {
            id: 5,
            name: Names.Lola,
            text: ["Te daré dos bolsas de oro y mi anillo de casada si hace falta"],
            options:
                [
                    
                    {
                        text: "Aceptar soborno y dejarla libre",
                        nextIndex: 6,
                        points: 40
                    },
                    {
                        text: "Detener igualmente",
                        nextIndex: 8,
                        points: -40
                    },
                ],
        },
        {
            id: 6,
            //CALLBACK DE DARME BOLSAS DE ORO Y ANILLO DE CASADA
            name: Names.Lola,
            text: ["¡TOMA TODO! Muchas gracias. Si sigues así mañana el dictador no te mandará ninguna orden. ¡Sigue apoyándonos!"],
            state: [
                {
                    targetState: ["any"],
                    nextState:1,
                    nextIndex: -1
                },
            ]
        },
        {
            id: 7,
            name: Names.Lola,
            text: ["Continúa así y mañana será un gran día.W"],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: -1
                },
            ]
        },
        {
            id: 8,
            name: Names.Lola,
            text: ["ESTÁBAMOS A PUNTO DE ASESINAR AL DICTADOR. Pero tú sigue así, que igual el que muere es otro..."],
            state: [
                {
                    targetState: ["any"],
                    nextState:1,
                    nextIndex: -1
                },
            ]
        },
        {
            id: 9,
            name: Names.Lola,
            text: ["Continúa así y mañana el que no despierta eres tú..."],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: -1
                },
            ]
        },
        {
            id: 9,
            //CALLBACK DE desaparicion
            name: Names.Police,
            text: ["¿A DONDE HA IDO?,¿CÓMO LO HA HECHO? Voy a acabar las tareas y mañana será un nuevo día..."],
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
                    nextIndex: 7
                },
                {
                    targetState: [2],
                    nextIndex: 5
                }
            ]
        }
    ]

export default Dialog;