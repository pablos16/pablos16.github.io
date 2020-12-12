const Dialog =
    [
        {
            "id": 0,
            "name": "Muro",
            "text": "Es una zona para colocar carteles de búsqueda",
            "numOptions": [],
            "state": [
                {
                    "targetState": 0,
                    "nextState": 1,
                    "nextIndex": 2
                },
                {
                    "targetState": 1,
                    "nextState": 1,
                    "nextIndex": 2
                },

            ]
        },
        {
            "id": 1,
            "name": "Muro",
            "text": "¿Quieres colocar carteles de se busca ahora?",
            "numOptions":
                [
                    {
                        "text": "Si",
                        "nextIndex": 4
                    },
                    {
                        "text": "No",
                        "nextIndex": 5
                    }
                ],
        },
        {
            "id": 2,
            "name": "Muro",
            "text": "Nada que hacer aqui",
            "numOptions": [],
            "state": [
                {
                    "targetState": 1,
                    "nextState": 1,
                    "nextIndex": -1
                }
            ]
        }
    ]

export default Dialog;