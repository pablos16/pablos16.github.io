import Player from './player.js';
import Dialogue from './dialogue.js';
import NPC from './npc.js';
import InventoryBar from './gui_inventoryBar.js';
import DroppedItem from './item.js';
import Obstacle from './obstacle.js';

export default class Scene extends Phaser.Scene{
  constructor(){
    super({ key: 'scene' });
  }
  //Aqui te crea todo lo que necesites al inicio para todo el juego
  create(){
    //Deshabilitar menú contextual
    this.input.mouse.disableContextMenu();

    //Mapa
    this.add.image(200, 300, 'map');
    //this.add.image(200, 525, 'dialogTest');

    //Personaje
    this.player = new Player(this, 200, 300);
    
    //NPC
    this.NPC = new NPC(this,600,300);
    
    this.physics.add.overlap(this.player, this.NPC.trigger, (o1, o2) =>{
      // Si pulsas la E...
      if (this.player.action.isDown){
        if(!this.player.isTalking){
        
        //Hablas con el
        //PONER AQUI DIÁLOGO
        this.player.isTalking = true;
        this.NPC.isTalking = true;
        this.NPC.stopX();
        this.NPC.stopY();
        this.player.stopX();
        this.player.stopY();

        //this.testDialogue = new Dialogue(this, 1280/2, 720 - 720/5, 'A: ', 'Hola');
        this.dialogueImage.setVisible(true);
        }
        else{
          //Volvemos a mover al personaje
          this.NPC.moveRight();

          this.dialogueImage.setVisible(false);
          this.player.isTalking=false;
          this.NPC.isTalking = false;
          //texto.destroy();
        }
      }
    });
    //this.physics.add.collider(this.player, this.NPCs);
    /*this.physics.add.collider(this.NPCs, this.walls);*/ //Esto debería de sobrar

    //Fondo del dialogo
    this.dialogueImage = this.add.image(1300/2, 800/1.25, 'dialogTest');
    this.dialogueImage.setScrollFactor(0);
    this.dialogueImage.setVisible(false);
    
    //TODO CAMBIAR ESTO Y CREAR UN JS. PABLO
    //Barra de alineamiento
    this.alignBar = this.add.image(1400, 100, 'bar');
    this.alignBar.setScale(1.75);
    this.alignBar.setScrollFactor(0);

    //Cámara que sigue al jugador
    this.cameras.main.startFollow(this.player);
    //TODO CREAR CLASE CON VARIABLES
    this.cameras.main.width = 1422;
    this.cameras.main.height = 800;

    //Muros que tendremos que eliminar una vez creemos el tilemap
    this.walls = this.physics.add.staticGroup();
    this.walls.create(500, 250, 'Wall');
    this.walls.create(600, 450, 'Wall');
    this.physics.add.collider(this.player, this.walls); //Esto es para poner que el collider del jugador choque con los muros pero se tendra que eliminar tras hacer los tiles

    //Barra de Inventario
    this.inventoryBar = new InventoryBar(this, 45, 360);

    //Objetos en el suelo
    this.droppedItems = this.physics.add.staticGroup();
    this.physics.add.overlap(this.player, this.droppedItems, (o1, o2) =>{
      // recoger
      if (this.player.action.isDown){
        if (this.player.inventory.addItem(o2.id)) o2.destroy();
      }
    });
    this.dropped = new DroppedItem(this, 50, 200, 1, this.droppedItems);

    //Obstáculo (entidad en la que se usa un objeto)
    this.obtacle = new Obstacle(this, 100, 100, 'debug', 1);
  }
  
  update(){
    //Cosas de Nico
    //this.testDialogue.update()
    //this.testDialogue.label.text = this.testDialogue.GetName();
  }
}