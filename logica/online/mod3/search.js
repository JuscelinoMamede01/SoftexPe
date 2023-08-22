// Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

// Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

// Codifique a solução mais eficiente para buscar o número 20 no array.

//a lista não esta ordenado então vou usar uma busca linear.

const linearSearch = (array, searchElement) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchElement) {
      return i;
    }
  }
  return -1;
};

//EXAMPLE
const numberList = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const elementToFind = 20;

const foundElement = linearSearch(numberList, elementToFind);

if (foundElement !== -1) {
  console.log(
    `O elemento ${elementToFind} foi encontrado no indice ${foundElement}.`
  );
} else {
  console.log(`O elemento ${elementToFind} não foi encontrado na lista.`);
}
