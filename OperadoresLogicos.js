// 
const  numero1 = 10
const numero2 = 20
const Verdadeiro = true

// &&/E: Retorna TRUE se os dois comparados forem TRUE 
const ehIgualEMaior = (numero1 === numero1) && (numero1 > numero2)
console.log(ehIgualEMaior)

// ||/OU: Retorna TRUE se apenas um é TRUE
const ehIgualOuMaior = (numero1 === numero2) || (numero1 < numero2)
console.log(ehIgualOuMaior)

// !/NÂO: Retorna o oposto
const ehCadastrado = !Verdadeiro
console.log(ehCadastrado)