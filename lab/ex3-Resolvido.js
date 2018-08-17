var numSorteado;            
var valorDigitado;   
var valorInserido;      
var encontrado = false;   
var tentativas = 0;

function do_game() {
    var valorAleatorio = Math.random() * 100;
    var valorAleatorioINT = Math.floor(valorAleatorio);
    numSorteado = valorAleatorioINT;

    while (!encontrado) {
        valorDigitado = prompt("Adivinhe um número "+
                                  "entre 1 e 100.\n\n"+
                                  "Qual número foi sorteado?");
        valorInserido = parseInt(valorDigitado);
        tentativas += 1;   
        encontrado = check_guess();
    }
}

function check_guess() {
	if (isNaN(valorInserido)) {
        alert("Você deve informar um número.\n\n" +
              "Insira um valor de 1 a 100.");
        return false;
    }
    if ((valorInserido < 1) || (valorInserido > 100)) {
        alert("Por favor Insira um número entre 1 e 100");
        return false;
    }
    if (valorInserido > numSorteado) {
        alert("Opa o número inserido foi muito alto, tente um valor menor");
        return false;
    }
    if (valorInserido < numSorteado) {
        alert("O número digitado é menor do que o número sorteado, ");
        return false;
    }
    alert("Muito bem!!! O número sorteado era  " + numSorteado + 
          ".\n\nVocê realizou " + tentativas + 
          " tentativas para encontrar o número");
    return true;   
}