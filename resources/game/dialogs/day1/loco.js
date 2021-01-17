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
            text: ["..."],
            options:
                [
                    {
                        text: "Pegar",
                        nextState: 1,
                        nextIndex: 2,
                    },
                    {
                        text: "Dejarle",
                        nextState: 1,
                        nextIndex: -1,
                    },
                ],
            completed: 0
        },
        {

            //CallBack de ostiazo
            callback: (data) => {
                let npc = data.arguments.npc;
                if (npc.hitEvenet && !npc.dialog.dialogSttoped) {
                    //Si ya existe y no hay otro en segundo plano, volvemos a empezarlo
                    npc.hitEvenet()
                    npc.dialog.dialogSttoped = true;
                }
                //Si no existe el tween, es que es la primera vez que se ejecuta
                //Asi que lo creo la funcion que lo crea (hay que crearlo cada vez porque el onStart
                //No funciona el recrear
                else {
                    npc.hitEvenet = () => {
                        if (npc.hit) npc.hit.remove();
                        npc.hit = data.scene.tweens.add({
                            targets: data.scene.transitionImg,
                            duration: 250,
                            alpha: 1,
                            ease: 'Circ',
                            onStart: () => { data.scene.hitSound.play(); },
                            onComplete: () => {
                                data.scene.tweens.add({
                                    targets: data.scene.transitionImg,
                                    duration: 1000,
                                    alpha: 0,
                                    onComplete: () => {
                                        npc.dialog.dialogSttoped = false;
                                    }
                                })
                            }
                        })
                    }
                    npc.hitEvenet();
                }
            },
            id: 2,
            name: Names.MadMan,
            text: ["¡Cuá,cuá,cuá!", "¡Cuá!", "¡Cuaaaa!", "¡Cuá cuá!"],
            state: [
                {
                    targetState: ["any"],
                    nextIndex: 1
                },
            ]
        },
        {
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
                    nextIndex: 3
                }
            ]
        }
    ]

export default Dialog;