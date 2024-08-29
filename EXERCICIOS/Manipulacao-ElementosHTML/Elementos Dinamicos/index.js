const produtoMain = window.document.getElementById("produtos")

const novoElemento = document.createElement('div')
// Cria um elemento no html pelo Js
novoElemento.classList.add("card")
// atribui uma class ao elemento

// Adiciona os elementos filhos do "card"
novoElemento.innerHTML =`
        <img src="product1.png" alt="">
            <div class="card-body">
                <h6 class="card-title">Produto 01</h6>
                <p class="card-text">Descrição do produto</p>
            </div>
`

// Informa que a "div" é um lemento filho da "const = produtoMain"
produtoMain.appendChild(novoElemento)
       