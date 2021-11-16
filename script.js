function mudarImagem() {
    var text = window.document.getElementById('texto');
    text.style.fontSize = '30px';
    text.innerText = "QUE ISSO GENTE!!";
    text.style.transition = "all 1.7s";
    var imagem = window.document.getElementById('imagem');
    imagem.src = "img/AlanPerfil.jpg";
    imagem.style.border = "2px solid black"
    var cor = window.document.getElementById('container');
    cor.style.backgroundColor = 'rgb(70, 70, 70)';
    cor.style.transition = "all 1.7s";
    cor.style.border = "7px solid #332F27";


}