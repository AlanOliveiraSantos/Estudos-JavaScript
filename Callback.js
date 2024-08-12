//Callback: è chamar um função dentro de uma função

const nomeCadastrado = "Alan"

function cadastrar(nome){
    validarCadastro(nome);

    //codigo....
}

function validarCadastro (nome){
    if(nome === "Alan"){
        console.log("Cadastro Valido")
    }else(
        console.log("Não é possivel cadastrar")
    )
}

cadastrar(nomeCadastrado)