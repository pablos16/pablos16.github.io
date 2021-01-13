import PathFollower from '../libraries/pathFollower.js'
import PathNode from '../libraries/pathNode.js'

export default class PathInsertor {
    constructor(data) {

        this.body = data.body;
        this.scene = data.scene
        this.index = 0;
        this.context = data.context;
        this.pathName = data.pathName;

        this.test = {
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
            onFinish: () => { },
        }

        this.inserPath()
    }

    inserPath() {
        this.move(this.test)
    }

    move(data) {
        this.context.path = new PathFollower({
            path: this.generatePathFromObject(data.path),
            sceneRef: this.scene,
            body: this.body,
            loop: true,
            onFinish: (pathFollower) => { data.onFinish() }
        })
    }

    generatePathFromObject(path) {
        let paths = [];
        let pathLengh = path.length;
        let xTotal = 0;
        let yTotal = 0;
        for (let i = 0; i < pathLengh; i++) {
            xTotal += path[i].x;
            yTotal += path[i].y;
            paths.push(new PathNode({
                x: this.body.position.x + xTotal,
                y: this.body.position.y + yTotal,
                delay: path[i].delay,
            }))
        }
        return paths;
    }
}


