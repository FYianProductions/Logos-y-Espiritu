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
const imageModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const captionText = document.getElementById('caption');
const closeModalButton = document.querySelector('#image-modal .close-button');
const gallerySearchInput = document.getElementById('gallery-search-input');
const achievementsButton = document.getElementById('achievements-button');
const achievementsSection = document.getElementById('achievements-section');
const achievementsGrid = document.getElementById('achievements-grid');
const achievementModal = document.getElementById('achievement-modal');
const achievementModalTitle = document.getElementById('achievement-modal-title');
const achievementModalDescription = document.getElementById('achievement-modal-description');
const achievementModalImage = document.getElementById('achievement-modal-image');
const achievementModalProgress = document.getElementById('achievement-modal-progress');
const closeAchievementModalButton = document.querySelector('#achievement-modal .close-button');
const stickerButton = document.getElementById('sticker-button');
const mobileSearchButton = document.getElementById('mobile-search-button');
const mobileSearchInputWrapper = document.getElementById('mobile-search-input-wrapper');
const mobileSearchInput = document.getElementById('mobile-search-input');
const mobileSearchCloseButton = document.getElementById('mobile-search-close-button');
const mobileAchievementsButton = document.getElementById('mobile-achievements-button');
const mobileMenuButton = document.getElementById('mobile-menu-button'); // Nuevo botón de menú móvil
const mobileSectionNav = document.querySelector('.mobile-section-nav'); // Contenedor del nav móvil
const categoryFilter = document.getElementById('category-filter');
const sortButton = document.getElementById('sort-button');
const totalVisitsStat = document.getElementById('total-visits-stat');
const postsReadStat = document.getElementById('posts-read-stat');
const audioTimeStat = document.getElementById('audio-time-stat');


// --- DATOS DE EJEMPLO (SIMULACIÓN DE BASE DE DATOS) ---
const posts = [
    {
        id: 'post-1',
        title: 'La Importancia de la Filosofía en la Vida Moderna',
        date: '2023-01-15',
        category: 'Filosofía',
        excerpt: 'Un análisis profundo sobre cómo el pensamiento filosófico puede ayudarnos a navegar los desafíos contemporáneos...',
        content: `
            <p>En un mundo cada vez más acelerado y complejo, la filosofía ofrece herramientas invaluables para la reflexión crítica y el autoconocimiento.</p>
            <p>Nos invita a cuestionar nuestras suposiciones, a explorar diferentes perspectivas y a desarrollar una comprensión más profunda de nosotros mismos y del universo.</p>
            <h3>Beneficios de Estudiar Filosofía</h3>
            <ul>
                <li>Desarrollo del pensamiento crítico y analítico.</li>
                <li>Mejora de la capacidad argumentativa y de comunicación.</li>
                <li>Fomento de la creatividad y la resolución de problemas.</li>
                <li>Promoción de la ética y la moral en la toma de decisiones.</li>
            </ul>
            <img src="https://via.placeholder.com/800x400?text=Filosofia" alt="Libros de filosofía">
            <p>Desde los antiguos griegos hasta los pensadores contemporáneos, la filosofía ha sido el motor de la civilización, impulsando el progreso en todos los ámbitos del saber.</p>
        `,
        image: 'https://via.placeholder.com/400x200?text=Filosofia+Moderna'
    },
    {
        id: 'post-2',
        title: 'Meditación y Bienestar: Una Guía para Principiantes',
        date: '2023-02-20',
        category: 'Espiritualidad',
        excerpt: 'Descubre los fundamentos de la meditación y cómo puede mejorar tu salud mental y física...',
        content: `
            <p>La meditación es una práctica ancestral que ha ganado popularidad en los últimos años debido a sus numerosos beneficios para la salud y el bienestar.</p>
            <p>No se trata de "poner la mente en blanco", sino de observar nuestros pensamientos y emociones sin juicio, cultivando la atención plena.</p>
            <h3>Pasos para Empezar a Meditar</h3>
            <ol>
                <li>Encuentra un lugar tranquilo y cómodo.</li>
                <li>Siéntate en una postura erguida pero relajada.</li>
                <li>Cierra los ojos suavemente o enfoca tu mirada en un punto.</li>
                <li>Presta atención a tu respiración, sintiendo cómo el aire entra y sale.</li>
                <li>Cuando tu mente divague, tráela de vuelta suavemente a la respiración.</li>
            </ol>
            <img src="https://via.placeholder.com/800x400?text=Meditacion" alt="Persona meditando">
            <p>Con la práctica constante, la meditación puede reducir el estrés, mejorar la concentración y promover un estado general de calma y felicidad.</p>
        `,
        image: 'https://via.placeholder.com/400x200?text=Meditacion+Bienestar'
    },
    {
        id: 'post-3',
        title: 'El Futuro de la Inteligencia Artificial',
        date: '2023-03-10',
        category: 'Ciencia',
        excerpt: 'Explorando los avances recientes en IA y su impacto potencial en la sociedad...',
        content: `
            <p>La inteligencia artificial (IA) es una de las tecnologías más transformadoras de nuestra era. Desde asistentes virtuales hasta vehículos autónomos, la IA está redefiniendo cómo vivimos y trabajamos.</p>
            <p>Los avances en aprendizaje automático y redes neuronales han permitido que la IA realice tareas que antes se consideraban exclusivas de la inteligencia humana.</p>
            <h3>Áreas Clave de Impacto de la IA</h3>
            <ul>
                <li>Salud: Diagnóstico de enfermedades y descubrimiento de fármacos.</li>
                <li>Transporte: Vehículos autónomos y optimización de rutas.</li>
                <li>Finanzas: Detección de fraudes y análisis de mercado.</li>
                <li>Educación: Personalización del aprendizaje y tutores inteligentes.</li>
            </ul>
            <img src="https://via.placeholder.com/800x400?text=Inteligencia+Artificial" alt="Cerebro robótico">
            <p>A medida que la IA continúa evolucionando, es crucial considerar sus implicaciones éticas y sociales para asegurar un futuro beneficioso para todos.</p>
        `,
        image: 'https://via.placeholder.com/400x200?text=IA+Futuro'
    },
    {
        id: 'post-4',
        title: 'Estoicismo: Filosofía para la Resiliencia',
        date: '2023-04-05',
        category: 'Filosofía',
        excerpt: 'Cómo los principios estoicos pueden ayudarte a enfrentar la adversidad y encontrar la tranquilidad...',
        content: `
            <p>El estoicismo, una antigua escuela de filosofía griega y romana, ofrece un marco práctico para vivir una vida con propósito y tranquilidad, incluso frente a la adversidad.</p>
            <p>Sus enseñanzas se centran en lo que podemos controlar (nuestras acciones, juicios y actitudes) y en aceptar serenamente aquello que no podemos.</p>
            <h3>Principios Clave del Estoicismo</h3>
            <ul>
                <li>**Dicotomía del Control:** Enfocarse solo en lo que está bajo nuestro control.</li>
                <li>**Amor Fati:** Amar nuestro destino y aceptar todo lo que sucede.</li>
                <li>**Memento Mori:** Recordar la brevedad de la vida para valorarla más.</li>
                <li>**Virtud:** Vivir de acuerdo con la razón y la virtud como el bien supremo.</li>
            </ul>
            <p>Figuras como Séneca, Epicteto y Marco Aurelio dejaron escritos que aún hoy resuenan con fuerza, ofreciendo sabiduría atemporal para la vida moderna.</p>
            <img src="https://via.placeholder.com/800x400?text=Estoicismo" alt="Estatua de filósofo estoico">
        `,
        image: 'https://via.placeholder.com/400x200?text=Estoicismo+Resiliencia'
    },
    {
        id: 'post-5',
        title: 'Neurociencia de la Felicidad',
        date: '2023-05-12',
        category: 'Ciencia',
        excerpt: 'Entiende cómo nuestro cerebro produce la felicidad y cómo podemos cultivarla a través de la ciencia...',
        content: `
            <p>La felicidad no es solo un estado emocional; también tiene una base biológica profunda en nuestro cerebro. La neurociencia ha comenzado a desentrañar los mecanismos detrás de nuestras experiencias de alegría y bienestar.</p>
            <p>Neurotransmisores como la dopamina, la serotonina, la oxitocina y las endorfinas juegan roles cruciales en la regulación de nuestro estado de ánimo.</p>
            <h3>Neurotransmisores de la Felicidad</h3>
            <ul>
                <li>**Dopamina:** Recompensa y motivación. Se libera al alcanzar metas.</li>
                <li>**Serotonina:** Regulación del estado de ánimo, sueño y apetito. Afecta la sensación de bienestar.</li>
                <li>**Oxitocina:** Vínculo social y confianza. Se libera en interacciones positivas.</li>
                <li>**Endorfinas:** Alivio del dolor y euforia. Se liberan con el ejercicio físico.</li>
            </ul>
            <p>Comprender cómo funcionan estos sistemas nos permite adoptar hábitos que promuevan su liberación natural, como el ejercicio, la meditación, las conexiones sociales y una dieta equilibrada.</p>
            <img src="https://via.placeholder.com/800x400?text=Cerebro+Felicidad" alt="Ilustración de un cerebro feliz">
        `,
        image: 'https://via.placeholder.com/400x200?text=Neurociencia+Felicidad'
    },
    {
        id: 'post-6',
        title: 'El Poder de la Gratitud',
        date: '2023-06-01',
        category: 'Espiritualidad',
        excerpt: 'Cómo una práctica diaria de gratitud puede transformar tu perspectiva y tu vida...',
        content: `
            <p>La gratitud es más que un simple sentimiento; es una poderosa práctica que puede cambiar radicalmente nuestra perspectiva y mejorar nuestro bienestar general.</p>
            <p>Numerosos estudios han demostrado que expresar gratitud regularmente puede aumentar la felicidad, reducir el estrés y fortalecer las relaciones.</p>
            <h3>Cómo Practicar la Gratitud</h3>
            <ul>
                <li>**Diario de Gratitud:** Anota diariamente 3-5 cosas por las que estás agradecido.</li>
                <li>**Cartas de Gratitud:** Escribe y entrega cartas a personas que te han impactado.</li>
                <li>**Expresión Diaria:** Haz un esfuerzo consciente por agradecer a las personas en tu vida.</li>
                <li>**Meditación de Gratitud:** Enfoca tu meditación en sentimientos de aprecio.</li>
            </ul>
            <p>Al cultivar la gratitud, cambiamos nuestro enfoque de lo que falta a lo que tenemos, abriendo la puerta a una mayor abundancia y satisfacción en la vida.</p>
            <img src="https://via.placeholder.com/800x400?text=Gratitud" alt="Manos sosteniendo una planta pequeña">
        `,
        image: 'https://via.placeholder.com/400x200?text=Poder+Gratitud'
    }
];

const galeriaImagenes = [
    { src: 'https://via.placeholder.com/600x400?text=Naturaleza+1', caption: 'Serenidad Natural' },
    { src: 'https://via.placeholder.com/600x400?text=Arquitectura+2', caption: 'Estructuras con Alma' },
    { src: 'https://via.placeholder.com/600x400?text=Abstracto+3', caption: 'Formas y Colores' },
    { src: 'https://via.placeholder.com/600x400?text=Personas+4', caption: 'Conexión Humana' },
    { src: 'https://via.placeholder.com/600x400?text=Paisaje+5', caption: 'Horizontes Infinitos' },
    { src: 'https://via.placeholder.com/600x400?text=Minimalismo+6', caption: 'Belleza en la Simplicidad' }
];

// --- LOGROS ---
const achievements = [
    {
        id: 'visit',
        name: 'Primer Visitante',
        description: 'Visita el sitio por primera vez.',
        icon: 'https://via.placeholder.com/60x60?text=🏆',
        unlocked: false,
        type: 'once'
    },
    {
        id: 'read_3_posts',
        name: 'Lector Novato',
        description: 'Lee 3 publicaciones.',
        icon: 'https://via.placeholder.com/60x60?text=📚',
        unlocked: false,
        type: 'counter',
        target: 3,
        current: 0
    },
    {
        id: 'read_all_posts',
        name: 'Lector Ávido',
        description: 'Lee todas las publicaciones disponibles.',
        icon: 'https://via.placeholder.com/60x60?text=🧐',
        unlocked: false,
        type: 'counter',
        target: posts.length,
        current: 0
    },
    {
        id: 'explore_gallery',
        name: 'Explorador Visual',
        description: 'Visita la sección de Galería.',
        icon: 'https://via.placeholder.com/60x60?text=🖼️',
        unlocked: false,
        type: 'once'
    },
    {
        id: 'subscribe',
        name: 'Miembro Activo',
        description: 'Suscríbete al boletín.',
        icon: 'https://via.placeholder.com/60x60?text=✉️',
        unlocked: false,
        type: 'once'
    },
    {
        id: 'listen_podcast', // Ejemplo de logro para un podcast
        name: 'Oído Atento',
        description: 'Escucha el podcast completo.',
        icon: 'https://via.placeholder.com/60x60?text=🎧',
        unlocked: false,
        type: 'once'
    },
    {
        id: 'listen_100_min',
        name: 'Auditor Pro',
        description: 'Acumula 100 minutos de escucha de audio.',
        icon: 'https://via.placeholder.com/60x60?text=⏰',
        unlocked: false,
        type: 'counter',
        target: 6000, // segundos (100 minutos * 60 segundos/minuto)
        current: 0
    },
     {
        id: 'share_content',
        name: 'Compartidor Social',
        description: 'Comparte alguna publicación (simulado).',
        icon: 'https://via.placeholder.com/60x60?text=🤝',
        unlocked: false,
        type: 'once'
    },
    {
        id: 'search_item',
        name: 'Buscador Curioso',
        description: 'Usa la función de búsqueda.',
        icon: 'https://via.placeholder.com/60x60?text=🔍',
        unlocked: false,
        type: 'once'
    }
];

let achievementCounters = JSON.parse(localStorage.getItem('achievementCounters')) || {};
let achievementStatus = JSON.parse(localStorage.getItem('achievementStatus')) || {};
let postReadStatus = JSON.parse(localStorage.getItem('postReadStatus')) || {}; // Para rastrear publicaciones leídas

// --- FUNCIONES DE UTILIDAD ---

/**
 * Guarda el estado de los logros en localStorage.
 */
function saveAchievementStatus() {
    localStorage.setItem('achievementStatus', JSON.stringify(achievementStatus));
}

/**
 * Carga el estado de los logros desde localStorage.
 */
function loadAchievementStatus() {
    const storedStatus = JSON.parse(localStorage.getItem('achievementStatus'));
    if (storedStatus) {
        Object.keys(storedStatus).forEach(id => {
            const achievement = achievements.find(a => a.id === id);
            if (achievement) {
                achievement.unlocked = storedStatus[id];
            }
        });
    }
}

/**
 * Guarda los contadores de logros en localStorage.
 */
function saveAchievementCounters() {
    localStorage.setItem('achievementCounters', JSON.stringify(achievementCounters));
}

/**
 * Actualiza y guarda el estado de lectura de una publicación.
 * @param {string} postId - El ID de la publicación.
 */
function markPostAsRead(postId) {
    if (!postReadStatus[postId]) {
        postReadStatus[postId] = true;
        localStorage.setItem('postReadStatus', JSON.stringify(postReadStatus));
        updateAchievementCounter('read_3_posts');
        updateAchievementCounter('read_all_posts');
        updateStatistics(); // Actualizar estadísticas al leer una publicación
    }
}

/**
 * Actualiza un contador de logro y desbloquea si se alcanza el objetivo.
 * @param {string} achievementId - El ID del logro a actualizar.
 */
function updateAchievementCounter(achievementId) {
    const achievement = achievements.find(a => a.id === achievementId);
    if (!achievement || achievement.unlocked || achievement.type !== 'counter') {
        return;
    }

    if (achievementId === 'read_3_posts') {
        achievementCounters.postsRead = (achievementCounters.postsRead || 0) + 1;
        achievement.current = Object.keys(postReadStatus).length; // Contar publicaciones únicas leídas
    } else if (achievementId === 'read_all_posts') {
         // Asegúrate de que todas las publicaciones se hayan leído
        const allPostsRead = posts.every(post => postReadStatus[post.id]);
        if (allPostsRead) {
            achievement.current = posts.length;
        } else {
            achievement.current = Object.keys(postReadStatus).length;
        }
    } else if (achievementId === 'podcastTime') { // Ya manejado en initAudio
        // Esto solo es un marcador, la lógica de tiempo real está en initAudio
        achievement.current = achievementCounters.podcastTime;
    }

    saveAchievementCounters();
    renderAchievements(); // Vuelve a renderizar para actualizar el progreso
    checkAchievementUnlock(achievementId);
}

/**
 * Intenta desbloquear un logro.
 * @param {string} achievementId - El ID del logro a intentar desbloquear.
 */
function unlockAchievement(achievementId) {
    const achievement = achievements.find(a => a.id === achievementId);
    if (achievement && !achievement.unlocked) {
        let shouldUnlock = false;

        if (achievement.type === 'once') {
            shouldUnlock = true;
        } else if (achievement.type === 'counter') {
            shouldUnlock = achievement.current >= achievement.target;
        }

        if (shouldUnlock) {
            achievement.unlocked = true;
            achievementStatus[achievementId] = true;
            saveAchievementStatus();
            showAchievementNotification(achievement.name);
            renderAchievements(); // Vuelve a renderizar los logros
            updateStatistics(); // Actualizar estadísticas al desbloquear un logro relevante
        }
    }
}

/**
 * Muestra una notificación de logro desbloqueado.
 * @param {string} achievementName - Nombre del logro.
 */
function showAchievementNotification(achievementName) {
    // Implementar notificación visual (ej. un toast o pop-up)
    console.log(`¡Logro desbloqueado: ${achievementName}!`);
    // Podrías crear un elemento div, añadirle estilos y un temporizador para que desaparezca
}

/**
 * Verifica si un logro de contador debe ser desbloqueado.
 * @param {string} achievementId - El ID del logro a verificar.
 */
function checkAchievementUnlock(achievementId) {
    unlockAchievement(achievementId); // Reutiliza la función unlockAchievement
}

/**
 * Inicializa el contexto de audio para evitar problemas de auto-play.
 */
let achievementAudioContext;
function initAudio() {
    try {
        achievementAudioContext = new (window.AudioContext || window.webkitAudioContext)();
        // Si el contexto está suspendido (common en Chrome), intenta resumirlo en interacción
        if (achievementAudioContext.state === 'suspended') {
            const resumeAudio = () => {
                achievementAudioContext.resume().then(() => {
                    console.log('AudioContext resumed successfully');
                    document.removeEventListener('click', resumeAudio);
                    document.removeEventListener('keydown', resumeAudio);
                });
            };
            document.addEventListener('click', resumeAudio);
            document.addEventListener('keydown', resumeAudio);
        }
    } catch (e) {
        console.warn('Web Audio API no soportada o error al inicializar AudioContext:', e);
    }
}

/**
 * Reproduce un sonido de logro.
 */
function playAchievementSound() {
    if (!achievementAudioContext) {
        console.warn('AudioContext no inicializado o no soportado.');
        return;
    }
    const oscillator = achievementAudioContext.createOscillator();
    const gainNode = achievementAudioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(achievementAudioContext.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, achievementAudioContext.currentTime); // A4
    gainNode.gain.setValueAtTime(0.5, achievementAudioContext.currentTime);

    // Pequeño efecto de envolvente
    gainNode.gain.exponentialRampToValueAtTime(0.001, achievementAudioContext.currentTime + 1);
    oscillator.start(achievementAudioContext.currentTime);
    oscillator.stop(achievementAudioContext.currentTime + 1);
}

// --- LÓGICA DEL CONTADOR DE VISITAS ---
function initializeVisitCounter() {
    let contadorVisitas = parseInt(localStorage.getItem('pageVisits') || 0);
    contadorVisitas++;
    localStorage.setItem('pageVisits', contadorVisitas);
    document.getElementById('visit-counter').textContent = contadorVisitas;
    updateStatistics(); // Actualizar estadísticas al iniciar el contador de visitas
}

// --- LÓGICA DE NAVEGACIÓN Y SECCIONES ---

/**
 * Muestra la sección de contenido especificada y oculta las demás.
 * @param {string} sectionId - El ID de la sección a mostrar.
 */
function showSection(sectionId) {
    contentSections.forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
        // Desbloquear logro de explorar galería si aplica
        if (sectionId === 'gallery') {
            unlockAchievement('explore_gallery');
        }
        // Ocultar sección de single post si no es la activa
        if (sectionId !== 'single-post') {
            singlePostSection.classList.remove('active');
        }
        // Ocultar la sección de logros si no es la activa
        if (sectionId !== 'achievements-section') {
            achievementsSection.classList.remove('active');
        }
    }

    // Actualizar clases 'active' en la navegación
    navLinks.forEach(link => {
        if (link.dataset.section === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    footerNavLinks.forEach(link => {
        if (link.dataset.section === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Asegurarse de que el input de búsqueda móvil esté oculto al cambiar de sección
    mobileSearchInputWrapper.classList.remove('active');
    mobileSectionNav.classList.remove('searching');
}

/**
 * Manejador de clic para los enlaces de navegación.
 * @param {Event} event - El evento de clic.
 */
function handleNavLinkClick(event) {
    event.preventDefault();
    const sectionId = event.target.dataset.section;
    if (sectionId) {
        showSection(sectionId);
        // Desplazarse al inicio de la sección, si es necesario
        // window.scrollTo({ top: document.getElementById(sectionId).offsetTop, behavior: 'smooth' });
    }
}

// --- LÓGICA DE PUBLICACIONES ---
let currentSortOrder = 'desc'; // 'asc' o 'desc'

/**
 * Renderiza las publicaciones en la cuadrícula.
 * @param {Array} postsToRender - Array de objetos de publicaciones a renderizar.
 */
function renderPosts(postsToRender) {
    postsGrid.innerHTML = ''; // Limpiar publicaciones existentes
    if (postsToRender.length === 0) {
        noResultsMessage.style.display = 'block';
        return;
    }
    noResultsMessage.style.display = 'none';

    postsToRender.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList.add('post-card');
        postCard.dataset.id = post.id; // Almacenar el ID del post

        postCard.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="post-card-image">
            <div class="post-card-content">
                <span class="post-card-category">${post.category}</span>
                <h3 class="post-card-title">${post.title}</h3>
                <p class="post-card-date">${new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p class="post-card-excerpt">${post.excerpt}</p>
                <a href="#" class="btn read-more-btn" data-id="${post.id}">Leer más</a>
            </div>
        `;
        postsGrid.appendChild(postCard);
    });

    // Añadir event listeners a los botones "Leer más"
    document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const postId = event.target.dataset.id;
            loadSinglePost(postId);
            markPostAsRead(postId); // Marca la publicación como leída
        });
    });

    // También permitir hacer clic en la tarjeta para leer más
    document.querySelectorAll('.post-card').forEach(card => {
        card.addEventListener('click', (event) => {
            // Evitar que el clic en el botón de leer más active esto doblemente
            if (!event.target.classList.contains('read-more-btn')) {
                const postId = card.dataset.id;
                loadSinglePost(postId);
                markPostAsRead(postId); // Marca la publicación como leída
            }
        });
    });
}

/**
 * Carga y muestra una única publicación.
 * @param {string} postId - El ID de la publicación a cargar.
 */
function loadSinglePost(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        singlePostTitle.textContent = post.title;
        singlePostDate.textContent = new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
        singlePostCategory.textContent = post.category;
        singlePostContent.innerHTML = post.content;
        showSection('single-post');
    }
}

/**
 * Filtra y ordena las publicaciones.
 */
function filterAndSortPosts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    let filteredPosts = posts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm) ||
                              post.excerpt.toLowerCase().includes(searchTerm) ||
                              post.content.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || post.category.toLowerCase() === selectedCategory.toLowerCase();
        return matchesSearch && matchesCategory;
    });

    // Ordenar por fecha
    filteredPosts.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return currentSortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });

    renderPosts(filteredPosts);
}

// --- LÓGICA DE GALERÍA DE IMÁGENES ---

/**
 * Renderiza las imágenes en la galería.
 * @param {Array} imagesToRender - Array de objetos de imagen a renderizar.
 */
function renderizarGaleria(imagesToRender) {
    imageGalleryGrid.innerHTML = ''; // Limpiar imágenes existentes
    if (imagesToRender.length === 0) {
        noImageResultsMessage.style.display = 'block';
        return;
    }
    noImageResultsMessage.style.display = 'none';

    imagesToRender.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.caption}">
            <p class="gallery-item-caption">${image.caption}</p>
        `;
        galleryItem.addEventListener('click', () => {
            openImageModal(image.src, image.caption);
        });
        imageGalleryGrid.appendChild(galleryItem);
    });
}

/**
 * Abre el modal de imagen con la imagen y el pie de foto.
 * @param {string} src - La URL de la imagen.
 * @param {string} caption - El pie de foto de la imagen.
 */
function openImageModal(src, caption) {
    modalImage.src = src;
    modalImage.alt = caption;
    captionText.textContent = caption;
    imageModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
}

/**
 * Cierra el modal de imagen.
 */
function closeImageModal() {
    imageModal.classList.remove('active');
    document.body.style.overflow = ''; // Restaura el scroll del fondo
}

// --- LÓGICA DE SUSCRIPCIÓN (FORMULARIO) ---
function handleSubscribe(event) {
    event.preventDefault();
    const emailInput = document.getElementById('subscribe-email');
    if (emailInput && emailInput.value) {
        // Simular envío de formulario
        subscribeStatus.textContent = '¡Gracias por suscribirte!';
        subscribeStatus.classList.remove('error');
        subscribeStatus.classList.add('success');
        emailInput.value = ''; // Limpiar el input
        unlockAchievement('subscribe'); // Desbloquear logro de suscripción
    } else {
        subscribeStatus.textContent = 'Por favor, introduce un correo electrónico válido.';
        subscribeStatus.classList.remove('success');
        subscribeStatus.classList.add('error');
    }
}

// --- LÓGICA DE FORMULARIO DE CONTACTO ---
function handleContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const contactStatus = document.getElementById('contact-status');

    if (name && email && message) {
        // Aquí podrías enviar los datos a un backend real
        console.log('Formulario de contacto enviado:', { name, email, message });
        contactStatus.textContent = '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.';
        contactStatus.classList.remove('error');
        contactStatus.classList.add('success');
        // Limpiar formulario
        document.getElementById('contact-form').reset();
    } else {
        contactStatus.textContent = 'Por favor, rellena todos los campos.';
        contactStatus.classList.remove('success');
        contactStatus.classList.add('error');
    }
}

// --- LÓGICA DE LOGROS ---

/**
 * Renderiza los logros en la cuadrícula de logros.
 */
function renderAchievements() {
    achievementsGrid.innerHTML = '';
    achievements.forEach(achievement => {
        const achievementCard = document.createElement('div');
        achievementCard.classList.add('achievement-card');
        achievementCard.classList.add(achievement.unlocked ? 'unlocked' : 'locked');
        achievementCard.dataset.id = achievement.id;

        const progressText = achievement.type === 'counter' && !achievement.unlocked
            ? `(${achievement.current}/${achievement.target})`
            : '';

        achievementCard.innerHTML = `
            <div class="achievement-card-icon">
                <img src="${achievement.icon}" alt="${achievement.name} Icono">
            </div>
            <h3>${achievement.name}</h3>
            <p>${achievement.description}</p>
            <p class="achievement-progress">${progressText}</p>
        `;
        achievementsGrid.appendChild(achievementCard);

        achievementCard.addEventListener('click', () => {
            openAchievementModal(achievement);
        });
    });
}

/**
 * Abre el modal de logros con los detalles del logro.
 * @param {Object} achievement - El objeto logro.
 */
function openAchievementModal(achievement) {
    achievementModalTitle.textContent = achievement.name;
    achievementModalDescription.textContent = achievement.description;
    achievementModalImage.src = achievement.icon;
    achievementModalImage.alt = `${achievement.name} Icono`;

    if (achievement.type === 'counter') {
        achievementModalProgress.textContent = achievement.unlocked
            ? '¡Desbloqueado!'
            : `Progreso: ${achievement.current}/${achievement.target}`;
    } else {
        achievementModalProgress.textContent = achievement.unlocked
            ? '¡Desbloqueado!'
            : 'Aún no desbloqueado.';
    }

    achievementModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Cierra el modal de logros.
 */
function closeAchievementModal() {
    achievementModal.classList.remove('active');
    document.body.style.overflow = '';
}

// --- LÓGICA DE ESTADÍSTICAS ---
function updateStatistics() {
    const totalVisits = parseInt(localStorage.getItem('pageVisits') || 0);
    totalVisitsStat.textContent = totalVisits.toLocaleString(); // Formatear número

    const postsReadCount = Object.keys(postReadStatus).length;
    postsReadStat.textContent = postsReadCount;

    // Convertir segundos acumulados a minutos y segundos
    const totalAudioSeconds = achievementCounters.podcastTime || 0;
    const minutes = Math.floor(totalAudioSeconds / 60);
    const seconds = totalAudioSeconds % 60;
    audioTimeStat.textContent = `${minutes}m ${seconds}s`;

    // Aquí podrías añadir lógica para estadísticas por publicación, etc.
    renderPublicationStatistics();
}

function renderPublicationStatistics() {
    const publicationStatsContainer = document.querySelector('.publication-statistics ul');
    if (!publicationStatsContainer) return; // Si no existe el ul, no hagas nada

    publicationStatsContainer.innerHTML = ''; // Limpiar estadísticas anteriores

    // Crear un mapa para contar las lecturas de cada publicación
    const postReadCounts = {};
    Object.keys(postReadStatus).forEach(postId => {
        postReadCounts[postId] = (postReadCounts[postId] || 0) + 1; // En este caso, postReadStatus solo almacena si se leyó, no cuántas veces. Para un contador real, necesitaríamos un objeto más complejo.
    });

    // Simplemente mostrar las publicaciones leídas
    const readPosts = posts.filter(post => postReadStatus[post.id]);
    if (readPosts.length === 0) {
        publicationStatsContainer.innerHTML = '<li>No hay publicaciones leídas aún.</li>';
        return;
    }

    readPosts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${post.title}</span>
            <span>Leída</span>
        `;
        publicationStatsContainer.appendChild(listItem);
    });
}


// --- INICIALIZACIÓN Y MANEJO DE EVENTOS ---
window.addEventListener('DOMContentLoaded', () => {
    initAudio(); // Intentar inicializar AudioContext
    initializeVisitCounter(); // Inicializa y actualiza el contador de visitas
    loadAchievementStatus(); // Carga el estado de los logros
    // Asegurarse de que los contadores se carguen también
    achievementCounters = JSON.parse(localStorage.getItem('achievementCounters')) || {};

    // Desbloquear logro de visita
    unlockAchievement('visit');

    currentYearSpan.textContent = new Date().getFullYear();
    animateTitle();

    // Configurar navegación
    navLinks.forEach(link => link.addEventListener('click', handleNavLinkClick));
    footerNavLinks.forEach(link => link.addEventListener('click', handleNavLinkClick));

    // Mostrar sección inicial (Home por defecto)
    showSection('home');

    // Configurar Posts
    renderPosts(posts); // Renderizar publicaciones iniciales
    categoryFilter.addEventListener('change', filterAndSortPosts);
    sortButton.addEventListener('click', () => {
        currentSortOrder = currentSortOrder === 'desc' ? 'asc' : 'desc';
        sortArrow.classList.toggle('desc', currentSortOrder === 'desc');
        sortArrow.classList.toggle('asc', currentSortOrder === 'asc');
        filterAndSortPosts();
    });
    backToPostsButton.addEventListener('click', () => showSection('posts'));

    // Configurar Búsqueda
    searchIcon.addEventListener('click', () => {
        searchInput.classList.toggle('active');
        if (searchInput.classList.contains('active')) {
            searchInput.focus();
            unlockAchievement('search_item'); // Desbloquear logro al usar la búsqueda
        } else {
            searchInput.value = ''; // Limpiar el input al ocultar
            filterAndSortPosts(); // Volver a filtrar para mostrar todo
        }
    });
    searchInput.addEventListener('input', filterAndSortPosts);

    // Configurar Galería
    renderizarGaleria(galeriaImagenes);
    closeModalButton.addEventListener('click', closeImageModal);
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            closeImageModal();
        }
    });
    gallerySearchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredImages = galeriaImagenes.filter(image =>
            image.caption.toLowerCase().includes(searchTerm)
        );
        renderizarGaleria(filteredImages);
    });

    // Configurar Suscripción
    if (subscribeForm) { // Asegurarse de que el formulario exista en el HTML
        subscribeForm.addEventListener('submit', handleSubscribe);
    }
    // Configurar Contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }


    // Configurar Logros
    renderAchievements();
    achievementsButton.addEventListener('click', () => {
        showSection('achievements-section');
    });
    closeAchievementModalButton.addEventListener('click', closeAchievementModal);
    achievementModal.addEventListener('click', (e) => {
        if (e.target === achievementModal) {
            closeAchievementModal();
        }
    });

    // Configurar Botón "Stickers" (ejemplo de funcionalidad)
    stickerButton.addEventListener('click', () => {
        alert('¡Aquí iría la lógica para mostrar o gestionar stickers!');
        // unlockAchievement('collect_sticker'); // Ejemplo de desbloqueo
    });

    // Lógica para el botón de Volver Arriba
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animación del título principal
    function animateTitle() {
        setTimeout(() => {
            mainTitleElement.classList.add('animated');
        }, 500); // Retraso para que se cargue la página
    }

    // --- LÓGICA DE AUDIO (EJEMPLO PARA LOGROS) ---
    // Simulación de un elemento de audio
    const audioExample = document.createElement('audio');
    audioExample.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'; // Un MP3 de ejemplo
    audioExample.controls = true;
    // document.body.appendChild(audioExample); // O podrías añadirlo a una sección específica

    // Lógica para el logro de escuchar podcast completo
    audioExample.addEventListener('ended', () => {
        unlockAchievement('listen_podcast');
    });

    // Lógica básica para tiempo (simplificada)
    let accumulatedTime = 0;
    let intervalId = null;
    audioExample.addEventListener('play', () => {
        if (achievementAudioContext.state === 'suspended') {
            achievementAudioContext.resume();
        }
        intervalId = setInterval(() => {
            // Asegurarse de que el contador solo avance si el audio está reproduciéndose
            if (!audioExample.paused && !audioExample.ended) {
                achievementCounters.podcastTime = (achievementCounters.podcastTime || 0) + 1;
                if(achievementCounters.podcastTime % 5 === 0) { // Guardar cada 5s para no sobrecargar
                   saveAchievementCounters();
                   updateAchievementCounter('listen_100_min'); // Actualizar progreso visual
                }
            }
        }, 1000); // Contar cada segundo
    });
    audioExample.addEventListener('pause', () => clearInterval(intervalId));
    audioExample.addEventListener('ended', () => clearInterval(intervalId));

    // Mobile Navigation Logic
    mobileSearchButton.addEventListener('click', () => {
        mobileSearchInputWrapper.classList.add('active');
        mobileSectionNav.classList.add('searching');
        mobileSearchInput.focus();
        unlockAchievement('search_item'); // Desbloquear logro al usar la búsqueda móvil
    });

    mobileSearchCloseButton.addEventListener('click', () => {
        mobileSearchInputWrapper.classList.remove('active');
        mobileSectionNav.classList.remove('searching');
        mobileSearchInput.value = ''; // Limpiar el input
        filterAndSortPosts(); // Volver a filtrar para mostrar todo
    });

    mobileSearchInput.addEventListener('input', () => {
        // Usar la misma lógica de filtro que la búsqueda principal
        const searchTerm = mobileSearchInput.value.toLowerCase();
        const filteredPosts = posts.filter(post => {
            return post.title.toLowerCase().includes(searchTerm) ||
                   post.excerpt.toLowerCase().includes(searchTerm);
        });
        renderPosts(filteredPosts);
    });

    mobileAchievementsButton.addEventListener('click', () => {
        showSection('achievements-section');
        // Ocultar la barra de búsqueda móvil si está activa
        mobileSearchInputWrapper.classList.remove('active');
        mobileSectionNav.classList.remove('searching');
    });

    mobileMenuButton.addEventListener('click', () => {
        // Aquí podrías implementar un menú lateral o un modal para la navegación principal
        alert('¡Aquí se abriría el menú de navegación principal para móvil!');
        // Por ahora, simplemente oculta la búsqueda móvil si está abierta
        mobileSearchInputWrapper.classList.remove('active');
        mobileSectionNav.classList.remove('searching');
    });

    // Asegurarse de que las estadísticas se actualicen al cargar
    updateStatistics();
});

// Listener para el evento 'beforeunload' para guardar el estado del contador de audio antes de cerrar la página
window.addEventListener('beforeunload', () => {
    saveAchievementCounters();
});