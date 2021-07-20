// throw ====> disparar, lançar

// try...catch // try significa tentar  e catch é : pegar

function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome é obrigatório'
  }
}
