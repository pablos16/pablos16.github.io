export default class Tweener {
    constructor(data) {

        this.all = data;

        //Context
        this.context = data.context

        //Tween data
        this.target = data.target;
        this.duration = data.duration;
        this.attribs = data.attribs;
        this.ease = data.ease;

        //Tween status
        this.locked = data.locked;
        this.hidden = data.hidden;

        //Tween funcs
        this.onComplete = data.onComplete;
        this.onStart = data.onStart;
    }

    CreateTweenData(data) {
        let foo = {
            targets: data.target,
            duration: data.duration,
            ease: 'Circ',
            onStart: () => { if (data.onStart) data.onStart() },
            onComplete: () => {
                this.hidden = !this.hidden
                if (data.onComplete) data.onComplete();
            }
        }

        for (const obj of data.attribs)
            foo[obj.propertie] = this.hidden ? obj.hidden : obj.notHidden;

        return foo;
    }

    Toggle() {
        if (this.locked) return;
        this.RestartAnimation()
    }

    RestartAnimation() {
        this.Stop();
        this.animation = this.context.tweens.add(this.CreateTweenData(this.all))
    }

    ToggleLock() {
        this.locked = true;
        this.RestartAnimation()
    }

    Stop() {
        if (this.animation && this.animation.isPlaying()) {
            this.animation.stop();
            this.hidden = !this.hidden;
        }
    }
}