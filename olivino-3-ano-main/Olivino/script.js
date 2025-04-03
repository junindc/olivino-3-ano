document.addEventListener('DOMContentLoaded',function(){

const botaodeAcessibilidade=document.getElementById('botao-acessibilidade');
const opcoesdeAcessibilidade=document.getElementById('opcoes-acessibilidade');

botaodeAcessibilidade.addEventListener('click',function(){
    botaodeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesdeAcessibilidade.classList.toggle('apresenta-lista');

    const botaoSelecionado=botaodeAcessibilidade.getAttribute('aria-expanded')=== 'true';
    
})



})  