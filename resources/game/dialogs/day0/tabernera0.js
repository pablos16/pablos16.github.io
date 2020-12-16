const Dialog =
    [
        {
            id: 0,
            name: "Tabernera",
            text: ["Tú debes de ser el nuevo policía que ha venido a sustituir al antiguo. Espero que no te pase lo mismo que a él JAJAJAMejor no preguntes. Quieres una birra? Son 2 pavos"],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 5
                },
            ]
        },
        {
            id: 1,
            name: "Tabernera",
            text: ["Hmmm..."],
            numOptions:
            [
                {
                    text: "¿2 pavos? No gracias",
                    nextIndex: 2
                },
                {
                    text: "Si me lo sirves tú, encantado",
                    nextIndex: 3
                },
                {
                    text: "Venga Vale",
                    nextIndex: 4
                }
            ],
        },
        {
            id: 2,
            name: "Tabernera",
            text: ["Madre mía, has tenido un mal día?Como seas así en el pueblo vas a durar 3 días contados...mucha suerte canalla, la vas a necesitar"],
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
            name: "Tabernera",
            text: ["Uhh, que lanzado. Me gusta tu iniciativa, pero estoy casado con el borracho que tienes ahí en frente cielo.Aquí tienes tu cerveza. Mucha suerte en este sitio."],
            state: [
                {
                    targetState: ["any"],
                    nextState: 1,
                    nextIndex: -1
                },
            ]
        },
        {
            id: 4,
            name: "Tabernera",
            text: ["Aqui tienes cielo, mucha suerte por aquí, la vas a necesitar"],
            state: [
                {
                    targetState: ["any"],
                    nextState: 1,
                    nextIndex: -1
                },
            ]
        },
        {
            id: 5,
            name: "Tabernera",
            text: ["Estoy ocupado cielo, ¿Podrías volver luego?"],
            state: [
                {
                    targetState:["any"],
                    nextIndex: -1
                },
            ]
        },
        {
            id: -1,
            state: [
                {
                    targetState: [1],
                    nextIndex: 0
                },
                {
                    targetState: [1],
                    nextIndex: 5
                }
            ]
        }
    ]

export default Dialog;
