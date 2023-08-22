// Aula 08 - Funções

// 1. Implemente o código do slide de número 6.
console.log("Estudar é muito bom!");
console.log("Paciência e persistência.");
console.log("Revisão é a mãe do aprendizado.");

console.log("Estudar é muito bom!");
console.log("Paciência e persistência.");
console.log("Revisão é a mãe do aprendizado.");

console.log("Estudar é muito bom!");
console.log("Paciência e persistência.");
console.log("Revisão é a mãe do aprendizado.");

// 2. Implemente o código do slide de número 15.
function criarFrases() {
  console.log("Estudar é muito bom!");
  console.log("Paciência e persistência.");
  console.log("Revisão é a mãe do aprendizado.");
}

criarFrases();
criarFrases();
criarFrases();

// 3. Implemente o código do slide de número 24.
function soma(num1, num2) {
  console.log(num1 + num2);
}

soma(10, 15);
soma(10, 20);
soma(30, 50);
soma(50, 50);

// 4. Implemente o código do slide de número 33.
function soma(num1, num2) {
  return num1 + num2;
}

const teste = soma(10, 15);
console.log(teste);

const teste2 = soma(10, 20) + (30, 50);
console.log(teste2);

console.log(soma(50, 50));

// 5. Escreva uma função chamada "soma" que receba dois parâmetros (a e b) e retorne a soma deles.
function soma(a, b) {
  return a + b;
}

const teste = soma(2, 5);
console.log(teste);

// 6. Crie uma função chamada "isPar" que receba um número inteiro como parâmetro e retorne "true"
// se o número for par ou "false" caso contrário.
function isPar(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

const number = parseInt(prompt("Digite um numero: "));

const par = isPar(number);

if (par == true) {
  console.log("O número digitado é PAR.");
} else {
  console.log("O número digitado é IMPAR.");
}

// 7. Elabore uma função chamada "media" que receba três notas como parâmetros e retorne a média
// aritmética delas.
function media(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

const media1 = media(2, 5, 8);
console.log(`A média das notas é: ${media1}`);

// 8. Elabore uma função chamada "imc" que receba o peso (em kg) e a altura (em metros) de uma
// pessoa e retorne o índice de massa corporal (IMC) dela.
function imc(peso, altura) {
  const imc = peso / (altura * altura);

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
}

const peso = parseFloat(prompt("Digite seu peso: "));
const altura = parseFloat(prompt("Digite sua altura: "));

imc(peso, altura);

// 9. Elabore uma função chamada "calcularDesconto" que receba o valor de um produto e o
// percentual de desconto como parâmetros e retorne o valor com o desconto aplicado.
function calcularDesconto(preco, desconto) {
  let valorDesconto = preco * (desconto / 100);
  let novoValor = preco - valorDesconto;
  return novoValor;
}

const valorProduto = parseFloat(prompt("Digite o valor do produto: "));
const descontoProduto = parseFloat(prompt("Digite o valor do desconto: "));

const valor = calcularDesconto(valorProduto, descontoProduto);

console.log(`O valor do produto com desconto é: R$ ${valor.toFixed(2)}`);

// 10. Elabore uma função chamada "calcularImpostoRenda" que receba o salário bruto de uma pessoa
// como parâmetro e retorne o valor do imposto de renda a ser pago, considerando as seguintes
// faixas de renda:
// a. Até R$ 1.903,98: isento
// b. De R$ 1.903,99 até R$ 2.826,65: alíquota de 7,5%
// c. De R$ 2 .826,66 até R$ 3.751,05: alíquota de 15%
// d. De R$ 3.751,06 até R$ 4.664,68: alíquota de 22,5%
// e. Acima de R$ 4.664,68: alíquota de 27,5%
function calcularImpostoRenda(salario) {
  if (salario <= 1903.98) {
    console.log("Isento de pagamento de imposto.");
  } else if (salario >= 1903.99 && salario <= 2826.65) {
    let tax = 0.075;
    let valorTax = salario * tax;
    return valorTax;
  } else if (salario >= 2826.66 && salario <= 2826.65) {
    let tax = 0.15;
    let valorTax = salario * tax;
    return valorTax;
  } else if (salario >= 3751.06 && salario <= 4664.68) {
    let tax = 0.225;
    let valorTax = salario * tax;
    return valorTax;
  } else {
    let tax = 0.275;
    let valorTax = salario * tax;
    return valorTax;
  }
}
const salBruto = parseFloat(prompt("Digite o salário bruto: "));
const imposto = calcularImpostoRenda(salBruto);

if (imposto !== "Isento de pagamento de imposto.") {
  console.log(
    `Você precisa pagar R$${imposto.toFixed(2)} de imposto de renda.`
  );
}

// 11. Faça uma função chamada "calcularMediaArredondada" que receba uma lista de números como
// parâmetro e retorne a média aritmética desses números, arredondada para o inteiro mais
// próximo. tem ue ser um array
function calcularMediaArredondada(array) {
  let soma = 0;
  for (const elemento of array) {
    soma = soma + elemento;
  }
  let media = soma / array.length;
  return Math.round(media);
}

let numbers = [];
let number = -1;

while (number !== 0) {
  number = parseInt(prompt("Digite um número: "));
  if (number !== 0) {
    numbers.push(number);
  }
}

console.log(numbers);
const media = calcularMediaArredondada(numbers);
console.log(`A média arredondada entre os números do array criado é ${media}.`);

// 12. Desenvolva uma função chamada "contarDigitosParesImpares" que receba um número inteiro
// como parâmetro e retorne a quantidade de dígitos pares e a quantidade de dígitos ímpares
// presentes nesse número.
function contarDigitosParesImpares(array) {
  let countEvenDigits = 0;
  let countOddDigits = 0;

  let array1 = array.join("");
  array1 = String(array1);
  array1 = array1.split("");

  for (const digit of array1) {
    if (digit % 2 === 0) {
      countEvenDigits++;
    } else {
      countOddDigits++;
    }
  }

  console.log(
    `Na sua lista temos ${countEvenDigits} dígitos pares e ${countOddDigits} dígitos impares.`
  );
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 22, 51, 63, 45, 89, 7896, 635, 123];

contarDigitosParesImpares(numbers);

// 13. Crie uma função chamada "calcularMediaAlunos" que receba uma lista de alunos, onde cada aluno
// é representado por um objeto com os atributos "nome" e "nota". A função deve calcular e
// retornar a média das notas de todos os alunos.
function calcularMediaAlunos(alunos) {
  for (let i = 0; i < alunos.length; i++) {
    const media = (alunos[i].nota1 + alunos[i].nota2) / 2;
    console.log(`A média de ${alunos[i].nome} é: ${media.toFixed(1)}`);
  }
}

let alunos = [
  { nome: "José", nota1: 8.5, nota2: 9 },
  { nome: "João", nota1: 5.5, nota2: 4 },
  { nome: "Felipe", nota1: 6.5, nota2: 9.3 },
  { nome: "Rafael", nota1: 7.5, nota2: 4.1 },
  { nome: "Leonardo", nota1: 9.5, nota2: 7.2 },
];

calcularMediaAlunos(alunos);

// 14. Crie uma função chamada "calcularIdade" que receba o ano de "nascimento" de uma pessoa como
// parâmetro e retorne a idade atual.
function calcularIdade(birthYear) {
  let date = new Date();
  let currentYear = date.getFullYear();

  return currentYear - birthYear;
}

let myAge = parseInt(prompt("Digite seu ano de nascimento: "));
console.log(`Você tem ${calcularIdade(myAge)} anos`);

// 15. Crie uma função chamada "gerarTabuada" que receba um "número" como parâmetro e exiba a
// tabuada desse número de 1 a 10 no console.
function gerarTabuada(number) {
  let mult = 0;

  for (let i = 0; i <= 10; i++) {
    mult = i * number;
    console.log(`${i} x ${number} = ${mult}`);
  }
}

let number = parseInt(prompt("Digite um numero para ver sua tabuada: "));
console.log(gerarTabuada(number));

// 16. Escreva uma função chamada "advinheNumero" que gera aleatoriamente um número inteiro entre
// 1 e 100. Em seguida, permita que o usuário insira tentativas para adivinhar o número. A função
// deve dar dicas ao usuário se o número correto é maior ou menor do que a tentativa. Quando o
// usuário acertar, exiba uma mensagem de parabéns e informe a quantidade de tentativas
// utilizadas.
function adivinheNumero(guess) {
  const min = 1;
  const max = 100;
  const guessNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  let attempts = 5;

  for (let i = 0; i < attempts; i++) {
    if (guess < guessNumber) {
      window.alert("Seu número é menor que o meu. Escolha um número maior.");
    } else if (guess > guessNumber) {
      window.alert("Seu número é maior que o meu. Escolha um número menor.");
    } else {
      window.alert(`Parabéns! Você acertou o número ${guessNumber}`);
      return;
    }
    attempts--;
    if (attempts > 0) {
      guess = parseInt(
        prompt(`Tente novamente. Restam ${attempts} tentativas: `)
      );
    }
  }

  window.alert(`Suas tentativas acabaram. O número correto era ${guessNumber}`);
}

let myGuess = parseInt(prompt("Tente adivinhar meu número: "));
adivinheNumero(myGuess);

// 17. Crie uma função chamada "verificarPropriedade" que receba um objeto e uma string como
// parâmetros, e retorne true se o objeto possuir a propriedade com o nome especificado na string, e
// false caso contrário.
function verificarPropriedade(object, value) {
  const props = Object.keys(object); //cria um array com todos os atributos do objeto
  for (let i = 0; i < props.length; i++) {
    const prop = props[i];
    if (object[prop] === value) {
      return true;
    }
  }
  return false;
}

const myObject = {
  word1: "teste",
  word2: "exemplo",
  word3: "Comida",
};
const valueToCheck = "Comida";

console.log(verificarPropriedade(myObject, valueToCheck));

// 18. Faça uma função chamada "calcularPrecoProduto" que receba o "valor de custo" de um produto, a
// "margem de lucro" desejada (em percentual) e o "valor do frete" como parâmetros. A função deve
// calcular e retornar o preço de venda do produto, considerando que o preço de venda é igual ao
// custo acrescido da margem de lucro e do valor do frete.
function calcularPrecoProduto(preco, margem, frete) {
  let margemCalculo = preco * margem;
  return preco + margemCalculo + frete;
}

const valorCusto = parseFloat(prompt("Digite o valor de custo do produto: "));
const margemLucro = parseFloat(prompt("Digite a margem de lucro que deseja: "));
const frete = parseFloat(prompt("Digite o valor do frete: "));

const precoFinal = calcularPrecoProduto(valorCusto, margemLucro, frete);
console.log(`O preço de venda deve ser  de R$ ${precoFinal.toFixed(2)}`);

// 19. Escreva uma função que aceite uma string como parâmetro e encontre a palavra mais longa dentro
// da string. String de exemplo: 'Tutorial de desenvolvimento da web'. Resultado esperado:
// 'Desenvolvimento'.
function findLongestWordLength(myString) {
  const splittedString = myString.split(" ");
  let longestWordLength = 0;

  for (let i = 0; i < splittedString.length; i++) {
    let countDigits = splittedString[i].length;
    if (countDigits > longestWordLength) {
      longestWordLength = countDigits;
    }
  }

  return longestWordLength;
}

const longestWord = findLongestWordLength("Tutorial de desenvolvimento da web");
console.log(longestWord);

// 20. Escreva uma função que pegue uma lista de strings e as imprima, uma por linha, em um quadro
// retangular. Por exemplo, a lista ["Hello", "World", "in", "a", "frame"] é impressa como:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

function retanguloPorPalavra(array) {
  let maiorPalavra = "";

  // Procura o maior palavra
  for (const element of array) {
    // console.log(`Palavra: ${element}, caracteres: ${element.length}`)

    if (maiorPalavra.length < element.length) {
      maiorPalavra = element;
    }
  }
  console.log("*".repeat(maiorPalavra.length + 4));
  const espaco = " ";

  // Cria o retangulo
  for (const element of array) {
    const numeroDeEspacos = maiorPalavra.length - element.length;
    console.log(`* ${element}${espaco.repeat(numeroDeEspacos)} *`);
  }
  console.log("*".repeat(maiorPalavra.length + 4));

  // console.log(`maiorPalavra: ${maiorPalavra}`)
}

const palavras = [
  "Emersson",
  "Carlos",
  "Rinaldo",
  "Israel",
  "Aristóteles",
  "Marcelo",
  "Isis",
  "Nara",
  "Bil",
];

const palavras2 = ["Marcelo", "Isis", "Nara", "Bil"];

retanguloPorPalavra(palavras);
retanguloPorPalavra(palavras2);

// 21. Crie uma função que receba um array de strings e retorne um novo array contendo apenas as
// strings que têm mais de 5 caracteres.

function wordsByLength(array) {
  const resultArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 5) {
      resultArray.push(array[i]);
    }
  }

  return resultArray;
}

const inputArray = [
  "Ta",
  "maluco",
  "mano!",
  "A",
  "comida",
  "é",
  "muito",
  "boa.",
];
const filteredArray = wordsByLength(inputArray);
console.log(filteredArray);

// 22. Crie uma função que recebe um array de objetos com informações sobre livros (título, autor, ano,
// etc.) e retorne um novo array apenas com os livros escritos por determinado autor.

function findTheAuthor(array, author) {
  let arrayAuthor = [];
  for (let i = 0; i < array.length; i++) {
    if (author === array[i].autor) {
      arrayAuthor.push(array[i]);
    } else {
      console.log("Autor não encontrado!");
    }
  }
  return arrayAuthor;
}

const autor = "Augusto Cury";
const livros = [
  {
    titulo: "O Vendedor de Sonhos",
    autor: "Augusto Cury",
    ano: 2008,
  },
  {
    titulo: "Ansiedade - Como Enfrentar o Mal do Século",
    autor: "Augusto Cury",
    ano: 2013,
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    ano: 1949,
  },
  {
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    ano: 1605,
  },
  {
    titulo: "A Revolução dos Bichos",
    autor: "George Orwell",
    ano: 1945,
  },
  {
    titulo: "Cem Anos de Solidão",
    autor: "Gabriel García Márquez",
    ano: 1967,
  },
  {
    titulo: "A Menina que Roubava Livros",
    autor: "Markus Zusak",
    ano: 2005,
  },
];

console.log(findTheAuthor(livros, autor));

// 23. Crie uma função que recebe um array de objetos representando pessoas (com nome, idade, etc.) e
// retorne o nome da pessoa mais velha.
function findOldestPerson(array) {
  let oldestAge = 0;
  let oldestPersonName = "";

  for (let i = 0; i < array.length; i++) {
    if (array[i].idade > oldestAge) {
      oldestAge = array[i].idade;
      oldestPersonName = array[i].nome;
    }
  }

  return oldestPersonName;
}

const people = [
  {
    nome: "João",
    idade: 25,
  },
  {
    nome: "Maria",
    idade: 30,
  },
  {
    nome: "Emma",
    idade: 28,
  },
  {
    nome: "Luis",
    idade: 22,
  },
];

const oldestName = findOldestPerson(people);
console.log(`A pessoa mais velha é:${oldestName}`);

// 24. Escreva uma função que recebe um array de objetos com informações sobre carros (com marca,
// modelo, ano, etc.) e retorne um novo array apenas com os carros fabricados após um certo ano
// específico.
function findCars(array, year) {
  let foundCars = [];
  for (let i = 0; i < array.length; i++) {
    if (year == array[i].ano) {
      foundCars.push(array[i]);
    }
  }
  return foundCars;
}
const manufacturingYear = 2023;
const cars = [
  {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
  },
  {
    marca: "Honda",
    modelo: "Civic",
    ano: 2023,
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    ano: 2021,
  },
  {
    marca: "Chevrolet",
    modelo: "Camaro",
    ano: 2022,
  },
  {
    marca: "Volkswagen",
    modelo: "Golf",
    ano: 2023,
  },
];

console.log(findCars(cars, manufacturingYear));

// 25. Crie uma função chamada "inverterString" que recebe uma string como argumento e retorna a
// string invertida. Por exemplo, para a entrada "hello", a função deve retornar "olleh".
function inverterString(string) {
  let inverted = "";
  for (let i = string.length - 1; i >= 0; i--) {
    inverted += string[i];
  }
  return inverted;
}

const inputString = "hello world";
const reversedString = inverterString(inputString);
console.log(reversedString);
