// =========================
// TARJETA: REPORTAR FALLO
// =========================

const btnReportar = document.querySelector('#btn-reportar');

if (btnReportar) {
    btnReportar.addEventListener('click', () => {
        alert("Iniciando sistema de reporte...");
    });
}


// =========================
// TARJETA: MANUAL
// =========================

const btnManual = document.querySelector('#btn-manual');

if (btnManual) {
    btnManual.addEventListener('click', () => {
        alert("Abriendo el manual de usuario");
    });
}


// =========================
// MENÚ HAMBURGUESA
// =========================

const botonMenu = document.querySelector('#btnMenu');
const menuNavegacion = document.querySelector('#navegacion');

if (botonMenu && menuNavegacion) {

    botonMenu.addEventListener('click', () => {

        menuNavegacion.classList.toggle('menu-visible');

    });

}
