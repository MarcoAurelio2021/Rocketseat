/* Transforma notas escolares

crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres A, B, C 
*/

let note = 64

if (note >= 90) {
  console.log('Nota A')
} else if (note < 90 && note >= 80) {
  console.log('Nota B')
} else if (note < 80 && note >= 70) {
  console.log('Nota C')
} else if (note < 70 && note >= 60) {
  console.log('Nota D')
} else {
  console.log('Nota F')
}
