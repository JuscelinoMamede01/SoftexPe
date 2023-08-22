// Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2023).

// Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

const minYear = 1922;
const maxYear = 2021;
const currentYear = 2023;

const fullName = prompt("Digite seu nome completo: ");
let yearBirthDate = prompt("Digite seu ano de nascimento: ");
let parsedYearBirthDate = parseInt(yearBirthDate);

while (
  parsedYearBirthDate < minYear ||
  parsedYearBirthDate > maxYear ||
  isNaN(parsedYearBirthDate)
) {
  window.alert("O ano de nascimento deve ser entre 1922 e 2021");
  yearBirthDate = prompt("Digite seu ano de nascimento: ");
  parsedYearBirthDate = parseInt(yearBirthDate);
}

let age = currentYear - parsedYearBirthDate;

if (age < 0) {
  window.alert(`Você irá completar ${age} anos de idade.`);
} else {
  window.alert(`Você possui ${age} anos de idade.`);
}
