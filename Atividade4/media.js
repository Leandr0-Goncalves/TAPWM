function Media(){
    let iniciar = confirm("Vamos começar");

    if (iniciar) {
        let nome = prompt("Digite o nome do aluno:");

        function pedirNota(num) {
            let nota;

            do {
                nota = parseFloat(prompt("Digite a " + num + "ª nota de " + nome + " (0 a 10):"));

                if (nota > 10) {
                    alert("Erro: a nota não pode ser maior que 10!");
                } else if (nota < 0) {
                    alert("Erro: a nota não pode ser menor que 0!");
                } else if (isNaN(nota)) {
                    alert("Erro: digite um número válido!");
                }

            } while (nota < 0 || nota > 10 || isNaN(nota));

            return nota;
        }

        let nota1 = pedirNota(1);
        let nota2 = pedirNota(2);
        let nota3 = pedirNota(3);
        let nota4 = pedirNota(4);

        let media = (nota1 + nota2 + nota3 + nota4) / 4;

        alert("Aluno: " + nome + "\nMédia Final: " + media.toFixed(2));

    } else {
        alert("Cálculo cancelado.");
    }
}