//Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.

let animals = [
  ["Nome", "Espécie", "Idade"],
  ["Leão", "Felino", 5],
  ["Elefante", "Mamífero", 10],
  ["Pinguim", "Ave", 3],
  ["Tigre", "Felino", 7],
];

function printAnimals(arrayAnimals) {
  for (let i = 1; i < arrayAnimals.length; i++) {
    console.log(
      `Meu ${arrayAnimals[i][0]} é um(a) ${arrayAnimals[i][1]} com ${arrayAnimals[i][2]} anos de idade.`
    );
  }
}

printAnimals(animals);
