export default class ItemImage extends Phaser.GameObjects.Image{
    constructor(scene, x, y, id){
        super(scene, x, y, 'debug');
        this.changeTo(id);
        this.scene.add.existing(this);
    }

    changeTo(id){
        let itemData = this.setItemData(id);
        if (id === 0) this.setTexture('emptySlot');
        else this.setTexture('items', id);
        this.desc = itemData.desc;
        this.name = itemData.name;
    }

    setItemData(id){
        let name; let desc;
        switch(id){
            // Objetos referentes a las misiones:
            case 1: name = 'Dinamita'; desc = 'Estos explosivos son más potentes de lo que parece...';
            case 2: name = 'Alfombra barata'; desc = 'Luce con pelusillas. Parece desgastada, pero servirá.';
            case 3: name = 'Alfombra persa'; desc = 'Preciada alfombra con muchos estampados. Su calidad es notable, aunque cuesta más de lo que debería...';
            case 4: name = 'Cojín persa'; desc = 'Mullido, cómodo y colorido. ¿Quién se resistiría a adquirirlo a tan buen precio?';
            case 5: name = 'Carteles de "Se Busca"'; desc = 'El retrato es idéntico al del fugitivo.';
            case 6: name = 'Carteles feriales'; desc = 'Informan de la llegada de la feria a la ciudad.';
            case 7: name = 'Carteles cuestionables'; desc = 'Pancartas similares a las propagandísticas del régimen. Hay algo raro en ellas.';
            case 8: name = 'Cepillo y jabón'; desc = 'Funcionan a la perfección para quitar pintadas.';
            case 9: name = 'Tinte'; desc = 'Si cubres con esto una pintada, quizá no se note el dibujo.';
            case 10: name = 'Cerillas y aceite'; desc = 'Permiten prender fuego a prácticamente todo.';
            case 11: name = 'Bolsa de dinero'; desc = 'Gran bolsa llena de dinero.';
            case 12: name = 'Monedas'; desc = 'Unas pocas monedas.';
            case 13: name = 'Carta'; desc = 'Es de mala educación abrirla si no es para ti. ¿Qué pondrá dentro?';
            // Objetos misceláneos:
            case 14: name = 'Diario de Paca'; desc = 'Contiene toda la dura vida de Paca.';
            case 15: name = 'Fotografía de Leandro Gado'; desc = 'Se le ve muy feliz. ¿Quién es su amigo? No le has visto en toda la ciudad.';
            case 16: name = 'Oso de peluche de Sona'; desc = 'Te lo ha dado con todo su corazón. Tiene un gran valor sentimental para ella.';
            case 17: name = 'Reliquia extraña'; desc = 'Supuestamente otorga "vitalidad", aunque no notas nada.';
            case 18: name = 'Anillo'; desc = 'El nombre "Lola" está grabado dentro de él. ¿Por qué lo habrá tirado?';
            // Nada:
            default: name = '-'; desc = '-';
        }
        return {name, desc};
    }
}