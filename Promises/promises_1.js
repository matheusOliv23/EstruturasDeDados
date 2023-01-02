function gerarNumerosEntre(min, max) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const random = parseInt(Math.random() * fator) + min
        resolve(random)
    })
}

gerarNumerosEntre(10, 30)
    .then(num => num * 10)
    .then(numx10 => `O número gerado foi ${numx10}`)
    .then(console.log)