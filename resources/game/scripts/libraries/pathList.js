import PathFollower from '../libraries/pathFollower.js'
import PathNode from '../libraries/pathNode.js'

export default class PathInsertor {
    constructor(data) {

        this.body = data.body;
        this.scene = data.scene
        this.index = 0;
        this.context = data.context;
        this.pathName = data.pathName;

        this.inserPath()
    }

    inserPath() {
        let path = this[this.pathName];
        path(this);
    }

    default(ctx)
    {
        new PathFollower({
            path: [
                new PathNode({
                    x: ctx.body.position.x,
                    y: ctx.body.position.y,
                    delay: 3500,
                }),
                new PathNode({
                    x: ctx.body.position.x + 100,
                    y: ctx.body.position.y,
                    delay: 1500,
                }),
                new PathNode({
                    x: ctx.body.position.x + 50,
                    y: ctx.body.position.y + 100,
                    delay: 400,
                })
            ],
            sceneRef: ctx.scene,
            body: ctx.body,
            loop: true,
            onFinish: (pathFollower) => {  }
        })
    }
}


