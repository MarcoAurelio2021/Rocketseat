// callback function >>>>>>>>> chamar de volta
// callback é uma função que está passando como parãmetro outra função

function sayMyname(name) {
  console.log(name)
}

sayMyname(() => {
  console.log('estou em uma callback')
})
