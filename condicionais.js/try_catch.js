// throw ====> disparar, lançar

// try...catch // try significa tentar  e catch é : pegar

function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome é obrigatório'
  }

  console.log('depois do erro')
}

// try...catch

try {
  sayMyName()
} catch (e) {
  console.log(e)
}

console.log('após a função do erro')
