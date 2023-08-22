//1. Crie um array vazio chamado "numeros".
let numeros=[];
console.log("o Array está vazio: ",numeros);

//2. Adicione os números 1, 2, 3 e 4 ao array "numeros".
numeros.push(1,2,3,4)
console.log("Foram adicionados os numeros: " + numeros + " no Array");

//3. Acesse o valor do segundo elemento do array "numeros".
console.log("o valor do segundo elemento do array é:", numeros[1]);

//4. Atualize o valor do terceiro elemento do array "numeros" para 10.
numeros[2]= 10;
console.log("O novo valor do 3º elemento do array é:", numeros[2]); 
console.log("Items do array: ",numeros); 

//5. Remova o último elemento do array "numeros" utilizando a função ".pop".
numeros.pop();
console.log("Após a exclusão do ultimo número a lista fica: ", numeros);

//6. Verifique o comprimento do array "numeros".
console.log("O comprimento do array é de: ",numeros.length);

//7. Crie um novo array chamado "frutas" contendo as strings "maçã", "banana" e "laranja".
let frutas=["maçã","banana","laranja"]
console.log("O array frutas possue: ",frutas);

//8. Acesse o valor do primeiro elemento do array frutas.
console.log("O valor do primeiro elemento é: ",frutas[0]);

//9. Adicione a string "uva" ao final do array frutas utilizando a função ".push".
frutas.push("uva");
console.log("O array frutas possue: ",frutas);

/*10. Crie um objeto chamado "aluno" com as propriedades "nome" e "idade" e atribua valores a elas.
Em seguida, crie um array chamado "alunos" e adicione o objeto "aluno" a esse array.
*/
const aluno={
    nome: "Juscelino",
    idade: 38
}

let alunos=[aluno];
console.log(alunos);

//11. Acesse o valor da propriedade "nome" do primeiro elemento do array "alunos".
console.log("Qual o nome do primeiro aluno da lista? ",alunos[0].nome);

//12. Adicione mais três objetos do tipo "aluno" ao array "alunos".
const aluno1={
    nome: "João",
    idade:23
}

const aluno2={
    nome: "Maria",
    idade:22
}

const aluno3={
    nome: "Fernando",
    idade:33
}

alunos.push(aluno1,aluno2,aluno3)
console.log("Segue abaixo lista de obejtos do array:");
console.log(alunos);

/*13. Crie um array chamando "produtos" contendo 10 produtos de supermercado. Em seguida, exiba no
terminal apenas os produtos que ficaram em posições pares.
*/

const produtos = [];
produtos.push("Kitkat","Suco de uva", "Pão", "Arroz", "Feijão", "Cuscuz","Macarrão","Leite","Melancia","Biscoito");
console.log("Os produtos nas posições pares são: ");
console.log(produtos[2]);
console.log(produtos[4]);
console.log(produtos[6]);
console.log(produtos[8]);
