/* 
    Objetivo - quando clicar no botão mostrar imagem de fundo correspondente
    Extra - mudar para a próxima imagem após 10 segundos sem interação do usuário
*/
// passo 1 - pegar elemento HTML dos botões
const { botoesCarrosel, imagens, descricao } = pegarElementoHtml()
// passo 2 - identificar clique no botão
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // passo 3 - desmarcar botão selecionado anteriormente
        desativarBotaoSelecionado()
        // passo 4 - marcar botão selecionado pelo usuário
        marcarBotaoSelecionado(botao)
        // passo 5 - esconder imagem de fundo anterior
        esconderImagemAnterior()
        // passo 6 - mostrar imagem de fundo correspondente ao botão clicado
        mostrarImagemCorrespondente(indice)
        // passo 7 - esconder texto anterior
        esconderTextoAnterior()
        // passo 8 - mostrar descricao correspondente ao botão clicado
        mostrarTextoCorrespondente(indice)
    })
})
function mostrarTextoCorrespondente(indice) {
    descricao[indice].classList.add('dativa')
}

function esconderTextoAnterior() {
    const descricaoAtiva = document.querySelector('.dativa')
    descricaoAtiva.classList.remove('dativa')
}

function pegarElementoHtml() {
    const botoesCarrosel = document.querySelectorAll('.botao')
    const imagens = document.querySelectorAll('.imagem')
    const descricao = document.querySelectorAll('.descricao')
    return { botoesCarrosel, imagens, descricao}
}
function mostrarImagemCorrespondente(indice) {
    imagens[indice].classList.add('ativa')
}
function esconderImagemAnterior() {
    const imagemAtiva = document.querySelector('.ativa')
    imagemAtiva.classList.remove('ativa')
}
function marcarBotaoSelecionado(botao) {
    botao.classList.add('selecionado')
}
function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}