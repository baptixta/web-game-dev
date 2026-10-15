/* Exercício 1 - Jogo da Adivinhação

let randomNumber = Math.floor(Math.random() * 10) + 1
let guess = prompt('escolha um número de 1 a 10')

if (randomNumber == guess) {
    console.log(`o número sorteado foi ${randomNumber}. você acertou!`)
} else {
    console.log(`o número sorteado foi ${randomNumber}. você errou!`)
}

*/

// Exercício 2 - Jogo da Adivinhação

let numberArray = [2,10,35,67,13,9]
let sum = 0

for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i]
}

console.log(`a soma dos números do array é: ${sum}`)