// Aula 07 - Estrutura de repetição "while"

// 1. Enumere as diferenças entre os comandos "for" e "while".
// No for a declaração de index e seu incremento fica junto da condição, já no while temos o index é inciado fora do laço e o incremento é feito dentro do bloco de código. O for itera sobre lista e o while não.

// 2. Descreva em quais circunstâncias os comandos "for" e "while" devem ser empregados.
// O comando for é geralmente usado quando você sabe exatamente quantas vezes deseja iterar (repetir) um bloco de código.// O for possui uma estrutura mais compacta e inclui a inicialização, condição e expressão de atualização dentro do próprio cabeçalho do loop.
// É mais adequado quando você precisa percorrer uma sequência de valores conhecida ou iterar um número específico de vezes.
// O comando while é usado quando você deseja repetir um bloco de código enquanto uma condição específica é verdadeira.
// É útil quando você não sabe exatamente quantas vezes o loop deve ser executado e depende de uma condição para decidir quando parar.

// 3. Implemente o código do slide de número 9.
let i = 0;
while (i < 0) {
  console.log("Testando uma frase");
  i++;
}

// 4. Implemente o código do slide de número 16.
let i = 465484133;

while (i > 10) {
  console.log(i);
  i /= 35;
}

// 5. Implemente o código do slide de número 26.
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);

// 6. Escreva um programa que exiba os números de 1 a 10 em ordem crescente utilizando o while.
i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

// 7. Crie um programa que exiba os números de 10 a 1 em ordem decrescente utilizando o while.
i = 10;

while (i > 0) {
  console.log(i);
  i--;
}

// 8. Elabore um programa que calcule a soma dos números de 1 a 100 utilizando o while.
let i = 1;
let n2 = 2;
let sum = 0;

while (i < 100) {
  sum = i + n2;
  console.log(` ${i} + ${n2} = ${sum}`);
  i++;
  n2++;
}

// 9. Faça um programa que calcule o produto dos números de 1 a 5 utilizando o while.
let list = [1, 2, 3, 4, 5];
let produto = 0;
let i = 1;

while (i < list.length) {
  let n1 = i;
  let n2 = i + 1;

  produto = n1 * n2;
  i++;
  console.log(`${n1} x ${n2} = ${produto}`);
}

// 10. Crie um programa que exiba a tabuada do 9 utilizando o while.
let number = 9;
i = 1;

while (i <= 10) {
  let prod = number * i;
  console.log(`${number} x ${i} = ${prod}`);
  i++;
}

// 11. Crie um programa que leia uma sequência de números inteiros do usuário e exiba o maior e o
// menor valor digitado. O programa deve parar de ler quando o usuário digitar o número 0
// utilizando o while.
let number = parseInt(prompt("Digite um número inteiro (0 para sair):"));
let list = [];

while (number !== 0) {
  list.push(number);
  number = parseInt(prompt("Digite um número inteiro (0 para sair):"));
}

if (list.length > 0) {
  let max = Math.max(...list);
  let min = Math.min(...list);

  console.log(list);
  console.log("Maior numero da lista é: " + max);
  console.log("Menor numero da lista é: " + min);
} else {
  console.log("A lista não possui números inseridos");
}

// 12. Crie um programa que leia uma sequência de números inteiros do usuário e exiba a média dos
// números digitados. O programa deve parar de ler quando o usuário digitar o número -1 utilizando
// o while.
let number = parseInt(prompt("Digite um número inteiro (-1 para sair):"));
let list = [];
let average = 0;
while (number !== -1) {
  list.push(number);
  average = average + number;
  // console.log(average);
  number = parseInt(prompt("Digite um número inteiro (-1 para sair):"));
}

average = average / list.length;

console.log(`A lista possui ${list.length} elementos e a média: ${average}`);

// 13. Faça um programa que leia um número inteiro e exiba a soma dos seus dígitos elevados ao cubo
// utilizando o while.
let number = prompt("Digite um valor inteiro: ");
let array = number.split("");
let aoCubo = 0;

let i = 0;
while (i < 4) {
  aoCubo = (Number(array[0]) + Number(array[1])) ** i;
  i++;
}
console.log(` ${array[0]} + ${array[1]} elevado ao cubo é: ${aoCubo}`);

// 14. Faça um programa que exiba os números ímpares de 1 a 100 utilizando o while.
i = 1;

while (i <= 100) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

// 15. Desenvolva um programa que exiba todos os múltiplos de 3 no intervalo de 1 a 50 utilizando o
// while.
i = 1;

while (i <= 50) {
  if (i % 3 == 0) {
    console.log(i);
  }
  i++;
}

// 16. Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior
// ou igual a 7) utilizando o while.
let alunosReprovados = [];
let alunosAprovados = [];
let i = 1;
while (i <= 5) {
  let name = prompt("Digite o nome do aluno: ");
  let nota = parseFloat(prompt(`Digite a nota do(a) ${name}: `));

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
  i++;
}
console.log(`Lista de Alunos Aprovados!`);
console.log(alunosAprovados);
console.log(`Lista de Alunos Reprovados!`);
console.log(alunosReprovados);

// 17. Elabore um programa que leia uma sequência de números inteiros do usuário e determine
// quantos números pares foram digitados antes do primeiro número ímpar. O programa deve parar
// de ler quando o usuário digitar o número 0 utilizando o while.
let numbers = [];
let number = -1;
let oddNumberFound = false;
let countEvenBeforeOdd = 0;

while (number !== 0) {
  number = parseInt(prompt("Digite um número: "));

  if (number !== 0) {
    if (number % 2 === 0) {
      numbers.push(number);
      if (oddNumberFound == false) {
        countEvenBeforeOdd++;
      }
    } else {
      numbers.push(number);
      oddNumberFound = true;
    }
  }
}
console.log(`A lista digitada: ${numbers}`);
console.log(
  `Foram digitados ${countEvenBeforeOdd} números pares antes do primeiro número ímpar.`
);

// 18. Crie um programa que leia uma sequência de números inteiros do usuário e exiba quantos
// números pares e quantos números ímpares foram digitados. O programa deve parar de ler quando
// o usuário digitar o número 0 utilizando o while.
let evenNumbers = [];
let oddNumbers = [];
let number = -1;

while (number !== 0) {
  number = parseInt(prompt("Digite um número: "));
  if (number !== 0) {
    if (number % 2 == 0) {
      evenNumbers.push(number);
    } else {
      oddNumbers.push(number);
    }
  }
}

console.log(
  `Esses foram os números pares digitados pelo usuário: ${evenNumbers}`
);
console.log(
  `Esses foram os números impares digitados pelo usuário: ${oddNumbers}`
);

// 19. Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos
// números são divisíveis por 2, quantos são divisíveis por 3 e quantos são divisíveis por 5. O
// programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.
let numbersPer2 = [];
let numbersPer3 = [];
let numbersPer5 = [];
let numbers = [];
let number = -1;

while (number !== 0) {
  number = parseInt(prompt("Digite um número: "));
  if (number !== 0) {
    if (number % 2 == 0) {
      numbersPer2.push(number);
    } else if (number % 3 == 0) {
      numbersPer3.push(number);
    } else if (number % 5 == 0) {
      numbersPer5.push(number);
    } else {
      numbers.push(number);
    }
  }
}
console.log(`Números divisíveis por 2: ${numbersPer2}`);
console.log(`Números divisíveis por 3: ${numbersPer3}`);
console.log(`Números divisíveis por 5: ${numbersPer5}`);
console.log(`Estes números não são divisível por 2,3 ou 5: ${numbers}`);

// 20. Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média
// dos números divisíveis por 3. O programa deve parar de ler quando o usuário digitar o número 0
// utilizando o while.
let number = -1;
let list = [];
let sum = 0;
let average = 0;

while (number !== 0) {
  number = parseInt(prompt("Digite um numero: "));
  if (number !== 0) {
    if (number % 3 == 0) {
      list.push(number);
      sum += number;
      average = sum / list.length;
    }
  }
}

console.log(`A media entre os números ${list} é: ${average}`);

// 21. Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos
// números possuem mais de três dígitos. O programa deve parar de ler quando o usuário digitar o
// número 0 utilizando o while.
let numbers = [];
let number = -1;
let countNumbersThreeDigits = 0;

while (number !== 0) {
  number = parseInt(prompt("Digite um numero: "));
  if (number !== 0) {
    numbers.push(number);
    if (number >= 100) {
      countNumbersThreeDigits++;
    }
  }
}
console.log(
  `Voce digitou os números ${numbers}. de um total de ${numbers.length} números digitados, ${countNumbersThreeDigits} possuem mais de três dígitos.`
);

// 22. Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média
// dos números que estão entre 50 e 100. O programa deve parar de ler quando o usuário digitar o
// número 0 utilizando o while.
let number = -1;
let numbers = [];
let betweenFiftyAndOneHundred = [];
let sum = 0;
let average = 0;
while (number !== 0) {
  number = parseInt(prompt("Digite um número: "));

  if (number !== 0) {
    numbers.push(number);
    if (number >= 50 && number <= 100) {
      betweenFiftyAndOneHundred.push(number);
      sum += number;
      average = sum / betweenFiftyAndOneHundred.length;
    }
  }
}
console.log(`Voce digitou os seguintes números: ${numbers}`);
console.log(`A media do numeros que estão entre 50 - 100: ${average}`);

// 23. Elabore um programa que leia uma sequência de números inteiros do usuário e exiba o menor
// valor digitado que seja positivo e ímpar. O programa deve parar de ler quando o usuário digitar o
// número 0 utilizando o while.
let number = -1;
let numbers = [];
let min;

while (number !== 0) {
  number = parseInt(prompt("Digite um número: "));

  if (number !== 0 && number > 0) {
    if (number > 0 && number % 2 !== 0) {
      numbers.push(number);
      min = Math.min(...numbers);
    }
  } else if (number < 0) {
    window.alert("Número NEGATIVO. Digite um valor acima de 0.");
  } else {
    window.alert("Você digitou 0. Programa finalizado!");
  }
}

console.log(`Sua lista possui os seguintes números: ${numbers}`);
console.log(`O menor valor do seu array é: ${min}`);

// 24. Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos
// números são pares e quantos números são ímpares entre o primeiro e o último número digitado.
// // O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.
let number = -1;
let numbers = [];
let countEvenNumber = 0;
let countOddNumber = 0;

while (number !== 0) {
  number = parseInt(prompt("Digite um número: "));

  if (number !== 0) {
    numbers.push(number);
    if (number % 2 == 0) {
      countEvenNumber++;
    } else {
      countOddNumber++;
    }
  }
}
console.log(`Sua lista possui os seguintes números ${numbers}`);
console.log(`Você digitou ${countEvenNumber} números pares`);
console.log(`Você digitou ${countOddNumber} números impares`);
