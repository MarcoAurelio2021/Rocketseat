// switch

/*

let expression = 'a'

switch (expression) {
  case 'a':
    // código
    console.log('a')
    break // para a execução da  expressão, sem o break a execução continua...

  case 'b':
    // código para a expressão "b"
    console.log('b')
    break // com o break você determina qual caso quer qiue apareça no console.

  default:
    break
}

*/

// ==================================

function calculate(number1, operator, number2) {
  let result = 0

  switch (operator) {
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    case '/':
      result = number1 / number2
      break
    default:
      console.log('não implementado')
      break
  }
  return result
}

console.log(calculate(4, '%', 8))

//se eu colocar um sinal que não implemntei ainda, vai aparecer "não implementado" undefined
