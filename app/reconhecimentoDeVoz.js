const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak);
recognition.addEventListener('end', () => recognition.start());

function onSpeak (event) {
    chute = event.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaValidezChute(chute);
}

function exibeChuteNaTela (chute) {
    elementoChute.innerHTML = `
        <div class="msg-num">Você disse:</div>
        <span class="box">${chute}</span>
    `;
}