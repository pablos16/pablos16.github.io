export default class ItemImage extends Phaser.GameObjects.Image{
    constructor(scene, x, y, id){
        super(scene, x, y, 'debug');
        this.changeTo(id);
        this.scene.add.existing(this);
    }

    changeTo(id){
        let itemData = this.setItemData(id);
        this.setTexture(itemData.texture);
        this.desc = itemData.desc;
        this.name = itemData.name;
    }

    setItemData(id){
        let name; let desc; let texture;
        switch(id){
            // Objetos referentes a las misiones:
            case 1: name = 'Dinamita'; desc = 'Estos explosivos son más potentes de lo que parece...'; texture = 'Item_TNT'; break;
            case 2: name = 'Alfombra barata'; desc = 'Luce con pelusillas. Parece desgastada, pero servirá.'; texture = 'Item_CheapCarpet'; break;
            case 3: name = 'Alfombra persa'; desc = 'Preciada alfombra con muchos estampados. Su calidad es notable, aunque cuesta más de lo que debería...'; texture = 'Item_ExpensiveCarpet'; break;
            case 4: name = 'Cojín persa'; desc = 'Mullido, cómodo y colorido. ¿Quién se resistiría a adquirirlo a tan buen precio?'; texture = 'Item_Cushion'; break;
            case 5: name = 'Carteles de "Se Busca"'; desc = 'El retrato es idéntico al del fugitivo.'; texture = 'Item_WantedSign'; break;
            case 6: name = 'Carteles feriales'; desc = 'Informan de la llegada de la feria a la ciudad.'; texture = 'Item_CircusSign'; break;
            case 7: name = 'Carteles cuestionables'; desc = 'Pancartas similares a las propagandísticas del régimen. Hay algo raro en ellas.'; texture = 'Item_RebelsSign'; break;
            case 8: name = 'Cepillo y jabón'; desc = 'Funcionan a la perfección para quitar pintadas.'; texture = 'Item_SoapAndBrush'; break;
            case 9: name = 'Tinte'; desc = 'Si cubres con esto una pintada, quizá no se note el dibujo.'; texture = 'Item_Dye'; break;
            case 10: name = 'Cerillas y aceite'; desc = 'Permiten prender fuego a prácticamente todo.'; texture = 'Item_OilAndMatches'; break;
            case 11: name = 'Bolsa de dinero'; desc = 'Gran bolsa llena de dinero.'; texture = 'Item_CoinBag'; break;
            case 12: name = 'Monedas'; desc = 'Unas pocas monedas.'; texture = 'Item_Coins'; break;
            case 13: name = 'Carta'; desc = 'Es de mala educación abrirla si no es para ti. ¿Qué pondrá dentro?'; texture = 'Item_Message'; break;
            // Objetos misceláneos:
            case 14: name = 'Diario de Paca'; desc = 'Contiene toda la dura vida de Paca.'; texture = 'Item_Diary'; break;
            case 15: name = 'Fotografía de Leandro Gado'; desc = 'Se le ve muy feliz. ¿Quién es su amigo? No le has visto en toda la ciudad.'; texture = 'Item_Photo'; break;
            case 16: name = 'Oso de peluche de Sona'; desc = 'Te lo ha dado con todo su corazón. Tiene un gran valor sentimental para ella.'; texture = 'Item_BearPlush'; break;
            case 17: name = 'Reliquia extraña'; desc = 'Supuestamente otorga "vitalidad", aunque no notas nada.'; texture = 'Item_Rune'; break;
            case 18: name = 'Anillo'; desc = 'El nombre "Lola" está grabado dentro de él. ¿Por qué lo habrá tirado?'; texture = 'Item_Ring'; break;
            // Nada:
            default: name = '-'; desc = '-'; texture = 'Item_-'; break;
        }
        return {name, desc, texture};
    }
}