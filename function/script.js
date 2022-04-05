/* function constructor

* expressão new 
* criar um novo objeto
* this keyword*

*/

function Person (){
  // this (vai referenciar o marco que está fora do escopo)
  // e o marco que está fora do escopo vai ser referenciado como this.
  this.name = ""
}

const marco = new Person()
  
  
  
