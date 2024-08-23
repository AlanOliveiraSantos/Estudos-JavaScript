function calculoIMC(altura , peso){
    let imc = peso /(altura * altura)

    if (imc <= 18.5){
        console.log(`Seu Imc: ${imc} Abaixo do peso`)
    }
    else if (imc >= 18.5 && imc < 25){
        console.log(`Seu Imc: ${imc}  Normal`)
    }
    else if (imc >= 25 && imc < 30){
        console.log(`Seu Imc: ${imc} Sobrepeso`)
    }
    else{
        console.log(`Seu Imc: ${imc} Obesidade`)
    }
}
calculoIMC(1.3 , 50)