/* function constructor

* expressão new 
* criar um novo objeto
* this keyword*

*/

function person(name) {
  this.name = name
}
const MarcoAurelio = new person('Marco')
const Maria = new person('Morena')
console.log(MarcoAurelio)
console.log(Maria)
