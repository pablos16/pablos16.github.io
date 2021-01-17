import CT from '../../configs/constants.js';
import Button from '../libraries/button.js';

export default class Victory extends Phaser.Scene {
    constructor() {
        super({ key: 'win' });
    }

    init(data){
        //Se guardan los puntos
        this.puntos = data.points;
    }

    create() {
        //Deshabilitar menu contextual
        this.input.mouse.disableContextMenu();

        this.fullScreen = this.input.keyboard.addKey('F');

        this.music = this.sound.add('victory', CT.menuMusicConfig);

        //Pantalla
        this.add.image(640, 150, 'winTitle');
        let img;
        let des;
        if(this.points >= 0) {
            img = 'winRegime';
            des = 'Tras la derrota de la rebelión lograste asegurar una posicion de por vida como \nasesor del dictador permitiendote vivir una vida de lujo y poder. \n¡Larga vida a Relith Floda!';
        } 
        else {
            img = 'winVillage';
            des = 'Gracias a tu ayuda la revolución acabó siendo un exito, nadie sabe que depara \nel futuro tras el cambio de poder pero probablemente será mejor \nque lo que habia antes';
        }
        this.add.image(640, 400, img);
        this.add.bitmapText(0, 350, CT.textFont, des, CT.textextSize, CT.textAlign);

        //Boton
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