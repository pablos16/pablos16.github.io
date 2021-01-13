const Paths = [
    {
        name: 'test',
        path: [
            {
                x: 0,
                y: 0,
                speed: 50,
                delay: 150,
            },
            {
                x: 100,
                y: 0,
                speed: 200,
                delay: 150,
            },
            {
                x: -50,
                y: 100,
                speed: 5,
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
                y: 0,
                speed: 50,
                delay: 150,
            },
            {
                x: 0,
                y: 50,
                speed: 75,
                delay: 150,
            },
            {
                x: 350,
                y: 0,
                speed: 100,
                delay: 250,
            },
            {
                x: 0,
                y: 300,
                speed: 150,
                delay: 350,
            },
        ],
        loop: false,
        onFinish: (data) => {
            data.context.destroy(true)
            data.scene.player.isTalking = false;
        },
    }
]

export default Paths