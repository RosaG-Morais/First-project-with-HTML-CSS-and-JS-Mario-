console.log('mostrar o document', document);
// Passo 1: Dar um jeito de pegar o elemento que representa o botão na tela usando o JS.
console.log(document.querySelector(".botao-trailer"));
const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

// Passo 2: Dar um jeito de identificar quando o usuario clicar no botão.
botaoTrailer.addEventListener("click", () => {
    //Passo 4: Abrir a modal na tela.
    alternarModal()
    video.setAttribute("src", linkDoVideo);
});

// Passo 3: Dar um jeito de pegar o elemento da modal no JS.
const modal = document.querySelector(".modal");

// OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal.    
// Passo 1: Dar um jeito de pegar o elemento de fechar modal usando o JS.
const botaoFecharModal = document.querySelector(".fechar-modal");

//Passo 2: Dar um jeito de identificar quando o usario clicar no X.
botaoFecharModal.addEventListener("click", ()=> {
    //Passo 3: fechar modal. 
    alternarModal()
    video.setAttribute("src", "")
});

