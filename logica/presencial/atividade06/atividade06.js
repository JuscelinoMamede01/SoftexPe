// Aula 06 - Estrutura de repetição "for"

// 1. Descreva para que serve o comando "for".
// O comando for serve para que o código não precise ter varias linhas repetidas realizando a mesma operação.

// 2. Como o comando "for" define o início de uma repetição?
// O for define o início declarando o valor da variavel de iteração. ex: let i=0

// 3. Como o comando "for" determina o fim da execução?
// Quando a condição for falsa há o encerramento do bloco já que ele nao vai entrar dentro do laço.

// 4. Como ocorre a alteração do valor em cada repetição dentro da estrutura de repetição "for"?
// após a execução do bloco de código, ocorre a iteração da variável declarada no inicio do for.Assim ocorre uma nova verificação de condição para saber se o codigo será encerrado.
// 5. Implemente o código do slide de número 18.
for (let i = 0; i < 10; i++) {
  console.log(`Testando uma frase.`);
}
// 6. Implemente o código do slide de número 26.
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// 7. Implemente o código do slide de número 36.
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}
// 8. Implemente o código do slide de número 38.
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
// 9. Implemente o código do slide de número 44.

let nomes = ["João", "Paulo", "Pedro", "Gustavo", "Maria"];

for (let i = 0; i < nomes.length; i++) {
  console.log(`Seu nome é ${nomes[i]}`);
}

for (const n of nomes) {
  console.log(n);
}
// 10. Faça um programa que exiba os números de 1 a 10 em ordem crescente.
for (let i = 1; i <= 10; i++) {
  console.log(`Number: ${i}`);
}

// 11. Crie um programa que exiba os números de 10 a 1 em ordem decrescente.
for (let i = 10; i >= 1; i--) {
  console.log(`Number: ${i}`);
}
// 12. Elabore um programa que calcule a soma dos números de 1 a 100.
for (let i = 1; i <= 100; i++) {
  let n1 = i;
  let n2 = i + 1;

  let sum = n1 + n2;

  console.log(` ${n1} + ${n2} = ${sum}`);
}
// 13. Desenvolva um programa que exiba todos os números pares de 1 a 50.
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(`${i}`);
  }
}
// 14. Faça um programa que calcule o produto dos números de 1 a 5.
for (let i = 1; i <= 5; i++) {
  let n1 = i;
  let n2 = i + 1;
  let mult = n1 * n2;

  console.log(` ${n1} * ${n2} = ${mult}`);
}
// 15. Crie um programa que exiba a tabuada do 7.
for (let i = 0; i <= 10; i++) {
  let mult = i * 7;
  console.log(`${i} x 7 = ${mult}`);
}
// 16. Elabore um programa que calcule a média de 5 notas digitadas pelo usuário.
let soma = 0;
for (let i = 1; i <= 5; i++) {
  let nota = parseFloat(prompt(`Digite ${i}ª nota:`));
  soma = nota + soma;
}

let media = soma / 5;

window.alert(`A media é: ${media}`);

// 17. Desenvolva um programa que exiba todos os múltiplos de 3 no intervalo de 1 a 50.

for (let i = 0; i <= 50; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}
// 18. Crie um programa que leia 10 números do usuário e exiba o maior e o menor valor digitado.

let numbers = [];

for (let i = 1; i <= 10; i++) {
  let n = parseInt(prompt(`Digite o n${i}:`));
  numbers.push(n);
  console.log(numbers);
}

console.log(`O menor valor digitado foi:${Math.min(numbers)}`);
console.log(`O maior valor digitado foi:${Math.max(...numbers)}`);

// 19. Faça um programa que exiba os números ímpares de 1 a 100.
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(`${i}`);
  }
}

// 20. Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior
// ou igual a 7).
let alunosReprovados = [];
let alunosAprovados = [];

for (let i = 1; i <= 5; i++) {
  let name = prompt("Digite o nome do aluno: ");
  let nota = parseFloat(prompt(`Digite a nota do ${name}: `));

  if (nota < 7) {
    let alunosReprovado = {
      name: name,
      nota: nota,
    };
    alunosReprovados.push(alunosReprovado);
  } else {
    let alunosAprovado = {
      name: name,
      nota: nota,
    };
    alunosAprovados.push(alunosAprovado);
  }
}
console.log(`Lista de Alunos Aprovados!`);
console.log(alunosAprovados);
console.log(`Lista de Alunos Reprovados!`);
console.log(alunosReprovados);

// 21. Faça um programa que exiba a soma dos dígitos de um número inteiro fornecido pelo usuário.
let number = prompt("Digite um numero inteiro: ");
number = number.split("");
let n1 = parseInt(number[0]);
let n2 = parseInt(number[1]);

let sum = n1 + n2;
console.log(` O valor da soma é: ${sum}`);

// 22. Elabore um programa que leia um número inteiro e exiba todos os seus divisores.
let div = [];
let number = parseFloat(prompt("Digite um numero inteiro: "));
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    div.push(i);
  }
}
console.log(`Os numeros divisores de ${number} são ${div}`);

// 23. Desenvolva um programa que calcule a média de altura de 5 pessoas.
let heightAverage = 0;

for (let i = 1; i <= 5; i++) {
  let height = parseFloat(prompt(`Digite a altura da ${i}ª pessoa: `));
  heightAverage = heightAverage + height;
}
heightAverage = heightAverage / 5;
console.log(`A média da altura das 5 pessoas é de ${heightAverage.toFixed(2)}`);

// 24. Faça um programa que exiba os números de 1 a 100, substituindo os múltiplos de 3 pela palavra
// "Fizz" e os múltiplos de 5 pela palavra "Buzz". Para os números que são múltiplos de ambos,
// utilize a palavra "FizzBuzz".
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`Multiplo de 3 e 5: ${i}`);
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log(`Multiplo de 3: ${i}`);
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log(`Multiplo de 5: ${i}`);
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// 25. Elabore um programa que leia um número inteiro e exiba a soma dos dígitos pares desse número.
let number = prompt("Digite um numero inteiro: ");
number = number.split("");
let n1 = parseInt(number[0]);
let n2 = parseInt(number[1]);

if (n1 % 2 == 0 && n2 % 2 == 0) {
  console.log(`Os digitos foram ${number}. Ele possui os dois dígitos pares.`);
  let sum = n1 + n2;
  console.log(` O valor da soma é: ${sum}`);
} else {
  console.log(
    `Os digitos foram ${number}. Ele não possui os dois dígitos pares.`
  );
}

// 26. Faça um programa que leia um número inteiro e exiba o número invertido. Por exemplo, se o
// número lido for 123, o programa deve exibir 321.

let number = prompt("Digite um numero inteiro: ");
number = number.split("");
number = number.reverse();
number = number.join("");

console.log(number);
