function semaforo (cor){
    if(cor === "vermelho"){
        console.log(`Sinal vermelho PARE`)
    }
    else if(cor === "amarelo"){
        console.log(`Sinal amarelo AVANCE COM CUIDADO`)
    }
    else if(cor === "verde"){
        console.log(`Sinal verde AVANCE`)
    }
    else{
        console.log(`COR INVALIDA`)
    }
}

semaforo("vermelho")
semaforo("amarelo")
semaforo("verde")
semaforo("azul")