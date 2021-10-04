// INTERPRETAÇÃO DE CÓDIGO

// 1 - 10, 5

// 2 - 10, 10, 10

/*  
   3 - p = horasDiarias
       t = valorDia 
*/ 


// ESCRITA DE CÓDIGO

// 1 - 
let nome;
let idade;
console.log(typeof nome, typeof idade);
/*
O resultado é undefined porque não foi definido
um valor
*/
nome = prompt("Qual o seu nome?");
idade = prompt("Qual a sua idade");
console.log(typeof nome, typeof idade);
/*
Os dois resultados deram string, pois agora as 
variaveis receberam um valor.
*/
console.log("Olá", nome+ ", você tem", idade, "anos");


// 2 -
let perg1 = "Você estuda na Labenu?";
let perg2 = "Você está gostando do curso?";
let perg3 = "Você indicaria o curso a um amigo?";
let resp1 = prompt(perg1);
let resp2 = prompt(perg2);
let resp3 = prompt(perg3);
console.log(perg1, "-", resp1);
console.log(perg2, "-", resp1);
console.log(perg3, "-", resp1);


// 3 -
let a = prompt("qual o valor de a?");
let b = prompt("qual o valor de b?");
let c;
console.log(a);
console.log(b);
c = a;
a = b;
b = c;
console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);


// DESAFIO

let num1 = prompt("Informe um número");
let num2 = prompt("Informe mais um número");

console.log(Number(num1) + Number(num2));
console.log(Number(num1) * Number(num2));