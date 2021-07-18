// for..in

let person = {
  name: 'Marco',
  age: 23,
  weight: 80.4
}

for (let property in person) {
  console.log(property)
  console.log(person[property])
}
