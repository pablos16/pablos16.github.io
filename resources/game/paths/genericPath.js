const Paths = [
    {
        name: 'test',
        path: [
            {
                x: 0,
                y: 0,
                delay: 150,
            },
            {
                x: 100,
                y: 0,
                delay: 150,
            },
            {
                x: -50,
                y: 100,
                delay: 150,
            },
        ],
        loop: true,
        onFinish: (data) => { },
    },
    {
        name: 'coronel',
        path: [
            {
                x: 0,
                y: 50,
                delay: 150,
            },
            {
                x: 350,
                y: 0,
                delay: 250,
            },
            {
                x: 0,
                y: 300,
                delay: 350,
            },
        ],
        loop: true,
        onFinish: (data) => {
            data.context.destroy(true)
            data.scene.player.isTalking = false;
        },
    }
]

export default Paths