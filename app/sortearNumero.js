const menorNumero = 0;
const maiorNumero = 1000;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * maiorNumero + 1);
}

console.log(numeroSecreto)

const elementoMenorNumero = document.getElementById('menor-valor');
elementoMenorNumero.textContent = menorNumero;

const elementoMaiorNumero = document.getElementById('maior-valor');
elementoMaiorNumero.textContent = maiorNumero;