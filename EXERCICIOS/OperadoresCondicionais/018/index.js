function votacao (idade){

    if (idade >= 18 && idade <= 70){
        console.log(`Sua idade é: ${idade} voto obrigatório`)
    }
    else if (idade == 16 , 17){
        console.log(`Sua idade é: ${idade} voto facultativo`)
    }
    else {
        console.log(`Sua idade é: ${idade} voto facultativo`)
    }
}
votacao(71)