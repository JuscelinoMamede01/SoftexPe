// Vamos criar um cadastro de pessoa com os seguintes dados: nome, salário, idade e se possui diploma. Antes de começar a codificação, identifiquem os tipos de cada variável. Em seguida, desenvolvam o código utilizando exemplos para cada variável que respeitem os tipos identificados. Certifiquem-se de que os valores correspondam aos tipos de dados corretos.
let fullName;
let wage;
let age;
let graduate;

//Vamos criar um cadastro de pessoa

fullName = prompt("Digite o nome da pessoa: ");
wage = parseFloat(prompt("Digite o salário da pessoa: "));
age = parseInt(prompt("Digite a idade da pessoa: "));
graduate = prompt(
  "Possui graduação? Escreva True para Sim e false para não: "
).toLocaleLowerCase();

document.write(`Você cadastrou ${fullName} com sucesso. <br />`);
document.write("Informações:<br />");
document.write(`Salário: ${wage}<br />`);
document.write(`Idade: ${age} anos.<br />`);
if (graduate == "false") {
  document.write("Graduado: Não.");
} else {
  document.write("Graduado: Sim.");
}
