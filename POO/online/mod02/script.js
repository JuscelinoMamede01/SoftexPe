let n1 = parseFloat(prompt("Digite o valor de n1: "));
let n2 = parseFloat(prompt("Digite o valor de n2: "));
let operator = prompt("Digite o operador ");
let result = 0;

if (operator == "+") {
  result = n1 + n2;
  console.log(`O resultado da soma é: ${result}`);
} else if (operator == "-") {
  result = n1 - n2;
  console.log(`O resultado da subtração é: ${result}`);
} else if (operator == "*") {
  result = n1 * n2;
  console.log(`O resultado do produto da multiplicação é: ${result}`);
} else if (operator == "/") {
  result = n1 / n2;
  let remainder = n1 % n2;
  if (remainder !== 0) {
    `O resultado da divisão é: ${result.toFixed(
      2
    )} com o resto de ${remainder}`;
  } else {
    console.log(`O resultado da divisão é: ${result.toFixed(2)} `);
  }
} else {
  console.log("Operador inválido");
}
