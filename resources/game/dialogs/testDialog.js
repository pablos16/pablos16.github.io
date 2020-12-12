const Dialog =
    [
        {
            "id": 0,
            "name": "Muro",
            "text": "Es una zona para colocar carteles de búsqueda",
            "numOptions": 0,
            "state": [
                {
                    "targetState": 0,
                    "nextState": 1,
                    "nextIndex": 1
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
            "numOptions": 2,
            "option1": 4,
            "option2": 5
        },
        {
            "id": 2,
            "name": "Muro",
            "text": "Nada que hacer aqui",
            "numOptions": 0,
            "state": [
                {
                    "targetState": -1,
                }
            ]
        }
    ]

export default Dialog;