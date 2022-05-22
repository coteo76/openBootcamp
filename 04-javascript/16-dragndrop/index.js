const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const papelera = document.getElementById("papelera");

parrafos.forEach( parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Arrastrando el parrafo: ", parrafo.innerText);
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id", parrafo.id);
    });

    parrafo.addEventListener("dragend", () => {
        // console.log("Terminado de arrastrar.");
        parrafo.classList.remove("dragging");
    });
});

secciones.forEach( seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault();
        event.dataTransfer.dropEffect ="move";
        seccion.classList.add("sombra");

    });
    
    seccion.addEventListener("dragleave", () => {
        seccion.classList.remove("sombra");
    });

    seccion.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id");
        console.log("Parrafo id: ", id_parrafo);

        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo);
        seccion.classList.remove("sombra");
    });
});

papelera.addEventListener("dragover", event => {
    event.preventDefault();
    event.dataTransfer.dropEffect ="move";
    papelera.classList.add("sombra");

});

papelera.addEventListener("dragleave", () => {
    papelera.classList.remove("sombra");
});

papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id");
    console.log("Eliminado Parrafo id: ", id_parrafo);

    const parrafo = document.getElementById(id_parrafo);
    parrafo.classList.add("oculta");
    papelera.classList.remove("sombra");
});