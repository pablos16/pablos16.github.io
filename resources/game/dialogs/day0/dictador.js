import Names from '../../configs/npcNames.js'

const Dialog =
    [
        {
            id: 0,
            name: Names.Dictator,
            text: ["Buenos días nuevo. Me llamo Reltih, y como ya prometiste debes obedecerme y dar todo por tu dictador."],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 1
                },
            ]
        },
        {
            id: 1,
            name: Names.Dictator,
            text: ["Como acabas de llegar estarás algo perdido, así que la unica mision que te voy a dar hoy es hablar con todas las personas que encuentres en el pueblo."],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 2
                },
            ],
        },
        {
            id: 2,
            name: Names.Police,
            text: ["(Puedes acceder a la interfaz de misiones pulsando el libro de abajo a la derecha)"],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 3
                },
            ]
        },
        {
            id: 3,
            name: Names.Dictator,
            text: ["Una vez acabes las misiones puedes irte a casa a descansar. Ya te daré al dia siguiente las nuevas misiones"],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 4
                },
            ]
        },
        {
            id: 4,
            name: Names.Dictator,
            text: ["¿Todo claro?"],
            options:
                [
                    {
                        text: "Emm...¿Puedes volver a repetir?",
                        nextIndex: 5,
                    },
                    {
                        text: "Entendido",
                        nextIndex: 6,
                    }
                ],
        },
        {
            id: 5,
            name: Names.Dictator,
            text: ["Veo que no eres un policia de muchas luces", "Hoy no estás muy espabilado por lo que veo"],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 1
                },
            ]
        },
        {
            id: 6,
            name: Names.Dictator,
            callback: (data) => {
                data.scene.player.missionList.deleteAll()
                data.scene.player.missionList.initialiceTexts();
                data.scene.player.missionList.add(data.scene.player.missionList.missionTexts)
                data.scene.player.missionList.add(data.scene.player.missionList.completedTexts)
            },
            text: ["Perfecto. Pues ve y conoce a la gente del pueblo. No te sorprendas, aquí la gente se comporta muy extraño. Mucha suerte"],
            state: [
                {
                    targetState: ["any"],
                    nextState: 1,
                    nextIndex: -1
                },
            ]
        },
        {
            id: 7,
            name: Names.Dictator,
            text: ["Cuando acabes de hablar con todos puedes irte a tu casa a descansar", "Si hablan mal de mi me lo dices eh", "Espero que no me falles"],
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
                }
            ]
        }
    ]

export default Dialog;