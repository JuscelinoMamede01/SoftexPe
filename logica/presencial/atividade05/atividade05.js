// Aula 05 - Condicionais e controle de fluxo

// 1. Escreva um programa que leia um número inteiro e verifique se ele é positivo, negativo ou igual a
// zero.
const n = prompt("Digite o valor de n: ");
const parsedN1 = parseInt(n);

if (parsedN1 > 0) {
  console.log(` O número digitado foi: ${parsedN1}. Ele é POSITIVO.`);
} else if (parsedN1 < 0) {
  console.log(` O número digitado foi: ${parsedN1}. Ele é NEGATIVO.`);
} else {
  console.log(` O número digitado foi: ${parsedN1}. Ele é igual a ZERO.`);
}
// 2. Crie um programa que receba a idade de uma pessoa e exiba se ela é maior de idade ou menor de
// idade.
const age = prompt("Digite sua idade: ");
const parsedAge = parseInt(age);

if (age >= 18) {
  console.log("A pessoa é maior de idade.");
} else {
  console.log("A pessoa é menor de idade.");
}
// 3. Desenvolva um programa que leia dois números inteiros e mostre qual deles é o maior, ou se são
// iguais.

const n1 = prompt("Digite o valor de n1: ");
const parsedN1 = parseInt(n1);
const n2 = prompt("Digite o valor de n2: ");
const parsedN2 = parseInt(n2);

if (n1 > n2) {
  console.log(` O valor de n1 é maior que n2`);
} else if (n1 < n2) {
  console.log(` O valor de n1 é menor que n2`);
} else {
  console.log(` Os valores são iguais.`);
}
// 4. Faça um programa que verifique se um número é par ou ímpar.
const number = prompt("Digite um numero inteiro qualquer: ");
const parsedNumber = parseInt(number);

if (number % 2 == 0) {
  console.log(`O número ${parsedNumber} é PAR.`);
} else {
  console.log(`O número ${parsedNumber} é IMPAR.`);
}

// 5. Elabore um programa que leia três notas de um aluno e calcule a média. Em seguida, exiba se o
// aluno está aprovado (média maior ou igual a 7) ou reprovado.
const n1 = prompt("Digite a primeira nota: ");
const parsedN1 = parseFloat(n1);
const n2 = prompt("Digite a segunda nota: ");
const parsedN2 = parseFloat(n2);
const n3 = prompt("Digite a terceira nota: ");
const parsedN3 = parseFloat(n3);

const average = (parsedN1 + parsedN2 + parsedN3) / 3;

if (average >= 7) {
  console.log("Aluno APROVADO!");
} else {
  console.log("Aluno REPROVADO!");
}

// 6. Crie um programa que receba o nome de duas pessoas e exiba qual delas possui o maior número
// de caracteres em seu nome.
let name1 = prompt("Digite o primeiro nome: ");
let name2 = prompt("Digite o segundo nome: ");

name1 = name1.replaceAll(" ", "");
name2 = name2.replaceAll(" ", "");

let lengthName1 = name1.length;
let lengthName2 = name2.length;

if (lengthName1 > lengthName2) {
  console.log(" O primeiro possui mais caracteres que o segundo.");
} else {
  console.log(" O segundo possui mais caracteres que o primeiro.");
}
// 7. Desenvolva um programa que leia um caractere e verifique se ele é uma vogal ou uma consoante.

let letter = prompt("Digite uma letra: ").toLocaleUpperCase();

if (
  letter == "A" ||
  letter == "E" ||
  letter == "I" ||
  letter == "O" ||
  letter == "U"
) {
  console.log(`A letra ${letter} é uma vogal.`);
} else {
  console.log(`A letra ${letter} é uma consoante.`);
}
// 8. Faça um programa que receba três números e os imprima em ordem crescente.
let n1 = prompt("Digite n1: ");
n1 = parseInt(n1);
let n2 = prompt("Digite n2: ");
n2 = parseInt(n2);
let n3 = prompt("Digite n3: ");
n3 = parseInt(n3);

if (n1 < n2 && n1 < n3 && n2 < n3) {
  console.log(`n1:${n1} n2:${n2} n3:${n3}`);
} else if (n1 < n2 && n1 < n3 && n3 < n2) {
  console.log(`n1:${n1} n3:${n3} n2:${n2}`);
} else if (n2 < n1 && n2 < n3 && n1 < n3) {
  console.log(`n2:${n2} n1:${n1} n3:${n3}`);
} else if (n2 < n1 && n2 < n3 && n1 > n3) {
  console.log(`n2:${n2} n3:${n3} n1:${n1}`);
} else if (n3 < n1 && n3 < n2 && n1 < n2) {
  console.log(`n3:${n3} n1:${n1} n2:${n2}`);
} else if (n3 < n1 && n3 < n2 && n1 > n2) {
  console.log(`n3:${n3} n2:${n2} n1:${n1}`);
}

// 9. Elabore um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa, dado o peso e
// a altura. Em seguida, exiba se a pessoa está abaixo do peso, com peso normal, com sobrepeso,
// obesa ou muito obesa.

let weight = prompt("Digite seu peso:");
weight = parseFloat(weight);
let height = prompt("Digite sua altura:");
height = parseFloat(height);

const imc = weight / (height * height);

if (imc < 18.5) {
  console.log(`Seu IMC é de ${imc.toFixed(1)} e você está ABAIXO DO PESO`);
} else if (imc >= 18.5 && imc < 25) {
  console.log(`Seu IMC é de ${imc.toFixed(1)} e você está PESO NORMAL`);
} else if (imc >= 25 && imc < 30) {
  console.log(`Seu IMC é de ${imc.toFixed(1)} e você está SOBREPESO`);
} else if (imc >= 30 && imc < 35) {
  console.log(`Seu IMC é de ${imc.toFixed(1)} e você está OBESO`);
} else {
  console.log(`Seu IMC é de ${imc.toFixed(1)} e você está MUITO OBESO`);
}
// 10. Escreva um programa que receba um número de mês (1 a 12) e exiba o nome do mês
// correspondente.

let monthNumber = prompt("Digite um número de 1 - 12");
monthNumber = parseInt(monthNumber);

switch (monthNumber) {
  case 1:
    console.log(
      `Você acabou de digitar o número ${monthNumber} referente ao mês de Janeiro`
    );

    break;
  case 2:
    console.log(
      `Você acabou de digitar o número ${monthNumber} referente ao mês de Fevereiro`
    );

    break;
  case 3:
    console.log(
      `Você acabou de digitar o número ${monthNumber} referente ao mês de Março`
    );

    break;
  case 4:
    console.log(
      `Você acabou de digitar o número ${monthNumber} referente ao mês de Abril`
    );

    break;
  case 5:
    console.log(
      `Você acabou de digitar o número ${monthNumber} referente ao mês de Maio`
    );

    break;
  case 6:
    console.log(
      `Você acabou de digitar o número ${monthNumber} referente ao mês de Junho`
    );

    break;
  case 7:
    console.log(
      `Você acabou de digitar o número ${monthNumber} referente ao mês de Julho`
    );

    break;
  case 8:
    console.log(
      `Você acabou de digitar o número ${monthNumber} referente ao mês de Agosto`
    );

    break;

    break;
  case 9:
    console.log(
      `Você acabou de digitar o número ${monthNumber} referente ao mês de Setembro`
    );

    break;
  case 10:
    console.log(
      `Você acabou de digitar o número ${monthNumber} referente ao mês de Outubro`
    );

    break;
  case 11:
    console.log(
      `Você acabou de digitar o número ${monthNumber} referente ao mês de Novembro`
    );

    break;
  case 12:
    console.log(
      `Você acabou de digitar o número ${monthNumber} referente ao mês de Dezembro`
    );
    break;

  default:
    console.log("Escolha inválida!Digite um número de 1 - 12.");
    break;
}
// 11. Desenvolva um programa que leia o salário de um funcionário e calcule o valor do seu aumento.
// Para salários superiores a R$ 1.500,00, o aumento deve ser de 10%. Caso contrário, o aumento é de
// 15%.

const increase10 = 0.1;
const increase15 = 0.15;

let increaseWage = 0;
increaseWage = parseFloat(increaseWage);
let newWage;
newWage = parseFloat(newWage);

let wage = prompt("Digite o valor do salário do funcionário: ");
wage = parseFloat(wage);

if (wage > 1500) {
  increaseWage = increase10 * wage;
} else {
  increaseWage = increase15 * wage;
}

newWage = wage + increaseWage;

console.log(`O valor do aumento é de R$ ${increaseWage.toFixed(2)}`);
console.log(`O novo salário é de R$ ${newWage.toFixed(2)}`);
// 12. Receba um número inteiro do usuário e verifique se ele é divisível por 3 e por 5 ao mesmo tempo,
// exibindo uma mensagem apropriada.
let number = prompt("Digite um número: ");
number = parseInt(number);

if (number % 3 == 0 && number % 5 == 0) {
  console.log(`o Numero ${number} é divisível por 3 e 5.`);
} else {
  console.log(`o Numero ${number} não é divisível por 3 e 5.`);
}
// 13. Peça ao usuário que insira o dia da semana (por extenso) e, em seguida, exiba uma mensagem
// informando se é um dia útil ou um fim de semana.

let weekDay = prompt(
  "Digite um dia da semana: Ex: (segunda-feira)"
).toLocaleLowerCase();

if (
  weekDay == "segunda-feira" ||
  weekDay == "terça-feira" ||
  weekDay == "quarta-feira" ||
  weekDay == "quinta-feira" ||
  weekDay == "sexta-feira"
) {
  console.log(`A ${weekDay} é um dia de semana.`);
} else if (weekDay == "sábado" || weekDay == "domingo") {
  console.log(`O ${weekDay} é um fim de semana.`);
} else {
  console.log(`O dia da semana ${weekDay} está escrito de forma incorreta.`);
}
// 14. Elabore um programa que leia um número inteiro de 1 a 5 e exiba a mensagem "Muito bom",
// "Bom", "Regular", "Insuficiente" ou "Muito insuficiente", de acordo com o valor lido, utilizando
// switch/case.

let number = prompt("Digite um número de 1 a 5: ");
number = parseInt(number);

switch (number) {
  case 1:
    console.log("Muito bom");
    break;
  case 2:
    console.log("Bom");
    break;
  case 3:
    console.log("Regular");
    break;
  case 4:
    console.log("Insuficiente");
    break;
  case 5:
    console.log("Muito Insuficiente");
    break;

  default:
    console.log("Opção inválida.Escolha um número de 1 a 5");
    break;
}

// 15. Peça ao usuário que digite um número entre 1 e 7 e exiba o dia da semana correspondente (1 -
// Domingo, 2 - Segunda-feira, etc.).
let number = prompt("Digite um número de 1 a 7: ");
number = parseInt(number);

switch (number) {
  case 1:
    console.log(
      "Você digitou o número correpondente ao DOMINGO, primeiro dia da semana."
    );
    break;
  case 2:
    console.log(
      "Você digitou o número correpondente a SEGUNDA-FEIRA, segundo dia da semana."
    );
    break;
  case 3:
    console.log(
      "Você digitou o número correpondente a TERÇA-FEIRA, terceiro dia da semana."
    );
    break;
  case 4:
    console.log(
      "Você digitou o número correpondente a QUARTA-FEIRA, quarto dia da semana."
    );
    break;
  case 5:
    console.log(
      "Você digitou o número correpondente a QUINTA-FEIRA, quinto dia da semana."
    );
    break;
  case 6:
    console.log(
      "Você digitou o número correpondente a SEXTA-FEIRA, sexto dia da semana."
    );
    break;
  case 7:
    console.log(
      "Você digitou o número correpondente ao SÁBADO, sétimo dia da semana."
    );
    break;
  default:
    console.log("Opção inválida.Escolha um número de 1 a 5");
    break;
}
// 16. Receba um número decimal do usuário e arredonde-o para o inteiro mais próximo usando a
// estrutura de controle try/catch para tratar exceções.
try {
  let decimalNumber = prompt("Digite um número decimal:");
  decimalNumber = parseFloat(decimalNumber);
  if (isNaN(decimalNumber)) {
    throw new Error("Entrada inválida. Digite um número válido.");
  }

  let roundedNumber = Math.round(decimalNumber);
  console.log(`O número arredondado mais próximo é: ${roundedNumber}`);
} catch (error) {
  console.log(`Erro: ${error.message}`);
}
// 17. Peça ao usuário que insira a sua idade e verifique se ele é um bebê (0 a 1 ano), criança (1 a 12
// anos), adolescente (13 a 18 anos) ou adulto (mais de 18 anos).
let age = prompt("Digite sua Idade: ");
age = parseInt(age);

if (age >= 0 && age <= 1) {
  console.log("O usuário é um BEBÊ.");
} else if (age >= 2 && age <= 12) {
  console.log("O usuário é uma CRIANÇA.");
} else if (age >= 13 && age <= 18) {
  console.log("O usuário é um ADOLESCENTE.");
} else {
  console.log("O usuário é um ADULTO.");
}

// 18. Peça ao usuário que insira o seu estado civil e, usando a estrutura switch/case, exiba uma
// mensagem informando se é solteiro, casado, divorciado ou viúvo.
let maritalStatus = prompt("Digite seu estado civil:").toLocaleUpperCase();
switch (maritalStatus) {
  case "SOLTEIRO":
    console.log("O usuário é SOLTEIRO!");
    break;
  case "CASADO":
    console.log("O usuário é CASADO!");
    break;
  case "DIVORCIADO":
    console.log("O usuário é DIVORCIADO!");
    break;
  case "VIUVO":
    console.log("O usuário é VIÚVO!");
    break;
  default:
    console.log("Opção inválida. Digite seu estado civil:");
    break;
}
// 19. Solicite ao usuário dois números inteiros e, usando a estrutura switch/case, exiba o resultado da
// operação escolhida pelo usuário (1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão).
let n1 = prompt("Digite n1:");
n1 = parseInt(n1);
let n2 = prompt("Digite n2:");
n2 = parseInt(n2);
window.alert(
  "Escolha uma opção:\n1-SOMAR\n2-SUBTRAIR\n3-MULTIPLICAR\n4-DIVIDIR"
);

let option = prompt("Digite a opção para realizar a operação:");
option = parseInt(option);

switch (option) {
  case 1:
    let sum = n1 + n2;
    console.log(`A SOMA entre ${n1} e ${n2} é: ${sum}`);
    break;
  case 2:
    let sub = n1 - n2;
    console.log(`A SUBTRAÇÃO entre ${n1} e ${n2} é: ${sub}`);
    break;
  case 3:
    let mult = n1 * n2;
    console.log(`A MULTIPLICAÇÃO entre ${n1} e ${n2} é: ${mult}`);
    break;
  case 4:
    let div = n1 / n2;
    console.log(`A DIVISÃO entre ${n1} e ${n2} é: ${div.toFixed(2)}`);
    break;

  default:
    console.log(`Opção inválida. Escolha uma das opções do menu.`);
    break;
}

// 20. Desenvolva um programa que leia o nome e a idade de uma pessoa. Utilize o bloco try/catch para
// garantir que a idade digitada seja um valor inteiro válido.
try {
  let name = prompt("Digite seu nome:");
  let age = prompt("Digite sua idade:");
  age = parseInt(age);

  if (isNaN(age) || !Number.isInteger(age)) {
    throw new Error("Idade inválida. Digite um número inteiro válido.");
  }

  console.log(`Nome: ${name}`);
  console.log(`Idade: ${age}`);
} catch (error) {
  console.log(`Erro: ${error.message}`);
}
// 21. Crie um programa que leia um valor em metros e o converta para centímetros, milímetros e
// quilômetros. Utilize o bloco try/catch para tratar possíveis exceções durante os cálculos.
try {
  let metersValue = parseFloat(prompt("Digite um valor em metros:"));

  if (isNaN(metersValue)) {
    throw new Error("Valor inválido. Digite um número válido.");
  }

  let centimetersValue = metersValue * 100;
  let millimetersValue = metersValue * 1000;
  let kilometersValue = metersValue / 1000;

  console.log(`Valor em cm: ${centimetersValue} cm`);
  console.log(`Valor em M: ${millimetersValue} mm`);
  console.log(`Valor em KM: ${kilometersValue} km`);
} catch (error) {
  console.log(`Error: ${error.message}`);
}
