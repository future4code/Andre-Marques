// INTERPRETAÇÃO

/*
1-  10
2-a) 19
     21
     23
     25
     27
     30 
  b)Sim.
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
        console.log(lista.indexOf(numero))
    }
3- *
   **
   ***
   **** 
*/

// ESCRITA

//1-

// const pet =  Number(prompt("Quantos pets você tem?"));
// let nome = [];

// if(pet === 0){
//     console.log("Que pena! Você pode adotar um pet!");
// } else if(pet > 0){
//     for(i = 0; i < pet; i++){
//         nome[i] = prompt("Digite o nome do seu pet");
//     }
//     console.log(nome);
// } 

//2-

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// //a)

// const a = n =>{
//     for(valor of n){
//         console.log(valor);
//     }
// }

// a(array);

//b)

// const b = n =>{
//     for(valor of n){
//         let divisao = valor / 10;
//         console.log(divisao);
//     }
// }

// b(array);

//c)

// let novoArray = [];

// const c = n =>{
//     for(i = 0; i < array.length; i++){
//         if(n[i] % 2 === 0){
//             novoArray.push(n[i]);
//         }
//     }
//     console.log(novoArray);
// }

// c(array);

//d)

// let novoArray = [];

// const d = n =>{
//     for(valor of n){
//         novoArray[valor] = valor;
//         console.log(`O elemento do index ${n.indexOf(valor)} é ${novoArray[valor]}`);
//     }
// }

// d(array);

//e)

// const e = n =>{
//     let maior = n[0];
//     let menor = n[0];

//     for(let i = 1; i < n.length; i++){
//         if(n[i] > maior){
//             maior = n[i];
//         }
//         if(n[i] < menor){
//             menor = n[i];
//         }
//     }
//     console.log("O maior número é", maior, "e o menor é", menor);
    
// }

// e(array);


// DESAFIOS

//1-

//a)

// const num1 = Number(prompt("Digite um número"));

// console.log("Vamos jogar!");

// //b)

// let num2 = Number(prompt("Digite um número para tentar acertar qual foi o primeiro número."));
// let i = 1;
// const numEscolhido = (n1, n2) =>{
//     if(n1 === n2){
//         console.log("Acertou!!");
//         console.log("O número de tentativas foi:", i);
//     } else{
//         while(n1 !== n2){;
//             i++;
//             console.log("O número chutado foi:", n2);
        
//             if(n1 < n2){
//                 console.log("Errou. O número escolhido é maior!");
//             }else{
//                 console.log("Errou. O número escolhido é menor!");
//             }
        
//             n2 = Number(prompt("Digite um número para tentar acertar qual foi o primeiro número."));
//         };
//         if(n1 === n2){
//             console.log("Acertou!!");
//             console.log("O número de tentativas foi:", i);
//         }
//     } 
// }

// numEscolhido(num1, num2);

//2-

// const num1 = Math.floor((Math.random() * 100) + 1);

// console.log("Vamos jogar!");

// //b)

// let num2 = Number(prompt("Digite um número para tentar acertar qual foi o primeiro número."));
// let i = 1;

// const numEscolhido = (n1, n2) =>{
//     if(n1 === n2){
//         console.log("Acertou!!");
//         console.log("O número de tentativas foi:", i);
//     } else{
//         while(n1 !== n2){;
//             i++;
//             console.log("O número chutado foi:", n2);
        
//             if(n1 < n2){
//                 console.log("Errou. O número escolhido é maior!");
//             }else{
//                 console.log("Errou. O número escolhido é menor!");
//             }
        
//             n2 = Number(prompt("Digite um número para tentar acertar qual foi o primeiro número."));
//         };
//         if(n1 === n2){
//             console.log("Acertou!!");
//             console.log("O número de tentativas foi:", i);
//         }
//     } 
// }

// numEscolhido(num1, num2);