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
                speed: 50,
                delay: 150,
            },
        ],
        loop: true,
        onFinish: (data) => { },
    },
    {
        name: 'quieto',
        path: [
            {
                x: 0,
                y: 0,
                speed: 50,
                delay: 150,
            },
        ],
        loop: false,
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
                x: 250,
                y: 0,
                speed: 75,
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
    },
    {
        name: 'square',
        path: [
            {
                x: 0,
                y: 0,
                speed: 75,
                delay: 0,
            },
            {
                x: 0,
                y: 120,
                speed: 75,
                delay: 0,
            },
            {
                x: -120,
                y: 0,
                speed: 75,
                delay: 0,
            },
            {
                x: 0,
                y: -120,
                speed: 75,
                delay: 0,
            },
        ],
        loop: true,
    }
]

export default Paths