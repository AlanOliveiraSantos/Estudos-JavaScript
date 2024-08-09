const nome = "Alan"
// length = Mostra o tanto de caracteres que temos
console.log(nome.length)

const nome01 = "Alan01"
//tolowercase = Deixa tudo minusculo
console.log(nome01.toLowerCase())
//toUppercase = Deixa tudo maiusculo
console.log(nome01.toUpperCase())

//trim = remove os espaços em branco
console.log(nome.trim())

//Replace = Troca auma palavra por outra
const nome02 = "Alan Oliveira"
const novoNome = nome02.replace('Alan' , 'Nicolas')
console.log(novoNome)


//includes = Procura de a palavra existe no codigo
const buscarNome = nome.includes('Alan')
console.log(buscarNome)