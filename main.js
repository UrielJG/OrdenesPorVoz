const texts = document.querySelector('.texts');
const aula1 = document.getElementById('aula1');
const aula2 = document.getElementById('aula2');
const aula3 = document.getElementById('aula3');
const aula4 = document.getElementById('aula4');
const aula5 = document.getElementById('aula5');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener('result', (e)=>{
    const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
    console.log(text);
    if(e.results[0].isFinal){
        if (text.includes('Enciende A') || text.includes('enciende a') || text.includes('enciende A') || text.includes('Enciende a')) {
            aula1.style.background = "url(bulb_on.jpg)";
        }
        if (text.includes('Apaga A') || text.includes('apaga a') || text.includes('apaga A')  || text.includes('Apaga a')) {
            aula1.style.background = "url(bulb_off.jpg)";
        }
        if (text.includes('Enciende B') || text.includes('enciende b') || text.includes('enciende B') || text.includes('Enciende b')) {
            aula2.style.background = "url(bulb_on.jpg)";
        }
        if (text.includes('Apaga B') || text.includes('apaga b') || text.includes('apaga B')  || text.includes('Apaga b')) {
            aula2.style.background = "url(bulb_off.jpg)";
        }
        if (text.includes('Enciende Z') || text.includes('enciende z') || text.includes('enciende Z') || text.includes('Enciende z')) {
            aula3.style.background = "url(bulb_on.jpg)";
        }
        if (text.includes('Apaga Z') || text.includes('apaga z') || text.includes('apaga Z') || text.includes('Apaga z')) {
            aula3.style.background = "url(bulb_off.jpg)";
        }
        if (text.includes('Enciende Y') || text.includes('enciende y') || text.includes('enciende Y') || text.includes('Enciende y')) {
            aula4.style.background = "url(bulb_on.jpg)";
        }
        if (text.includes('Apaga Y') || text.includes('apaga y') || text.includes('apaga Y')  || text.includes('Apaga y')) {
            aula4.style.background = "url(bulb_off.jpg)";
        }
        if (text.includes('Enciende E') || text.includes('enciende e') || text.includes('enciende E') || text.includes('Enciende e')) {
            aula5.style.background = "url(bulb_on.jpg)";
        }
        if (text.includes('Apaga E') || text.includes('apaga e') || text.includes('apaga E')  || text.includes('Apaga e')) {
            aula5.style.background = "url(bulb_off.jpg)";
        }
    }
});

recognition.addEventListener('end', ()=>{
    recognition.start();
})

recognition.start();