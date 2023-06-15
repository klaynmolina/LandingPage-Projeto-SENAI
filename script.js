const inicio = document.getElementById('inicio');
const contato = document.getElementById('contato');

window.onload = function () {
    changeColorContato();
    changeColorInicio();
}

function changeColorInicio() {
    const currentPage = 'current-page';
    if (window.location.href.split('/')[4] == 'projeto-frontend-senai' || window.location.href.split('/')[5] == 'index.html') {
        inicio.classList.toggle(currentPage);
    } 
}

function changeColorContato() {
    const currentPage = 'current-page';
    if (window.location.href.split('/')[5] == 'contato.html') {
        contato.classList.toggle(currentPage);
    } 
}