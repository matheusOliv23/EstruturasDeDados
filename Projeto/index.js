const fn = require('./functions')
const path = require('path')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = ['.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')']


// fn.lerDiretorio(caminho)
//     .then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
//     .then(arquivosSTR => fn.lerArquivos(arquivosSTR))
//     .then(fn.mesclarElementos)
//     .then(fn.separarTextoPor('\n'))
//     .then(linhas => fn.removerSeVazio(linhas))
//     .then(linhas => fn.removerSeTiver('-->')(linhas))
//     .then(linhas => fn.removerSeApenasNumeros(linhas))
//     .then(fn.removerSimbolos(simbolos))
//     .then(fn.mesclarElementos)
//     .then(fn.separarTextoPor(' '))
//     .then(fn.removerSeVazio)
//     .then(fn.agruparElementos)
//     .then(fn.ordenarPorAtributoNumerico('qtde', 'desc'))
//     .then(console.log)

const palavrasMaisUsadas = fn.composicao(
    fn.lerDiretorio,
    fn.elementosTerminadosCom('.srt'),
    fn.lerArquivos,
    fn.mesclarElementos,
    fn.separarTextoPor('\n'),
    fn.removerSeVazio,
    fn.removerSeTiver('-->'),
    fn.removerSeApenasNumeros,
    fn.removerSimbolos,
    fn.removerSeVazio,
    fn.agruparElementos,
    fn.ordenarPorAtributoNumerico('qtde', 'desc')
)

palavrasMaisUsadas(caminho).then(console.log)