export function setVisiblity(objects, visibility){
    for (let i = 0; i < objects.length; i++) {
        objects[i].visible = visibility;
    }
}

export function setStatic(objects) {
    for (let i = 0; i < objects.length; i++){
        objects[i].setScrollFactor(0);;
    }
}

export function setDepth(objects, depth) {
    for (let i = 0; i < objects.length; i++){
        objects[i].depth = depth;
    }
}