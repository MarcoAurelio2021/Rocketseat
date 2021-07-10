//function expression
// function anonymous

let total = 0

// parãmetros ou (parameters)
const sum = function (number1, number2) {
  var total = number1 + number2 // não criar variável sem a palavra chave tipo; var, let ou const. Pode haver problemas ná minha aplicação.
  return total
}

let number1 = 34
let number2 = 25

// console.log(`o número 1 é ${number1}`)
// console.log(`o número 1 é ${number2}`)
console.log(`é a soma ${sum(number1, number2)}`)
console.log(total)
