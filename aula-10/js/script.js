console.log("teste")
let userName = 'Link'           

let numberOne = 20
let numberTwo = 30
let result

// alert(`olá ${userName}! você é o milésimo usuário a entrar no site!!!!`)
// confirm(`olá ${userName}! você é o milésimo usuário a entrar no site!!!!`)
// prompt(`olá ${userName}! escreva o nome do seu jogo favorito:`)

// operadores lógicos
//result = ((numberOne < numberTwo) || (numberTwo == numberOne))  
//console.log(result)      

// operadores incrementais

// ++numberOne
// --numberTwo
//numberOne += 10
//numberTwo -= 50
//console.log(numberOne)
//console.log(numberTwo)  

// Objeto Math

// let numberRandomOne = Math.floor(Math.random() * 5)
// let numberRandomTwo = Math.floor(Math.random() * 5)

// Condicionais

// console.log(numberRandomOne)

/* if e else

if (numberRandomOne % 2 ==  0) {
    console.log(`${numberRandomOne} é par!`)
} else {
    console.log(`${numberRandomOne} é ímpar!`)
}

*/

/* if, elseif e else

console.log(`número 1: ${numberRandomOne}, número 2: ${numberRandomTwo}`)

if(numberRandomOne > numberRandomTwo) {
    console.log(`${numberRandomOne} é maior que ${numberRandomTwo}`)
} else if(numberRandomTwo > numberRandomOne) {
    console.log(`${numberRandomTwo} é maior que ${numberRandomOne}`)
} else {
    console.log(`${numberRandomTwo} é igual a ${numberRandomOne}`)
} */

let numberAlpha = prompt(`olá ${userName}! escreva um número de 1 a 10:`)    

if ( numberAlpha <= 5 )  {
    console.log('você é beta')
} else if (numberAlpha >= 6) {
    console.log('você é alfa')
} else {
    console.log('você não colocou o que eu pedi, brutal')
}