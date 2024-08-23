function palindromo (palavra){
    
    palavra = palavra.toLowerCase();
    var reverso = palavra.split("").reverse().join("");
    
    if(reverso == palavra){
        console.log(`é um polidromo`)
    }
    else {
        console.log("Não é um polidromo")
    }
}

palindromo ("ana")