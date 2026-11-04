const PROJECTS_DATA = [
    { id: 1, title: "Portal Web Lotus", tag: "Frontend", role: "Core Lead", desc: "Plataforma oficial con diseno responsivo y arquitectura modular.", url: "https://github.com/Axel200514/PaginaWeb" }
];

function renderProjects() {
    const container = document.getElementById("projects-grid");
    const template = document.getElementById("project-card-template");

    if (!container || !template) {
        return;
    }

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < PROJECTS_DATA.length; i++) {
        const item = PROJECTS_DATA[i];
        const clone = template.content.cloneNode(true);

        const idElem = clone.querySelector(".project-id");
        const tagElem = clone.querySelector(".project-tag");
        const titleElem = clone.querySelector(".project-title");
        const descElem = clone.querySelector(".project-description");
        const roleElem = clone.querySelector(".project-role");
        const linkElem = clone.querySelector(".project-link");

        if (idElem) idElem.textContent = `#${String(item.id).padStart(2, "0")}`;
        if (tagElem) tagElem.textContent = item.tag;
        if (titleElem) titleElem.textContent = item.title;
        if (descElem) descElem.textContent = item.desc;
        if (roleElem) roleElem.textContent = item.role;
        if (linkElem) linkElem.href = item.url;

        fragment.appendChild(clone);
    }

    container.textContent = "";
    container.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", renderProjects);
