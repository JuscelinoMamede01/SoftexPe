// Desenvolva um programa que recebe do usuário nome completo e data de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2023).

// Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

const minYear = 1922;
const maxYear = 2021;
const currentDate = "27/07/2023";
const splitDate = currentDate.split("/");
let birthDate;
let splitBirthDate;
let age;

const fullName = prompt("Digite seu nome completo: ");
i = 0;
while (i == 0) {
  birthDate = prompt("Digite sua data de nascimento: dd/mm/aaaa ");
  splitBirthDate = birthDate.split("/");

  if (splitBirthDate[2] >= minYear && splitBirthDate[2] <= maxYear) {
    i++;
  } else {
    window.alert("O ano de nascimento deve ser entre 1922 e 2021");
  }
}

const months = parseInt(splitDate[1]) - parseInt(splitBirthDate[1]);
const years = parseInt(splitDate[2]) - parseInt(splitBirthDate[2]);

if (years >= 0 && months >= 0) {
  age = years;
  console.log(
    `Olá, ${fullName}! Na data de ${currentDate} você já possui ${age} anos de idade.`
  );
} else if (years >= 0 && months < 0) {
  age = years;
  console.log(
    `Olá, ${fullName}! Você irá completar ${age} anos de idade em 2023.`
  );
}
