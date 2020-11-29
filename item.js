export default class Item extends Image
{
    constructor(scene, x, y, ID)
    {
        switch(ID)
        {
            // Objetos referentes a las misiones:
            case 1: name = 'Dinamita'; desc = 'Estos explosivos son más potentes de lo que parece...'; texture = '';
                break;
            case 2: name = 'Alfombra barata'; desc = 'Luce con pelusillas. Parece desgastada, pero servirá.'; texture = '';
                break;
            case 3: name = 'Alfombra persa'; desc = 'Preciada alfombra con muchos estampados. Su calidad es notable, aunque cuesta más de lo que debería...'; texture = '';
                break;
            case 4: name = 'Cojín persa'; desc = 'Mullido, cómodo y colorido. ¿Quién se resistiría a adquirirlo a tan buen precio?'; texture = '';
                break;
            case 5: name = 'Carteles de “Se Busca”'; desc = 'El retrato es idéntico al del fugitivo.'; texture = '';
                break;
            case 6: name = 'Carteles feriales'; desc = 'Informan de la llegada de la feria a la ciudad.'; texture = '';
                break;
            case 7: name = 'Carteles cuestionables'; desc = 'Pancartas similares a las propagandísticas del régimen. Hay algo raro en ellas.'; texture = '';
                break;
            case 8: name = 'Cepillo y Jabón'; desc = 'Funcionan a la perfección para quitar las pintadas.'; texture = '';
                break;
            case 9: name = 'Tinte'; desc = 'Si cubres con esto la pintada, quizá no se note el dibujo.'; texture = '';
                break;
            case 10: name = 'Cerillas y aceite'; desc = 'Permiten prender fuego a prácticamente todo.'; texture = '';
                break;
            case 11: name = 'Bolsa de dinero'; desc = 'Gran bolsa llena de dinero.'; texture = '';
                break;
            case 12: name = 'Monedas'; desc = 'Unas pocas monedas.'; texture = '';
                break;
            case 13: name = 'Carta'; desc = 'Es de mala educación abrirla si no es para ti. ¿Qué pondrá dentro?'; texture = '';
                break;
            // Objetos misceláneos:
            case 14: name = 'Diario de Paca'; desc = 'Contiene toda la dura vida de Paca.'; texture = '';
                break;
            case 15: name = 'Fotografía de Leandro Gado'; desc = 'Se le ve muy feliz. ¿Quién es su amigo? No le has visto en toda la ciudad.'; texture = '';
                break;
            case 16: name = 'Oso de peluche de Sona'; desc = 'Te lo ha dado con todo su corazón. Tiene un gran valor sentimental para ella.'; texture = '';
                break;
            case 17: name = 'Reliquia extraña'; desc = 'Supuestamente otorga “vitalidad”, aunque no notas nada.'; texture = '';
                break;
            case 18: name = 'Anillo'; desc = 'El nombre “Lola” está grabado dentro de él. ¿Por qué lo habrá tirado?'; texture = '';
                break;
            // Nada:
            default: name = '-'; desc = '-'; texture = '';
                break;
        }
        
        super(scene, x, y, texture)
        this._name = name;
        this._desc = desc;
    }

}