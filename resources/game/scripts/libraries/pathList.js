import PathFollower from '../libraries/pathFollower.js'
import PathNode from '../libraries/pathNode.js'
import Paths from '../../paths/genericPath.js'

export default class PathInsertor {
    constructor(data) {

        this.body = data.body;
        this.scene = data.scene
        this.context = data.context;
        this.path = this.searchPath(data.path);
        this.inserPath()
    }

    inserPath() {
        this.move(this.path)
    }

    move(data) {
        this.context.path = new PathFollower({
            path: this.generatePathFromObject(data.path),
            sceneRef: this.scene,
            body: this.body,
            loop: data.loop,
            onFinish: (pathFollower) => { data.onFinish() }
        })
    }

    //Asumimos que siempre va a existir un path a encontrar
    searchPath(path) {
        for (let i = 0; i < Paths.length; i++) {
            if(Paths[i].name === path) return Paths[i]
        }
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


