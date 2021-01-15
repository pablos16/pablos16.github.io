import Names from '../../configs/npcNames.js'

const Dialog =
    [
        {
            id: 0,
            name: Names.MadMan,
            text: ["¡Cuá,cuá!"],
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
            text: ["Otra vez con lo mismo..."],
            options:
                [
                    {
                        text: "Pegar",
                        nextState:1,
                        nextIndex: 3,
                    },
                    {
                        text: "Dejarle",
                        nextState:1,
                        nextIndex: -1,
                    },
                ],
            completed:0
        },
        {
            id: 2,
            name: Names.MadMan,
            text: ["¡Cuá,cuá,cuá!","¡Cuá!","¡Cuaaaa!"],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: -1
                },
            ]
        },
        {
            //TODO
            //CallBack de ostiazo
            id: 3,
            name: Names.MadMan,
            text: ["¡Cuá,cuá,cuÁÁÁÁÁ!"],
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