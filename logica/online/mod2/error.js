// Desenvolva um programa que só deve aceitar números pares. Siga as seguintes instruções:

// caso um número ímpar seja digitado, informe ao usuário que ele digitou um valor ímpar e peça novamente por um número par;

// caso uma letra seja digitada, informe ao usuário que ele digitou um caractere inválido e peça novamente por um número par.
let correctnumber, number;
correctnumber = false;
while (correctnumber == false) {
  try {
    number = parseInt(prompt("Digite um numero: "));
    if (isNaN(number) == false) {
      if (number % 2 == 0) {
        correctnumber = true;
        window.alert("Você digitou um número PAR.");
      } else {
        correctnumber = false;
        window.alert("Você digitou um número IMPAR.");
      }
    } else {
      throw new Error("Valor digitado não é um caracter válido.");
    }
  } catch (error) {
    window.alert(error);
    window.alert("Valor inválido. Digite novamente");
  }
}
window.alert("Programa encerrado!");
