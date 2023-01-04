const fn = require('./functions')
const path = require('path')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')


fn.lerDiretorio(caminho)
    .then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
    .then(arquivosSTR => fn.lerArquivos(arquivosSTR))
    .then(conteudos => conteudos.join(''))
    .then(todoConteudo => todoConteudo.split('\n'))
    .then(linhas => fn.removerSeVazio(linhas))
    .then(linhas => fn.removerSeTiver(linhas, '-->'))
    .then(console.log)