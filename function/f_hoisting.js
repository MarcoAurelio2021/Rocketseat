// function hoisting
/*
sayMayname()

function sayMayname() {
  console.log('Marco Auŕelio') // a função vai ter o efeito hoisting...
}
*/

sayMayname()

const sayMayname = function () {
  console.log('Marco Auŕelio') // por causa da palavra chave, a função não vai sofrer elevação...
}
