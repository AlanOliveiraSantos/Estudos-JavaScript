//Function: todo trecho do codigo que ficar se repitindo com a mesma logica pode ser alterado por um função

// Passando valores para função ():
function calculoIMC(alturaCadas , pesoCadas){
    const altura = alturaCadas
    const peso = pesoCadas
    const imc = peso / (altura * altura)

    //Retorna o resultado da função para quem chamou
    return imc;
}

// Chamar a função indicando os valores:
const imcAlan = calculoIMC(1.70 , 55)
const imcNicolas = calculoIMC(1.68 , 60)
console.log(imcAlan , imcNicolas)

//OBS: A função deve ter apenas uma responsabilidade