function verificarNumero (num) {
    if(num === 0){
        console.log('O numero' + num + 'é igual a zero')
    }
    else if(num < 0){
        console.log('O numero' + num + 'é negativo')
    }
    else{
        console.log('O numero' + num + 'é positivo')
    }
}

verificarNumero(-1);
verificarNumero(0);
verificarNumero(1);