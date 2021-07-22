/* Transforma notas escolares

crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres A, B, C 
*/
/*
let note = 0

if (note >= 90) {
  console.log('Nota A')
} else if (note < 90 && note >= 80) {
  console.log('Nota B')
} else if (note < 80 && note >= 70) {
  console.log('Nota C')
} else if (note < 70 && note >= 60) {
  console.log('Nota D')
} else if (note < 60 && note >= 0) {
  console.log('Nota F')
} else {
  console.log('Nota inválida')
}
/*


/* ======================================================== */

// Transforma notas escolares

// crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres A, B, C

let score = 94
let scoreA = score >= 90 && score < 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0

let scoreFinal = 'Nota inválida'

if (score >= 90 && score <= 100) {
  console.log('A')
} else if (score >= 80 && score <= 89) {
  console.log('B')
} else if (score >= 70 && score <= 79) {
  console.log('C')
} else if (score >= 60 && score <= 69) {
  console.log('D')
} else if (score < 60 && score >= 0) {
  console.log('F')
} else {
  console.log('Nota inválida')
}
