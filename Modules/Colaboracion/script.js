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
