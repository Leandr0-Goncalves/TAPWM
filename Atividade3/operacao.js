function Operacao() {
    let num1;
    do {
        num1 = parseFloat(prompt("Digite o PRIMEIRO número:"));

        if (isNaN(num1)) {
            alert("Erro: digite apenas números!");
        }

    } while (isNaN(num1));


    let num2;
    do {
        num2 = parseFloat(prompt("Digite o SEGUNDO número:"));

        if (isNaN(num2)) {
            alert("Erro: digite apenas números!");
        }

    } while (isNaN(num2));


    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let produto = num1 * num2;
    let divisao = num1 / num2;
    let resto = num1 % num2;

    let resultado = "Resultados das operações entre os números " + num1 + " e " + num2 + "\n" + "Soma: " + soma + "\n" + "Subtração: " + subtracao + "\n" +
    "Produto: " + produto + "\n" + "Divisão: " + divisao + "\n" + "Resto da divisão: " + resto;

    alert(resultado);
}