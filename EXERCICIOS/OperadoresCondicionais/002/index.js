function notaMedia (nota1 , nota2){
    let notaFinal = nota1 + nota2 / 2

    if (notaFinal >= 7 ){
        console.log(`Nota Final é ${notaFinal} Aprovado`)
    }
    else{
        console.log(`Nota Final é ${notaFinal} Rerovado`)
    }
}

notaMedia(9 , 4)