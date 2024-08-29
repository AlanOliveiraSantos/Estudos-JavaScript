const produtos = [
    { nome: "Pc gamer" , descricao: "Esse é um Pc gamer" },
    { nome: "2" , descricao: "Esse é um 2" },
    { nome: "3" , descricao: "Esse é um 3" },
    { nome: "4" , descricao: "Esse é um 4" },
    { nome: "5" , descricao: "Esse é um 5" },
]


const produtoMain = window.document.getElementById("produtos")

// forEach = Para cada elemento do produto
produtos.forEach((produto)=> {
    const novoElemento = document.createElement('div')
    novoElemento.classList.add("card")
    novoElemento.innerHTML =`
        <img src="product1.png" alt="">
            <div class="card-body">
                <h6 class="card-title">${produto.nome}</h6>
                <p class="card-text">${produto.descricao}</p>
            </div>
    `
    produtoMain.appendChild(novoElemento)
})












// Adiciona os elementos filhos do "card"


// Informa que a "div" é um lemento filho da "const = produtoMain"

       