import PathFollower from '../libraries/pathFollower.js'
import PathNode from '../libraries/pathNode.js'

export default class PathInsertor {
    constructor(data) {

        this.body = data.body;
        this.scene = data.scene
        this.index = 0;
        this.context = data.context;
        this.pathName = data.pathName;

        this.inserPath(this[this.pathName])
    }

    inserPath(path) {
     this.default();
    }

    default()
    {
        new PathFollower({
            path: [
                new PathNode({
                    x: this.body.position.x,
                    y: this.body.position.y,
                    delay: 3500,
                }),
                new PathNode({
                    x: this.body.position.x + 100,
                    y: this.body.position.y,
                    delay: 1500,
                }),
                new PathNode({
                    x: this.body.position.x + 50,
                    y: this.body.position.y + 100,
                    delay: 400,
                })
            ],
            sceneRef: this.scene,
            body: this.body,
            onFinish: (context) => { context.currentPath = 0 }
        })
    }
}


