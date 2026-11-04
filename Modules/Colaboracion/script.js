const COLLAB_PROJECTS = [
    { id: 1, title: "Modulo de Colaboracion", tag: "Frontend", author: "Axel & Alex", desc: "Arquitectura modular para gestion y despliegue de colaboraciones de software.", url: "https://github.com/Axel200514/PaginaWeb" }
    { id: 3, title: "Cliente API Reutilizable", tag: "Networking", author: "Axel & Alex", desc: "Cliente HTTP tipado con interceptores de autenticacion y serializacion JSON.", url: "https://github.com/Axel200514" },
    { id: 4, title: "Almacen de Tokens Seguro", tag: "Security", author: "Axel & Alex", desc: "Capa de persistencia desacoplada para tokens Bearer en almacenamiento cifrado.", url: "https://github.com/Axel200514" },
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
