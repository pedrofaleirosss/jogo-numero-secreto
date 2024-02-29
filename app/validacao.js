function verificaValidezChute(chute) {
    const numero = Number(chute);

    if (Number.isNaN(numero)) {
        elementoChute.innerHTML += '<div>Não é um número</div>';
        return
    }

    if (numero < menorNumero || numero > maiorNumero) {
        elementoChute.innerHTML += `<div>O número precisa estar entre ${menorNumero} e ${maiorNumero}</div>`;
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h1 class="mensagem-vitoria">🎉 Você acertou! 🎉</h1>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div class="msg-num">O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`;
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `<div class="msg-num">O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
    }
}

document.body.addEventListener('click', (e) => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})