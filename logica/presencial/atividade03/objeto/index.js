/*1. Crie um objeto chamado "pessoa" com as propriedades "nome", "idade" e "endereço" e atribua
valores a elas.*/
let pessoa={
    nome:"Juscelino",
    idade:38,
    endereco: "Rua parnamirim 23,Pau amarelo, Paulista"
}
console.log(pessoa);

//2. Acesse o valor da propriedade "nome" do objeto "pessoa".
console.log(pessoa.nome);

//3. Adicione uma nova propriedade chamada "profissao" ao objeto pessoa e atribua um valor a ela.
pessoa.profissao = "Front-end Developer";
console.log(pessoa);

//4. Atualize o valor da propriedade "idade" do objeto pessoa para um novo valor.
pessoa.idade= 35;
console.log(pessoa);

/*5. Crie outro objeto chamado "animal" com as propriedades "nome", "especie" e "cor" e atribua
valores a elas.*/
let animal={
    nome: "Avestruz",
    especie: "Ave",
    cor: "Preta"
}
console.log(animal);

/*6. Crie um objeto chamado "livro" com as propriedades "titulo", "autor" e "ano" e atribua valores a
elas.*/
let livro={
    titulo:"JavaScript: O Guia Definitivo",
    autor: "David Flanagan",
    ano: 1996
}
console.log(livro);

//7. Acesse o valor da propriedade "autor" do objeto livro.
console.log(livro.autor);

//8. Atualize o valor da propriedade "ano" do objeto livro para um novo valor.
livro.ano= 2001
console.log(livro);

//9. Exclua a propriedade "titulo" do objeto utilizando o operador "delete".
delete livro.titulo;
console.log(livro);

/*10. Crie um objeto chamado "carro" com as propriedades "marca", "modelo" e "ano" e atribua valores
a elas. Em seguida, exiba todas as propriedades do objeto no console.
*/
let carro={
    marca: "Fiat",
    modelo:"Uno",
    ano:2021
}
console.log("A marca do carro é: ",carro.marca);
console.log("A modelo do carro é: ",carro.modelo);
console.log("A ano do carro é: ",carro.ano);

/*11. Atualize o valor da propriedade "modelo" para "undefined" do objeto "carro" e exiba todas as
propriedades do objeto no console.
*/
carro.modelo= undefined;
console.log("A marca do carro é: ",carro.marca);
console.log("A modelo do carro é: ",carro.modelo);
console.log("A ano do carro é: ",carro.ano);