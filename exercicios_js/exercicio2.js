/* Sistema de gasto famíliar 
crie um objeto  que possuirá 2 propriedades, ambas do tipo array:

* Receitas: []
* Despesas: []

Agora crie uma função que irá calcular o total de receitas e despesas e irá  mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor de saldo*/
let familia = {
  receitas: [2000, 1200, 700.52, 550.48, 380],
  despesas: [1380.0, 440, 300, 250]
} // as chaves serve para criar um objeto

function sum(array) {
  let total = 0

  for (let value of array) {
    total += value
  }
  return total
}

function calculo() {
  const calculoReceitas = sum(familia.receitas)
  const calculoDespesas = sum(familia.despesas)

  const total = calculoReceitas - calculoDespesas

  const tudoOk = total >= 0

  let balanço = 'Negativo'

  if (tudoOk) {
    balanço = 'Positivo'
  }

  console.log(`seu saldo é ${balanço}: ${total}`)
}

calculo()
