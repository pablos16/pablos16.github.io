export default class Obstacle extends Phaser.GameObjects.Image{
    constructor(scene, x, y, texture, requirement, functS, functF){
        super(scene, x, y, texture);
        this.setInteractive();
        this.requires = requirement;
        if (functS == undefined){
            this.success = function(){
                console.log('recibido');
                this.destroy(this);
            };
        }
        else{
            console.log('zeta')
            this.success = functS;
        }
        if (functF == undefined){
            this.failure = function(){
                console.log('quiero ' + this.requires);
            };
        }
        else{
            console.log('zeta2')
            this.failure = functF;
        }
        scene.add.existing(this);
        this.on('pointerdown', pointer =>{
            if (scene.player.inventory.getItemAt(scene.inventoryBar.selection) === this.requires){
                scene.inventoryBar.useCurrentItem();
                this.success();
            }
            else{
                this.failure();
            }
        });
    }
}