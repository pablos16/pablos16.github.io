import Player from '../characters/player.js';
import InventoryBar from '../inventory/gui_inventoryBar.js';
import DroppedItem from '../inventory/item.js';
import Obstacle from '../inventory/obstacle.js';
import Alignment from '../missionSystem/alignment.js';
import CT from '../../configs/constants.js';
import Dialog from '../../configs/dialogConfig.js';
import NPCDialog from '../characters/npcDialog.js';
import TPLINK from '../characters/tp.js'
import Trigger from '../libraries/trigger.js'
import Dialoguer from '../libraries/dialoguer.js'

export default class Scene extends Phaser.Scene {
    init(data) {
        this.points = data.points
    }

    constructor(config) {
        super({ key: config.key });
        this.dialogs = config.dialog;
        this.missions = config.missions;
        this.objectLayerName = config.objectLayerName;
        this.nextLevel = config.nextLevel;
    }
    //Aqui te crea todo lo que necesites al inicio para todo el juego
    create() {
        console.log("Proximo dia " + this.nextLevel)
        console.log("Puntos: " + this.points)
        //Sonidos de fondo
        const background = {
            mute: false,
            volume: 0.2,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        };
        //this.barSound = this.sound.add('bar', background)
        //this.castle = this.sound.add('castle', background)
        //Deshabilitar menú contextual
        this.input.mouse.disableContextMenu();

        //Tecla de pantalla completa
        this.fullScreen = this.input.keyboard.addKey('F');

        //Mapa
        this.map = this.make.tilemap({
            key: 'tileMap',
            tileWidth: 16,
            tileHeight: 16
        });
        //Mapa - Capas Normales 1 - Parte 1
        let tileSet = this.map.addTilesetImage('tiles', 'mapTiles');
        this.mapGround = this.map.createStaticLayer('Ground', tileSet);
        this.mapBorder = this.map.createStaticLayer('Border', tileSet);
        this.mapPathway = this.map.createStaticLayer('Pathway', tileSet);
        this.mapFences = this.map.createStaticLayer('Fences', tileSet);
        this.mapFoundations = this.map.createStaticLayer('Foundations', tileSet);
        this.mapDecorations = this.map.createStaticLayer('Decorations', tileSet);
        //Mapa - Capas Normales 2 - Parte 1
        let tileSetIndoors = this.map.addTilesetImage('tiles_indoors', 'mapTilesIndoors');
        this.bar1 = this.map.createStaticLayer('bar1', tileSetIndoors);
        this.bar2 = this.map.createStaticLayer('bar2', tileSetIndoors);
        this.bar3 = this.map.createStaticLayer('bar3', tileSetIndoors);
        this.mapCarnivalFoundations = this.map.createStaticLayer('Carnival Foundations', tileSetIndoors);
        //Mapa - Capas Normales 3  - Parte 1
        let tileSetCastle = this.map.addTilesetImage('tiles_castle', 'mapTilesCastle');
        this.mapCastleFoundations = this.map.createStaticLayer('Castle Foundations', tileSetCastle);
        //Mapa - Capa De Objetos
        let mapObjects = this.map.getObjectLayer(this.objectLayerName).objects;
        this.tpList = [];
        this.currentPlaying = {};
        for (const objeto of mapObjects) {
            const props = {};
            if (objeto.properties) { for (const { name, value } of objeto.properties) { props[name] = value; } }
            switch (objeto.name) {
                case 'Player': //Personaje
                    this.player = new Player(this, objeto.x, objeto.y, this.missions);
                    this.transitionImg = this.add.sprite(CT.transitionX, CT.transitionY, 'tpImg')
                    this.transitionImg.setScrollFactor(0)
                    this.transitionImg.depth = 200;
                    new Trigger({
                        x: objeto.x,
                        y: objeto.y,
                        scene: this,
                        xSize: 100,
                        ySize: 100,
                        enter: () => {
                            if (this.player.missionList.allMissionsCompleted()) {
                                new Dialoguer({
                                    x: objeto.x,
                                    y: objeto.y,
                                    xSize: 100,
                                    ySize: 100,
                                    scene: this,
                                    dialog: this.dialogs.player,
                                    isForced: true,
                                    onStart: () => { 
                                        this.tweens.add({
                                            targets: this.player,
                                            duration: 250,
                                            y: this.player.y - 15,
                                            x: this.player.x + 15,
                                        })
                                    },
                                    onFinish: () => { this.currentPlaying.stop() },
                                });
                            }
                        },
                        exit: () => { },
                        stay: () => { },
                    })
                    new NPCDialog(this, objeto.x - 200, objeto.y + 50, this.dialogs['tabernero'], 'tabernero', 'test');
                    break;
                case 'Item': //Objetos en el suelo
                    this.dropped = new DroppedItem(this, objeto.x, objeto.y, parseInt(objeto.type));
                    break;
                case 'Obstacle': //Obstáculo (entidad en la que se usa un objeto)
                    this.obtacle = new Obstacle(this, objeto.x, objeto.y, props.texture, parseInt(objeto.type));
                    break;
                case 'Npc': //NPC
                    this.NPC = new NPCDialog(this, objeto.x, objeto.y, this.dialogs[props.dialog], props.sprite, 'test');
                    break;
                case 'Tp':
                    let it = 0;
                    loop: for (const tpstatus of mapObjects) {
                        if (props.tplink === tpstatus.id) {
                            props.tplink = it;
                            break loop;
                        }
                        it++;
                    }
                    this.TP = new TPLINK(this, objeto.x, objeto.y, mapObjects[props.tplink], props.offset, objeto.width, objeto.height);
                    this.tpList.push(this.TP);
                    break;
                case 'Music':
                    this[props.music] = this.sound.add(props.music, background)

                    new Trigger({
                        x: objeto.x,
                        y: objeto.y,
                        scene: this,
                        xSize: objeto.width,
                        ySize: objeto.height,
                        enter: () => { 
                            this[props.music].play() 
                            this.currentPlaying = this[props.music];
                        },
                        exit: () => { this[props.music].stop(); },
                        stay: () => { },
                    })
                    break;
            }
        }
        //Mapa - Capas Normales 3 - Parte 2
        this.mapCastles1 = this.map.createStaticLayer('Castles1', tileSetCastle);
        this.mapCastles2 = this.map.createStaticLayer('Castles2', tileSetCastle);
        this.mapCastleRooftops = this.map.createStaticLayer('Castle Rooftops', tileSetCastle);
        //Mapa - Capas Normales 2 - Parte 2
        this.mapCarnival = this.map.createStaticLayer('Carnival', tileSetIndoors);
        //Mapa - Capas Normales 1 - Parte 2
        this.mapBuildings = this.map.createStaticLayer('Buildings', tileSet);
        this.mapRooftops = this.map.createStaticLayer('Rooftops', tileSet);
        this.mapCollisions = this.map.createStaticLayer('Collisions', tileSet);
        this.mapCollisions.setCollisionBetween(0, 999);
        this.physics.add.collider(this.player, this.mapCollisions);
        this.mapCollisions.visible = false;

        //Barra de Inventario
        this.inventoryBar = new InventoryBar(this, CT.invBarPosX, CT.invBarPosY);

        //Barra de alineamiento
        this.align = new Alignment(this, CT.alignmentBarX, CT.alignmentBarY, 0);

        //Fondo del dialogo
        this.dialogueImage = this.add.image(Dialog.xDialogImage, Dialog.yDialogImage, 'dialogFinal');
        this.dialogueImage.setScrollFactor(0);
        this.dialogueImage.setVisible(false);

        //Cámara que sigue al jugador
        this.cameras.main.startFollow(this.player);
        this.cameras.main.width = CT.gameWidth;
        this.cameras.main.height = CT.gameHeight;
        this.cameras.main.zoom = CT.cameraZoom;

        //Sonidos
        const config = {
            mute: false,
            volume: 0.5,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        };
        //Añadimos la musica
        this.dialogSound = this.sound.add('dialogSound', config);
        this.selection = this.sound.add('selection', config);
        this.pickItem = this.sound.add('pickup', config);
        this.align.addReputation(this.points)
        this.fadeOut()
    }

    changeScene() {
        this.fadeIn()
        this.loadScene(CT.fadeInTime)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.fullScreen)) {
            this.scale.toggleFullscreen()
        }
    }

    loadScene(delay) {

        this.time.addEvent({
            callback: () => {
                this.scene.start(this.nextLevel, {
                    points: this.align.points,
                });
            },
            delay: delay
        })
    }

    fadeIn() {
        this.tweens.add({
            targets: this.transitionImg,
            duration: CT.fadeInTime,
            alpha: 1,
            ease: 'Circ',
        })
    }

    fadeOut() {
        this.tweens.add({
            targets: this.transitionImg,
            duration: CT.fadeOutTime,
            alpha: 0,
            ease: 'Circ',
        })
    }
}