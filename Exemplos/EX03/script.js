const countdownParagraph = document.getElementById('countdown-timer');

console.log(countdownParagraph);

let numero = 10;

// Usando setInterval conseguimos contar em milesegundos
const countdown = setInterval(() => {
    countdownParagraph.textContent = `Seconds: ${numero}`; // Tem que usar crases
    numero--;

    if(numero > 0)
    {
        clearInterval(countdown); // Limpar o valor que estava no texto
        countdownParagraph.textContent = 'Time is over!';
    }
}, 1000);
