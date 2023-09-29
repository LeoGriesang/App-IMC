const btnCalcular = document.querySelector('.btn-calcular');
const btnLimpar = document.querySelector('.btn-limpar');
const btnRepetir = document.querySelector('.btn-repetir');
const div = document.querySelector('.card');
const inputIdade = document.querySelector('#idade');
const inputAltura = document.querySelector('#altura');
const inputPeso = document.querySelector('#peso');
const listaI = document.querySelectorAll('[type="number"]');
const valorJs = document.querySelector('.valorJS');
const classificacao = document.querySelector('.classificacao');

//mini validador
listaI.forEach((item) => {
    item.addEventListener('change', () => {
        if (Number.isInteger(+item.value)) {
            alert('altura e peso precisam estar separados por .')
        }
    })
})

btnCalcular.addEventListener('click', calcularImc);

function calcularImc(event) {
    let valorAltura = +inputAltura.value;
    let valorPeso = +inputPeso.value;

    const imc = (valorPeso / (valorAltura * valorAltura)).toFixed(2)
    valorJs.innerHTML = imc
    if (imc < 18.5) {
        //abaixo do peso
        valorJs.style.color = '#62D7D0';
        classificacao.innerHTML = 'Abaixo do peso';
        classificacao.style.color = '#62D7D0';
    } else if (imc <= 24.9) {
        //peso normal
        valorJs.style.color = '#6FCF97';
        classificacao.innerHTML = 'Peso normal';
        classificacao.style.color = '#6FCF97';
    } else if (imc <= 29.9) {
        //pré-obesidade
        valorJs.style.color = '#F8C648';
        classificacao.innerHTML = 'Pré-obesidade';
        classificacao.style.color = '#F8C648';
    } else if (imc <= 34.9) {
        //Obesidade grau 1
        valorJs.style.color = '#F89C48';
        classificacao.innerHTML = 'Obesidade Grau 1';
        classificacao.style.color = '#F89C48';
    } else if (imc <= 39.9) {
        //Obesidade grau 2
        valorJs.style.color = '#F87D48';
        classificacao.innerHTML = 'Obesidade Grau 2';
        classificacao.style.color = '#F87D48';
    } else {
        //Obesidade grau 3
        valorJs.style.color = '#F85348';
        classificacao.innerHTML = 'Obesidade Grau 3';
        classificacao.style.color = '#F85348';
    }
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