# Regime Police

Repositorio -> https://pablos16.github.io/

Organización y seguimiento -> https://www.pivotaltracker.com/n/projects/2470816

# Arquitectura UML
![UML FInal - MD - 1](https://user-images.githubusercontent.com/62879607/105023554-65afd000-5a4b-11eb-84e5-9a6540ce2b2f.png)
![UML FInal - MD - 2](https://user-images.githubusercontent.com/62879607/105023610-76f8dc80-5a4b-11eb-8e40-4b2121f627b5.png)
![UML FInal - MD - 3](https://user-images.githubusercontent.com/62879607/105023616-795b3680-5a4b-11eb-840c-e645e4e43566.png)
![UML FInal - MD - 4](https://user-images.githubusercontent.com/62879607/105023626-7ceebd80-5a4b-11eb-8421-d4d73b498eb9.png)
![UML FInal - MD - 5](https://user-images.githubusercontent.com/62879607/105023633-7eb88100-5a4b-11eb-8566-d8297ba93f34.png)
![UML FInal - MD - 6](https://user-images.githubusercontent.com/62879607/105023648-82e49e80-5a4b-11eb-9c70-1c1e241b660a.png)

# Documento de diseño de videojuego

# **Regime Police**

Versión del 17/1/2021

**Autores:**

Javier Rubio Moreno

Nicolás Rosa Caballero

Samuel Blázquez Martín

Pablo Sánchez Cuadrado

# Resumen

**Género:** RPG Narrativo.

**Modos:** Un jugador.

**Público:** Usuarios mayores de 14 años.

**Plataformas:** Navegadores web.

**Objetivo:** Tomar el papel de un policía en la capital de un país gobernado dictatorialmente por un tirano, obedeciendo las directrices de los superiores y al mismo tiempo tratando de no convertirse en objetivo de la revolución contra el régimen que en ciernes tendrá lugar.

# Descripción

Regime Police cuenta la historia de un policía de un régimen dictatorial a quien le ha sido encomendada la misión de frenar la ola revolucionaria que supuestamente va a armarse en pocos días en contra del Dictador. Para ello, tendrá que investigar a los supuestos cabecillas y buscar información para poder arrestarlos y preservar el régimen.

El policía puede ir escogiendo a lo largo de la historia a qué bando apoyar verdaderamente intentando no llamar mucho la atención para evitar ser asesinado por el bando contrario.

# Interfaz

**Controles:**

Se juega con teclado y ratón:

- **W, A, S, D**  → movimiento; opción de diálogo superior/inferior
- **E** → interactuar; seleccionar diálogo; recoger
- **Click Izquierdo** → manejar inventario; desplegar/plegar misiones
- **F** →	alternar pantalla completa
- **M** →	abrir/cerrar menú emergente

**GUI:**

Menú principal:

Aparece al iniciar el juego e incluye su nombre, así como un botón que permite comenzar una partida y otro que muestra los controles.

Interfaz de juego:

- Inventario: Aparece en el borde izquierdo de la pantalla. Permite al jugador ver los objetos recogidos, así como tirarlos, usarlos, intercambiarlos de posición y leer información acerca de los mismos.

- Barra de alineamiento: Barra vertical visible en la esquina superior derecha que posee un indicador horizontal que fluctúa de arriba a abajo. Indica la afinidad del jugador a cada uno de los bandos

- Lista de misiones: Cuaderno de notas situado en la esquina inferior derecha que muestra los títulos de las misiones del día y su nivel de compleción actual.

- Interfaz de diálogo: Cuando el jugador interactúa con un personaje, se muestra en esta interfaz localizada en la parte inferior de la pantalla la conversación y las opciones a escoger.

- Menú emergente: Aparece en el borde derecho de la pantalla. Permite al jugador controlar el volumen de la música y de los efectos de sonido y regresar al menú principal.

Menú de derrota:

Aparece al perder la partida. Muestra una escena con el desenlace desafortunado del policía y un botón que devuelve al jugador al menú principal. La escena posee dos variantes según cual sea el bando afín.

Menú de victoria:

Aparece al ganar la partida. Muestra una escena con un final victorioso para el jugador y un botón que devuelve al jugador al menú principal. La escena posee dos variantes según cual sea el bando afín.

# Jugabilidad

**Mecánicas:**

- **Días:**

La partida se divide en tantos niveles como días transcurren en la trama del juego. Cada día se le asignan al jugador 5 misiones que debe completar para terminar su turno y pasar al siguiente día. Tras transcurrir todos los días, el juego finaliza. El primer día es un tutorial que muestra la llegada del policía a la ciudad y ayuda al usuario a familiarizarse con el entorno.

- **Barra de alineamiento:**

Esta barra representa la reputación del policía hacia los demás. En un extremo de la barra se sitúan los ciudadanos, y en el otro los superiores y el dictador. La barra contiene un icono que se desplaza hacia uno u otro lado en función del bando al que se tiene mayor afinidad. Por ello, apoyar a un bando implica necesariamente alejarse del otro. Si el indicador de la barra alcanza el final de su recorrido por cualquiera de los dos lados el jugador pierde la partida.

- **Misiones:**

Las misiones son las tareas que le son encomendadas al policía y se dividen en una serie de pasos. Cuando se completan todos los pasos de una misión, esta se da por terminada. Es necesario completar todas las misiones de un día para pasar al siguiente. Esto puede hacerse de dos formas: obedeciendo al régimen o conspirando contra él. Dependiendo del modo en el que se obre para realizar cada paso de una misión, el indicador de la barra de alineamiento avanzará hacia el lado que corresponda. Las misiones correspondientes a cada día (siempre un total de 5), son preconfiguradas para siempre ser las mismas.

- **Interacción con personajes y objetos:**

El jugador puede acercarse a los ciudadanos para conversar con ellos, accediendo a una interfaz de diálogo donde podrá (en ocasiones) elegir qué decir. Esto le permite investigar y obtener/suministrar la información que algunas misiones precisan. La interacción con un personaje también puede afectar al alineamiento en algunos casos.
Existen objetos que pueden ser recogidos, examinados, usados y tirados por el jugador. Estos aportarán valor estético y desbloquearán nuevas opciones de diálogo con ciudadanos para poder progresar en la trama. Los personajes pueden dar algunos objetos al jugador, así como recoger otros.

**Dinámica:**

En una partida típica, cada día el jugador sale de su casa, recibe sus tareas en el castillo y va por la ciudad tratando de completarlas. Para cada misión, piensa sobre la manera en la que desea realizar cada uno de sus pasos o trata de averiguar cuáles son las alternativas con el fin de definir su camino y evitar alinearse claramente con los extremos régimen-pueblo. También explora los alrededores, encuentra objetos e interroga a otros personajes para recibir más información. Tras finalizar sus labores, el jugador se dirige a la casa del protagonista para empezar un nuevo día.

El tiempo estimado para completar un día se considera entre 10 y 15 minutos.

El juego se considera ganado si el jugador completa todos los días en el puesto hasta que tiene lugar el levantamiento sin favorecer claramente a ninguno de los bandos, y se pierde cuando la barra de alineamiento se posiciona en uno de los dos extremos antes de que estalle la revolución.

Al ganar se muestra al jugador el menú de victoria, que refleja lo que acontece tras el último día. La escena varía dependiendo del extremo al que más se acerque la barra de alineamiento al final del juego. Además, aparecerá un mensaje diferente en cada variante.

Al perder se muestra al jugador el menú de derrota, que explica cómo el protagonista no consigue cumplir su cometido. Existen dos variantes de la escena (con mensajes diferentes) dependiendo del extremo al que se haya llegado.

**Estética:**

El juego está ambientado en la capital de un país bajo un régimen autoritario y se inspira en la obra literaria titulada “Tirano Banderas”, que fue escrita por Ramón María del Valle-Inclán.

El empleo de texturas de baja resolución ha permitido ambientar tanto el entorno de juego como sus elementos de un modo minimalista, otorgando mayor versatilidad al moldearlo y haciendo que, junto con la perspectiva “TopDown”, el jugador no pierda tiempo en los detalles y no tenga problemas al navegar por él.

La música evoca un ambiente rural que sumerge al jugador en el mundo del juego y los efectos de sonido “retro” acompañan al estilo visual del juego.

# Contenido

**Escenarios:**

-(Rojo) Casa del protagonista: Todos los días empiezan y acaban en su interior. Es el lugar donde ocurre el cambio de nivel.

-(Naranja) Casa de Leandro: Casa en la que vive el amigo del protagonista. El jugador puede acceder dentro de ella.

-(Amarillo) Castillo de la ciudad: Fortaleza donde reside el tirano y sus más importantes secuaces. Dentro de él se asignan las misiones del día al jugador.

-(Verde claro) Taberna: Concurrido bar en la zona pobre de la ciudad. Lugar de trabajo y residencia de la familia Ramírez. El jugador tiene la posibilidad de entrar en este edificio.

-(Verde) Embajada: Edificio emblemático situado cerca del castillo. Lugar de trabajo y residencia de la familia López. Se puede acceder al interior.

-(Azul cian) Tienda: Negocio del empeñista donde las familias más pudientes acostumbran a comprar exóticos artículos. Es posible entrar en ella.

-(Azul) Carpas feriales: Cuando la feria llega, suele ser el lugar más activo de la capital al ser el centro del entretenimiento y la sede central del contrabando.

-(Azul oscuro) Barrio rico: amplio ensanche de grandes residencias y cuidados caminos cercano a la costa. En este sitio el jugador puede acceder al interior de la casa de la familia Mento.

-(Morado) Barrios pobres: Conglomerado de austeras y deterioradas casas al sureste de la ciudad. Conforma la mayoría de viviendas del lugar.

-(Rosa) Iglesia: Lugar de culto para los ciudadanos y de trabajo para el cura.

-(Magenta) Fortín: Antigua construcción utilizada a modo de cárcel por el régimen dictatorial.

-(Blanco) Parque: Antes era propiedad privada de la familia Garte, pero tras la muerte de su marido Paca Garte decidió convertirlo en un espacio público. Es posible entrar en la casa de Paca.

-(Gris) Bosque y acantilado: Área umbría al este de la capital donde reside el anciano solitario. Los rebeldes se suelen esconder en ella debido a la alta densidad arbórea.

-(Marrón) Pantano: Región húmeda situada al sur donde se encuentra la mina de la ciudad, actualmente en desuso y convertida en una base improvisada de la rebelión.

![EmvJnIPKmFc0qlh-Hfnq64g-918YFxD0PqiR9TQpx3rE1uynHxCzEhkiLex0A80VBkla7AKfoQeJdMZyPYw9bAw6_nnoRpwuoPdd2](https://user-images.githubusercontent.com/62879607/104857291-9d1d6000-5917-11eb-8435-918341b981f6.png)

*Esquema de ubicaciones*

**Personajes:**

Árbol Genealógico:

- **Policía del Régimen:**

Protagonista de la trama y controlado por el jugador. Ha sido destinado a un nuevo puesto en la capital como reemplazo de un anterior oficial que ha sido asesinado.

- **Dictador Reltih Floda:**

Rudo, narcisista y vanidoso tirano que gobierna el país. No tiene intenciones ocultas, simplemente le encanta gobernar a su modo la región, ser halagado y admirar sus propios méritos.

- **Coronel:**

Uno de los mejores amigos del dictador. Ha sido “elegido” por el tirano para llevar la comisaría y liderar a los policías del régimen. Planea esperar al mejor momento para asesinar al dictador y apoderarse del país. No se fía de nadie, y menos del nuevo policía.

- **Leandro Gado:**

Particular individuo con mayores preocupaciones sobre el país que la mayor parte de la ciudadanía. Eufórico y siempre lleno de energía, conoce al policía desde el primer día y se hacen grandes amigos. No tiene familia: nunca ha tenido mujer porque es un hombre muy ocupado y sus padres fueron fusilados por su presunta relación con una revolución.

- **Tabernera Ramírez:**

Mujer jovial, civilizada y extrovertida. Es el centro de los rumores de la ciudad y conoce los datos más secretos acerca de sus habitantes. Tiene una personalidad muy fuerte pero mantiene sus formas. Se compadece de la familia Garte, con quienes se lleva muy bien por haberla ayudado mucho en malos momentos.

- **Tabernero Ramírez:**

Alcohólico que acostumbra a empeorar las situaciones cada vez que habla. En la taberna, no trabaja tanto como su mujer, quien le trata de controlar rigurosamente.

- **Paca Garte:**

Mujer cuyo marido murió en un accidente y ha de cuidar sola de su hija. Tiene una personalidad muy fuerte y no abandonará sus principios. Rechazó tener una cita con el Dictador, quien ahora planea deshacerse de ella.

- **Sona Garte (5 años):**

Hija de Paca Garte. Quiere ser policía del régimen para hacer justicia, ya que su padre murió injustamente. No es consciente de que los policías han de hacer lo que el régimen les dictamine.

- **Empeñista:**

Tacaño dueño de la tienda de empeños de la ciudad. Siempre compra artículos por el menor precio posible para luego venderlos a precios desorbitados. Está muy enfadado con la dictadura porque los precios han subido mucho debido a la autarquía. Vive solo y no busca pareja, ya que le parece un gasto innecesario de dinero.

- **Carcelero Mento:**

Desmotivado y cansado carcelero de la ciudad. No le gusta su trabajo, pero no hace nada al respecto. Trabaja casi todo el día y no sabe si detesta más vigilar la cárcel o estar en su casa. No aguanta a su mujer (con quien discute todo el rato) y siempre que puede se escapa a trabajar o va a la taberna a beber con el tabernero.

- **Lola Mento:**

Mujer del Carcelero y ama de casa frustrada. Es una revolucionaria activa, así que trata de reñir constantemente con su marido para que esté el mayor tiempo posible fuera de casa y no se entere.

- **Señorita Mento:**

Interesada y repelente hija del carcelero. Descubrió la ideología revolucionaria de su madre y se aprovecha de ello para hacerle chantaje, consiguiendo no tener que ayudar a limpiar la casa ni lavar la ropa a cambio de no descubrirla. Tiene iniciativa y desea poder realizar las "labores de los hombres", aunque no quiere acabar igual que su padre.

- **Anciano Solitario:**

Hombre mayor que reside solo en el bosque de las afueras de la ciudad. Apoya a la acción revolucionaria y suele esconder a los revolucionarios que son buscados por la ley.Le da igual perder la vida con tal de hacer el bien.

- **Cura:**

Cínico manipulador que tiene "ganadas" a todas las mujeres del pueblo con sus sermones, que emplea para enaltecer al régimen.

- **Embajador López:**

Inteligente diplomático. Siempre apuesta por la opción que más le beneficie, que tiende a ser el apoyo a la dictadura. Como no quiere perder su puesto, comete las acciones ilícitas necesarias para librarse de la revolución.

- **Señora López:**

Ama de casa muy manipuladora. Apoya a su marido e intenta enterarse de todo lo que pueda para contárselo y frustrar el plan.

- **Señorita López (15 años):**

Hija de los López. Todo lo que le cuentan sus amigas (descendientes todas de padres que apoyan la dictadura) se lo comunica a su madre.

- **Loco:**

Todo el mundo le odia porque nunca para de decir "¡Cuá! ¡Cuá!". La única razón por la que el tirano no le ha ejecutado es porque disfruta contemplar cómo vuelve loca a la gente que le circunda. Nadie sabe nada sobre él. Ni siquiera se conocen sus orígenes.

- **(El) Feriante:**

Periódicamente trae su carpa a la ciudad. Mientras gane dinero le da igual a quién apoyar, así que como el dictador le deja en paz, no se queja.

- **(La) Feriante:**

Mujer del feriante. Es en realidad una contrabandista de armas que usa la feria como tapadera. Actualmente vende armas a la revolución a espaldas de su marido.

- **Hijo Feriante (16 años):**

Analfabeto poco agraciado que intenta "ligar" siempre con las chicas en la feria.

Relaciones Sociales:

- **Coronel:**

Se lleva muy bien con la familia López.

Se lleva bien con el Cura.

Se lleva mal con el resto de personajes.

- **Leandro Gado:**

Se lleva muy bien con la familia Garte y el Anciano Solitario.

Se lleva bien con los Feriantes, los Taberneros y el Empeñista.

Se lleva mal con el Cura.

Se lleva muy mal con la familia López.

- **Tabernera Ramírez:**

Se lleva muy bien con la familia Garte.

Se lleva bien con la familia López.

Se lleva mal con el Carcelero.

Se lleva muy mal con el Empeñista.

- **Tabernero Ramírez:**

Se lleva muy bien con el Carcelero.

Se lleva bien con la familia Garte, López y con los Feriantes.

- **Paca Garte:**

Se lleva muy bien con la Tabernera.

Se lleva bien con Leandro Gado.

Se lleva mal con el Coronel y el Embajador.

Se lleva muy mal con el Reltih Floda.

- **Sona Garte:**

Se lleva bien con todos.

- **Empeñista:**

Se lleva mal con los feriantes.

Se lleva muy mal con la familia Ramírez.

- **Carcelero Mento:**

Se lleva muy bien con el Tabernero.

Es neutro con todo el mundo excepto con el Tabernero y la Tabernera.

Se lleva mal con la Tabernera.

- **Lola Mento:**

Se lleva muy bien con Leandro Gado.

Se lleva bien con la Tabernera.

Se lleva mal con el Cura.

- **Señorita Mento:**

Se lleva bien con Sona

Se lleva mal con el hijo de los feriantes

Se lleva muy mal con su madre

- **Anciano solitario:**

Solo se lleva bien con revolucionarios.

- **Cura:**

Se lleva muy bien con Reltih Floda y el Coronel.

Se lleva bien con el Embajador.

Se lleva muy mal con Leandro Gado.

- **Familia López:**

Se llevan muy bien con el Coronel.

Se llevan bien con el Cura.

Se llevan mal con la Tabernera y el Empeñista.

Se llevan muy mal con Leandro Gado.

- **Loco:**

Es neutral con todos.

- **Feriantes:**

Se llevan muy bien con el Loco.

Son neutrales con los Ramírez.

Se llevan mal con los López.

Se llevan muy mal con el Empeñista.

En el juego aparecen también algunos personajes adicionales no tan relevantes con el fin de mejorar la ambientación. El jugador interactúa de una forma más limitada con ellos.

**Historia:**

"Tras el rechazo hacia el nuevo presidente por parte la mayor parte de la población del país dos lustros atrás, un militar dio el golpe de estado que llevaba preparando durante años. Ha pasado tanto tiempo desde el comienzo de una dictadura que propaga el caos y siembra el miedo en todo aquel que piense de forma diferente que con los años se ha ido formando un movimiento revolucionario que espera el momento oportuno para alzarse y derrocar al tirano. Tras el último asesinato en la capital de un agente del régimen por parte de miembros de la revolución, un nuevo policía llega a la ciudad y se pone al mando del dictador. Sus decisiones serán cruciales, ya que definirán el curso de la historia y determinarán si la revolución prevalece o fracasa."

**Misiones:**

1. Entregar carteles feriales a los feriantes. Alternativa: entregar carteles incorrectos.

2. Adquirir una alfombra persa en una tienda. Alternativa: comprar otro objeto.

3. Recoger la opinión de Lola Mento sobre la situación del país. Alternativa: anotar sólo los comentarios positivos.

4. Dispersar aglomeraciones. Alternativa: permitirlas por el momento.

5. Arrestar a la viuda que rechazó tener una cita con el presidente. Alternativa: dejarla en paz tras descubrir su historia.

6. Encontrar y detener al individuo del pañuelo rojo. Alternativa: no arrestarlo.

7. Encontrar y detener a Lola Mento. Alternativa: ayudarla a fugarse.

8. Descubrir el paradero de la feriante. Alternativa: alegar que se ha descubierto su fuga hacia el bosque.

9. Cobrar por completo la deuda de los feriantes. Alternativa: cobrar solo una parte debido a su pobreza.

10. Destruir la entrada de la mina donde se refugia un grupo revolucionario. Alternativa: encender un fuego para que el humo haga huir a los revolucionarios del escondite.

11. Familiarizarse con el entorno y los lugareños.

**Objetos:**

Hay objetos con los que se puede interactuar. Unos son necesarios para completar las tareas del policía, mientras que otros aportan valor estético y modelan aspectos de los personajes de la trama. El jugador puede recoger, usar y dejar objetos.

Objetos referentes a las misiones:

- Dinamita: Estos explosivos son más potentes de lo que parece...

- Alfombra barata: Luce con pelusillas. Parece desgastada, pero servirá.

- Alfombra persa: Preciada alfombra con muchos estampados. Su calidad es notable, aunque cuesta más de lo que debería...

- Cojín persa: Mullido, cómodo y colorido. ¿Quién se resistiría a adquirirlo a tan buen precio?

- Carteles de “Se Busca”: El retrato es idéntico al del fugitivo.

- Carteles feriales: Informan de la llegada de la feria a la ciudad.

- Carteles cuestionables: Pancartas similares a las propagandísticas del régimen. Hay algo raro en ellas.

- Cepillo y jabón: Funcionan a la perfección para quitar pintadas.

- Tinte: Si cubres con esto una pintada, quizá no se note el dibujo.

- Cerillas y aceite: Permiten prender fuego a prácticamente todo.

- Bolsa de dinero: Gran bolsa llena de dinero.

- Monedas: Unas pocas monedas.

- Carta: Es de mala educación abrirla si no es para ti. ¿Qué pondrá dentro?

Objetos misceláneos:

- Diario de Paca: Contiene toda la dura vida de Paca.

- Fotografía de Leandro Gado: Se le ve muy feliz. ¿Quién es su amigo? No le has visto en toda la ciudad.

- Oso de peluche de Sona: Te lo ha dado con todo su corazón. Tiene un gran valor sentimental para ella.

- Reliquia extraña: Supuestamente otorga “vitalidad”, aunque no notas nada.

- Anillo: El nombre “Lola” está grabado dentro de él. ¿Por qué lo habrá tirado?

# Referencias

[Tirano Banderas - Ramón María del Valle-Inclán](https://es.wikipedia.org/wiki/Tirano_Banderas_(novela))

[Reigns](https://store.steampowered.com/app/474750/Reigns/)

[Papers, Please](https://store.steampowered.com/app/239030/Papers_Please/)
