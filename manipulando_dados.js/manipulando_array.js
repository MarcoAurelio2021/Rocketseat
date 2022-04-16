// Manipulando arrays

let techs = ['html', 'css', 'js']

// adicionar um item
techs.push('nodejs')

// adicionar no começo
techs.unshift('sql')

// remover do fim
//techs.pop()

// remover do começo
// techs.shift()

// pegar somente alguns elementos da array
console.log(techs.slice(1,3)) // fiquei na dúvida

// remover 1 ou mais itens em qualquer posição da array
techs.splice() //??

// encontrar a posição de um elemento na array
let index = techs.indexOf("nodejs")

