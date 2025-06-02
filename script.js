// --- CONSTANTES Y ELEMENTOS DEL DOM ---
const mainTitleElement = document.getElementById('main-title');
const backToTopButton = document.getElementById('backToTop');
const postsGrid = document.getElementById('posts-grid');
const sortArrow = document.getElementById('sort-arrow');
const navLinks = document.querySelectorAll('#main-nav a[data-section]');
const footerNavLinks = document.querySelectorAll('footer a[data-section]');
const contentSections = document.querySelectorAll('.content-section');
const singlePostSection = document.getElementById('single-post');
const singlePostTitle = document.getElementById('single-post-title');
const singlePostDate = document.getElementById('single-post-date');
const singlePostCategory = document.getElementById('single-post-category');
const singlePostContent = document.getElementById('single-post-content');
const backToPostsButton = document.getElementById('back-to-posts');
const subscribeForm = document.getElementById('subscribe-form');
const subscribeStatus = document.getElementById('subscribe-status');
const currentYearSpan = document.getElementById('current-year');
const searchInput = document.getElementById('search-input');
const searchIcon = document.getElementById('search-icon');
const noResultsMessage = document.getElementById('no-results-message');
const imageGalleryGrid = document.getElementById('image-gallery-grid');
const noImageResultsMessage = document.getElementById('no-image-results-message');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeImageModal = document.getElementById('closeImageModal');
const stickerButton = document.getElementById('sticker-button');
const stickerArea = document.getElementById('sticker-area');
const achievementsButton = document.getElementById('achievements-button');
const achievementsModal = document.getElementById('achievements-modal');
const closeAchievementsModal = document.getElementById('close-achievements-modal');
const achievementsList = document.getElementById('achievements-list');
const topRightButtonsContainer = document.querySelector('.top-right-buttons');
const mobileSectionNav = document.querySelector('.mobile-section-nav');
const visitCounterElement = document.getElementById('visit-counter');
// --- CONSTANTES DE SUPABASE (Decláralas aquí, pero NO las inicialices todavía) ---
const SUPABASE_URL = 'https://hxeugrxmehmvzxcmbodd.supabase.co'; // Reemplaza con tu Project URL real
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4ZXVncnhtZWhtdnp4Y21ib2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4MTQwMDYsImV4cCI6MjA2NDM5MDAwNn0.xqo5Jai56bTpNu9Rjo45fcbCtuUjx1IfLmtid8HKalk'; // Reemplaza con tu anon public key real

let supabase;
// --- DATOS DE PUBLICACIONES (Contenido placeholder) ---
const publicaciones = [
     {
        id: 'razonabilidad-fe',
        titulo: 'La razonabilidad de la fe en Dios',
        fecha: '2025-04-22',
        resumen: 'Creer no es absurdo: es razonable y transformador. En esta catequesis, Benedicto XVI muestra cómo la fe y la razón no se contradicen...',
        imagen: 'https://i.postimg.cc/pXGwQH28/imagebene.png',
        contenido: `
            <div class="content-center">
                <strong><em>AUDIENCIA GENERAL</em></strong><br>
                <em>Sala Pablo VI</em><br>
                <em>Miércoles 21 de noviembre de 2012</em>
            </div>
            <p><img src="https://i.postimg.cc/pXGwQH28/imagebene.png" alt="Benedicto XVI" class="image-right-wrap">Queridos hermanos y hermanas:</p>
            <p>Avanzamos en este Año de la fe llevando en nuestro corazón la esperanza de redescubrir cuánta alegría hay en creer y de volver a encontrar el entusiasmo de comunicar a todos las verdades de la fe.</p>
            <p>Estas verdades no son un simple mensaje sobre Dios, una información particular sobre Él. Expresan el acontecimiento del encuentro de Dios con los hombres, encuentro salvífico y liberador que realiza las aspiraciones más profundas del hombre, sus anhelos de paz, de fraternidad, de amor. La fe lleva a descubrir que el encuentro con Dios valora, perfecciona y eleva cuanto hay de verdadero, de bueno y de bello en el hombre. Es así que, mientras Dios se revela y se deja conocer, el hombre llega a saber quién es Dios, y conociéndole se descubre a sí mismo, su proprio origen, su destino, la grandeza y la dignidad de la vida humana.</p>
            <p>En la catequesis de hoy quisiera detenerme en la razonabilidad de la fe en Dios. La tradición católica, desde el inicio, ha rechazado el llamado fideísmo, que es la voluntad de creer contra la razón. <em>Credo quia absurdum</em> (creo porque es absurdo) no es fórmula que interprete la fe católica. Dios, en efecto, no es absurdo, sino que es misterio. El misterio, a su vez, no es irracional, sino sobreabundancia de sentido, de significado, de verdad. Si, contemplando el misterio, la razón ve oscuridad, no es porque en el misterio no haya luz, sino más bien porque hay demasiada. Es como cuando los ojos del hombre se dirigen directamente al sol para mirarlo: sólo ven tinieblas; pero ¿quién diría que el sol no es luminoso, es más, la fuente de la luz? La fe permite contemplar el «sol», Dios, porque es acogida de su revelación en la historia y, por decirlo así, recibe verdaderamente toda la luminosidad del misterio de Dios, reconociendo el gran milagro: Dios se ha acercado al hombre, se ha ofrecido a su conocimiento, condescendiendo al límite creatural de su razón (cf. Conc. Ecum. Vat. II, Const. Dei Verbum, 13). Al mismo tiempo, Dios, con su gracia, ilumina la razón, le abre horizontes nuevos, inconmensurables e infinitos. Por esto, la fe constituye un estímulo para buscar siempre, para no detenerse jamás y no aquietarse nunca en el descubrimiento inagotable de la verdad y de la realidad. Es falso el prejuicio de algunos pensadores modernos, según los cuales la razón humana quedaría como bloqueada por los dogmas de la fe.</p>`,
        video: null,
        categoria: 'Espiritualidad'
     },
     {
        id: 'fe-ciencia-enemigos',
        titulo: '¿Son enemigos la fe y la ciencia?',
        fecha: '2025-03-20',
        resumen: 'Explorando la relación entre logos y espíritu, razón y fe, y desmintiendo el falso antagonismo entre ciencia y devoción.',
        imagen: 'https://i.postimg.cc/90bQYFbZ/image-TROSTE.png',
        contenido: `
            <p><img src="https://i.postimg.cc/90bQYFbZ/image-TROSTE.png" alt="Fe y Ciencia" class="image-left-wrap">La tradición filosófica ha entendido el término griego λόγος como razón, discurso, estudio o palabra. La expresión espíritu, por su parte, se liga al ámbito trascendental, que las religiones a lo largo y ancho del mundo han definido según sus parámetros; el cristianismo, para más señas, define el espíritu en dos vías: por un lado como la fuerza divina que mora en la carne (a veces de manera antagónica) y, por otro, como el elemento que distancia al hombre del animal, siendo el espíritu diferente al alma, gozando las bestias, las plantas y los humanos de esta, pues es el alma la que anima el cuerpo, es decir, la rosa posee un alma vegetal, el gato un alma animal y las gentes un alma y un espíritu.</p>
            <p>Así, ambos términos parecen antípodas. El logos se enmarca, desde tiempos de Heráclito, en el mundo racional, conceptual y terrenal. Designa, entre otras cosas, la ley universal del mundo físico y un conjunto de ideas. Es lo que diferencia a la persona del chimpancé: su capacidad de pensar ordenadamente, lógicamente. Desde esta perspectiva, la razón y la fe están en constante riña, como suele pregonarse en la opinión pública. Por ejemplo, se dice que la devoción es el resultado de la ignorancia y que la ciencia es dañina. Las sociedades cultas, entonces, son las descreídas y las fervientes son las tercermundistas. Esta tradición se encarna en el quehacer académico, por lo que, si hay un lugar con bastante fe en el mundo es la universidad, pues la mayoría dejan allí su fe. Es cada vez más común que, el creyente renuncie en el aula universitaria a sus dogmas.</p>
            <p>No obstante, este antagonismo es falso. El espíritu se hermana con la razón, de hecho, la razón habita en el espíritu y el espíritu se entiende a través de la razón. La filosofía, en aras del conocimiento ha desentramado los misterios divinos y, la fe, a la luz de la razón ha formulado sus verdades. De hecho, una fe sin razón es vacía, tradicionalismo puro y una razón sin fe es mero materialismo. No hablo de una fe puesta en esta o aquella divinidad, sino de una fe que se libera de lo mundano y alcanza el estrado de lo trascendente. La historia nos ha dado testimonio de varios pensadores que han desarrollado la ciencia, sin divorciarse de la fe.</p>
            <p>En este primer artículo, solo pretendo plantear la problemática que de aquí en adelante se tratará en cada una de las entregas, exponiendo textos racionales que pueden movernos a una reflexión espiritual y al contrario; revisando, también, la figura del padre Rafael García Herreros, un hombre de fe que apostó por las ciencias, fundando una universidad y varios colegios, siempre en la búsqueda de la verdad, que, en últimas, son la meta del logos y el espíritu.</p>`,
        video: null,
        categoria: 'Reflexión'
     },
     // *** NUEVA PUBLICACIÓN: Humanismo Cristiano ***
     {
        id: 'humanismo-cristiano',
        titulo: 'El Humanismo Cristiano',
        fecha: '2025-03-27',
        resumen: 'Una reflexión sobre la belleza, dignidad y potencial del ser humano desde la perspectiva cristiana, inspirada en palabras de Rafael García Herreros.',
        imagen: 'https://i.postimg.cc/QtkTvDSx/imageblne.png',
        contenido: `
            <p><img src="https://i.postimg.cc/QtkTvDSx/imageblne.png" alt="Humanismo Cristiano" class="image-left-wrap">¡Tú eres una belleza, oh hombre! ¡Tus ojos son el espejo donde se refleja un lejano paisaje! Tus oídos son el caracol donde se transforman los ruidos y se convierten en símbolos y en palabras. Tu boca es capaz de hablar lo más tierno, lo más profundo, lo más sutil. Tus manos son increíbles.</p>
            <p>Los griegos decían: “El hombre por las manos”. Tus manos embellecen al mundo. ¡Todas las ciudades, todos los museos, todos los caminos, todos los sembrados, todas las músicas, todas las máquinas fueron hechas por tus manos portentosas, oh hombre! Y tu inteligencia… Ella ha llenado la historia de poemas, de fórmulas matemáticas, de ciencias, de esculturas, de civilización.</p>
            <p>¡Yo te amo, te honro y casi te adoro! Te amo en tu belleza, en tu cuerpo y en tu alma; en tus pensamientos y en tus deseos; en tus ambiciones y en tus nostalgias; en tus triunfos y en tus derrotas. ¡Eres maravilloso, oh hombre! ¡Eres capaz del heroísmo, del amor, de la abnegación, de todo lo extraordinario! ¡Yo te amo, oh hombre, polvo sublime! Oh hombre bello y magnífico. Yo sé que tú eres poco inferior a los ángeles, que estás coronado de gloria y majestad. Eres signo de Dios. Eres la teofanía, más que el mar, más que el universo; eres tú, pequeño hombre, la presencia, la verdadera figura de Dios en la Tierra.</p>
            <p>Tú no sólo eres la medida de todo, sino el ideal de todo. En tu historia, hay uno maravilloso, uno absolutamente divino, que intensificó tu raza, tu aspecto, tu forma humana: ¡Fue Jesucristo! Yo pienso que no fue indigno de Dios el querer hacerse hombre. Tomar nuestra medida, conocer nuestra interioridad y querer sublimarnos casi a lo divino con su presencia entre nosotros. Yo quiero decirte, hombre, que he descubierto que el secreto para ser feliz es amarte. Y quisiera contarlo a todos. Y quisiera consagrar mi vida a tu servicio.</p>
            <p>Tú me has envuelto en el mismo y único amor de Dios. “Amarás al Señor, tu Dios, y a tu hermano el hombre”. Este es el mandato. Cuando estoy junto a ti, sé que estoy cerca de Dios. Todo cuanto hago por ti, hombre, lo hago por el eterno, por el infinito que es Dios. Cuando te amo, estoy auténticamente amando a Dios. Porque la expresión más auténtica de nuestro amor a Dios es nuestro amor al hombre. ¡Hombre! Hace mucho tiempo estoy cerca de ti y apenas ahora comprendo lo que tú eres. Nunca he mirado bien a tus ojos. Nunca he escuchado atentamente tus palabras. Nunca he pensado en lo que eres capaz.</p>
            <p>¡De mis labios no debe salir la palabra que te hiera, hombre! De mi inteligencia no debe brotar el pensamiento hostil a ti, que intente poner trabas en tu camino, en tu destino. En mi corazón, no guardaré resentimiento para ti, hombre. Quiero aprender a apreciarte, a honrarte, a ayudarte. Quiero aprender a mirarte no con indiferencia, no con desvío, no con envidia ni con disgustos, sino apasionadamente, con un amor que raye en adoración.</p>
            <p>Sólo tú, hombre, eres la solución de mi agonía. Quiero hacer de la vida un acto de amor a ti. Quiero servirte, quiero consagrarme a tu bien, a tu mejoramiento, a tu transformación. Trabajaré con delirio. No descansaré, hasta verte como lo mereces; hasta cambiar la estructura de la ciudad en favor tuyo, hasta hacer la ciudad humana. Sé que es necesario abrirte, anchas, las puertas del mundo. Que todo te pertenece. Que no deben estar cerrados para ti los portones del progreso y del bienestar.</p>
            <p>¡Oh hombre! ¡Oh campesino! ¡Oh trabajador! ¡Oh técnico! ¡Oh artista! ¡Oh caminante! ¡Oh luchador! Yo sé que hay que hacer una revolución en favor tuyo, pero sin derramar una gota de sangre; una revolución con ciencia, con energía, con amor. Siento, hombre, la justicia de una revolución en tu favor. Miro con pesadumbre tus sufrimientos, tu pobreza, tu soledad. Quisiera que cambiara el mundo para ti. Hombre, hermano mío: tú no debes vivir en una choza. Debes lograr el rango que te pertenece. No puedes carecer de lo que otros tienen en abundancia. No puedes seguir sollozando por mi culpa, ni seguir viviendo pobre y en harapos. Tú no puedes ser eternamente marginado.</p>
            <p>Yo sé que dentro de algún tiempo se habrán resuelto casi todos los problemas que te angustian. Pero cuando todo se haya resuelto, cuando ya no seamos un país subdesarrollado, cuando florezcan todos nuestros campos, cuando todos los niños estudien, cuando todos los jóvenes vayan a las universidades, cuando todo ese bello futuro llegue a ser presente, quedarás tú, solitario e inconforme, hombre, con toda tu belleza, con toda tu soledad, con toda tu gloria. Siempre quedarás con tu propio misterio, añadido al misterio de tu origen y de tu fin.</p>
            <p style="text-align: right; font-style: italic; margin-top: 2em;">«El Banquete del Millón». Rafael García Herreros,<br>
            Colección Obras Completas, No. 21, Corp. Centro Carismático Minuto de Dios, Bogotá, 2010.</p>`,
        video: null,
        categoria: 'Humanismo' // Nueva categoría
     },
     {
        id: 'encuentro-fe-ciencia', // ID único para esta publicación
        titulo: 'Encuentro "Fe y Ciencia: Hacia la COP26"',
        fecha: '2025-04-22', // Fecha proporcionada (Ajustada a YYYY-MM-DD)
        resumen: 'Discurso del Santo Padre Francisco sobre la interdependencia, el amor y el respeto como claves para el cuidado de la casa común.', // Resumen creado
        imagen: 'https://i.postimg.cc/2SkLLgzP/imagefran.png', // Imagen proporcionada
        contenido: `
            <div class="content-center">
            <strong>DISCURSO DEL SANTO PADRE FRANCISCO</strong><br>
            <em>Aula de las Bendiciones</em><br>
            <em>Lunes, 4 de octubre de 2021</em>
            </div>
            <p><img src="https://i.postimg.cc/2SkLLgzP/imagefran.png" alt="Papa Francisco en encuentro Fe y Ciencia" class="image-left-wrap">Jefes y representantes religiosos,<br>
            Excelencias,<br>
            queridos amigos.</p>
            <p>Gracias a todos por reuniros, mostrando el deseo de un diálogo profundo entre nosotros y con los expertos de la ciencia. Me permito ofreceros tres conceptos para reflexionar sobre esta colaboración: la mirada de la interdependencia y del compartir, el motor del amor y la vocación al respeto.</p>
            <p><strong>1. Todo está conectado,</strong> en el mundo todo está íntimamente unido. No sólo la ciencia, sino también nuestros credos y nuestras tradiciones espirituales muestran esta conexión que existe entre todos nosotros y el resto de la creación. Reconocemos los signos de la armonía divina presente en el mundo natural. Ninguna criatura se basta a sí misma, todas existen en dependencia unas de otras, para complementarse y servirse mutuamente. Casi podríamos decir que cada una fue donada por el Creador a las demás, para que en la relación de amor y de respeto puedan crecer y realizarse en plenitud. Plantas, aguas, seres animados son guiados por una ley impresa por Dios en ellos para el bien de toda la creación.</p>
            <p>Reconocer que el mundo está interconectado significa no sólo comprender las consecuencias dañinas de nuestras acciones, sino también individuar comportamientos y soluciones que deben adoptarse con una mirada abierta a la interdependencia y al compartir. No se puede actuar solos, es fundamental el compromiso de cada uno por el cuidado de los demás y del ambiente, el compromiso que lleve a un cambio de rumbo que es muy urgente y que se debe alimentar también de nuestra fe y espiritualidad. Para los cristianos, la mirada de la interdependencia surge del misterio mismo del Dios trino: «Porque la persona humana más crece, más madura y más se santifica a medida que entra en relación, cuando sale de sí misma para vivir en comunión con Dios, con los demás y con todas las criaturas. Así asume en su propia existencia ese dinamismo trinitario que Dios ha impreso en ella desde su creación».</p>
            <p><strong>2. Este compromiso se debe solicitar continuamente al motor del amor:</strong> «Desde la intimidad de cada corazón, el amor crea vínculos y amplía la existencia cuando saca a la persona de sí misma hacia el otro». Sin embargo, la fuerza propulsora del amor no se “pone en marcha” una vez para siempre, sino que va reavivada día a día; esta es una de las grandes aportaciones que nuestros credos y tradiciones espirituales ofrecen para facilitar este cambio de rumbo que nos hace tanta falta.</p>
            <p>El amor es espejo de una vida espiritual vivida intensamente. Un amor que se extiende a todos, más allá de las fronteras culturales, políticas y sociales; un amor que integra, también y sobre todo en beneficio de los últimos, quienes son muchas veces los que nos enseñan a superar las barreras del egoísmo y a romper las paredes del yo.</p>
            <p>Este desafío a favor de una cultura del cuidado de nuestra casa común y también de nosotros mismos tiene el sabor de la esperanza, porque no hay duda que la humanidad no ha contado con tantos medios para alcanzar este objetivo como los que tiene hoy. Este mismo desafío se puede afrontar sobre varios ámbitos; en particular quisiera señalar dos: el del ejemplo y la acción, y el de la educación. En ambos ámbitos, nosotros, inspirados por nuestros credos y tradiciones espirituales, podemos ofrecer importantes aportaciones. Son muchas las posibilidades que surgen, como por otra parte pone en evidencia el Llamamiento conjunto, en el que se ilustran también varios recorridos educativos y formativos que podemos desarrollar a favor del cuidado de nuestra casa común.</p>
            <p><strong>3. Este cuidado es también una vocación al respeto.</strong> Respeto por la creación, respeto por el prójimo, respeto por sí mismos y respeto hacia al Creador. Pero también respeto reciproco entre fe y ciencia, para «entrar en un diálogo entre ellas orientado al cuidado de la naturaleza, a la defensa de los pobres, a la construcción de redes de respeto y de fraternidad». Un respeto que no es el mero reconocimiento abstracto y pasivo del otro, sino vivido de manera empática y activa, con el deseo de conocerlo y entrar en diálogo con él para caminar juntos en este viaje común, sabiendo bien que, como también indica el Llamamiento: «lo que podemos obtener depende no sólo de las oportunidades y de los recursos, sino también de la esperanza, de la valentía y de la buena voluntad».</p>`,
        video: null,
        categoria: 'Discurso' // Categoría asignada
    },
    {
        id: 'video-introduccion',
        titulo: '¿En el Vagón de Cola? Reflexionando con Kurzgesagt',
        fecha: '2025-05-9',
        resumen: 'Es una llamada a examinar si estamos tomando decisiones conscientes o simplemente dejándonos arrastrar por la inercia.',
        imagen: 'https://i.ytimg.com/vi/uYYRAPBbr_w/maxresdefault.jpg',
        contenido: `
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/uYYRAPBbr_w" title="Introducción a Logos y Espíritu" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p>Este video presenta una introducción al propósito y misión de Logos y Espíritu, explorando temas de fe, razón y espiritualidad.</p>
            <p>Inspirados por la metáfora del "vagón de cola" del video de Kurzgesagt "¿Qué hacemos con nuestras vidas?", esta publicación explora si somos espectadores o protagonistas de nuestra existencia. El video nos impulsa a cuestionar la pasividad, un mensaje clave para quienes inician su camino.</p>
            <p>Desde Logos y Espíritu, vinculamos esta reflexión con la búsqueda de un propósito trascendente. Analizamos cómo la razón nos ayuda a entender nuestra situación y el valor del tiempo en el trabajo y las relaciones, recordando que gran parte del tiempo con nuestros seres queridos podría ya haber pasado si no actuamos conscientemente.</p>
            <p>Asimismo, exploramos cómo la fe puede motivarnos a superar el conformismo. La conciencia del tiempo limitado nos inspira a tomar decisiones valoradas, buscando una vida con pleno sentido, como lo hicieron figuras de fe y servicio.</p>
        `,
        video: 'uYYRAPBbr_w',
        categoria: 'Videos'
    },
    {
        id: 'papa-leon-xiv-eleccion',
        titulo: 'Habemus Papam: León XIV, un Nuevo Pastor para la Iglesia Universal',
        fecha: '2025-05-10', // Fecha actual o la que prefieras para la publicación
        resumen: 'El mundo católico recibe con esperanza al Papa León XIV, antes Cardenal Robert Prevost. Un vistazo a su trayectoria y los desafíos de su pontificado.',
        imagen: 'https://static.nationalgeographicla.com/files/styles/image_3200/public/home_papa-leao-14.png.webp?w=1600&h=1287&p=top', // Placeholder - Reemplazar with URL de imagen real
        // Descripción sugerida para la imagen: "El Papa León XIV saluda desde el balcón de la Basílica de San Pedro"
        contenido: `
            <p><img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/home_papa-leao-14.png.webp?w=1600&h=1287&p=top" alt="Papa León XIV en el balcón de San Pedro" class="image-left-wrap"></p>
            <p>La Plaza de San Pedro y el mundo católico resonaron con júbilo el pasado 8 de mayo de 2025 ante el anuncio: "Habemus Papam!". Tras un cónclave seguido con atención global, el Cardenal Robert Francis Prevost, O.S.A., originario de Chicago, Estados Unidos, fue elegido como el 267º Sucesor de Pedro, adoptando el nombre de León XIV.</p>
            
            <p>El nuevo Pontífice, nacido en 1955, cuenta con una rica trayectoria pastoral y administrativa. Antes de su elección, se desempeñaba como Prefecto del Dicasterio para los Obispos y presidente de la Pontificia Comisión para América Latina, cargos designados por su predecesor, el Papa Francisco, quien falleció el 21 de abril de 2025. Su vida religiosa ha estado marcada por un profundo servicio misionero, especialmente en Perú, donde pasó una parte significativa de su ministerio y obtuvo la nacionalidad peruana, lo que le otorga una perspectiva singular sobre las realidades de la Iglesia en el Sur Global.</p>
            
            <p>La elección del nombre León XIV no es casual. Evoca la figura de León XIII (1878-1903), un Papa recordado por su profunda preocupación por la justicia social, plasmada en la encíclica "Rerum Novarum", que sentó las bases de la Doctrina Social de la Iglesia moderna. Esta elección podría señalar una continuidad con el énfasis en los temas sociales y una Iglesia en diálogo con el mundo contemporáneo, buscando, como expresó en sus primeras palabras, "construir puentes" y "acoger a todos".</p>
            
            <h4>Un Pontificado entre Logos y Espíritu</h4>
            <p>El Papa León XIV asume el liderazgo de la Iglesia Católica en un momento de complejos desafíos globales y transformaciones culturales. Su experiencia internacional, su conocimiento de diversas realidades eclesiales y su formación agustina –orden conocida por su rica tradición intelectual y espiritual, con San Agustín como faro–, sugieren un pontificado que buscará armonizar la fe (Espíritu) con la razón (Logos).</p>
            
            <p>En sus primeras apariciones, el Papa León XIV ha enfatizado la paz, "una paz desarmada y desarmante, humilde y perseverante", y la necesidad de que la Iglesia sea un "faro que ilumina las noches oscuras de este mundo". Estos mensajes iniciales resuenan con la misión de "Logos y Espíritu" de explorar las intersecciones entre la fe, el pensamiento crítico y el servicio a la humanidad.</p>
            
            <p class="text-right italic mt-4">Redacción Logos y Espíritu</p>
        `,
        video: null, // Puedes añadir un ID de YouTube si encuentras un video relevante de su primer saludo, por ejemplo.
        categoria: 'Actualidad Eclesial'
    }
];

// *** DATOS PARA LA GALERÍA DE IMÁGENES (Solo las 3 especificadas) ***
 const galeriaImagenes = [
    { id: 'img1', src: 'https://i.postimg.cc/HkCpKMcH/IMG-7-Que-nadie-se-quede-sin-servir.png', alt: 'Imagen: Que nadie se quede sin servir', fecha: '2025-04-10', descripcion: 'Que nadie se quede sin servir' },
    { id: 'img2', src: 'https://i.postimg.cc/sg9VR27W/IMG-6-Oraci-n-para-la-beatificaci-n.png', alt: 'Imagen: Oración para la beatificación', fecha: '2025-04-05', descripcion: 'Oración beatificación Rafael García Herreros' },
    { id: 'img3', src: 'https://i.postimg.cc/N0dB5PNf/IMG-9-Frase-San-Juan-Eudes.png', alt: 'Imagen: Frase San Juan Eudes', fecha: '2025-03-30', descripcion: 'Frase San Juan Eudes corazón' }
 ];

 // *** URLs PARA LOS STICKERS ***
 const stickerUrls = [
    'https://i.postimg.cc/GtG2NnRh/stiker1.webp',
    'https://i.postimg.cc/Gpm4pfFq/Logotipo-de-la-Corporaci-n-Universitaria-Minuto-de-Dios-svg.png',
    'https://i.postimg.cc/sxqYPrcj/Dise-o-sin-t-tulo.png',
    'https://i.postimg.cc/m21NLPLt/Dise-o-sin-t-tulo-1.png'
     // ---> AÑADE MÁS URLS AQUÍ <---
 ];

 // *** ESTRUCTURA DE DATOS PARA LOGROS (Actualizada y con grupos) ***
 const achievementsData = {
     'Exploración': [
         { id: 'visit', name: '¡Bienvenido Explorador!', description: 'Entraste a la página por primera vez.', unlocked: false },
         { id: 'scroll_bottom', name: 'Hasta el Infinito... ¡y más abajo!', description: 'Llegaste al final de la página principal.', unlocked: false },
         { id: 'enter_post', name: 'Curiosidad Intelectual', description: 'Entraste a leer una publicación.', unlocked: false },
         { id: 'scroll_post_bottom', name: 'Lector Voraz', description: 'Llegaste al final de una publicación.', unlocked: false },
         { id: 'enter_100_posts', name: 'Bibliotecario Digital', description: 'Entraste a 100 publicaciones diferentes.', unlocked: false },
         { id: 'open_image', name: 'Apreciador de Arte', description: 'Ampliaste una imagen de la galería.', unlocked: false },
         { id: 'search', name: 'Detective de Contenido', description: 'Utilizaste la barra de búsqueda.', unlocked: false },
     ],
     'Interacción': [
         { id: 'play_podcast', name: '¡Dale al Play!', description: 'Escuchaste un fragmento de podcast.', unlocked: false },
         { id: 'finish_podcast', name: 'Maratón Auditivo', description: 'Escuchaste un podcast completo.', unlocked: false },
         { id: 'listen_100_min', name: 'Oído de Oro', description: 'Escuchaste 100 minutos de podcast.', unlocked: false },
         { id: 'copy_text', name: 'Ctrl+C Maestro', description: 'Copiaste algo de la página.', unlocked: false },
         { id: 'paste_text', name: 'Ctrl+V Sorpresa', description: 'Pegaste texto en la página (¿accidentalmente?).', unlocked: false },
         { id: 'click_sticker', name: '¡Fiesta de Stickers!', description: 'Hiciste clic en el botón de Stickers.', unlocked: false },
         { id: 'click_sticker_100', name: 'Adicto a los Stickers', description: '¡100 clics en el botón de Stickers!', unlocked: false },
         { id: 'click_sticker_1000', name: '¡Leyenda de los Stickers!', description: '¡1000 clics! ¿En serio?', unlocked: false },
         { id: 'subscribe', name: '¡Eres Parte del Club!', description: 'Te suscribiste al boletín.', unlocked: false },
     ]
 };

 // Objeto para rastrear el estado y contadores
 let achievementStatus = {};
 let achievementCounters = {};
 let hasPendingAchievement = false; // Flag para indicador
 let achievementAudioContext; // Contexto de audio para el sonido
 let achievementSoundBuffer; // Buffer para el sonido precargado

let currentPosts = [...publicaciones];
let currentImages = [...galeriaImagenes];
let sortOrder = 'desc';

// --- FUNCIONES ---

function animateTitle() {
    const titleText = "Logos y Espíritu";
    mainTitleElement.innerHTML = '';
    titleText.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        const rotation = Math.random() * 12 - 6;
        const yOffset = Math.random() * 8 - 4;
        span.style.transform = `rotate(${rotation}deg) translateY(${yOffset}px)`;
        span.style.transition = `transform 0.4s ${index * 0.03}s ease-out`;
        mainTitleElement.appendChild(span);
    });

     mainTitleElement.addEventListener('mouseenter', () => {
         mainTitleElement.querySelectorAll('span').forEach(span => {
             const rotation = Math.random() * 10 - 5;
             const yOffset = Math.random() * 6 - 3;
             span.style.transform = `rotate(${rotation}deg) translateY(${yOffset}px) scale(1.05)`;
         });
     });
     mainTitleElement.addEventListener('mouseleave', () => {
          mainTitleElement.querySelectorAll('span').forEach(span => {
             const rotation = Math.random() * 12 - 6;
             const yOffset = Math.random() * 8 - 4;
             span.style.transform = `rotate(${rotation}deg) translateY(${yOffset}px) scale(1)`;
         });
     });
}


// Inicializar Supabase con manejo de errores
try {
    supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} catch (error) {
    console.error('Error al inicializar Supabase:', error);
}

function renderPosts() {
    postsGrid.innerHTML = ''; // Limpiar el contenedor antes de renderizar

    publicaciones.forEach((post) => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <h3>${post.titulo}</h3>
            <p>${post.resumen}</p>
            <img src="${post.imagen}" alt="${post.titulo}" />
            <button onclick="viewPost('${post.id}')">Leer más</button>
        `;
        postsGrid.appendChild(postElement);
    });
}

function viewPost(postId) {
    const post = publicaciones.find((p) => p.id === postId);
    if (!post) {
        console.error('Post no encontrado:', postId);
        return;
    }

    singlePostTitle.innerText = post.titulo;
    singlePostDate.innerText = post.fecha;
    singlePostCategory.innerText = post.categoria;
    singlePostContent.innerHTML = post.contenido;

    // Mostrar la sección de post individual y ocultar las demás
    contentSections.forEach((section) => section.classList.remove('active'));
    singlePostSection.classList.add('active');
}

// Renderizar publicaciones al cargar la página
renderPosts();


// Función para crear una tarjeta de publicación (sin el botón de like aquí)
function createPostCard(post) {
    const card = document.createElement('div');
    card.className = 'post-card';

    const title = document.createElement('h3');
    title.textContent = post.title;

    const meta = document.createElement('p');
    meta.className = 'post-meta';
    meta.textContent = `${post.date} - ${post.category}`;

    const excerpt = document.createElement('p');
    excerpt.className = 'post-excerpt';
    excerpt.textContent = post.excerpt;

    const readMore = document.createElement('a');
    readMore.href = `#post-${post.id}`;
    readMore.className = 'read-more';
    readMore.textContent = 'Leer más';
    readMore.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarPublicacion(post.id);
        unlockAchievement('first_post_view'); // Logro al abrir la primera publicación
    });

    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(excerpt);
    card.appendChild(readMore);

    return card;
}

// Función para mostrar una publicación individual
async function mostrarPublicacion(postId) {
    const post = blogPosts.find(p => p.id === postId);

    if (post) {
        cambiarSeccion('single-post'); // Cambia a la sección de publicación individual

        singlePostTitle.textContent = post.title;
        singlePostDate.textContent = post.date;
        singlePostCategory.textContent = post.category;
        singlePostContent.innerHTML = post.content; // Renderiza el contenido HTML

        // Lógica para el audio (si existe)
        const singlePostAudioContainer = document.getElementById('single-post-audio-container');
        if (post.audio && singlePostAudioContainer) {
            singlePostAudioContainer.innerHTML = `<audio controls src="${post.audio}"></audio>`;
            singlePostAudioContainer.style.display = 'block';

            const audioPlayer = singlePostAudioContainer.querySelector('audio');
            if (audioPlayer) {
                // Desbloquear logro cuando el audio empiece a reproducirse
                audioPlayer.addEventListener('play', () => {
                    unlockAchievement('audio_play');
                }, { once: true }); // Para que solo se desbloquee una vez por reproducción
            }

        } else if (singlePostAudioContainer) {
            singlePostAudioContainer.innerHTML = ''; // Limpia si no hay audio
            singlePostAudioContainer.style.display = 'none';
        }

        // --- Lógica del botón de likes dentro de la publicación ---
        let likesContainer = document.getElementById('single-post-likes-container');
        if (!likesContainer) { // Esto crea el contenedor si por alguna razón no se ha creado en el HTML
            likesContainer = document.createElement('div');
            likesContainer.id = 'single-post-likes-container';
            singlePostTitle.parentNode.insertBefore(likesContainer, singlePostTitle.nextSibling); // Inserta después del título
        }
        likesContainer.innerHTML = `
            <button class="like-button" data-post-id="${post.id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.84-1.68C4.61 15.16 2 12.03 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.53-2.61 6.66-8.16 11.17L12 21.35z"/>
                </svg>
                <span class="likes-count">0</span> likes
            </button>
        `;

        const likeButton = likesContainer.querySelector('.like-button');
        if (likeButton) {
            likeButton.addEventListener('click', handleLikeClick);
            // Carga los likes para esta publicación específica
            await getLikes(post.id); // Asegúrate de que getLikes actualice el span correcto
        }
        // --- FIN Lógica del botón de likes ---

    } else {
        console.error('Publicación no encontrada:', postId);
        cambiarSeccion('home'); // Redirigir a home si no se encuentra
    }
}

// Función de búsqueda (posts)
searchInput.addEventListener('input', () => {
    unlockAchievement('search_post'); // Logro al usar la búsqueda
    const query = searchInput.value.toLowerCase();
    const filteredPosts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
    );
    renderPosts(filteredPosts);
});

// Icono de búsqueda - activa/desactiva la barra de búsqueda
searchIcon.addEventListener('click', () => {
    const searchContainer = document.querySelector('.search-container');
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchInput.focus();
    } else {
        searchInput.value = '';
        renderPosts(blogPosts); // Restablecer publicaciones si se cierra la búsqueda
    }
});


// --- Lógica del Contador de Visitas (CountAPI) ---
const visitCountSpan = document.getElementById('visit-count');

async function loadVisitCount() {
    try {
        if (!supabase) {
            console.warn('Supabase no está inicializado. No se cargará el contador de visitas.');
            visitCountSpan.textContent = 'N/A';
            return;
        }

        // Obtener el conteo actual para la página 'website_visits'
        let { data, error } = await supabase
            .from('visits')
            .select('count')
            .eq('page_id', 'website_visits')
            .single();

        if (error && error.code === 'PGRST116') { // No rows found
            // Si no hay conteo, inicializarlo en 0 y luego incrementarlo
            const { error: insertError } = await supabase
                .from('visits')
                .insert({ page_id: 'website_visits', count: 0 });
            if (insertError) throw insertError;
            data = { count: 0 };
        } else if (error) {
            throw error;
        }

        let currentCount = data ? data.count : 0;
        visitCountSpan.textContent = currentCount;

        // Incrementar el conteo cada vez que la página se carga
        await incrementVisitCount(currentCount + 1);

    } catch (err) {
        console.error('Error al cargar o incrementar el contador de visitas:', err.message);
        visitCountSpan.textContent = 'Error';
    }
}

async function incrementVisitCount(newCount) {
    try {
        if (!supabase) {
            console.error('Error al actualizar el contador de visitas: supabase is undefined');
            return;
        }

        const { data, error } = await supabase
            .from('visits')
            .update({ count: newCount })
            .eq('page_id', 'website_visits');

        if (error) throw error;
        console.log('Contador de visitas incrementado a:', newCount);
    } catch (err) {
        console.error('Error al actualizar el contador de visitas:', err.message);
    }
}


// --- Lógica de Likes (Supabase) ---

async function getLikes(postId) {
    try {
        if (!supabase) {
            console.error('Error al obtener likes para el post ' + postId + ' : supabase is undefined');
            return;
        }

        // Consulta para obtener el conteo de likes para el post_id
        let { data, error } = await supabase
            .from('likes') // Asegúrate de que tu tabla se llama 'likes'
            .select('likes_count')
            .eq('post_id', postId)
            .single();

        if (error && error.code === 'PGRST116') { // No rows found
            // Si no hay entrada para este post, inicializar a 0 y guardarlo
            const { error: insertError } = await supabase
                .from('likes')
                .insert({ post_id: postId, likes_count: 0 });
            if (insertError) throw insertError;
            data = { likes_count: 0 }; // Establecer data para que el flujo continúe
        } else if (error) {
            throw error;
        }

        const likesCount = data ? data.likes_count : 0;
        // Actualiza el span de likes en la publicación individual
        const likesCountSpan = document.querySelector('#single-post-likes-container .likes-count');
        if (likesCountSpan) {
            likesCountSpan.textContent = likesCount;
        }

    } catch (error) {
        console.error('Error al obtener likes para el post ' + postId + ' :', error.message);
    }
}

async function incrementLikes(postId) {
    try {
        if (!supabase) {
            console.error('Error al incrementar likes para el post ' + postId + ' : supabase is undefined');
            return;
        }

        // Llama a una función RPC en Supabase para incrementar el like
        // Asume que tienes una función SQL llamada 'increment_likes' en Supabase
        const { data, error } = await supabase.rpc('increment_likes', { post_id_param: postId });

        if (error) throw error;

        // data[0] contendrá el nuevo conteo de likes si tu función RPC lo devuelve
        const newLikesCount = data[0].new_likes_count; // Ajusta según lo que devuelva tu función RPC

        // Actualiza el span de likes en la publicación individual
        const likesCountSpan = document.querySelector('#single-post-likes-container .likes-count');
        if (likesCountSpan) {
            likesCountSpan.textContent = newLikesCount;
        }
        unlockAchievement('like_post'); // Desbloquear logro
        console.log(`Likes para ${postId} incrementados a ${newLikesCount}`);

    } catch (error) {
        console.error('Error al incrementar likes para el post ' + postId + ' :', error.message);
    }
}

function handleLikeClick(event) {
    const postId = event.currentTarget.dataset.postId;
    incrementLikes(postId);
}

function toggleLike(event, postId) {
    event.preventDefault();
    if (!supabase) {
        console.error('Supabase is not initialized. Cannot toggle like.');
        return;
    }

    // Example logic for toggling like
    supabase
        .from('likes')
        .select('*')
        .eq('post_id', postId)
        .then(({ data, error }) => {
            if (error) {
                console.error('Error fetching likes:', error);
                return;
            }

            if (data.length > 0) {
                // Unlike
                supabase
                    .from('likes')
                    .delete()
                    .eq('post_id', postId)
                    .then(({ error }) => {
                        if (error) {
                            console.error('Error unliking post:', error);
                        } else {
                            console.log('Post unliked successfully');
                        }
                    });
            } else {
                // Like
                supabase
                    .from('likes')
                    .insert({ post_id: postId })
                    .then(({ error }) => {
                        if (error) {
                            console.error('Error liking post:', error);
                        } else {
                            console.log('Post liked successfully');
                        }
                    });
            }
        });
}


// --- Lógica de Suscripción (Supabase) ---
subscribeForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;

    if (!supabase) {
        subscribeStatus.textContent = 'Error: Supabase no está inicializado.';
        subscribeStatus.style.color = 'red';
        return;
    }

    try {
        // Primero, verificar si el correo ya existe
        const { data: existingUser, error: fetchError } = await supabase
            .from('subscribers') // Asegúrate de que tu tabla se llama 'subscribers'
            .select('email')
            .eq('email', email)
            .single();

        if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116 = no rows found
            throw fetchError;
        }

        if (existingUser) {
            subscribeStatus.textContent = '¡Ya estás suscrito con este correo!';
            subscribeStatus.style.color = 'orange';
        } else {
            // Si no existe, insertarlo
            const { error: insertError } = await supabase
                .from('subscribers')
                .insert([{ email: email }]);

            if (insertError) throw insertError;

            subscribeStatus.textContent = '¡Gracias por suscribirte!';
            subscribeStatus.style.color = 'green';
            subscribeForm.reset();
        }
    } catch (error) {
        console.error('Error al manejar la suscripción:', error.message);
        subscribeStatus.textContent = `Error: ${error.message}`;
        subscribeStatus.style.color = 'red';
    }
});


function renderizarGaleria(imagesToRender) {
    imageGalleryGrid.innerHTML = '';
    if (imagesToRender.length === 0) {
        noImageResultsMessage.style.display = 'block';
    } else {
        noImageResultsMessage.style.display = 'none';
        imagesToRender.forEach(imgData => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${imgData.src}" alt="${imgData.alt}" loading="lazy">
                <span class="gallery-item-date">${formatearFecha(imgData.fecha)}</span>
            `;
            galleryItem.addEventListener('click', () => openImageModal(imgData.src));
            imageGalleryGrid.appendChild(galleryItem);
        });
    }
}


function ordenarPublicaciones() {
    if (document.getElementById('publicaciones').classList.contains('active')) {
        const postsToSort = currentPosts;
        postsToSort.sort((a, b) => {
            const dateA = new Date(a.fecha);
            const dateB = new Date(b.fecha);
            return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        });
        renderPosts(postsToSort);
        sortArrow.classList.toggle('arrow-up', sortOrder === 'asc');
        sortArrow.classList.toggle('arrow-down', sortOrder === 'desc');
    }
}

function cambiarOrden() {
    sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    handleSearch();
}

function formatearFecha(fechaString) {
    if (!fechaString) return '';
    const [year, month, day] = fechaString.split('-').map(Number);
    if (!year || !month || !day) return '';
    try {
        const fecha = new Date(Date.UTC(year, month - 1, day));
        const opciones = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
        return fecha.toLocaleDateString('es-ES', opciones);
    } catch (e) {
        console.error("Error formatting date:", fechaString, e);
        return '';
    }
}

function toggleBackToTopButton() {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
}

function cambiarSeccion(idSeccion) {
    let foundSection = false;
    contentSections.forEach(section => {
        if (section.id === idSeccion) {
            section.classList.add('active');
            foundSection = true;
        } else {
            section.classList.remove('active');
        }
    });

    if (!foundSection && idSeccion !== 'single-post') {
         document.getElementById('publicaciones').classList.add('active');
         idSeccion = 'publicaciones';
    }

    const allNavLinks = [...navLinks, ...footerNavLinks];
    allNavLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === idSeccion);
    });

     if (idSeccion !== 'single-post') {
         singlePostSection.classList.remove('active');
     }

     // Mostrar/ocultar flecha de ordenar y ejecutar búsqueda inicial
     if (idSeccion === 'publicaciones') {
         sortArrow.style.display = 'inline-block';
         handleSearch();
     } else {
         sortArrow.style.display = 'none';
         if (idSeccion === 'imagenes') {
             handleSearch();
         }
         // Añadir lógica para podcast si se implementa búsqueda
     }

     if (window.innerWidth <= 600) {
         mobileSectionNav.querySelector('span').textContent = idSeccion.charAt(0).toUpperCase() + idSeccion.slice(1);
     }

     window.scrollTo({ top: 0, behavior: 'smooth' });
}

function cambiarSeccionConFlechas(direccion) {
    const secciones = ['publicaciones', 'imagenes', 'podcast'];
    const seccionActual = document.querySelector('.content-section.active').id;
    let indiceActual = secciones.indexOf(seccionActual);

    if (direccion === 'derecha') {
        indiceActual = (indiceActual + 1) % secciones.length;
    } else if (direccion === 'izquierda') {
        indiceActual = (indiceActual - 1 + secciones.length) % secciones.length;
    }

    const nuevaSeccion = secciones[indiceActual];
    cambiarSeccion(nuevaSeccion);

    // Update section name in mobile navigation
    if (window.innerWidth <= 600) {
        mobileSectionNav.querySelector('span').textContent = nuevaSeccion.charAt(0).toUpperCase() + nuevaSeccion.slice(1);
    }
}

function mostrarPostIndividual(id) {
    const post = publicaciones.find(p => p.id === id);
    if (!post) {
        console.error("Post not found:", id);
        cambiarSeccion('publicaciones');
        return;
    };

    // Lógica para logro de 100 posts diferentes
    if (!achievementCounters.visitedPosts.includes(id)) {
        achievementCounters.visitedPosts.push(id);
        saveAchievementCounters();
        if (achievementCounters.visitedPosts.length >= 100) {
            unlockAchievement('enter_100_posts');
        }
    }

    singlePostTitle.textContent = post.titulo;
    singlePostDate.textContent = `Publicado el ${formatearFecha(post.fecha)}`;
    singlePostCategory.textContent = post.categoria;
    singlePostContent.innerHTML = post.contenido; // Usar placeholder

    cambiarSeccion('single-post');
    unlockAchievement('enter_post');

    // Listener para scroll dentro del post (simplificado)
    const postContentElement = document.getElementById('single-post-content');
     const scrollListener = () => {
         if (postContentElement.getBoundingClientRect().bottom <= window.innerHeight + 100) {
             unlockAchievement('scroll_post_bottom');
             window.removeEventListener('scroll', scrollListener);
         }
     };
     // Remover listener anterior si existe antes de añadir uno nuevo
     window.removeEventListener('scroll', scrollListener);
     window.addEventListener('scroll', scrollListener);
}

function volverAPublicaciones() {
    cambiarSeccion('publicaciones');
}

 function handleSubscribeFormSubmit(event) {
     event.preventDefault();
     const emailInput = subscribeForm.querySelector('input[type="email"]');
     subscribeStatus.textContent = 'Procesando suscripción...';
     subscribeStatus.style.color = 'blue';
     setTimeout(() => {
         if (emailInput.value && emailInput.validity.valid) {
             subscribeStatus.textContent = `¡Gracias por suscribirte con ${emailInput.value}!`;
             subscribeStatus.style.color = 'green';
             subscribeForm.reset();
             unlockAchievement('subscribe');
         } else {
            subscribeStatus.textContent = 'Por favor, introduce un correo electrónico válido.';
            subscribeStatus.style.color = 'red';
         }
     }, 1500);
 }

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const publicacionesSection = document.getElementById('publicaciones');
    const imagenesSection = document.getElementById('imagenes');

    if (searchTerm !== '') {
        unlockAchievement('search');
    }

    if (publicacionesSection.classList.contains('active')) {
        if (searchTerm === '') {
            currentPosts = [...publicaciones];
        } else {
            currentPosts = publicaciones.filter(post => {
                const tituloLower = post.titulo.toLowerCase();
                const resumenLower = post.resumen.toLowerCase();
                const contenidoLower = post.contenido.toLowerCase();
                const fechaString = post.fecha;
                const fechaFormateada = formatearFecha(post.fecha).toLowerCase();
                const categoriaLower = post.categoria.toLowerCase();

                return tituloLower.includes(searchTerm) ||
                       resumenLower.includes(searchTerm) ||
                       contenidoLower.includes(searchTerm) ||
                       fechaString.includes(searchTerm) ||
                       fechaFormateada.includes(searchTerm) ||
                       categoriaLower.includes(searchTerm);
            });
        }
        ordenarPublicaciones();
    } else if (imagenesSection.classList.contains('active')) {
         if (searchTerm === '') {
            currentImages = [...galeriaImagenes];
        } else {
             currentImages = galeriaImagenes.filter(img => {
                const descLower = img.descripcion.toLowerCase();
                const altLower = img.alt.toLowerCase();
                const fechaString = img.fecha;
                const fechaFormateada = formatearFecha(img.fecha).toLowerCase();

                return descLower.includes(searchTerm) ||
                       altLower.includes(searchTerm) ||
                       fechaString.includes(searchTerm) ||
                       fechaFormateada.includes(searchTerm);
            });
        }
         renderizarGaleria(currentImages);
    }
}

function openImageModal(src) {
    modalImage.src = src;
    imageModal.classList.add('active');
    unlockAchievement('open_image');
}

function closeImageModalFunc() {
    imageModal.classList.remove('active');
    modalImage.src = "";
}

function addSticker() {
    achievementCounters.stickerClicks = (achievementCounters.stickerClicks || 0) + 1;
    saveAchievementCounters();

    unlockAchievement('click_sticker');
    if (achievementCounters.stickerClicks >= 100) {
        unlockAchievement('click_sticker_100');
    }
    if (achievementCounters.stickerClicks >= 1000) {
         unlockAchievement('click_sticker_1000');
     }

    const randomUrl = stickerUrls[Math.floor(Math.random() * stickerUrls.length)];
    const stickerImg = document.createElement('img');
    stickerImg.src = randomUrl;
    stickerImg.alt = "Sticker Decorativo";
    stickerImg.className = 'sticker-image';
    const randomTop = Math.random() * 70 + 15;
    const randomLeft = Math.random() * 80 + 10;
    const randomRotate = Math.random() * 60 - 30;
    stickerImg.style.top = `${randomTop}vh`;
    stickerImg.style.left = `${randomLeft}vw`;
    stickerImg.style.transform = `rotate(${randomRotate}deg)`;
    stickerArea.appendChild(stickerImg);
     setTimeout(() => {
         stickerImg.style.transition = 'opacity 0.5s ease-out';
         stickerImg.style.opacity = '0';
         setTimeout(() => stickerImg.remove(), 500);
     }, 5000);
}

// --- Lógica de Likes con Supabase ---

async function getLikes(postId) {
    try {
        const { data, error } = await supabase
            .from('post_likes')
            .select('likes')
            .eq('post_id', postId)
            .single(); // Esperamos un solo resultado

        if (error && error.code === 'PGRST116') { // No rows found
            // Si no existe la entrada para el post, la creamos con 0 likes
            const { data: newData, error: newError } = await supabase
                .from('post_likes')
                .insert([{ post_id: postId, likes: 0 }])
                .select()
                .single();
            if (newError) throw newError;
            return newData.likes;
        }
        if (error) throw error;
        return data.likes;
    } catch (error) {
        console.error('Error al obtener likes para el post', postId, ':', error.message);
        return 0; // Devolver 0 en caso de error
    }
}

async function incrementLikes(postId) {
    try {
        // Obtenemos el valor actual para asegurarnos de que existe o para crearlo si no
        let currentLikes = await getLikes(postId);

        // Incrementamos en 1
        const { data, error } = await supabase
            .from('post_likes')
            .update({ likes: currentLikes + 1 })
            .eq('post_id', postId)
            .select()
            .single();

        if (error) throw error;
        return data.likes;
    } catch (error) {
        console.error('Error al incrementar likes para el post', postId, ':', error.message);
        return null;
    }
}

// Función para manejar el clic en el botón de like
async function handleLikeClick(event) {
    const button = event.currentTarget;
    const postId = button.dataset.postId;
    if (!postId) {
        console.error('No se encontró post_id en el botón de like.');
        return;
    }

    const newLikes = await incrementLikes(postId);
    if (newLikes !== null) {
        // Actualizar el texto del contador de likes en la UI
        const likeCountSpan = button.querySelector('.like-count');
        if (likeCountSpan) {
            likeCountSpan.textContent = newLikes;
        }
    }
}

// *** FUNCIONES PARA LOGROS (Actualizadas) ***
function loadAchievementStatus() {
    const savedStatus = localStorage.getItem('blogLogrosStatus');
    const savedCounters = localStorage.getItem('blogLogrosCounters');

    if (savedStatus) {
        achievementStatus = JSON.parse(savedStatus);
    } else {
        // Inicializar estado si no hay nada guardado
        Object.values(achievementsData).flat().forEach(ach => {
            achievementStatus[ach.id] = false;
        });
    }

    if (savedCounters) {
        achievementCounters = JSON.parse(savedCounters);
    } else {
        achievementCounters = {
            stickerClicks: 0,
            visitedPosts: [],
            podcastTime: 0,
            // Inicializar otros contadores si son necesarios
        };
    }
     // Comprobar si hay logros pendientes al cargar (antes de desbloquear visita)
     checkPendingAchievementsOnLoad();
}

function saveAchievementStatus() {
    localStorage.setItem('blogLogrosStatus', JSON.stringify(achievementStatus));
}
function saveAchievementCounters() {
     localStorage.setItem('blogLogrosCounters', JSON.stringify(achievementCounters));
}

// Función para reproducir sonido de logro (si está disponible)
 function playAchievementSound() {
     if (achievementAudioContext && achievementSoundBuffer && !hasPendingAchievement) {
         const source = achievementAudioContext.createBufferSource();
         source.buffer = achievementSoundBuffer;
         source.connect(achievementAudioContext.destination);
         source.start(0);
     } else if (!hasPendingAchievement) {
         console.log("Sonido de logro (placeholder) - AudioContext no listo o pendiente");
     }
 }


 function unlockAchievement(id) {
     if (!achievementStatus[id]) {
         console.log(`Logro desbloqueado: ${id}`);
         achievementStatus[id] = true;
         saveAchievementStatus();

         // Activar indicador visual de pendiente ANTES de reproducir sonido
         setPendingAchievement(true);
         playAchievementSound(); // Intentar reproducir sonido

         // Animar el logro en el modal si está abierto
         const achievementItem = document.querySelector(`#achievements-list li[data-achievement-id="${id}"]`);
         if (achievementItem) {
             achievementItem.classList.add('unlocked', 'newly-unlocked');
             setTimeout(() => {
                 achievementItem.classList.remove('newly-unlocked');
             }, 800);
         }
     }
 }

 // Comprueba si hay logros desbloqueados pero no vistos al cargar
 function checkPendingAchievementsOnLoad() {
     let pending = false;
     for (const id in achievementStatus) {
         if (achievementStatus[id]) { // Si está desbloqueado
             // Aquí necesitaríamos una forma de saber si ya se 'vio'
             // Por simplicidad, asumimos que si está desbloqueado y no se ha abierto el modal
             // esta sesión, está pendiente.
             pending = true;
             break;
         }
     }
     setPendingAchievement(pending);
 }


 // Función para actualizar el indicador visual de pendiente
 function setPendingAchievement(isPending) {
     hasPendingAchievement = isPending; // Actualizar el flag global
     if (isPending) {
         topRightButtonsContainer.classList.add('has-pending');
     } else {
         topRightButtonsContainer.classList.remove('has-pending');
     }
 }

function renderAchievements() {
    const explorationTab = document.getElementById('exploration-tab');
    const interactionTab = document.getElementById('interaction-tab');

    explorationTab.innerHTML = '';
    interactionTab.innerHTML = '';

    achievementsData['Exploración'].forEach(ach => {
        const li = document.createElement('li');
        li.className = 'achievement-item';
        li.dataset.achievementId = ach.id;
        if (achievementStatus[ach.id]) {
            li.classList.add('unlocked');
        }
        li.innerHTML = `
            <div class="achievement-details">
                <h4>${ach.name}</h4>
                <p>${ach.description}</p>
            </div>
        `;
        explorationTab.appendChild(li);
    });

    achievementsData['Interacción'].forEach(ach => {
        const li = document.createElement('li');
        li.className = 'achievement-item';
        li.dataset.achievementId = ach.id;
        if (achievementStatus[ach.id]) {
            li.classList.add('unlocked');
        }
        li.innerHTML = `
            <div class="achievement-details">
                <h4>${ach.name}</h4>
                <p>${ach.description}</p>
            </div>
        `;
        interactionTab.appendChild(li);
    });
}

// Lógica para cambiar entre pestañas
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.dataset.tab;

        // Cambiar la pestaña activa
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Mostrar el contenido de la pestaña activa
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
        document.getElementById(targetTab).classList.add('active');
    });
});

function openAchievementsModal() {
    renderAchievements();
    achievementsModal.classList.add('active');
    setPendingAchievement(false); // Limpiar indicador al abrir el modal
}

function closeAchievementsModalFunc() {
    achievementsModal.classList.remove('active');
}

// --- CONSTANTES DE SUPABASE ---

// --- INICIALIZACIÓN DE AUDIO CONTEXT (para sonido de logro) ---
function initAudio() {
    try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        achievementAudioContext = new AudioContext();

        // Cargar el sonido (reemplaza con tu ruta)
        // fetch('audio/achievement-sound.wav') // Ejemplo con wav
        //     .then(response => response.arrayBuffer())
        //     .then(arrayBuffer => achievementAudioContext.decodeAudioData(arrayBuffer))
        //     .then(audioBuffer => {
        //         achievementSoundBuffer = audioBuffer;
        //         console.log("Sonido de logro cargado.");
        //     })
        //     .catch(e => console.error("Error loading achievement sound:", e));

    } catch(e) {
        console.warn('Web Audio API is not supported in this browser');
    }
}

// --- EVENT LISTENERS ---
window.addEventListener('scroll', () => {
    toggleBackToTopButton();
     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
         unlockAchievement('scroll_bottom');
     }
});
backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

sortArrow.addEventListener('click', cambiarOrden);

const allNavLinks = [...navLinks, ...footerNavLinks];
allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSectionId = link.dataset.section;
        if (targetSectionId) {
            cambiarSeccion(targetSectionId);
            if (targetSectionId !== 'single-post') {
                 searchInput.value = '';
            }
        }
    });
});


backToPostsButton.addEventListener('click', volverAPublicaciones);
subscribeForm.addEventListener('submit', handleSubscribeFormSubmit);
searchInput.addEventListener('input', handleSearch);
searchIcon.addEventListener('click', () => {
    if (window.innerWidth <= 600) {
        mobileSectionNav.classList.add('searching');
        mobileSectionNav.querySelector('span').textContent = 'Buscar';
    }
    navLinks.forEach(link => link.style.display = 'none');
    searchInput.style.display = 'block';
    searchInput.focus();
});
searchInput.addEventListener('blur', () => {
    if (window.innerWidth <= 600 && searchInput.value.trim() === '') {
        mobileSectionNav.classList.remove('searching');
        const activeSection = document.querySelector('.content-section.active').id;
        mobileSectionNav.querySelector('span').textContent = activeSection.charAt(0).toUpperCase() + activeSection.slice(1);
    }
    if (searchInput.value.trim() === '') {
        navLinks.forEach(link => link.style.display = 'block');
        searchInput.style.display = 'none';
    }
});

closeImageModal.addEventListener('click', closeImageModalFunc);
imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        closeImageModalFunc();
    }
});

stickerButton.addEventListener('click', addSticker);

achievementsButton.addEventListener('click', openAchievementsModal);
closeAchievementsModal.addEventListener('click', closeAchievementsModalFunc);
achievementsModal.addEventListener('click', (e) => {
    if (e.target === achievementsModal) {
        closeAchievementsModalFunc();
    }
});

document.addEventListener('copy', () => {
    unlockAchievement('copy_text');
});

document.addEventListener('paste', (event) => {
    unlockAchievement('paste_text');
});


document.querySelectorAll('#podcast audio').forEach(audio => {
    audio.addEventListener('play', () => {
        unlockAchievement('play_podcast');
        // Reiniciar contexto de audio si estaba suspendido (navegadores modernos)
        if (achievementAudioContext && achievementAudioContext.state === 'suspended') {
            achievementAudioContext.resume();
        }
    });
     audio.addEventListener('ended', () => {
         unlockAchievement('finish_podcast');
     });
    // Lógica básica para tiempo (simplificada)
    let accumulatedTime = 0;
    let intervalId = null;
    audio.addEventListener('play', () => {
        intervalId = setInterval(() => {
            accumulatedTime++;
            achievementCounters.podcastTime = (achievementCounters.podcastTime || 0) + 1;
            if(achievementCounters.podcastTime % 10 === 0) { // Guardar cada 10s
               saveAchievementCounters();
            }
            if (achievementCounters.podcastTime >= 6000) { // 100 minutos = 6000 segundos
                unlockAchievement('listen_100_min');
                clearInterval(intervalId); // Detener contador una vez alcanzado
            }
        }, 1000); // Contar cada segundo
    });
    audio.addEventListener('pause', () => clearInterval(intervalId));
    audio.addEventListener('ended', () => clearInterval(intervalId));

});


// --- INICIALIZACIÓN ---
// --- INICIALIZACIÓN ---
function initAudio() {
    // Esta función actualmente no hace nada para iniciar el audio.
    // La reproducción automática de audio sin un gesto del usuario está bloqueada por los navegadores.
    // El atributo 'controls' en la etiqueta <audio> permite al usuario iniciar la reproducción.
    // El logro 'audio_play' se desbloquea en mostrarPublicacion cuando el usuario inicia la reproducción.
    console.log("Audio inicializado. La reproducción requiere interacción del usuario.");
}


// --- INICIALIZACIÓN PRINCIPAL ---
window.addEventListener('DOMContentLoaded', () => {
    // AHORA inicializamos Supabase aquí, dentro del DOMContentLoaded
    // Esto asegura que la librería de Supabase (cargada por el CDN)
    // esté disponible antes de que intentemos usarla.
    try {
        // Verificación de credenciales de Supabase
        if (SUPABASE_URL === 'https://bwnjpsgchcwnxoyxkhyf.supabase.co' || SUPABASE_ANON_KEY === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxODg3NjgwMCwiZXhwIjoxOTMzMTcwNDAwfQ.pP92i67y0gN2jS_w-Jc5-jX_F8Jv_C6Xp_z7n4z_V5Y') {
             console.error('ERROR: Las credenciales de Supabase no han sido reemplazadas o son las predeterminadas. Los likes y el contador de visitas no funcionarán correctamente.');
             // Opcional: Podrías deshabilitar los botones de likes y el contador de visitas aquí
             // document.querySelectorAll('.like-button').forEach(btn => btn.disabled = true);
        } else {
            try {
                supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            } catch (error) {
                console.error('Error al inicializar Supabase:', error);
            }
        } // Fin del bloque try-catch para Supabase


        // --- Lógica de inicialización existente ---
        initAudio(); // Solo inicializa, no reproduce
        loadAchievementStatus();
        unlockAchievement('visit'); // Logro al visitar el sitio
        currentYearSpan.textContent = new Date().getFullYear();
        animateTitle();
        renderizarGaleria(galeriaImagenes); // Renderizar galería al cargar la página

        // Asegúrate de que las publicaciones se rendericen y que los likes se carguen
        cambiarSeccion('home'); // Esto debería llamar a renderPosts que a su vez llama a getLikes
    } catch (e) {
        console.error('Error en la inicialización principal:', e);
    }
});
