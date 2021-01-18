import Names from '../../configs/npcNames.js'

const Dialog =
    [
        {
            id: 0,
            name: Names.Ferianta,
            text: ["¿Cómo has sabido que estoy aquí? Ni si quiera se lo he dicho a mi marido. ¡Quién se ha chivado!"],
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
            text: ["Si piensas atraparte estás jodido. Gracias por la ayuda anciano. Dile a mi marido que es un inútil."],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 4
                },
            ],
        },
        {
            id: 2,
            //CALLBACK DE QUE SE PIRA HACIA LA DERECHA HACIA EL BOSQUE
            name: Names.Police,
            text: ["Hasta nunca"],
            state: [
                {
                    targetState: ["any"],
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
                }
            ]
        }
    ]

export default Dialog;