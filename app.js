const btnCalcular = document.querySelector('.btn-calcular');
const btnLimpar = document.querySelector('.btn-limpar');
const btnRepetir = document.querySelector('.btn-repetir');
const div = document.querySelector('.card');
const inputIdade = document.querySelector('#idade');
const inputAltura = document.querySelector('#altura');
const inputPeso = document.querySelector('#peso');
const valorJs = document.querySelector('.valorJS');

btnCalcular.addEventListener('click', viraCard);

function viraCard(event) {
    let valorAltura = inputAltura.value;
    let valorPeso = inputPeso.value;
    const imc = (valorPeso / (valorAltura * valorAltura)).toFixed(2)
    console.log(imc)
    valorJs.innerHTML = imc
    console.log(valorAltura, valorPeso);
    div.classList.add('ativo');
}

btnLimpar.addEventListener('click', () => {
    inputIdade.value = '';
    inputAltura.value = '';
    inputPeso.value = '';
})

btnRepetir.addEventListener('click', repetirTeste)

function repetirTeste() {
    div.classList.remove('ativo');
    inputIdade.value = '';
    inputAltura.value = '';
    inputPeso.value = '';
}