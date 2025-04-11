document.addEventListener('DOMContentLoaded',function(){

const botaodeAcessibilidade=document.getElementById('botao-acessibilidade');
const opcoesdeAcessibilidade=document.getElementById('opcoes-acessibilidade');

botaodeAcessibilidade.addEventListener('click',function(){
    botaodeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesdeAcessibilidade.classList.toggle('apresenta-lista');

    const botaoSelecionado=botaodeAcessibilidade.getAttribute('aria-expanded')=== 'true';
    
})
const aumentaFonteBotao = document.getElementById('aumentar-fonte');
const diminuiFonteBotao = document.getElementById('diminuir-fonte');

const alternaContraste = document.getElementById('alterna-contraste')   

let tamanhoAtualFonte = 1;

aumentaFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = '${tamanhoAtualFonte}rem'
})

diminuiFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = '${tamanhoAtualFonte}rem'
})
alternaContraste.addEventListener('click', function(){
    document.body.classList.toggle('alto-contraste')
})


})

ScrollReveal().reveal('inicio', { delay: 500});
ScrollReveal().reveal('inicio', { delay: 500});
ScrollReveal().reveal('inicio', { delay: 500});
ScrollReveal().reveal('inicio', { delay: 500});