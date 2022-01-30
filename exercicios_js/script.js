
/* let total = 0

 const calc = function (numero1, numero2) {

 let total = numero1 * numero2

 return total

 
};



 console.log(calc(9,9)) */


/* function minhaFuncao (objeto) {
  objeto.make = 'toyota';
}

var meucarro = { make:
  'Honda', model: 'Accord', year: '1998'
}

var x, y;

x = meucarro.make;
 
minhaFuncao(meucarro);

y = meucarro.make

console.log(y) */

// var  square = function(numero) {
//  total =  numero * numero

//   return 
// };

// var x = square(4)

// console.log(total)



var vendas = "Toyota";

function tipoCarro(nome) {
  if (nome == "Fiat") {
    return ` ${nome} está disponivel.`
  } else {
    return "Desculpa, não vendemos" + " o" + " carro" + " que " + "procura." + " Veja outras opções." 
}
}



 
console.log(tipoCarro('Fiat'))

 