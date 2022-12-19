const nomes = ['Matheus', 'Caio', 'Gui']


Array.prototype.meuMap = function(fn) {

    const novoArray = []

    for (let i = 0; i < this.length; i++) {
        const resultado = fn(this[i], i, this)
        novoArray.push(resultado)
    }

    return novoArray
}

console.log(nomes.meuMap(item => item))