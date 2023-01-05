const fs = require('fs')
const path = require('path')

function lerDiretorio(caminho) {
    return new Promise((resolve, reject) => {
        try {
            let arquivos = fs.readdirSync(caminho)
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))
            resolve(arquivos)
        } catch (e) {
            reject(e)
        }
    })
}

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' })
            resolve(conteudo.toString())
        } catch (error) {
            reject(error)
        }

    })
}

function lerArquivos(caminhos) {
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function elementosTerminadosCom(arr, terminadoCom) {
    return arr.filter(el => el.endsWith(terminadoCom))
}

function removerSeVazio(array) {
    return array.filter(el => el.trim())
}

function removerSeTiver(padraoTextual) {
    return function(array) {
        return array.filter(el => !el.includes(padraoTextual))
    }
}

function removerSeApenasNumeros(array) {
    return array.filter(el => {
        const num = parseInt(el.trim())
        return num !== num
    })
}

function removerSimbolos(simbolos) {
    return function(array) {
        return array.map(el => {
            return simbolos.reduce((acc, simbolo) => {
                    return acc.split(simbolo).join('')
                }, el)
                // let textoSemSimbolos = el
                // simbolos.forEach(simbolo => {
                //     textoSemSimbolos = textoSemSimbolos.split(simbolo).join('')
                // })
                // return textoSemSimbolos
        })
    }
}

function mesclarElementos(array) {
    return array.join()
}

function separarTextoPor(simbolo) {
    return function(texto) {
        return texto.split(simbolo)
    }
}

function agruparElementos(palavras) {
    return Object.values(palavras.reduce((agrupamento, palavra) => {
        const el = palavra.toLowerCase()
        const qtde = agrupamento[el] ? agrupamento[el].qtde + 1 : 1
        agrupamento[el] = { elemento: el, qtde }
        return agrupamento
    }, {}))
}

function ordenarPorAtributoNumerico(attr, ordem = "asc") {
    return function(array) {
        const asc = (objeto1, objeto2) => objeto1[attr] - objeto2[attr]
        const desc = (objeto1, objeto2) => objeto2[attr] - objeto1[attr]
        return array.sort(ordem === "asc" ? asc : desc)
    }
}

module.exports = {
    lerDiretorio,
    lerArquivo,
    lerArquivos,
    elementosTerminadosCom,
    removerSeVazio,
    removerSeTiver,
    removerSeApenasNumeros,
    removerSimbolos,
    mesclarElementos,
    separarTextoPor,
    agruparElementos,
    ordenarPorAtributoNumerico
}