import Names from '../../configs/npcNames.js'

const Dialog =
    [
        {
            id: 0,
            name: Names.Ferianta,
            text: ["Bla bla bla. Ya sabemos quien eres, no hace falta presentaciones."],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 1
                },
            ]
        },
        {
            id: 1,
            name: Names.Ferianta,
            text: ["Cuando Reltih te haya dado los carteles que necesitamos dáselos a mi marido. Siempre solemos estar por aquí."],
            state: [
                {
                    targetState: ["any"],
                    nextState:1,
                    nextIndex: -1
                },
            ],
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
                    nextIndex: 1
                }
            ]
        }
    ]

export default Dialog;