const carrinho = [
    { nome: 'Caneta', qtd: 10, preco: 2.99, fragil: false },
    { nome: 'Borracha', qtd: 7, preco: 1.99, fragil: false },
    { nome: 'Lapis', qtd: 2, preco: 1.99, fragil: true },
    { nome: 'Caderno', qtd: 10, preco: 12.99, fragil: false },
    { nome: 'Mochila', qtd: 3, preco: 88.99, fragil: false },
    { nome: 'Apontador', qtd: 7, preco: 4.99, fragil: true },
    { nome: 'Lápis de cor', qtd: 4, preco: 16.99, fragil: true }
]

const media = carrinho
    .filter(item => item.fragil)
    .map(item => item.qtd * item.preco)
    .reduce((acc, el) => {
        const novaQuantidade = acc.qtd + 1
        const novoTotal = acc.total + el
        return {
            qtd: novaQuantidade,
            total: novoTotal,
            media: novoTotal / novaQuantidade

        }
    }, { qtd: 0, total: 0, media: 0 })
    .media

console.log(media)
console.log(`A média é: ${media}`)

Array.prototype.meuReduce = function(fn, inicial) {
    let acumulador = inicial
    for (let i = 0; i < this.length; i++) {
        if (!acumulador && i === 0) {
            acumulador = this[i]
            continue
        }
        acumulador = fn(acumulador, this[i], i, this)
    }

    return acumulador
}