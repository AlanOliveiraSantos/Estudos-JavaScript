function verificar (mediaFinal){
    if(mediaFinal >= 7){
        console.log(`Nota Final: ${mediaFinal} APROVADO`)
    }
    else if (mediaFinal >= 5){
        console.log(`Nota Final: ${mediaFinal} RECUPERAÇÃO`)
    }
    else{
        console.log(`Nota Final: ${mediaFinal} REPROVADO`)
    }
}

verificar(4)