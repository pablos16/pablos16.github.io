export default class DroppedItem extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, id){
        super(scene, x, y, 'debug');
        this.changeTo(id);
        this.scene.add.existing(this);
        //this.scene.physics.add.existing(this); ???
        //this.body.setImmovable(true); ???
    }

    changeTo(id){
        this.setTexture(this.setItemData(id));
        this.id = id;
        this.setScale(0.5) // (por defecto: 1)
        this.setSize(32, 32); // (por defecto: 64, 64)
        this.setDisplayOrigin(0,0); // ???
    }

    setItemData(id){
        let texture;
        switch(id){
            // Objetos referentes a las misiones:
            case 1: texture = 'Item_TNT'; break;
            case 2: texture = 'Item_CheapCarpet'; break;
            case 3: texture = 'Item_ExpensiveCarpet'; break;
            case 4: texture = 'Item_Cushion'; break;
            case 5: texture = 'Item_WantedSign'; break;
            case 6: texture = 'Item_CircusSign'; break;
            case 7: texture = 'Item_RebelsSign'; break;
            case 8: texture = 'Item_SoapAndBrush'; break;
            case 9: texture = 'Item_Dye'; break;
            case 10: texture = 'Item_OilAndMatches'; break;
            case 11: texture = 'Item_CoinBag'; break;
            case 12: texture = 'Item_Coins'; break;
            case 13: texture = 'Item_Message'; break;
            // Objetos misceláneos:
            case 14: texture = 'Item_Diary'; break;
            case 15: texture = 'Item_Photo'; break;
            case 16: texture = 'Item_BearPlush'; break;
            case 17: texture = 'Item_Rune'; break;
            case 18: texture = 'Item_Ring'; break;
            // Nada:
            default: texture = 'Item_-'; break;
        }
        return texture;
    }
}