function alterarStatus(id) {
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        let confirmação = confirm("Confirme se deseja devolver o jogo");
        if (confirmação) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.innerHTML = "Alugar";
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = "Devolver";
    }
    quantJogosAlugados()
}

function quantJogosAlugados() {
    let jogosAlugados = 0;
    for (let i = 1; i < 4; i++) {
        let jogo = document.getElementById(`game-${i}`).querySelector('.dashboard__item__button');
        if (jogo.classList.contains('dashboard__item__button--return')) {
            jogosAlugados = jogosAlugados + 1;
        }
    }
    console.log(jogosAlugados);
}