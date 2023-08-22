//1.Crie uma variável chamada "estaChovendo" e atribua a ela o valor booleano que indica se está chovendo ou não.
let estaChovendo = false;

console.log("Está chovendo?", estaChovendo);

//2. Declare uma variável chamada "verdadeiro" e atribua a ela o valor booleano true.
let verdadeiro= true;
console.log(verdadeiro);

//3. Declare uma variável chamada "falso" e atribua a ela o valor booleano false.
let falso = false;
console.log(falso);

//4. Verifique no terminal se a variável "verdadeiro" é igual a variável "falso".
if (verdadeiro === falso){
 console.log('As variaveis são iguais.');   
}else{
    console.log("As variaveis são diferentes.");
}

/*5. Declare uma variável chamada "temperatura" e atribua a ela um valor numérico representando a
temperatura atual. Em seguida, verifique e exiba no terminal se esta temperatura é maior que 30
graus Celsius.*/
let temperatura= 28;
if(temperatura> 30){
    console.log("Hoje temos uma temperatura de:"+temperatura+"ºC "+"e ela é maior que 30ºC");
}else{
    console.log("Hoje temos uma temperatura de:"+temperatura+"ºC "+"e ela é menor que 30ºC");
}

/*6. Declare uma variável chamada "resultado" e atribua a ela o valor booleano resultante da
comparação "10 > 5". Em seguida, exiba o valor da variável resultado no terminal.*/
let resultado = true;
console.log("O resultado da comparação de 10 > 5 é: ",resultado);

/*

7. Declare uma variável chamada "teste" e atribua a ela o valor booleano resultante da comparação
"25 < 15". Em seguida, exiba o valor da variável resultado no terminal.
*/
let teste= false;
console.log("O resultado da comparação de 25 < 15 é: ",teste);
