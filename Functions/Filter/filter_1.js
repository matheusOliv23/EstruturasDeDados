const carrinho = [
    { nome: 'Caneta', qtd: 10, preco: 2.99 },
    { nome: 'Borracha', qtd: 7, preco: 1.99 },
    { nome: 'Lapis', qtd: 2, preco: 1.99 },
    { nome: 'Caderno', qtd: 10, preco: 12.99 },
    { nome: 'Mochila', qtd: 3, preco: 88.99 },
    { nome: 'Apontador', qtd: 7, preco: 4.99 },
    { nome: 'Lápis de cor', qtd: 4, preco: 16.99 }
]

const getNome = item => item.nome
const qtMaiorDoQueQuatro = item => item.qtd > 4

const itensValidos = carrinho.filter(qtMaiorDoQueQuatro)

const nomeItensValidos = carrinho.filter(qtMaiorDoQueQuatro).map(getNome)

console.log(itensValidos)
console.log(nomeItensValidos)

Array.prototype.meuFilter = function(fn) {
    const novoArray = []

    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }

    return novoArray
}