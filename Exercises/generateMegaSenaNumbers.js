function gerarNumerosEntre(min, max, numerosRepetidos) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosRepetidos.includes(aleatorio)) {
            reject('Número repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch (error) {
        if (tentativas > 10) {
            throw 'Não deu certo'
        } else {
            gerarMegaSena(qtNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(8).then(console.log)