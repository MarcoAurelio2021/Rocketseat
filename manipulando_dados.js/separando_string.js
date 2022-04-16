
// separar por espaços
// 

let phrases = "preciso aprender todos os dias"

let myArray = phrases.split(" ")  // split é um metodo que vai receber o argumento  que eu quero separar na frase.
//  vai remover o caracter

let phrasesWithUnderscore = myArray.join("_") // o metodo join( vai separar por um caracter, adicionando-o aonde eu preciso ).


console.log(phrasesWithUnderscore);