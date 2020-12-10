export default class Obstacle extends Phaser.GameObjects.Image{
    constructor(scene, x, y, texture, requirement){
        super(scene, x, y, texture);
        this.setInteractive();
        this.requires = requirement;
        this.success = function(){
            console.log('recibido');
            this.destroy(this);
        };
        this.failure = function(){
            console.log('quiero ' + this.requires);
        };
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