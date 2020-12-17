const Dialog =
    [
        {
            id: 0,
            name: "Tabernero",
            text: ["(Borracho) Burp...eres el nuevo policía de la zona? A ver si te gastas más dinero en mi taberna que el antiguo, sois todos unos tacaños."],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 1
                },
            ]
        },
        {
            id: 1,
            name: "Jugador",
            text:
                [
                    "...", "No te preocupes..."
                ],
            completed: 1,
            points: 2,
            state: [
                {
                    targetState: ["any"],
                    nextState: 1,
                    nextIndex: -1
                }
            ]
        },
        {
            id: 2,
            name: "Jugador",
            text:
                [
                    "...", "No te preocupes..."
                ],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: -1
                }
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
