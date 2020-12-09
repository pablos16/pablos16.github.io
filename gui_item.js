export default class ItemImage extends Phaser.GameObjects.Image{
    constructor(scene, x, y, id){
        super(scene, x, y, 'debug');
        this.changeTo(id);
        this.scene.add.existing(this);
    }

    changeTo(id){
        if (id === 0) this.setTexture('inventory', 3);
        else this.setTexture('items', id);
        let itemData = this.setItemData(id);
        this.desc = itemData.desc;
        this.name = itemData.name;
    }

    setItemData(id){
        let name; let desc;
        switch(id){
            // Objetos referentes a las misiones:
            case 1: name = 'Dinamita';
                    desc = 'Estos explosivos son más potentes de lo que parece...';
                    break;
            case 2: name = 'Alfombra barata';
                    desc = 'Luce con pelusillas. Parece desgastada, pero servirá.';
                    break;
            case 3: name = 'Alfombra persa';
                    desc = 'Preciada alfombra con muchos estampados. Su calidad es notable, aunque cuesta más de lo que debería...';
                    break;
            case 4: name = 'Cojín persa';
                    desc = 'Mullido, cómodo y colorido. ¿Quién se resistiría a adquirirlo a tan buen precio?';
                    break;
            case 5: name = 'Carteles de "Se Busca"';
                    desc = 'El retrato es idéntico al del fugitivo.';
                    break;
            case 6: name = 'Carteles feriales';
                    desc = 'Informan de la llegada de la feria a la ciudad.';
                    break;
            case 7: name = 'Carteles cuestionables';
                    desc = 'Pancartas similares a las propagandísticas del régimen. Hay algo raro en ellas.';
                    break;
            case 8: name = 'Cepillo y jabón';
                    desc = 'Funcionan a la perfección para quitar pintadas.';
                    break;
            case 9: name = 'Tinte';
                    desc = 'Si cubres con esto una pintada, quizá no se note el dibujo.';
                    break;
            case 10: name = 'Cerillas y aceite';
                     desc = 'Permiten prender fuego a prácticamente todo.';
                     break;
            case 11: name = 'Bolsa de dinero';
                     desc = 'Gran bolsa llena de dinero.';
                     break;
            case 12: name = 'Monedas';
                     desc = 'Unas pocas monedas.';
                     break;
            case 13: name = 'Carta';
                     desc = 'Es de mala educación abrirla si no es para ti. ¿Qué pondrá dentro?';
                     break;
            // Objetos misceláneos:
            case 14: name = 'Diario de Paca';
                     desc = 'Contiene toda la dura vida de Paca.';
                     break;
            case 15: name = 'Fotografía de Leandro Gado';
                     desc = 'Se le ve muy feliz. ¿Quién es su amigo? No le has visto en toda la ciudad.';
                     break;
            case 16: name = 'Oso de peluche de Sona';
                     desc = 'Te lo ha dado con todo su corazón. Tiene un gran valor sentimental para ella.';
                     break;
            case 17: name = 'Reliquia extraña';
                     desc = 'Supuestamente otorga "vitalidad", aunque no notas nada.';
                     break;
            case 18: name = 'Anillo';
                     desc = 'El nombre "Lola" está grabado dentro de él. ¿Por qué lo habrá tirado?';
                     break;
            // Nada:
            default: name = '-';
                     desc = '-';
                     break;
        }
        return {name, desc};
    }
}