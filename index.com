<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logos y Espíritu | Blog para jóvenes</title>
    <style>
        /* Variables de colores */
        :root {
            --color-primary: #6d5dfc;
            --color-secondary: #ff5e7d;
            --color-accent: #3ae374;
            --color-bg: #f9f9f9;
            --color-text: #333;
            --color-light: #ffffff;
            --color-dark: #2c2c2c;
            --shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            --radius: 8px;
        }

        /* Reset básico */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--color-bg);
            color: var(--color-text);
            line-height: 1.6;
        }

        /* Contenedor principal */
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        header {
            background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
            color: var(--color-light);
            padding: 60px 0 30px;
            text-align: center;
            border-radius: 0 0 var(--radius) var(--radius);
            margin-bottom: 40px;
            box-shadow: var(--shadow);
        }

        header h1 {
            font-size: 3rem;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }

        header p {
            font-size: 1.2rem;
            max-width: 600px;
            margin: 0 auto;
            opacity: 0.9;
        }

        /* Navegación */
        nav {
            background-color: var(--color-light);
            padding: 15px 0;
            border-radius: var(--radius);
            margin: -20px auto 40px;
            max-width: 90%;
            box-shadow: var(--shadow);
            position: relative;
            z-index: 10;
        }

        nav ul {
            display: flex;
            justify-content: center;
            list-style: none;
            flex-wrap: wrap;
        }

        nav ul li {
            margin: 0 15px;
        }

        nav ul li a {
            color: var(--color-dark);
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            padding: 8px 12px;
            border-radius: var(--radius);
            transition: all 0.3s ease;
        }

        nav ul li a:hover {
            background-color: rgba(109, 93, 252, 0.1);
            color: var(--color-primary);
        }

        /* Sección de publicaciones */
        .post-section {
            padding: 40px 0;
        }

        .section-title {
            text-align: center;
            margin-bottom: 30px;
            color: var(--color-dark);
            font-size: 2rem;
            position: relative;
        }

        .section-title::after {
            content: "";
            display: block;
            width: 80px;
            height: 4px;
            background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
            margin: 10px auto 0;
            border-radius: 2px;
        }

        .posts-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 30px;
        }

        .post-card {
            background-color: var(--color-light);
            border-radius: var(--radius);
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .post-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
        }

        .post-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .post-content {
            padding: 20px;
        }

        .post-title {
            font-size: 1.4rem;
            margin-bottom: 10px;
            color: var(--color-dark);
        }

        .post-date {
            font-size: 0.9rem;
            color: #777;
            margin-bottom: 12px;
            display: block;
        }

        .post-excerpt {
            margin-bottom: 15px;
            color: #555;
        }

        .read-more {
            display: inline-block;
            padding: 8px 20px;
            background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
            color: var(--color-light);
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            transition: transform 0.3s ease;
        }

        .read-more:hover {
            transform: scale(1.05);
        }

        /* Post individual */
        .single-post {
            background-color: var(--color-light);
            border-radius: var(--radius);
            padding: 30px;
            margin-bottom: 40px;
            box-shadow: var(--shadow);
        }

        .single-post-title {
            font-size: 2.2rem;
            margin-bottom: 15px;
            color: var(--color-dark);
        }

        .single-post-info {
            display: flex;
            align-items: center;
            margin-bottom: 25px;
            color: #666;
            font-size: 0.95rem;
        }

        .single-post-date {
            margin-right: 20px;
        }

        .single-post-category {
            background-color: rgba(109, 93, 252, 0.1);
            color: var(--color-primary);
            padding: 5px 12px;
            border-radius: 50px;
            font-weight: 600;
        }

        .single-post-content {
            line-height: 1.8;
        }

        .single-post-content img {
            max-width: 100%;
            border-radius: var(--radius);
            margin: 25px 0;
        }

        .single-post-content p {
            margin-bottom: 20px;
        }

        /* Footer */
        footer {
            background: linear-gradient(135deg, var(--color-dark), #444);
            color: var(--color-light);
            padding: 60px 0 30px;
            margin-top: 60px;
            border-radius: var(--radius) var(--radius) 0 0;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
        }

        .footer-section h3 {
            font-size: 1.4rem;
            margin-bottom: 20px;
            position: relative;
            padding-bottom: 10px;
        }

        .footer-section h3::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 50px;
            height: 3px;
            background: var(--color-accent);
        }

        .footer-section p {
            margin-bottom: 15px;
            opacity: 0.8;
        }

        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }

        .social-links a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.1);
            color: var(--color-light);
            border-radius: 50%;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .social-links a:hover {
            background-color: var(--color-accent);
            transform: translateY(-3px);
        }

        .social-icon {
            font-size: 20px;
        }

        .copyright {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            font-size: 0.9rem;
            opacity: 0.7;
        }

        /* Botón para volver arriba */
        .back-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            opacity: 0;
            transition: all 0.3s ease;
            pointer-events: none;
        }

        .back-to-top.visible {
            opacity: 1;
            pointer-events: auto;
        }

        .back-to-top:hover {
            transform: translateY(-5px);
        }

        /* Sobre mí */
        .about-section {
            background-color: var(--color-light);
            border-radius: var(--radius);
            padding: 40px;
            margin-bottom: 40px;
            box-shadow: var(--shadow);
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 30px;
        }

        .about-image img {
            width: 100%;
            border-radius: var(--radius);
            box-shadow: var(--shadow);
        }

        .about-text h2 {
            margin-bottom: 20px;
            color: var(--color-dark);
            font-size: 2rem;
        }

        .about-text p {
            margin-bottom: 15px;
            line-height: 1.8;
        }

        /* Contacto */
        .contact-section {
            background-color: var(--color-light);
            border-radius: var(--radius);
            padding: 40px;
            margin-bottom: 40px;
            box-shadow: var(--shadow);
        }

        .contact-form {
            display: grid;
            gap: 20px;
            max-width: 600px;
            margin: 0 auto;
        }

        .form-group {
            display: flex;
            flex-direction: column;
        }

        .form-group label {
            margin-bottom: 8px;
            font-weight: 600;
            color: var(--color-dark);
        }

        .form-input {
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: var(--radius);
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }

        .form-input:focus {
            outline: none;
            border-color: var(--color-primary);
        }

        textarea.form-input {
            min-height: 150px;
            resize: vertical;
        }

        .submit-btn {
            background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 50px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.3s ease;
            margin-top: 10px;
            justify-self: start;
        }

        .submit-btn:hover {
            transform: scale(1.05);
        }

        /* Responsividad */
        @media (max-width: 768px) {
            header h1 {
                font-size: 2.2rem;
            }

            nav ul {
                gap: 5px;
            }

            .about-content {
                grid-template-columns: 1fr;
            }

            .single-post-title {
                font-size: 1.8rem;
            }

            .footer-content {
                grid-template-columns: 1fr;
                gap: 30px;
            }
        }

        @media (max-width: 480px) {
            header {
                padding: 40px 0 20px;
            }
            
            header h1 {
                font-size: 1.8rem;
            }
            
            header p {
                font-size: 1rem;
            }
            
            .section-title {
                font-size: 1.6rem;
            }
            
            .post-title {
                font-size: 1.2rem;
            }
            
            .single-post {
                padding: 20px;
            }
            
            .single-post-title {
                font-size: 1.6rem;
            }
        }

        /* Iconos de FontAwesome */
        .fa {
            display: inline-block;
            width: 1em;
            height: 1em;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }

        .fa-facebook {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23ffffff' d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z'/%3E%3C/svg%3E");
        }

        .fa-twitter {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23ffffff' d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'/%3E%3C/svg%3E");
        }

        .fa-instagram {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='%23ffffff' d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'/%3E%3C/svg%3E");
        }

        .fa-youtube {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath fill='%23ffffff' d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z'/%3E%3C/svg%3E");
        }

        .fa-chevron-up {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='%23ffffff' d='M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z'/%3E%3C/svg%3E");
        }
    </style>
</head>
<body>
    <!-- Encabezado -->
    <header>
        <div class="container">
            <h1>Logos y Espíritu</h1>
            <p>"Iluminando el camino de los jóvenes con la luz de la fe y el conocimiento"</p>
        </div>
    </header>

    <!-- Navegación -->
    <div class="container">
        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="sobre-mi.html">Sobre mí</a></li>
                <li><a href="publicaciones.html">Publicaciones</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </nav>

        <!-- Sección de Publicaciones Recientes -->
        <section class="post-section">
            <h2 class="section-title">Publicaciones Recientes</h2>
            <div class="posts-grid">
                <!-- Publicación 1 -->
                <article class="post-card">
                    <img src="/api/placeholder/600/400" alt="La espiritualidad en tiempos modernos" class="post-image">
                    <div class="post-content">
                        <h3 class="post-title">La espiritualidad en tiempos modernos</h3>
                        <span class="post-date">23 de abril, 2025</span>
                        <p class="post-excerpt">¿Cómo podemos conectar con lo divino en una era digital? Exploramos formas de mantener viva la fe en un mundo acelerado.</p>
                        <a href="post1.html" class="read-more">Leer más</a>
                    </div>
                </article>

                <!-- Publicación 2 -->
                <article class="post-card">
                    <img src="/api/placeholder/600/400" alt="Ciencia y Fe: un diálogo posible" class="post-image">
                    <div class="post-content">
                        <h3 class="post-title">Ciencia y Fe: un diálogo posible</h3>
                        <span class="post-date">18 de abril, 2025</span>
                        <p class="post-excerpt">Descubre cómo la ciencia y la religión no son enemigos, sino dos caminos complementarios hacia el conocimiento.</p>
                        <a href="post2.html" class="read-more">Leer más</a>
                    </div>
                </article>

                <!-- Publicación 3 -->
                <article class="post-card">
                    <img src="/api/placeholder/600/400" alt="Meditación para principiantes" class="post-image">
                    <div class="post-content">
                        <h3 class="post-title">Meditación para principiantes</h3>
                        <span class="post-date">10 de abril, 2025</span>
                        <p class="post-excerpt">Una guía práctica para comenzar a meditar y encontrar paz interior en medio del caos cotidiano.</p>
                        <a href="post3.html" class="read-more">Leer más</a>
                    </div>
                </article>
            </div>
        </section>

        <!-- Vista de un post individual -->
        <section class="single-post" style="display: none;">
            <h1 class="single-post-title">La espiritualidad en tiempos modernos</h1>
            <div class="single-post-info">
                <span class="single-post-date">23 de abril, 2025</span>
                <span class="single-post-category">Espiritualidad</span>
            </div>
            <div class="single-post-content">
                <img src="/api/placeholder/800/400" alt="Joven meditando con tecnología">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisi eu nisi. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisi eu nisi.</p>
                <p>Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.</p>
                <h2>Conectando con lo divino</h2>
                <p>Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                <img src="/api/placeholder/800/400" alt="Comunidad joven en oración">
                <p>Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh.</p>
                <h2>Prácticas para el día a día</h2>
                <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
            </div>
        </section>

        <!-- Sección Sobre mí -->
        <section class="about-section" style="display: none;">
            <h2 class="section-title">Sobre mí</h2>
            <div class="about-content">
                <div class="about-image">
                    <img src="/api/placeholder/400/400" alt="Foto del autor">
                </div>
                <div class="about-text">
                    <h2>¡Hola! Soy [Tu Nombre]</h2>
                    <p>Bienvenido a mi espacio. Soy un apasionado de la espiritualidad y la religión desde una perspectiva moderna y juvenil. Mi misión es crear puentes entre las tradiciones espirituales milenarias y las nuevas generaciones.</p>
                    <p>Estudié [Tu Formación] y he dedicado los últimos años a investigar cómo las enseñanzas espirituales pueden transformar positivamente la vida de los jóvenes en el mundo actual.</p>
                    <p>A través de este blog, quiero compartir reflexiones, herramientas prácticas y experiencias que nos ayuden a conectar con nuestra dimensión espiritual sin desconectarnos del mundo en que vivimos.</p>
                    <p>¡Gracias por acompañarme en este viaje de descubrimiento y crecimiento!</p>
                </div>
            </div>
        </section>

        <!-- Sección Contacto -->
        <section class="contact-section" style="display: none;">
            <h2 class="section-title">Contacto</h2>
            <form class="contact-form">
                <div class="form-group">
                    <label for="name">Nombre</label>
                    <input type="text" id="name" class="form-input" required>
                </div>
                <div class="form-group">
                    <label for="email">Correo electrónico</label>
                    <input type="email" id="email" class="form-input" required>
                </div>
                <div class="form-
