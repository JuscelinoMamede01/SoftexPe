// A atividade que faremos é a da “calculadora de média”. Para isso, você deve criar um programa JavaScript que calcule a média de três notas inseridas pelo usuário e exiba o resultado no console.

// Primeiro, solicite que o usuário insira três notas (entre 0 e 10) usando a função prompt(). Elas devem ser armazenadas em variáveis adequadas, por exemplo, nota1,nota2,nota3, com o tipo de dado . Depois, some-as e divida por três. O resultado deste cálculo será o valor da média, que deve ser armazenado em uma variável chamada media
// . Por fim, exiba esse valor no console usando a função

let nota1 = parseFloat(prompt(`Digite 1ª nota:`));
let nota2 = parseFloat(prompt(`Digite 2ª nota:`));
let nota3 = parseFloat(prompt(`Digite 3ª nota:`));

let media = (nota1 + nota2 + nota3) / 3;

console.log(`A media é: ${media.toFixed(2)}`);
