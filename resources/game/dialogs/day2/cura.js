import Names from '../../configs/npcNames.js'

const Dialog =
    [
        {
            id: 0,
            name: Names.Cura,
            text: ["Dios le bendiga","Que Dios esté contigo","Recuerda siempre amar al prójimo"],
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
                },
            ]
        }
    ]

export default Dialog;