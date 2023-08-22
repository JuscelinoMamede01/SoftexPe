//1. Declare uma variável chamada "variavelNull" e atribua a ela o valor nulo ("null").
let variavelNull= null;
console.log(variavelNull);

//2. Declare uma variável chamada "variavelUndefined" e não atribua nenhum valor a ela.
let variavelUndefined;
console.log(variavelUndefined);

//3. Verifique se a variável "variavelNull" é igual a "null".
if (variavelNull == null){
    console.log("A variavel recebeu o valor NULL");
}

//4. Verifique se a variável "variavelUndefined" é igual a "undefined".
if (variavelUndefined == undefined){
    console.log("A variavel foi declarada como undefined");
}

//5. Atribua o valor "undefined" a uma propriedade chamada "nome" de um objeto vazio.
let cadastro={
    nome:undefined
}
console.log(cadastro);