function nota(nota){
    if(nota >= 90){
        console.log(`Sua nota é ${nota} = A`)
    }
    else if(nota >= 80){
        console.log(`Sua nota é ${nota} = B`)
    }
    else if(nota >= 70){
        console.log(`Sua nota é ${nota} = C`)
    }
    else if(nota >= 60){
        console.log(`Sua nota é ${nota} = D`)
    }
    else{
        console.log(`Sua nota é ${nota} = F`)
    }
}

nota(105)
nota(85)
nota(75)
nota(65)
nota(55)