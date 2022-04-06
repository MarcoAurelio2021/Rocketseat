/* function constructor

* expressão new 
* criar um novo objeto
* this keyword*

*/

function Person (name) {
  // this (vai referenciar o "marco" que está fora do escopo)
 // e o "marco" que está fora do escopo vai ser referenciado como this.
 this // "marco"
 .name // .name é uma propriedade que vai receber o (parametro)
 = name // o "name" é o parametro, que recebe o argumento que está dentro da new Person() 
 
 }
 
 const marco = new Person("Marco Aurélio") // essa função construtora vai retorna para a /*const marco*/ um novo objeto. 
 
 const Maria = new Person("Maria Morena")
 
 console.log(marco)
 console.log(Maria);
 
 
 