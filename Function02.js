//Function: todo trecho do codigo que ficar se repitindo com a mesma logica pode ser alterado por um função

// Passando valores para função ():
function calculoIMC(alturaCadas , pesoCadas){
    const altura = alturaCadas
    const peso = pesoCadas
    const imc = peso / (altura * altura)
    console.log(imc)
}

// Chamar a função indicando os valores:
calculoIMC(1.70 , 55)
calculoIMC(1.80 , 60)