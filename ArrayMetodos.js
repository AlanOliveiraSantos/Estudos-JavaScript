const nomes = ["Alan" , "Nicolas" , "Serjão"]

// Retorna o numero de elementos
console.log(nomes.length)

//Insire um novo elemento no array
nomes.push("Iseria")
console.log(nomes)

//Adiciona um novo elemento no inicio do array
nomes.unshift("Marcos")
console.log(nomes)

//Remove o ultimo elemento do array
nomes.pop()
console.log(nomes)

//Remove o primeiro elemento do array
nomes.shift()
console.log(nomes)

//Remove ou substitui elementos a partir de um indice() e pelo numero de elementos()
nomes.splice(0,2)
console.log(nomes)

//Mostra em qual indice esta o elemento
console.log(nomes.indexOf("Nicolas"))

//Coloco em ordem alfabetica
const ondemalfabetica = nomes.sort()
console.log(nomes)