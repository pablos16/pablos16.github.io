import CT from '../../configs/constants.js';
import Button from '../libraries/button.js';

export default class Victory extends Phaser.Scene {
    constructor() {
     super({ key: 'win' });
    }

    init(data){
        // Se guardan los puntos
        this.puntos = data.points;
    }

    create() {
        // Deshabilitar menu contextual
        this.input.mouse.disableContextMenu();

        // Tecla de pantalla completa
        this.fullScreen = this.input.keyboard.addKey('F');

        // Música
        this.music = this.sound.add('victory', CT.menuMusicConfig);

        // Pantalla
        let img = (this.points >= 0) ? 'winVillage' : 'winRegime';
        this.add.image(640, 150, img);

        // Botón
        this.returnButton = new Button({
            x: 640,
            y: 550,   
            context: this,
            sprite: 'back',
            function: () => {
              this.music.stop();
              this.scene.start('menu', { points: 0});
            }
        })
    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(this.fullScreen)){
            this.scale.toggleFullscreen();
        }
    }
}