const inicio = document.getElementById('inicio');
const contato = document.getElementById('contato');

window.onload = function () {
    changeColorInicio();
    changeColorContato();
}

function changeColorInicio() {
    const currentPage = 'current-page';
    if (window.location.href.split('/')[3] == 'index.html') {
        inicio.classList.toggle(currentPage);
    } 
}

function changeColorContato() {
    const currentPage = 'current-page';
    if (window.location.href.split('/')[3] == 'contato.html') {
        contato.classList.toggle(currentPage);
    } 
}