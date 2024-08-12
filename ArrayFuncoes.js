const nomes = ["Alan Oliveira" , "Nicloas Oliveira" , "Iseria" , "Serjão"]

//map: Pega cada parametro do array
nomes.map((nomes)=>{
    console.log(nomes)
})

const nomesCadastrados = nomes.map((nomes)=>{
    return nomes.toUpperCase()
})
console.log(nomesCadastrados)

// filter: Analisa cada parametro do array com a condição dada
const arrayComOliveira = nomes.filter((nomes)=>{
    return nomes.includes("Oliveira")
})
console.log(arrayComOliveira)

const arraySemOliveira = nomes.filter((nomes)=>{
    return !nomes.includes("Oliveira")
})
console.log(arraySemOliveira)