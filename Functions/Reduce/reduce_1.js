const carrinho = [
    { nome: 'Caneta', qtd: 10, preco: 2.99 },
    { nome: 'Borracha', qtd: 7, preco: 1.99 },
    { nome: 'Lapis', qtd: 2, preco: 1.99 },
    { nome: 'Caderno', qtd: 10, preco: 12.99 },
    { nome: 'Mochila', qtd: 3, preco: 88.99 },
    { nome: 'Apontador', qtd: 7, preco: 4.99 },
    { nome: 'Lápis de cor', qtd: 4, preco: 16.99 }
]

const getTotal = item => item.qtd * item.preco
const somar = (acumulador, elemento) => {
    console.log(acumulador, elemento)
    return acumulador + elemento
}

const totalCarrinho = carrinho.map(getTotal).reduce(somar)

console.log(totalCarrinho)