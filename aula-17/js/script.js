const title = document.getElementById('title')
const misteriousButton = document.getElementById('btnMisterious')



/* pegando numero aleatório
let randomNumber = Math.floor(Math.random() * 5) + 1
let guess = prompt('escolha um número de 1 a 10')

if (randomNumber == guess) {
    title.textContent = `o número sorteado foi ${randomNumber}. você acertou!`
    title.style.color = 'green'
} else {
    title.textContent = `o número sorteado foi ${randomNumber}. você errou!`
    title.style.color = 'red'
}
*/

misteriousButton.addEventListener('click', function() {
  misteriousButton.style.display = 'none'  
});