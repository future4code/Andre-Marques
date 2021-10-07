//INTERPRETAÇÃO

/*
1- a) 10
      50

   b) Iria ser executado a função porém sem retorno no console. Nada.
   
2- a) Ela recebe um texto inserido pelo usuário, e caso esse texto seja
      "cenoura", ele irá retornar true, caso o contrário false.
    
   b) i. true
      ii. true  
      iii. true
*/


//ESCRITOS

//1-
// //a)
// function escreverSobreMim(){
//     console.log("Eu sou André, tenho 32 anos, moro em Graz e sou estudante.");
// }

// escreverSobreMim();

// //b)
// const nome = "Lucas";
// const idade = 32;
// const endereco = "São Paulo";
// const profissao = "estudante";

// function escreverSobreAlguem(n1, n2, n3, n4){
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`);
// }

// escreverSobreAlguem(nome, idade, endereco, profissao);

//2-
//a)
// const num1 = 10;
// const num2 = 20;

// const resultado = function(n1, n2){
//     const soma = n1 + n2;
//     console.log(soma);
// }

// resultado(num1, num2);

//b)
// const num1 = 5;
// const num2 = 5;
// const compararMaiorOuIgual = (n1, n2) => {
//     const resultado = n1 >= n2;
//     console.log(resultado);
// }

// compararMaiorOuIgual(num1, num2);

//c)
// const num = 15;

// function definirParOuImpar(n){
//     const resultado = n % 2 === 0;
//     console.log(resultado);
// }

// definirParOuImpar(num);

//d)
// const string = "Hoje tivemos aula sobre funções";

// const resultado = texto => {
//     console.log(string.length, string.toUpperCase());
// }

// resultado(string);

//3- 

// const entrada1 = Number(prompt("Digite um número"));
// const entrada2 = Number(prompt("Digite outro número"));

// function somar(n1, n2){
//     const resultado = n1 + n2;
//     console.log(resultado);
// }

// function subtrair(n1, n2){
//     const resultado = n1 - n2;
//     console.log(resultado);
// }

// function multiplicar(n1, n2){
//     const resultado = n1 * n2;
//     console.log(resultado);
// }

// function dividir(n1, n2){
//     const resultado = n1 / n2;
//     console.log(resultado);
// }

// somar(entrada1, entrada2);
// subtrair(entrada1, entrada2);
// multiplicar(entrada1, entrada2);
// dividir(entrada1, entrada2);

//DESAFIO

//1-
//a)
// const entrada1 = n => {
//     console.log(n);
// }

// const entrada2 = (n1, n2) => {
//     const soma = n1 + n2;
//     entrada1(soma);
// }

// entrada2(10, 25);

//2-
// const cateto1 = Number(prompt("Digite o valor do primeiro cateto"));
// const cateto2 = Number(prompt("Digite o valor do segundo cateto"));

// function hipotenusa(n1, n2){
//     const resultado = Math.sqrt(Math.pow(n1,2) + Math.pow(n2,2));
//     return resultado;
// }

// const hip = hipotenusa(cateto1, cateto2);
// console.log(hip);