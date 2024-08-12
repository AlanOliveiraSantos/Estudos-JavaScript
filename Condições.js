// If/Else:
const senha = "Alan"

if(senha === "Alan"){
    console.log("Senha correta")
}else{
    console.log("Senha incorreta")
}

// Exemplo:
const nota = 100

if(nota >= 90){
    console.log("Sua nota é A")
}else if (nota >= 80){
    console.log("Sua nota é B")
}else{
    console.log("Sua nota é C")
}

// Switch case:   obs: Utilizar apenas em casos de =
const numero = 20

switch(numero){
    case 20:
        console.log("Sua nota é A")
        break;
    case 10:
        console.log("Sua nota é B")
        break;
    //caso nao for nenhuma acima sera o default
    default:
        console.log("Sua nota é D")
}

// While:
const nomes = ["Alan", "Nicolas", "Iseria", "Serjão"]
let i = 0;

//while = enquanto
while( i < nomes.length){
    console.log(nomes[i])
    i++;
}

//for:
for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}