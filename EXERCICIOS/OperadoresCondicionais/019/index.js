function numeros (num1 , num2 , num3){
    if(num1 >= num2 && num1 <= num3){
        console.log(`O numero ${num1} , está entre o intervalo de ${num2} a ${num3}`)
    }
    else{
        console.log(`O numero ${num1} , não está entre o intervalo de ${num2} a ${num3}`)
    }
}

numeros(9 , 1 , 10)