const COLLAB_PROJECTS = [
    { id: 1, title: "Modulo de Colaboracion", tag: "Frontend", author: "Axel & Alex", desc: "Arquitectura modular para gestion y despliegue de colaboraciones de software.", url: "https://github.com/Axel200514/PaginaWeb" }
    { id: 3, title: "Cliente API Reutilizable", tag: "Networking", author: "Axel & Alex", desc: "Cliente HTTP tipado con interceptores de autenticacion y serializacion JSON.", url: "https://github.com/Axel200514" },
    { id: 4, title: "Almacen de Tokens Seguro", tag: "Security", author: "Axel & Alex", desc: "Capa de persistencia desacoplada para tokens Bearer en almacenamiento cifrado.", url: "https://github.com/Axel200514" },
    { id: 5, title: "Contenedor GetIt Service Locator", tag: "Architecture", author: "Axel & Alex", desc: "Inyeccion de dependencias centralizada para repositorios y servicios de dominio.", url: "https://github.com/Axel200514" },
    { id: 6, title: "Motor de Validacion de Datos", tag: "Utilities", author: "Axel & Alex", desc: "Modulo de validaciones de negocio con sanitizacion preventiva contra inyecciones.", url: "https://github.com/Axel200514" },
    { id: 7, title: "Optimizador de Cache LRU", tag: "Performance", author: "Axel & Alex", desc: "Algoritmo de gestion de memoria temporal para aceleracion de consultas frecuentes.", url: "https://github.com/Axel200514" },
    { id: 8, title: "Sistema de Temas Dinamicos", tag: "UI/UX", author: "Axel & Alex", desc: "Arquitectura de diseno visual con variables CSS y soporte para modo oscuro.", url: "https://github.com/Axel200514" },
    { id: 9, title: "Tarjetas de Renderizado GPU", tag: "Frontend", author: "Axel & Alex", desc: "Componentes modulares acelerados por hardware con cero costo de repintado.", url: "https://github.com/Axel200514" },
    { id: 18, title: "Manejador Global de Excepciones", tag: "Error Handling", author: "Axel & Alex", desc: "Captura centralizada de fallos tipados para respuesta amigable al usuario.", url: "https://github.com/Axel200514" },
    { id: 19, title: "Interceptores de Red Asincronos", tag: "Networking", author: "Axel & Alex", desc: "Monitoreo y enriquecimiento de encabezados HTTP en tiempo de ejecucion.", url: "https://github.com/Axel200514" },
    { id: 20, title: "Controlador de Formularios Reactivos", tag: "State", author: "Axel & Alex", desc: "Gestion de controladores y liberacion controlada de memoria mediante dispose.", url: "https://github.com/Axel200514" },
    { id: 21, title: "Exportador de Informes Tecnicos", tag: "Reports", author: "Axel & Alex", desc: "Generador de reportes estructurados para auditorias de codigo y calidad.", url: "https://github.com/Axel200514" },
    { id: 22, title: "Panel de Metricas de Rendimiento", tag: "Monitoring", author: "Axel & Alex", desc: "Visualizador de tiempos de carga, framerate y consumo de recursos DOM.", url: "https://github.com/Axel200514" },
    { id: 23, title: "Sistema de Iconografia Vectorial", tag: "Assets", author: "Axel & Alex", desc: "Libreria de simbolos SVG optimizados para reducir la carga de transferencia.", url: "https://github.com/Axel200514" },
    { id: 24, title: "Filtro de Contenido Dinamico", tag: "Search", author: "Axel & Alex", desc: "Buscador en tiempo real indexado en memoria con coincidencia progresiva.", url: "https://github.com/Axel200514" },
    { id: 25, title: "Modulo de Notificaciones Toast", tag: "UI Feedback", author: "Axel & Alex", desc: "Mensajes flotantes temporizados con desvanecimiento acelerado por GPU.", url: "https://github.com/Axel200514" },
    { id: 26, title: "Paginador Virtual de Listas", tag: "Virtualization", author: "Axel & Alex", desc: "Renderizado exclusivo de elementos visibles en viewport para grandes listas.", url: "https://github.com/Axel200514" },
    { id: 27, title: "Cargador Progresivo de Imagenes", tag: "Assets", author: "Axel & Alex", desc: "Decodificacion asincrona y lazy loading nativo para evitar bloqueos del hilo.", url: "https://github.com/Axel200514" },
    { id: 28, title: "Manejador de Eventos Delegados", tag: "DOM API", author: "Axel & Alex", desc: "Captura de interacciones en el contenedor principal para ahorrar memoria.", url: "https://github.com/Axel200514" },
    { id: 29, title: "Sanitizador de Cadenas UTF-8", tag: "Security", author: "Axel & Alex", desc: "Normalizacion de caracteres especiales y prevencion de desbordamientos.", url: "https://github.com/Axel200514" },
    { id: 30, title: "Adaptador de Almacenamiento Local", tag: "Storage", author: "Axel & Alex", desc: "Wrapper tipado sobre LocalStorage con expiracion automatica de registros.", url: "https://github.com/Axel200514" },
    { id: 31, title: "Gestor de Historial de Cambios", tag: "Audit", author: "Axel & Alex", desc: "Registro inmutable de versiones para seguimiento continuo de despliegues.", url: "https://github.com/Axel200514" },
    { id: 32, title: "Controlador de Modales Accesibles", tag: "A11y", author: "Axel & Alex", desc: "Dialogos modales con bloqueo de foco y cierre accesible por teclado.", url: "https://github.com/Axel200514" },
    { id: 33, title: "Analizador de Dependencias Ciclicas", tag: "Tooling", author: "Axel & Alex", desc: "Script de verificacion para asegurar una arquitectura en capas limpia.", url: "https://github.com/Axel200514" },
    { id: 34, title: "Pipeline de Compilacion Rapida", tag: "DevOps", author: "Axel & Alex", desc: "Automatizacion de empaquetado y verificacion estatica de sintaxis.", url: "https://github.com/Axel200514" },
    { id: 35, title: "Generador de Breadcrumbs Semanticos", tag: "SEO", author: "Axel & Alex", desc: "Rutas de navegacion estructuradas para indexadores y navegadores.", url: "https://github.com/Axel200514" },
    { id: 36, title: "Temporizador de Tareas en Background", tag: "Async", author: "Axel & Alex", desc: "Planificador de ejecuciones diferidas mediante requestIdleCallback.", url: "https://github.com/Axel200514" },
    { id: 37, title: "Inspector de Accesibilidad Web", tag: "Quality", author: "Axel & Alex", desc: "Herramienta de medicion de contrastes cromaticos segun WCAG AAA.", url: "https://github.com/Axel200514" },
    { id: 38, title: "Sincronizador Multi-Pestana", tag: "Broadcast", author: "Axel & Alex", desc: "Canal de comunicacion entre ventanas abiertas mediante BroadcastChannel.", url: "https://github.com/Axel200514" },
    { id: 39, title: "Validador de Esquemas de Datos", tag: "Data", author: "Axel & Alex", desc: "Comprobacion en runtime de tipos primitivos y estructuras compuestas.", url: "https://github.com/Axel200514" },
    { id: 40, title: "Optimizador de Tipografias Web", tag: "Performance", author: "Axel & Alex", desc: "Estrategia font-display swap para erradicar el parpadeo de texto invisible.", url: "https://github.com/Axel200514" },
    { id: 41, title: "Controlador de Gestos Tactiles", tag: "Mobile Web", author: "Axel & Alex", desc: "Deteccion de deslizamientos y toques con eventos pasivos de puntero.", url: "https://github.com/Axel200514" },
    { id: 42, title: "Monitor de Estado de Red Offline", tag: "PWA", author: "Axel & Alex", desc: "Deteccion reactiva de perdida de conectividad y sincronizacion diferida.", url: "https://github.com/Axel200514" },
    { id: 43, title: "Mapeador de Respuestas HTTP REST", tag: "Backend", author: "Axel & Alex", desc: "Transformador agnostico de payloads heterogeneos a modelos de entidad.", url: "https://github.com/Axel200514" },
    { id: 44, title: "Compresor de Cargas JSON", tag: "Network", author: "Axel & Alex", desc: "Minificacion en memoria para reduccion del ancho de banda transferido.", url: "https://github.com/Axel200514" },
    { id: 45, title: "Sistema de Badges de Estado", tag: "UI Components", author: "Axel & Alex", desc: "Etiquetas visuales de clasificacion con variantes semanticas.", url: "https://github.com/Axel200514" },
    { id: 46, title: "Generador de Resumenes de Auditoria", tag: "Analytics", author: "Axel & Alex", desc: "Consolidador de metricas de calidad y cobertura de codigo.", url: "https://github.com/Axel200514" },
];

function renderCollaborations() {
    const grid = document.getElementById("collab-grid");
    const template = document.getElementById("collab-card-template");

    if (!grid || !template) {
        return;
    }

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < COLLAB_PROJECTS.length; i++) {
        const item = COLLAB_PROJECTS[i    { id: 3, title: "Cliente API Reutilizable", tag: "Networking", author: "Axel & Alex", desc: "Cliente HTTP tipado con interceptores de autenticacion y serializacion JSON.", url: "https://github.com/Axel200514" },
    { id: 4, title: "Almacen de Tokens Seguro", tag: "Security", author: "Axel & Alex", desc: "Capa de persistencia desacoplada para tokens Bearer en almacenamiento cifrado.", url: "https://github.com/Axel200514" },
    { id: 5, title: "Contenedor GetIt Service Locator", tag: "Architecture", author: "Axel & Alex", desc: "Inyeccion de dependencias centralizada para repositorios y servicios de dominio.", url: "https://github.com/Axel200514" },
    { id: 6, title: "Motor de Validacion de Datos", tag: "Utilities", author: "Axel & Alex", desc: "Modulo de validaciones de negocio con sanitizacion preventiva contra inyecciones.", url: "https://github.com/Axel200514" },
    { id: 7, title: "Optimizador de Cache LRU", tag: "Performance", author: "Axel & Alex", desc: "Algoritmo de gestion de memoria temporal para aceleracion de consultas frecuentes.", url: "https://github.com/Axel200514" },
    { id: 8, title: "Sistema de Temas Dinamicos", tag: "UI/UX", author: "Axel & Alex", desc: "Arquitectura de diseno visual con variables CSS y soporte para modo oscuro.", url: "https://github.com/Axel200514" },
    { id: 9, title: "Tarjetas de Renderizado GPU", tag: "Frontend", author: "Axel & Alex", desc: "Componentes modulares acelerados por hardware con cero costo de repintado.", url: "https://github.com/Axel200514" },
    { id: 18, title: "Manejador Global de Excepciones", tag: "Error Handling", author: "Axel & Alex", desc: "Captura centralizada de fallos tipados para respuesta amigable al usuario.", url: "https://github.com/Axel200514" },
    { id: 19, title: "Interceptores de Red Asincronos", tag: "Networking", author: "Axel & Alex", desc: "Monitoreo y enriquecimiento de encabezados HTTP en tiempo de ejecucion.", url: "https://github.com/Axel200514" },
    { id: 20, title: "Controlador de Formularios Reactivos", tag: "State", author: "Axel & Alex", desc: "Gestion de controladores y liberacion controlada de memoria mediante dispose.", url: "https://github.com/Axel200514" },
    { id: 21, title: "Exportador de Informes Tecnicos", tag: "Reports", author: "Axel & Alex", desc: "Generador de reportes estructurados para auditorias de codigo y calidad.", url: "https://github.com/Axel200514" },
    { id: 22, title: "Panel de Metricas de Rendimiento", tag: "Monitoring", author: "Axel & Alex", desc: "Visualizador de tiempos de carga, framerate y consumo de recursos DOM.", url: "https://github.com/Axel200514" },
    { id: 23, title: "Sistema de Iconografia Vectorial", tag: "Assets", author: "Axel & Alex", desc: "Libreria de simbolos SVG optimizados para reducir la carga de transferencia.", url: "https://github.com/Axel200514" },
    { id: 24, title: "Filtro de Contenido Dinamico", tag: "Search", author: "Axel & Alex", desc: "Buscador en tiempo real indexado en memoria con coincidencia progresiva.", url: "https://github.com/Axel200514" },
    { id: 25, title: "Modulo de Notificaciones Toast", tag: "UI Feedback", author: "Axel & Alex", desc: "Mensajes flotantes temporizados con desvanecimiento acelerado por GPU.", url: "https://github.com/Axel200514" },
    { id: 26, title: "Paginador Virtual de Listas", tag: "Virtualization", author: "Axel & Alex", desc: "Renderizado exclusivo de elementos visibles en viewport para grandes listas.", url: "https://github.com/Axel200514" },
    { id: 27, title: "Cargador Progresivo de Imagenes", tag: "Assets", author: "Axel & Alex", desc: "Decodificacion asincrona y lazy loading nativo para evitar bloqueos del hilo.", url: "https://github.com/Axel200514" },
    { id: 28, title: "Manejador de Eventos Delegados", tag: "DOM API", author: "Axel & Alex", desc: "Captura de interacciones en el contenedor principal para ahorrar memoria.", url: "https://github.com/Axel200514" },
    { id: 29, title: "Sanitizador de Cadenas UTF-8", tag: "Security", author: "Axel & Alex", desc: "Normalizacion de caracteres especiales y prevencion de desbordamientos.", url: "https://github.com/Axel200514" },
    { id: 30, title: "Adaptador de Almacenamiento Local", tag: "Storage", author: "Axel & Alex", desc: "Wrapper tipado sobre LocalStorage con expiracion automatica de registros.", url: "https://github.com/Axel200514" },
    { id: 31, title: "Gestor de Historial de Cambios", tag: "Audit", author: "Axel & Alex", desc: "Registro inmutable de versiones para seguimiento continuo de despliegues.", url: "https://github.com/Axel200514" },
    { id: 32, title: "Controlador de Modales Accesibles", tag: "A11y", author: "Axel & Alex", desc: "Dialogos modales con bloqueo de foco y cierre accesible por teclado.", url: "https://github.com/Axel200514" },
    { id: 33, title: "Analizador de Dependencias Ciclicas", tag: "Tooling", author: "Axel & Alex", desc: "Script de verificacion para asegurar una arquitectura en capas limpia.", url: "https://github.com/Axel200514" },
    { id: 34, title: "Pipeline de Compilacion Rapida", tag: "DevOps", author: "Axel & Alex", desc: "Automatizacion de empaquetado y verificacion estatica de sintaxis.", url: "https://github.com/Axel200514" },
    { id: 35, title: "Generador de Breadcrumbs Semanticos", tag: "SEO", author: "Axel & Alex", desc: "Rutas de navegacion estructuradas para indexadores y navegadores.", url: "https://github.com/Axel200514" },
    { id: 36, title: "Temporizador de Tareas en Background", tag: "Async", author: "Axel & Alex", desc: "Planificador de ejecuciones diferidas mediante requestIdleCallback.", url: "https://github.com/Axel200514" },
    { id: 37, title: "Inspector de Accesibilidad Web", tag: "Quality", author: "Axel & Alex", desc: "Herramienta de medicion de contrastes cromaticos segun WCAG AAA.", url: "https://github.com/Axel200514" },
    { id: 38, title: "Sincronizador Multi-Pestana", tag: "Broadcast", author: "Axel & Alex", desc: "Canal de comunicacion entre ventanas abiertas mediante BroadcastChannel.", url: "https://github.com/Axel200514" },
    { id: 39, title: "Validador de Esquemas de Datos", tag: "Data", author: "Axel & Alex", desc: "Comprobacion en runtime de tipos primitivos y estructuras compuestas.", url: "https://github.com/Axel200514" },
    { id: 40, title: "Optimizador de Tipografias Web", tag: "Performance", author: "Axel & Alex", desc: "Estrategia font-display swap para erradicar el parpadeo de texto invisible.", url: "https://github.com/Axel200514" },
    { id: 41, title: "Controlador de Gestos Tactiles", tag: "Mobile Web", author: "Axel & Alex", desc: "Deteccion de deslizamientos y toques con eventos pasivos de puntero.", url: "https://github.com/Axel200514" },
    { id: 42, title: "Monitor de Estado de Red Offline", tag: "PWA", author: "Axel & Alex", desc: "Deteccion reactiva de perdida de conectividad y sincronizacion diferida.", url: "https://github.com/Axel200514" },
    { id: 43, title: "Mapeador de Respuestas HTTP REST", tag: "Backend", author: "Axel & Alex", desc: "Transformador agnostico de payloads heterogeneos a modelos de entidad.", url: "https://github.com/Axel200514" },
    { id: 44, title: "Compresor de Cargas JSON", tag: "Network", author: "Axel & Alex", desc: "Minificacion en memoria para reduccion del ancho de banda transferido.", url: "https://github.com/Axel200514" },
    { id: 45, title: "Sistema de Badges de Estado", tag: "UI Components", author: "Axel & Alex", desc: "Etiquetas visuales de clasificacion con variantes semanticas.", url: "https://github.com/Axel200514" },
    { id: 46, title: "Generador de Resumenes de Auditoria", tag: "Analytics", author: "Axel & Alex", desc: "Consolidador de metricas de calidad y cobertura de codigo.", url: "https://github.com/Axel200514" },
];
        const clone = template.content.cloneNode(true);

        const idNode = clone.querySelector(".card-id");
        const tagNode = clone.querySelector(".card-tag");
        const titleNode = clone.querySelector(".card-title");
        const descNode = clone.querySelector(".card-desc");
        const authorNode = clone.querySelector(".card-author");
        const linkNode = clone.querySelector(".card-link");

        if (idNode) idNode.textContent = `#${String(item.id).padStart(2, "0")}`;
        if (tagNode) tagNode.textContent = item.tag;
        if (titleNode) titleNode.textContent = item.title;
        if (descNode) descNode.textContent = item.desc;
        if (authorNode) authorNode.textContent = item.author;
        if (linkNode) linkNode.href = item.url;

        fragment.appendChild(clone);
    }

    grid.textContent = "";
    grid.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", renderCollaborations);
