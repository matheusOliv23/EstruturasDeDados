const fn = require('./functions')
const path = require('path')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = ['.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')']

fn.lerDiretorio(caminho)
    .then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
    .then(arquivosSTR => fn.lerArquivos(arquivosSTR))
    .then(conteudos => conteudos.join(''))
    .then(todoConteudo => todoConteudo.split('\n'))
    .then(linhas => fn.removerSeVazio(linhas))
    .then(linhas => fn.removerSeTiver('-->')(linhas))
    .then(linhas => fn.removerSeApenasNumeros(linhas))
    .then(fn.removerSimbolos(simbolos))
    .then(console.log)