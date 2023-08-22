let n1 = prompt("Digite n1: ");
let parsedN1 = parseInt(n1);
let n2 = prompt("Digite n2: ");
let parsedN2 = parseInt(n2);
let myChoice;
let parsedMyChoice;

do {
  console.log("====================================");
  console.log("*********MENU DE OPERAÇÕES**********");
  console.log("1: SOMA");
  console.log("2: SUBTRAÇÃO");
  console.log("3: MULTIPLICAÇÃO");
  console.log("4: DIVISÃO");
  console.log("0: SAIR");
  console.log("====================================");
  myChoice = prompt("Escolha uma opção: ");
  parsedMyChoice = parseInt(myChoice);
  switch (parsedMyChoice) {
    case 1:
      let sum = parsedN1 + parsedN2;
      console.log(`A soma entre os valores é: ${sum}.`);
      break;
    case 2:
      let sub = parsedN1 - parsedN2;
      console.log(`A subatração entre os valores é: ${sub}.`);
      break;
    case 3:
      let mult = parsedN1 * parsedN2;
      console.log(`O produto da multiplicação entre os valores é: ${mult}.`);
      break;
    case 4:
      let div = parsedN1 / parsedN2;
      let parsedDiv = parseFloat(div);
      console.log(
        `O quociente da divisão entre os valores é: ${parsedDiv.toFixed(2)}.`
      );
      break;
    case 0:
      console.log("Programa encerrado com sucesso!");
      break;

    default:
      console.log("Opção inválida! Escolha uma das operações do menu.");
      break;
  }
} while (parsedMyChoice != 0);
