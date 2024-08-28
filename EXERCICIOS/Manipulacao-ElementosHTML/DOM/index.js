// Define uma variavel para o botão
const botao = window.document.getElementById("myButton")

//Adiciona um evento no botão / executa algo
botao.addEventListener('click', function(){
    alert("Botão clicado")
})
// OU

window.document.getElementById("mySelect").onchange = function(){
    alert("Elemento" + this.value)
                  // pega o valor do select, funciona em input tbm
}


window.document.getElementById("hoverDiv").onmouseover = function(){
    this.style.backgroundColor = 'red'
}

window.document.getElementById("hoverDivCombo").onmouseover = function(){
    this.style.backgroundColor = 'red'
}