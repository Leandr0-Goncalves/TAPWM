function jogar(escolhaUsuario) {

    let escolhaComputador = Math.floor(Math.random() * 3) + 1;

    let resultado = "";

    function traduzir(escolha) {
        if (escolha === 1) return "Pedra";
        if (escolha === 2) return "Papel";
        if (escolha === 3) return "Tesoura";
    }

    let usuario = traduzir(escolhaUsuario);
    let computador = traduzir(escolhaComputador);

    

    if (escolhaUsuario === escolhaComputador) {
        resultado = "Empate!";
    }



    else if (
        (escolhaUsuario === 1 && escolhaComputador === 3) ||
        (escolhaUsuario === 2 && escolhaComputador === 1) ||
        (escolhaUsuario === 3 && escolhaComputador === 2)
    ) {
        resultado = "Você venceu!";
    }



    else {
        resultado = "Computador venceu!";
    }

    document.getElementById("resultado").innerHTML =
        "Você escolheu: " + usuario + "<br>" +
        "Computador escolheu: " + computador + "<br><br>" +
        resultado;
}