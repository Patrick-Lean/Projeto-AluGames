function alterarStatus(id){
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    if(imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
    }else{
        imagem.classList.add('dashboard__item__img--rented');
    }

    if(botao.classList.contains('dashboard__item__button--return')){
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML="Alugar";
    }else{
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML="Devolver";
    }
}