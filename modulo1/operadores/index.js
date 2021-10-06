//INTERPRETAÇÃO

/*
//1 - a.false
    b.false
    c.true
    d.boolean
*/

/*
//2 - O javascript vai concatenar.
    ex: primeiroNumero = 5
        segundoNumero = 9
        soma = 59
*/

/*
//3 - let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    const soma = Number(primeiroNumero) + Number(segundoNumero)

    console.log(soma)
*/


//ESCRITA

/*
//1 - 

const idadeUsuario = prompt("Digite a sua idade");
const idadeMelhorAmigo = prompt("Digite a idade do seu melhor amigo(a)");
const diferencaIdade = Number(idadeUsuario - idadeMelhorAmigo)

console.log("Sua idade é maior do que a do seu amigo? -", idadeUsuario > idadeMelhorAmigo);
console.log("A diferença de idade é de", diferencaIdade, "anos");
*/

/*
//2 -

const numPar = prompt("Insira um número par");

console.log(numPar % 2);
//Todos resultam em 0.
//Todos resultam em 1.
*/

/*
//3 -

const idadeUsuario = prompt("Digite a sua idade");
let meses = idadeUsuario * 12;
let dias = meses * 30;//considerando apenas meses com 30 dias
let horas = dias * 24;

console.log(meses);
console.log(dias);
console.log(horas);
*/

/*
4 -

let num1 = Number(prompt("Digite um número"));
let num2 = Number(prompt("Digite um segundo número"));

console.log("O primeiro número é maior que o segundo? -", num1 > num2);
console.log("O primeiro número é igual ao segundo? -", num1 === num2);
console.log("O primeiro número é divisível pelo segundo? -", num1 / num2 % 2 === 0);
console.log("O segundo número é divisível pelo primeiro? -", num2 / num1 % 2 === 0);
*/

//DESAFIO

/*
//1 - 

let fahrenheit = Number();
let celsius = Number();
let fahrenheitKelvin = Number((fahrenheit - 32) * (5/9) + 273.15);
let celsiusFahrenheit = Number(((celsius) * (9/5) + 32));

fahrenheit = 77;
console.log("O valor de 77 graus Fahrenheit em Kelvin é", (fahrenheit - 32) * (5/9) + 273.15);

celsius = 80;
console.log("O valor de 80 graus Celsius em Fahrenheit é", ((celsius) * (9/5) + 32));

celsius = 30;
console.log("O valor de 30 graus Celsius em Fahrenheit é", fahrenheit = ((celsius) * (9/5) + 32), "e em Kelvin é", (fahrenheit - 32) * (5/9) + 273.15);

celsius = prompt("Insira os graus em celsius");
console.log("O valor de", celsius, "graus Celsius em Fahrenheit é", fahrenheit = ((celsius) * (9/5) + 32), "e em Kelvin é", (fahrenheit - 32) * (5/9) + 273.15);
*/

/*
//2 - 

let quilowattHora = 280;
let custoQuilowatt = quilowattHora * 0.05;
let desconto = (custoQuilowatt / 100) * 15;

console.log("Valor pago por 280 quilo2att-hora é de R$", custoQuilowatt);
console.log("Valor pago por 280 quilo2att-hora com 15% de desconto é de R$", desconto);
*/

/*
//3 - 

let libra = 20;
let libraKg = libra / 2.2046;
let onca = 10.;
let oncaKg = onca / 35.274;
let milha = 100;
let milhaMetro = milha / 0.00062137;
let pes = 50;
let pesMetro = pes / 3.2808;
let galao = 103.56;
let galaoLitro = galao * 4.571;
let xicara = 450;
let xicaraLitro = xicara * 1000;

console.log("20lb equivalem a", libraKg, "kg");
console.log("10.5oz equivalem a", oncaKg, "kg");
console.log("100mi equivalem a", milhaMetro, "m");
console.log("50ft equivalem a", pesMetro, "m");
console.log("103.56gal equivalem a", galaoLitro, "l");
console.log("450 xic equivalem a", xicaraLitro, "l");

milha = prompt("Insira um valor em milhas");
console.log(milha, "equivalem a", milhaMetro, "m");
*/









