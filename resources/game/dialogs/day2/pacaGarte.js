import Names from '../../configs/npcNames.js'
import events from '../../scripts/libraries/eventCallbacks.js';

const Dialog =
    [
        {
            id: 0,
            name: Names.Paca,
            text: ["Qué haces aquí, te dije que no quería tener nada que que ver contigo"],
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
            text: ["(...)"],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 1
                },
            ]
        },
        {
            id: 2,
            name: Names.Paca,
            text: ["El dictador no deja de enviarme cartas de amor mientras nos deja muriéndonos de hambre. Yo no quiero que me salve a mi, yo quiero que nos salve a TODOS"],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: -1
                },
            ]
        },
        {
            id: 3,
            name: Names.Paca,
            text: ["Y tú vienes a arrestarme porque no quiero salir con un asesino opresor que está dejando morir al pueblo. Asumo la situación, detenme si quieres. Total, mañana me salvarán..."],
            options:
                [
                    {
                        text: "Detenerla y ser fiel",
                        nextIndex: 4,
                        points: -35
                    },
                    {
                        text: "Dejarla libre",
                        nextIndex: 5,
                        points: 35
                    }
                ],
        },
        {
            id: 4,
            //CallBack de desaparicion
            callback: (data) => { events.FadeInOut(data) },
            name: Names.Paca,
            text: ["Mierda seca"],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: -1
                },
            ],
            completed: 2

        },
        {
            id: 5,
            name: Names.Paca,
            text: ["Mañana no te acerques al castillo...como consejo. Gracias...por todo el apoyo..."],
            state: [
                {
                    targetState: ["any"],
                    nextState: 1,
                    nextIndex: -1
                },
            ],
            completed: 2
        },
        {
            id: 6,
            name: Names.Paca,
            text: ["Gracias de corazón"],
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