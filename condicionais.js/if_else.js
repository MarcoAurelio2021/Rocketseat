/* if...else

let temperature = 36.5

if (temperature >= 37) {
  console.log('febre')
} else {
  console.log('Saudável')
}
*/

/* ======================================= */

/*
let temperature = 36.5

if (temperature >= 37.5) {
  console.log('febre alta')
} else if (temperature < 37.5 && temperature >= 37) {
  console.log('moderada')
} else {
  console.log('Saudável')
}
*/

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature) {
  console.log('Febre Alta')
} else if (mediumTemperature) {
  console.log('Febre Moderada')
} else {
  console.log('Saudável')
}
