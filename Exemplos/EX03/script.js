const countdownParagraph = document.getElementById('countdown-timer');

console.log(countdownParagraph);

for(let x = 10; x > 10; x--)
{
    countdownParagraph.textContent = 'Seconds: ${x}';
}
