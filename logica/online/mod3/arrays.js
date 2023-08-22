// Você deve criar três listas em JavaScript:

// 1. para guardar os nomes de dez pessoas;
// 2. para guardar as suas idades;
// 3. para guardar as suas cores favoritas.

// Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.

//1
let names = [
  "Jesus",
  "Pedro",
  "João",
  "Thiago",
  "André",
  "Matheus",
  "Tadeu",
  "Tomé",
  "Judas",
  "Natanael",
];

//2
let ages = [33, 23, 26, 27, 34, 63, 29, 34, 75, 20];

//3
let collors = [
  "Azul",
  "Branco",
  "Preto",
  "Vermelho",
  "Amarelo",
  "Cinza",
  "Verde",
  "Marrom",
  "Dourado",
  "Prata",
];

//Imprima asa listas
console.log(`Essa é a lista de nomes:\n${names}`);
console.log(`Essas são sua idades:\n${ages}`);
console.log(`Essa são as cores favoritas deles:\n${collors}`);

//modificaçoes alterando uma cor e uma idade

ages.splice(7, 0, 38);
collors.splice(7, 0, "Red");

console.log(`Essa é a lista de nomes:\n${names}`);
console.log(`Essas são sua idades:\n${ages}`);
console.log(`Essa são as cores favoritas deles:\n${collors}`);
