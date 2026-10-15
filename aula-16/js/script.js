console.log('olá mundo!')

// Sortear um número de um a 100

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

if (numeroAleatorio < 15) {
    console.log(`${numeroAleatorio} é menor que 15`)
}
else if (numeroAleatorio < 50) {
    console.log(`${numeroAleatorio} é menor que 50`)
} else {
    console.log(`${numeroAleatorio} é maior que 50`)
}

// Usando Switch - Case
let codigoProduto = Math.floor(Math.random() * 10) + 1
let produto;

switch (codigoProduto) {
    case 1:
        produto = 'Nintendo Switch'
        break;

    case 2:
        produto = 'Xbox Series X'
        break;

    case 3:
        produto = 'Playstation 5'
        break;

    case 4:
        produto = 'Steam Deck'
        break;

    case 5:
        produto = 'PC'
        break;
    default:
        produto = 'Bolinha de gude'
        break;
}

console.log(`Código do produto: ${codigoProduto}, Produto: ${produto}`)

/* if ternário 
(numeroAleatorio < 50 ? console.log(`${numeroAleatorio} é menor que 15`) : console.log(`${numeroAleatorio} é maior que 50`))
*/

// Estrutura For
let numeroValidate = 10
let numeroTest = 0

for (let i = 0; i < numeroValidate; i++) {
    numeroTest += 5
    console.log(numeroTest)
}