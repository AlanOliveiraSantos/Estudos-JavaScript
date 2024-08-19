function anobixesto (ano){
    if ( (ano % 4 == 0 && ano % 100 !== 0) || (ano % 400 == 0) ){
        console.log(`O ano ${ano} é bixesto`)
    }
    else {
        console.log(`O ano ${ano} não é bixesto`)
    }
}

anobixesto(2023)
