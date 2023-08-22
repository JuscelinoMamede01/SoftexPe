// Aula 04 - Entrada e manipulação de dados

// 1. Implemente o código do slide de número 5.
let frase = prompt("Entre a primeira frase:");
console.log(frase);

// 2. Implemente o código do slide de número 13.
let string = "123";
console.log(typeof Number(string));
let number = 123;
console.log(typeof String(number));

// 3. Implemente o código do slide de número 16.
let number1 = prompt("DIgite o primeiro numero: ");
let number2 = prompt("DIgite o segundo numero: ");

let result = Number(number1) + Number(number2);

console.log(result);

// 4. Implemente o código do slide de número 23.
let string1 = "Estudar";
let string2 = " é bom!";
let number3 = 48;

console.log(string1 + string2);
console.log(string1 + string2 + " " + number3);

// 5. Solicite ao usuário seu nome e imprima uma mensagem de boas-vindas na tela.
let firstName = prompt("Digite seu  primeiro nome: ");

console.log(`Olá ${firstName}, Seja bem vindo!`);

// 6. Peça ao usuário que digite sua idade em texto (por exemplo, "18") e converta-a em um número
// inteiro.
let age = prompt("Digite sua idade: ");
const parsedAge = parseInt(age);

console.log(
  `A idade digitada era do tipo ${typeof age}.Após a conversão é do tipo ${typeof parsedAge}`
);

// 7. Receba um número inteiro do usuário e converta-o em um número decimal (float).

let numberInt = prompt(" Digite um numero inteiro");
let parsedNumberInt = parseFloat(numberInt);

console.log(
  `A idade digitada era: ${numberInt}. Após a conversão se tornou: ${parsedNumberInt}`
);

// 8. Peça ao usuário para digitar dois números inteiros e exiba a soma deles.
const n1 = prompt("Digite n1: ");
const n2 = prompt("Digite n1: ");

const sum = Number(n1) + Number(n2);

console.log(` A soma entre os numeros ${n1} + ${n2} é : ${sum} `);

// 9. Receba um número decimal do usuário e calcule o seu quadrado.
const number1 = prompt("Digite o numero para calular sua raiz: ");
const parsedNumber1 = parseFloat(number1);

let squareRoot = parsedNumber1 ** 2;

console.log(` O valor de ${parsedNumber1} ao qudrado é: ${squareRoot}`);

// 10. Peça ao usuário que insira o seu ano de nascimento e, em seguida, exiba a sua idade.
const currentYear = 2023;
const birthYear = prompt(" Digite seu ano de nascimento: ");

const age = currentYear - Number(birthYear);

console.log(` Você nasceu no ano de ${birthYear} e tem ${age} anos de idade.`);

// 11. Peça ao usuário que digite seu primeiro nome e seu sobrenome separadamente. Em seguida,
// concatene-os em uma única string e exiba o nome completo.
const firstName = prompt("Digite seu primeiro nome: ");
const lastName = prompt("Digite seu sobrenome: ");

console.log(`Olá, ${firstName} ${lastName}!`);

// 12. Solicite ao usuário uma sequência de números separados por espaço e exiba quantos números
// foram digitados.
const numbers = prompt("Digite a sequencia: ");
const splitNumbers = numbers.split(" ");
const numbersLenght = splitNumbers.length;

console.log(
  `a sequencia de numeros digitados é: ${splitNumbers}. Forma digitados ${numbersLenght} números.`
);

// 13. Receba o nome de um animal digitado pelo usuário e exiba uma mensagem informando qual
// animal foi digitado.
const animal = prompt(" Digite o nome de um animal: ");

console.log(` O nome do animal digitado foi: ${animal}`);

// 14. Peça ao usuário que digite o seu nome e o seu sobrenome. Em seguida, exiba o nome completo
// invertido (sobrenome, nome).
const firstName = prompt("Digite seu primeiro nome: ");
const lastName = prompt("Digite seu sobrenome: ");

console.log(`Olá, ${lastName} ${firstName}!`);

// 15. Receba uma string digitada pelo usuário e imprima o seu tamanho (número de caracteres).
const phrase = prompt("Digite uma frase: ");
const charNumber = phrase.length;

console.log(` A frase digitada possui ${charNumber} de caracteres.`);

// 16. Solicite ao usuário um número inteiro e exiba se ele é par ou ímpar.
const number = prompt("Digite um numero: ");
const parsedNumber = parseInt(number);

if (parsedNumber % 2 == 0) {
  console.log(` O número ${parsedNumber} é PAR.`);
} else {
  console.log(` O número ${parsedNumber} é IMPAR.`);
}

// 17. Receba um número inteiro digitado pelo usuário e verifique se ele é positivo ou negativo.
const numberInt = prompt("Digite um numero inteiro: ");

if (numberInt < 0) {
  console.log(`o número ${numberInt} é NEGATIVO.`);
} else if (numberInt == 0) {
  console.log(`o número ${numberInt} é NULO.`);
} else {
  console.log(`o número ${numberInt} é POSITIVO.`);
}

// 18. Peça ao usuário que insira dois números e exiba o maior deles.
const n1 = prompt("Digite n1: ");
const parsedN1 = parseInt(n1);
const n2 = prompt("Digite n2: ");
const parsedN2 = parseInt(n2);

if (parsedN1 > parsedN2) {
  console.log(`O maior número é: ${parsedN1}`);
} else if (parsedN2 > parsedN1) {
  console.log(`O maior número é: ${parsedN2}`);
} else {
  console.log("Os números são iguais.");
}

// 19. Receba a altura e o peso de uma pessoa digitados pelo usuário. Em seguida, calcule o seu índice de
// massa corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura) e exiba o resultado.
const myWeight = prompt("Digite seu peso: ");
const parsedWeight = parseFloat(myWeight);
const myHeight = prompt("Digite sua altura: ");
const parsedHeight = parseFloat(myHeight);

const imc = parsedWeight / (parsedHeight * parsedHeight);
console.log("Seu IMC é de: " + imc.toFixed(2));

// 20. Peça ao usuário que digite o seu nome e verifique se ele contém mais de 5 caracteres.
const firstName = prompt("Digite seu nome: ");
const nameLenght = firstName.length;

if (nameLenght > 5) {
  console.log(
    `Seu nome possui ${nameLenght} caracteres. Portanto, possui mais que 5 caracteres.`
  );
} else if (nameLenght == 5) {
  console.log(`Seu nome possui ${nameLenght} caracteres. `);
} else {
  console.log(
    `Seu nome possui ${nameLenght} caracteres. Portanto, possui menos que 5 caracteres.`
  );
}

// 21. Solicite ao usuário que insira o seu estado civil e exiba uma mensagem apropriada (por exemplo:
// "Você é casado(a)", "Você é solteiro(a)", etc.).
const maritalStatus = prompt("Digite seu estado civil: ").toUpperCase();
if (maritalStatus == "SOLTEIRO") {
  console.log("Você é SOLTEIRO(a)!");
} else if (maritalStatus == "CASADO") {
  console.log("Você é CASADO(a)!");
} else if (maritalStatus == "DIVORCIADO") {
  console.log("Você é DIVORCIADO(a)!");
} else if (maritalStatus == "VIÚVO") {
  console.log("Você é VIÚVO(a)!");
} else {
  console.log("Opção não valida!");
}

// 22. Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule a sua área e
// exiba o resultado.
const base = prompt("Digite o tamanho da base do retãngulo: ");
const height = prompt("Digite o tamanho da altura do retãngulo: ");

const area = Number(base) * Number(height);
console.log(`A área do retângulo é de: ${area}.`);

// 23. Peça ao usuário que digite a sua cidade e verifique se ela começa com a letra "S" (ou outra letra de
// sua escolha).
const cityName = prompt("Digite o nome da sua cidade: ").toUpperCase();
const elements = cityName.split("");
if (elements[0] == "S") {
  console.log("A cidade começa com a letra 'S'.");
} else {
  console.log("A cidade não começa com a letra 'S'.");
}

// 24. Solicite ao usuário que insira dois números decimais e calcule o resto da divisão entre eles.
const n1 = prompt("Digite n1 com duas casas decimais: ex=> 1.68");
const parsedN1 = parseFloat(n1);
const n2 = prompt("Digite n2 com duas casas decimais: ex=> 1.68");
const parsedN2 = parseFloat(n2);

const remainder = (parsedN1 + parsedN2) % 2;
console.log(`O resultado é : ${remainder}.`);

// 25. Solicite ao usuário um número decimal e converta-o em um número inteiro.
const n1 = prompt("Digite um numero com duas casa decimais: ex=>1.68");
const parsedN1 = parseInt(n1);

console.log(`O valor inteiro do número ${n1} é: ${parsedN1}.`);

// 26. Receba uma string contendo um número inteiro e some 10 a esse número, convertendo-o
// novamente para uma string antes de exibi-lo.

const numb1 = prompt("Digite um numero: ");
const parsedNumb1 = parseInt(numb1);

const sum = parsedNumb1 + 10;

const str = String(sum);

console.log(
  `O valor do resultado da soma é ${sum} e o tipo dela após a conversão é: ${typeof str}.`
);

// 27. Solicite ao usuário que digite uma data no formato "dd/mm/aaaa" e extraia o dia, o mês e o ano
// separadamente, convertendo-os em números inteiros.
const date = prompt("Digite sua data de nascimento como no modelo: dd/mm/aaaa");

const splitDate = date.split("/");

const day = parseInt(splitDate[0]);
const month = parseInt(splitDate[1]);
const year = parseInt(splitDate[2]);

console.log(`O dia do seu nascimento é: ${day} e é do tipo ${typeof day}.`);
console.log(`O mês do seu nascimento é: ${month} e é do tipo ${typeof month}.`);
console.log(`O ano do seu nascimento é: ${year} e é do tipo ${typeof year}.`);

// 28. Receba o nome de uma cidade do usuário e concatene-o com o nome do estado para formar uma
// mensagem completa, como "Você mora em [cidade], [estado].".
const city = prompt("Digite o nome da cidade que você mora: ");
const state = prompt("Digite o nome do estado que você mora: ");

console.log(`Você mora em ${city}, ${state}.`);

// 29. Solicite ao usuário que insira seu ano de nascimento e concatene-o com uma mensagem de
// boas-vindas, como "Bem-vindo ao nosso programa, nascido em [ano de nascimento]!".
const birthDate = prompt("Digite a data do seu nascimento: dd/mm/aaaa");
console.log("Bem vindo ao nosso programa, nascido em " + birthDate);

// 30. Receba um número inteiro e uma string do usuário. Em seguida, concatene-os em uma única
// string, separando-os com um espaço.
const phrase1 = prompt("Digite sua frase1 para iniciar");
const km = prompt("Digite quantos KM seu carro faz com 1l de gasolina: ");
const phrase2 = prompt("Digite a frase2 para finalizar");

console.log(phrase1 + " " + km + "km " + phrase2);

// 31. Receba o nome de um produto digitado pelo usuário e concatene-o com o preço do produto,
// adicionando o símbolo de moeda da sua escolha.
const product = prompt("Digite o nome do produto: ");
const price = prompt("Digite o valor do produto: ");
const parsedPrice = parseFloat(price);

console.log(`O preço do produto ${product} é de: R$ ${parsedPrice.toFixed(2)}`);

// 32. Receba um número inteiro do usuário e concatene-o com uma mensagem, informando o dobro
// desse número.
const n = prompt("Digite um numero: ");
const parsedNumb = parseInt(n);

const mult = parsedNumb * 2;

console.log(`O dobro do valor de ${parsedNumb} é: ${mult}.`);

// 33. Receba uma string contendo um endereço de e-mail e concatene-a com uma mensagem de
// agradecimento personalizada.
const myEmail = prompt("Digite seu e-mail: ");

console.log("Email " + myEmail + " cadastrado com sucesso!");

// 34. Receba dois números inteiros do usuário e exiba a soma, a diferença, o produto e o quociente
// (divisão inteira) entre eles.
const n1 = prompt("Digite n1: ");
const parsedN1 = parseInt(n1);
const n2 = prompt("Digite n2: ");
const parsedN2 = parseInt(n2);

const sum = parsedN1 + parsedN2;
const dif = parsedN1 - parsedN2;
const mult = parsedN1 * parsedN2;
const div = parsedN1 / parsedN2;

console.log(`O valor da soma entre ${parsedN1} e ${parsedN2} é: ${sum}.`);
console.log(
  `A diferença  da subtração entre ${parsedN1} e ${parsedN2} é: ${dif}.`
);
console.log(
  `O produto multiplicação entre ${parsedN1} e ${parsedN2} é: ${mult}.`
);
console.log(
  `O quociente da divisão entre ${parsedN1} e ${parsedN2} é: ${div}.`
);

// 35. Peça ao usuário para digitar a base e a altura de um triângulo. Em seguida, calcule e exiba a área do triângulo.
const base = prompt("Digite a base do triângulo: ");
const height = prompt("Digite a altura do triângulo: ");

const area = (base * height) / 2;

console.log(` A area total do triângulo é de: ${area}.`);

// 36. Receba o raio de uma circunferência digitado pelo usuário e calcule o seu perímetro (2 * π * raio).
const radius = prompt("Digite o raio da circunferência: ");
const parsedRadius = parseInt(radius);
const pi = 3.14159;

const perimeter = 2 * pi * parsedRadius;

console.log(` O valor da circunferência é de: ${perimeter.toFixed(2)}`);

// 37. Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule e exiba o
// perímetro do retângulo.
const base = prompt("Digite o valor da base do retângulo: ");
const parsedBase = parseInt(base);
const height = prompt("Digite o valor da altura do retângulo: ");
const parsedHeight = parseInt(height);

const perimeter = parsedBase * 2 + parsedHeight * 2;

console.log(` o valor do perímetro do retângulo é: ${perimeter}`);

// 38. Solicite ao usuário que insira três números decimais. Em seguida, calcule e exiba a média
// aritmética desses números.
const number1 = prompt("Digite o primeiro numero:");
const parsedNumber1 = parseFloat(number1);
const number2 = prompt("Digite o segundo numero:");
const parsedNumber2 = parseFloat(number2);
const number3 = prompt("Digite o terceiro numero:");
const parsedNumber3 = parseFloat(number3);

const average = (parsedNumber1 + parsedNumber2 + parsedNumber3) / 3;

console.log(
  ` O valor da media aritmética entre os numeros ${parsedNumber1}, ${parsedNumber2} e ${parsedNumber3} é: ${average.toFixed(
    2
  )}.`
);

// 39. Peça ao usuário para digitar a sua idade e, em seguida, informe quantos meses e quantos dias ele já
// viveu (considerando um ano com 365 dias).
const yearDays = 365;
const yearMonths = 12;
const age = prompt("Digite sua idade: ");
const parsedAge = parseInt(age);

const ageInMonths = parsedAge * yearMonths;
const ageInDays = parsedAge * yearDays;

console.log(
  `De acordo com sua idade de ${parsedAge}, você viveu ${ageInMonths} meses e ${ageInDays} de dias.`
);

// 40. Receba um valor em reais e a cotação do dólar digitados pelo usuário. Em seguida, converta o valor
// para dólares e exiba o resultado.
const dolar = 4.74;
const real = prompt("Digite o valor que quer converter: ");
const parsedReal = parseFloat(real);

const conv = parsedReal / dolar;

console.log(
  `A cotação do dolar hoje é de $ ${dolar} e sua compra no valor de R$ ${parsedReal.toFixed(
    2
  )} é de: $ ${conv.toFixed(2)} americanos. `
);

// 41. Solicite ao usuário para digitar um número decimal e arredonde-o para o inteiro mais próximo.
const number = prompt("Digite um numero com duas casas decimais: ");
const parsedNumber = parseFloat(number);

console.log(
  `Seu número inteiro arredondado mais próximo é: ${Math.round(parsedNumber)}`
);

// 42. Receba três números inteiros digitados pelo usuário e exiba o resultado da operação (n1 + n2) * n3.
const number1 = prompt("Digite n1:");
const parsedNumber1 = parseInt(number1);
const number2 = prompt("Digite n2:");
const parsedNumber2 = parseInt(number2);
const number3 = prompt("Digite n3:");
const parsedNumber3 = parseInt(number3);

const result = (parsedNumber1 + parsedNumber2) * parsedNumber3;

console.log(
  `O resultado da operação (${parsedNumber1} + ${parsedNumber2}) * ${parsedNumber3} é: ${result}.`
);

// 43. Peça ao usuário que digite uma temperatura em graus Celsius e a converta para Fahrenheit usando
// a fórmula: Fahrenheit = (Celsius * 9/5) + 32.

const celsiusTemp = prompt("Digite a temperatura em C: ");
const parsedCelsius = parseFloat(celsiusTemp);

const fahrTemp = parsedCelsius * 1.8 + 32;

console.log(
  `A temperatura de ${parsedCelsius}C em F é: ${fahrTemp.toFixed(2)}F`
);
