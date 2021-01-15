export default class Obstacle extends Phaser.GameObjects.Image{
    constructor(scene, x, y, texture, requirement, functS, functF, altRequirement, altFunctS){
        super(scene, x, y, texture);
        this.setInteractive();

        this.requires = requirement;
        if (altRequirement !== undefined) this.requiresAlt = altRequirement;

        if (typeof functS === 'undefined'){
            this.success = function(){
                console.log('recibido');
                this.destroy(this);
            };
        }
        else{
            this.success = functS;
        }

        if (typeof functF === 'undefined'){
            this.failure = function(){
                console.log('quiero ' + this.requires + '; alt: ' + this.requiresAlt);
            };
        }
        else{
            this.failure = functF;
        }

        if (typeof altFunctS === 'undefined'){
            this.successAlt = this.success;
        }
        else{
            this.successAlt = altFunctS;
        }

        scene.add.existing(this);

        this.on('pointerdown', pointer =>{
            if (scene.player.inventory.getItemAt(scene.inventoryBar.selection) === this.requires){
                scene.inventoryBar.useCurrentItem();
                this.success();
            }
            else if (this.requiresAlt !== undefined && scene.player.inventory.getItemAt(scene.inventoryBar.selection) === this.requiresAlt){
                scene.inventoryBar.useCurrentItem();
                this.successAlt();
            }
            else{
                this.failure();
            }
        });
    }
}