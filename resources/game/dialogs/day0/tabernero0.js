const Dialog = 
[
    {
        id: 0,
        name: "Tabernero",
        text: ["(Borracho) Burp...eres el nuevo policía de la zona?A ver si te gastas más dinero en mi taberna que el antiguo, sois todos unos tacaños."],
        random: false,
        numOptions: [],
        state: [
            {
                targetState: [0],
                nextState: 0,
                nextIndex: 1
            },
        ]
    },   
    {
        id: 1,
        name: "Tabernero",
        text:
        [
            "...", "*burp*", "No te preocupes..."
        ],
        random: false,
        numOptions: [],
        state: [
            {
                targetState: [0,1],
                nextState: 1,
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
                nextIndex: 1
            }
        ]
    }
]

export default Dialog;
