/* 
 Manipulando Strings e Números

 Transforma String em Número e Número em String

*/

let string = '123'

console.log(Number(string))

let number = 321

console.log(String(number))

let numberInteiro = 4355.666666
console.log(numberInteiro.toFixed(2).replace(".", ","))

// replace() vai fazer substituir um caracter ou numero pelo valor que eu quero.