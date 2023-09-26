const btn = document.querySelector('.btn-calcular');
const div = document.querySelector('.card');

btn.addEventListener('click', viraCard);

function viraCard(event) {
    div.classList.add('ativo');
}