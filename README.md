# Regime Police

Repositorio -> https://pablos16.github.io/
Organización y seguimiento -> https://www.pivotaltracker.com/n/projects/2470816

# Documento de diseño de videojuego

# **Regime Police**

Versión del 24/11/2020

# Tabla de contenido

## **Resumen**

## **Descripción**

## **Interfaz**

  
### Controles
  
### GUI

## **Jugabilidad**

  
### Mecánicas
  
### Dinámica
  
### Estética

## **Contenido**

  
### Escenarios
  
### Personajes
  
### Historia
  
### Misiones
  
### Objetos

## **Referencias**

**Autores:**

Javier Rubio Moreno

Nicolás Rosa Caballero

Samuel Blázquez Martín

Pablo Sánchez Cuadrado

# Resumen

| **Género** : Aventura **Subgénero** : Aventura Gráfica con vista TopDown | **Modos** : Un jugador |
| --- | --- |
| **Público** : Usuarios mayores de 10 años | **Plataformas** : Navegadores web |
| **Objetivo:** Tomar el papel de un policía en la capital de un país gobernado dictatorialmente por un tirano, obedeciendo las directrices de los superiores y al mismo tiempo tratando de no convertirse en objetivo de la revolución contra el régimen que en ciernes tendrá lugar. |
|
| |

# Descripción

Regime Police cuenta la historia de un policía de un régimen dictatorial a quien le ha sido encomendada la misión de frenar la ola revolucionaria que supuestamente va a armarse en 5 días en contra del Dictador. Para ello, tendrá que investigar a los supuestos cabecillas y buscar información para poder arrestarlos y preservar el régimen.

El policía puede ir escogiendo a lo largo de la historia a qué bando apoyar verdaderamente intentando no llamar mucho la atención para evitar ser asesinado por el bando contrario.

# Interfaz

**Controles:**

Se juega con teclado y ratón:

- **W, A, S, D**      ---> movimiento; opción de diálogo superior/inferior
- **E**               ---> interactuar; seleccionar diálogo
- **Click Izquierdo** ---> manejar inventario; desplegar/plegar misiones

**GUI:**

Menú principal:

Aparece al iniciar el juego e incluye su nombre, así como un botón que permite comenzar una partida y otro que muestra los controles.

Interfaz de juego:

Inventario : Está visible siempre en la esquina inferior izquierda. Permite al jugador gestionar los objetos que porta, y leer la información de los mismos.

Barra de alineamiento: Barra horizontal visible en la esquina superior izquierda con una linea vertical que fluctúa de derecha a izquierda.

Notas: Hoja de papel presente en la esquina inferior derecha que muestra la interfaz de misiones.

Interfaz de misiones:

Lista de misiones: Se encuentran a la izquierda de la interfaz y muestra información de las misiones del día.

Mapa: Aparece en la derecha de la interfaz con una leyenda para orientar al jugador.

Interfaz de diálogo:

La conversación y las opciones a escoger aparecen en la parte inferior de la pantalla.

# Jugabilidad

**Mecánicas:**

- **Días:**

La partida se divide en 5 días que transcurren en la trama del juego. Cada día el jugador tiene asignadas 5 misiones que debe completar para terminar su turno y pasar al siguiente día. Tras transcurrir 5 días, el juego finaliza. Existe un &quot;día 0&quot; a modo de tutorial, que muestra la llegada del policía a la ciudad.

- **Barra de alineamiento:**

Esta barra representa la reputación del policía hacia los demás. En un extremo de la barra se sitúan los ciudadanos, y en el otro los superiores y el dictador. La barra contiene un icono que se desplaza hacia uno u otro lado en función del bando al que se tiene mayor afinidad. Por ello, apoyar a un bando implica necesariamente alejarse del otro. El icono se desplaza tras finalizar cada misión dependiendo de la forma en la que se ha completado. Si el indicador de la barra alcanza el final de su recorrido por cualquiera de los dos lados el jugador pierde la partida.

- **Misiones:**

Las misiones son las tareas que le son encomendadas al policía. Es necesario completar todas las misiones de un día para pasar al siguiente. Se pueden completar de dos formas: obedeciendo incondicionalmente o conspirando e incumpliendo las &quot;máximas&quot; de su oficio. Dependiendo del modo en el que se complete, una misión hará avanzar el indicador de la barra de alineamiento al lado que corresponda. Según su ponderación, distinguimos dos grupos: normales e importantes. Las misiones importantes desplazarán el icono una mayor cantidad de unidades. Algunas misiones afectan a la historia. Las misiones correspondientes a cada día (siempre un total de 5), son preconfiguradas para siempre ser las mismas.

- **Interacción con personajes y objetos:**

El jugador puede acercarse a los ciudadanos para conversar con ellos, accediendo a una interfaz de diálogo donde podrá elegir qué decir. Esto le permite investigar y obtener la información que algunas misiones precisan.

Algunos objetos pueden ser examinados, recogidos y/o usados por el jugador. Como en el caso anterior, aportarán potenciales pruebas y desbloquearán nuevas opciones de diálogo con ciudadanos.

**Dinámica:**

En una partida típica, cada día el jugador sale de su casa, recibe sus tareas en el castillo y se dirige a la ciudad a completarlas. Para cada tarea, contempla las opciones a su alcance y juzga el modo en el que intentará completarlas. Posteriormente comienza a explorar los alrededores para cumplirlas, recabando información de lugareños y objetos encontrados.

El tiempo estimado para completar un día se considera entre 10 y 15 minutos.

El juego se considera ganado si el jugador completa 5 días en el puesto sin favorecer claramente a ninguno de los bandos, y se pierde cuando la barra de alineamiento se posiciona en uno de los dos extremos.

Al ganar se muestra al jugador una secuencia que refleja lo que acontece tras el quinto día. La secuencia varía dependiendo del extremo al que más se acerque la barra de alineamiento al final del juego. Además, aparecerá un mensaje diferente en cada final.

Al perder se muestra al jugador otra secuencia, que explica cómo el protagonista no consigue cumplir su cometido.

**Estética:**

Se juega en perspectiva TopDown.

Las texturas son pixeladas y minimalistas.

# Contenido

**Escenarios:**

![mapa](https://user-images.githubusercontent.com/62748720/100088342-441dd800-2e50-11eb-8f21-2f5eff042412.png)

 
![#cc0000](https://via.placeholder.com/15/CC0000/000000?text=+)**Casa del protagonista**

![#1155cc](https://via.placeholder.com/15/1155cc/000000?text=+)**Castillo de la ciudad, donde reside el tirano y sus más importantes secuaces**

![#f1c232](https://via.placeholder.com/15/f1c232/000000?text=+) **Cárcel**

 ![#30ff85](https://via.placeholder.com/15/30ff85/000000?text=+)**Comisaría**

 ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+)**Taberna**

 ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+)**Iglesia**

 ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+)**Embajada**

 ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+)**Barrio rico**

 ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+)**Barrios pobres**

![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+)**Barrios muy pobres**

 ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+)**Parque**

 ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+)**Tienda**

 ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+)**Carpa ferial**

 ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+)**Bosque**

 ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+)**Acantilado**

 ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+)**Pantano**

Es posible entrar parcial o totalmente en todos los lugares cerrados salvo la mayor parte de edificios comunes.

Existe para cada vivienda una diferenciación en la calidad arquitectónica relativa a la distancia entre el edificio y el castillo del dictador.

**Personajes:**

Árbol Genealógico:

- **Policía del Régimen:**

Protagonista de la trama y zcontrolado por el jugador. Ha sido destinado a un nuevo puesto en la capital como reemplazo de un anterior oficial que ha sido asesinado.

- **Dictador Reltih Floda:**

Rudo, narcisista y vanidoso tirano que gobierna el país. No tiene intenciones ocultas, simplemente le encanta gobernar a su modo la región, ser halagado y admirar sus propios méritos. Su castillo está repleto de imágenes suyas.

- **Coronel:**

Uno de los mejores amigos del dictador. Ha sido, por obra del tirano, &quot;elegido&quot; para llevar la comisaría y liderar a los policías del régimen. Planea esperar al mejor momento para asesinar al dictador y apoderarse del país. Además, trata de entorpecer la labor del protagonista aprovechando toda ocasión posible para incriminarlo y destinarlo a la cárcel.

- **Leandro Gado:**

Particular individuo con mayores preocupaciones sobre el país que la mayor parte de la ciudadanía. Eufórico y siempre lleno de energía, conoce al policía desde el primer día y se hacen grandes amigos. No tiene familia: nunca ha tenido mujer porque es un hombre muy ocupado y sus padres fueron fusilados por su presunta relación con una revolución.

- **Tabernera Ramírez:**

Mujer jovial, civilizada y extrovertida. Es el centro de los rumores de la ciudad y conoce los datos más secretos acerca de sus habitantes. Tiene una personalidad muy fuerte pero mantiene sus formas. Se compadece de la familia Garte, con quienes se lleva muy bien por haberla ayudado mucho en malos momentos. Es la &quot;jefa&quot; en la taberna.

- **Tabernero Ramírez:**

Alcohólico que acostumbra a empeorar las situaciones cada vez que habla. Su mujer le trata de controlar rigurosamente.

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

Interesada y repelente hija del carcelero. Descubrió la ideología revolucionaria de su madre y se aprovecha de ello para hacerle chantaje, consiguiendo no tener que ayudar a limpiar la casa ni lavar la ropa a cambio de no descubrirla. Tiene iniciativa y desea poder realizar las &quot;labores de los hombres&quot;, aunque no quiere acabar igual que su padre.

- **Anciano Solitario:**

Hombre mayor que reside solo en el bosque de las afueras de la ciudad. Apoya a la acción revolucionaria y suele esconder a los revolucionarios que son buscados por la ley.Le da igual perder la vida con tal de hacer el bien.

- **Cura:**

Cínico manipulador que tiene &quot;ganadas&quot; a todas las mujeres del pueblo con sus sermones, que emplea para enaltecer al régimen.

- **Embajador López:**

Inteligente diplomático. Siempre apuesta por la opción que más le beneficie, que tiende a ser el apoyo a la dictadura. Como no quiere perder su puesto, comete las acciones ilícitas necesarias para librarse de la revolución.

- **Señora López:**

Ama de casa muy manipuladora. Apoya a su marido e intenta enterarse de todo lo que pueda para contárselo y frustrar el plan.

- **Señorita López (15 años):**

Hija de los López. Todo lo que le cuentan sus amigas (descendientes todas de padres que apoyan la dictadura) se lo comunica a su madre.

- **Loco:**

Todo el mundo le odia porque nunca para de decir &quot;¡Cuá! ¡Cuá!&quot;. La única razón por la que el tirano no le ha ejecutado es porque disfruta contemplar cómo vuelve loca a la gente que le circunda. Nadie sabe nada sobre él. Ni siquiera se conocen sus orígenes.

- **(El) Feriante:**

Periódicamente trae su carpa a la ciudad. Mientras gane dinero le da igual a quién apoyar, así que como el dictador le deja en paz, no se queja.

- **(La) Feriante:**

Mujer del feriante. Es en realidad una contrabandista de armas que usa la feria como tapadera. Actualmente vende armas a la revolución a espaldas de su marido.

- **Hijo Feriante (16 años):**

Analfabeto poco agraciado que intenta &quot;ligar&quot; siempre con las chicas en la feria.

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

**Historia:**

&quot;Tras el rechazo hacia el nuevo presidente por parte la mayor parte de la población del país dos lustros atrás, un militar dio el golpe de estado que llevaba preparando durante años. Ha pasado tanto tiempo desde el comienzo de una dictadura que propaga el caos y siembra el miedo en todo aquel que piense de forma diferente que con los años se ha ido formando un movimiento revolucionario que espera el momento oportuno para alzarse y derrocar al tirano. Tras el último asesinato en la capital de un agente del régimen por parte de miembros de la revolución, un nuevo policía llega a la ciudad y se pone al mando del dictador. Sus decisiones serán cruciales, ya que definirán el curso de la historia y determinarán si la revolución prevalece o fracasa.&quot;

**Misiones:**

- Logística y recados:

1. Entregar mensaje a \&lt;residente\&gt;. Alternativa: entregar el mensaje a la persona equivocada. [Misión importante]
2. Colocar carteles feriales en \&lt;zona\&gt;. Alternativa: colocar carteles incorrectos.
3. Adquirir \&lt;producto\&gt; en una tienda. Alternativa: comprar otro objeto.

- Mantenimiento e imagen:

1. Borrar pintadas callejeras en \&lt;zona\&gt;. Alternativa: utilizar el equipamiento erróneo y estropear aún más la calle.
2. Encontrar e informar sobre edificios o monumentos deteriorados. Alternativa: hablar con la feriante acerca del defecto.
3. Recoger la opinión popular acerca de \&lt;asunto\&gt;. Alternativa: anota sólo los comentarios positivos.
4. Dispersar aglomeraciones. Alternativa: permitirlas por el momento. [Misión importante]

- Investigación y crimen:

1. Arrestar al supuesto cabecilla de la revolución (Leandro Gado). Alternativa: ayuda a escapar al sujeto. [Misión importante]
2. Arrestar a la viuda que rechazó tener una cita con el presidente (que tiene una hija). Alternativa: ayuda a escapar al sujeto.
3. Encontrar y detener al individuo de \&lt;prenda\&gt; \&lt;color\&gt;. Alternativa: detener a la persona incorrecta.
4. Encontrar y detener a \&lt;individuo\&gt;. Alternativa: ayudar al individuo a fugarse.
5. Descubrir el paradero de \&lt;residente\&gt;. Alternativa: alegar que se ha descubierto la fuga del individuo hacia el bosque.
6. Cobrar por completo la deuda de \&lt;residente\&gt;. Alternativa: cobrar solo una parte debido a la pobreza del individuo.
7. Escoltar a los nuevos detenidos hacia la cárcel. Alternativa: no escoltar correctamente y permitir que un prisionero escape. [Misión importante]
8. Colocar carteles de &quot;Se busca&quot;. Alternativa: colocar carteles incorrectos.
9. Destruir la entrada de la mina donde se refugia un grupo revolucionario. Alternativa: encender un fuego que haga que el humo saque a todos los revolucionarios del escondite y huyan. [Misión importante]
10. Interrogar al Loco. Alternativa: pegarle una paliza.

- Tutorial:

1. Familiarizarse con el entorno y los lugareños. [Sin alternativa] [Sin ponderación]

**Objetos:**

Hay objetos con los que se puede interactuar que hacen referencia al marco circunstancial de los individuos circundantes: diarios, cartas, cuadros…

# Referencias

[Tirano Banderas - Ramón María del Valle-Inclán](https://es.wikipedia.org/wiki/Tirano_Banderas_(novela))

[Reigns](https://store.steampowered.com/app/474750/Reigns/)

[Papers, Please](https://store.steampowered.com/app/239030/Papers_Please/)
