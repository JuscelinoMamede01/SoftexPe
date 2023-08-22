// 1. Crie uma estrutura condicional que verifica se dois números são iguais utilizando o operador de
// igualdade ("==").
let n1 = 3;
let n2 = 5;

if (n1 == n2) {
  console.log("Os numeros são iguais");
} else {
  console.log("Os numeros são diferentes");
}

// 2. Crie uma estrutura condicional que verifica se dois números são diferentes utilizando o operador de
// diferença ("!=").
if (n1 != n2) {
  console.log("Os numeros são diferentes");
} else {
  console.log("Os numeros são iguais");
}

// 3. Crie uma estrutura condicional que verifica se um número é maior que outro utilizando o operador
// de maior que (">").
if (n1 > n2) {
  console.log("o primeiro numero é maior que o segundo");
} else {
  console.log("o segundo numero é maior que o primeiro");
}

// 4. Crie uma estrutura condicional que verifica se um número é menor que outro utilizando o operador
// de menor que ("<").
if (n1 < n2) {
  console.log("o segundo numero é maior que o primeiro");
} else {
  console.log("o primeiro numero é maior que o segundo");
}

// 5. Crie uma estrutura condicional que verifica se um número é maior ou igual a outro utilizando o
// operador de maior ou igual a (">=").
if (n1 >= n2) {
  if (n1 == n2) {
    console.log("o primeiro numero é igual ao segundo");
  } else {
    console.log("o primeiro numero é maior que o segundo");
  }
} else {
  console.log("o segundo numero é maior que o primeiro");
}

// 6. Crie uma estrutura condicional que verifica se um número é menor ou igual a outro utilizando o
// operador de menor ou igual a ("<=").
if (n1 <= n2) {
  if (n1 == n2) {
    console.log("o primeiro numero é igual ao segundo");
  } else {
    console.log("o segundo numero é maior que o primeiro");
  }
} else {
  console.log("o primeiro numero é maior que o segundo");
}

// 7. Crie uma estrutura condicional que verifica se duas condições são verdadeiras utilizando o operador
// lógico AND ("&&").
let manutencao = true;
let pneuNovo = false;

if (pneuNovo == true && manutencao == true) {
  console.log("Pode viajar");
} else {
  console.log("Vá ao mecanico antes de Viajar");
}

// 8. Crie uma estrutura condicional que verifica se pelo menos uma das condições é verdadeira
// utilizando o operador lógico OR ("||").
let carroNovo = true;
let semiCarro = false;
let carroUsado = true;
let carroVelho = true;

if (carroNovo == true || carroUsado == true) {
  if (semiCarro == true) {
    console.log("Compre o carro");
  } else {
    console.log("Nao compre o carro. Precisa de muita manutenção");
  }
} else {
  console.log("Nao compre o carro. Carro muito velho!");
}

// 9. Crie uma estrutura condicional que nega uma condição utilizando o operador lógico NOT ("!").
let temTrabalho = false;

if (!temTrabalho) {
  console.log("Você não está trabalhando, mas não desanime!");
} else {
  console.log("Você está trabalhando, parabéns!");
}
// 10. Crie uma estrutura condicional que verifica se um número está dentro de um determinado
// intervalo, utilizando os operadores lógicos AND e os operadores de comparação (">=" e "<=").
let num = 8;

if (num <= 10 && num >= 0) {
  console.log("O numero esta entre 0 e 10");
} else {
  console.log("O numero é maior que 10 e não está no intervalo.");
}
// 11. Crie uma estrutura condicional que verifica se um número está fora de um determinado intervalo,
// utilizando os operadores lógicos OR e os operadores de comparação ("<" e ">").
let idade = 22;
let sexo = "Feminino";
if (
  (idade > 18 && idade < 30 && sexo == "Masculino") ||
  (idade > 18 && idade < 30 && sexo == "Feminino")
) {
  console.log(" Pode contratar");
} else {
  console.log("Nao compativel com a Vaga");
}
// 12. Crie uma estrutura condicional que verifica se um número é positivo, utilizando o operador de
// maior que (">") e o operador de igualdade ("==") para verificar se o número é maior que zero.
let num1 = 0;

if (num1 > 0) {
  console.log("O número é maior que zero");
} else if (num1 == 0) {
  console.log("O número é zero");
} else {
  console.log("O número é menor que zero");
}

// 13. Crie uma estrutura condicional que verifica se uma string é vazia, utilizando o operador de
// igualdade ("==") e o operador de tamanho ("length") para verificar se o tamanho da string é igual a zero.
let str = "";

if (str == "") {
  console.log("A String é vazia e possui " + str.length + " caracter.");
} else {
  console.log("A String possui " + str.length + " caracters na frase.");
}
// 14. Crie uma estrutura condicional que verifica se uma variável é do tipo booleano, utilizando o
// operador "typeof" e o operador de igualdade ("==") para verificar se o tipo de dado é igual a
// "boolean".
let verifique = false;

if (verifique == true || verifique == false) {
  console.log(`A variável ${verifique} é do tipo: ${typeof verifique}`);
} else {
  console.log(`A variável é do tipo: ${typeof verifique}`);
}
