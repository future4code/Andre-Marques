// INTERPRETAÇÃO

/*
//1- a) O código testa se o número é par ou impar.
        Se for par ele tem resto de divisão 0,
        e se for impar ele tem 1.
    
     b) Para números pares.
     
     c) Para números impares.

//2- a) Para dar o resultado da fruta digitada pelo usuário.

     b) O preço da fruta Maçã é R$ 2.25.

     c) Ele iria imprimir a Pêra com o valor do default.

//3- a) Esta guardando um número que será digitado pelo usuário.

     b) Esse número passou no teste. 
        Não teria mensagem pois -10 é menos que 0.
        E daria erro pois a variavel mensagem que o console chama fora da função,
        está declarada dentro da função.
    
     c) Sim, pois o console.log(mensagem) está chamando uma variavel que foi declarada
        dentro do escopo da função. Portando ela só funciona dentro do bloco da função e é de escopo local.
*/

// ESCRITA


// //1- 

// const dirigir = () => {
//     const idade = Number(prompt("Digite a sua idade"));

//     if(idade >= 18){
//         console.log("Você pode dirigir");
//     } else{
//         console.log("Você não pode dirigir");
//     }
// } 

// dirigir();


// //2- 

// const turnoDoDia = prompt("Qual turno do dia você estuda? M(matutino), V(vespertino) e N(noturno").toUpperCase();

// const resposta = valor => {

//     if(valor === 'M'){
//         return "Bom dia!";
//     } else if(valor === 'V'){
//         return "Boa tarde!";
//     } else if(valor === 'N'){
//         return "Boa noite!";
//     } else{
//         return "Entrada inválida!";
//     }    
// }

// console.log(resposta(turnoDoDia));

// //3- 

// const turnoDoDia = prompt("Qual turno do dia você estuda? M(matutino), V(vespertino) e N(noturno").toUpperCase();

// const resposta = valor => {

//     switch(valor){

//         case 'M':
//             return "Bom dia!";
//             break;
//         case 'V':
//             return "Boa tarde!";
//             break;          
//         case 'N':
//             return "Boa noite!";
//             break;
//         default:
//             return "Entrada inválida!";
//             break;
//     }
// }

// console.log(resposta(turnoDoDia));

//4- 

// const filme = {
//     genero: prompt("Digite o gênero do filme"),
//     valorIngresso: Number(prompt("Digite o valor do ingresso"))
// };

// const receberGeneroValor = (valor1, valor2) =>{
//     if((valor1 === 'Fantasia' || valor1 === 'fantasia' || valor1 === 'FANTASIA') && (valor2 <= 15)){
//         return "Bom filme!";
//     } else{
//         return "Escolha outro filme :("
//     };
// };
    
// console.log(receberGeneroValor(filme.genero, filme.valorIngresso));


//DESAFIO

//1-

// const filme = {
//     genero: prompt("Digite o gênero do filme"),
//     valorIngresso: Number(prompt("Digite o valor do ingresso"))
// };

// const receberGeneroValor = (valor1, valor2) =>{
//     if((valor1 === 'Fantasia' || valor1 === 'fantasia' || valor1 === 'FANTASIA') && (valor2 <= 15)){
//         const lanchinho = prompt("Qual lanchinho vocês gostariam de comprar? Pipoca, chocolate ou torta");

//         return `Bom filme! Aproveite o(a) seu(sua) ${lanchinho}`;
//     } else{
//         return "Escolha outro filme :("
//     }
// }
    
// console.log(receberGeneroValor(filme.genero, filme.valorIngresso));

////2- 

// const ingresso = {
//     nome: prompt("Digite seu nome completo"),
//     tipo_de_jogo: prompt("Digite o tipo de jogo, 'IN' para jogos internacionais e 'DO' para jogos domésticos."),
//     etapa_do_jogo: prompt("Digite a etapa do jogo, 'SF' para semi-final, 'DT' para decisão de terceiro lugar e 'FI' para final."),
//     categoria: Number(prompt("Digite a categoria do ingresso de 1 a 4.")),
//     quantidade_ingresso: Number(prompt("Digite a quantidade de ingressos que deseja comprar"))
// }

// const retornarDadosIngresso = valor =>{

//     let valorTotal = 0;
//     let valorIngresso = 0;
    
//     if(valor.etapa_do_jogo === 'SF' || valor.etapa_do_jogo === 'sf'){
//         valor.etapa_do_jogo = "Semi-final";
//         switch(valor.categoria){
//             case 1:
//                 valorIngresso = 1320.00;
//                 valorTotal = valor.quantidade_ingresso * valorIngresso;
//                 break;
//             case 2:
//                 valorIngresso = 880.00;
//                 valorTotal = valor.quantidade_ingresso * valorIngresso;
//                 break;
//             case 3:
//                 valorIngresso = 550.00;
//                 valorTotal = valor.quantidade_ingresso * valorIngresso;
//                 break;
//             case 4:
//                 valorIngresso = 220.00;
//                 valorTotal = valor.quantidade_ingresso * valorIngresso;
//                 break;
//         }
//     }else if(valor.etapa_do_jogo === 'DT' || valor.etapa_do_jogo === 'dt'){
//         valor.etapa_do_jogo = "Decisão de terceiro lugar"
//         switch(valor.categoria){
//             case 1:
//                 valorIngresso = 660.00;
//                 valorTotal = valor.quantidade_ingresso * valorIngresso;
//                 break;
//             case 2:
//                 valorIngresso = 440.00;
//                 valorTotal = valor.quantidade_ingresso * valorIngresso;
//                 break;
//             case 3:
//                 valorIngresso = 330.00;
//                 valorTotal = valor.quantidade_ingresso * valorIngresso;
//                 break;
//             case 4:
//                 valorIngresso = 170.00;
//                 valorTotal = valor.quantidade_ingresso * valorIngresso;
//                 break;
//         }
//     }else if(valor.etapa_do_jogo === 'FI' || valor.etapa_do_jogo === 'fi'){
//         valor.etapa_do_jogo = "Final";
//         switch(valor.categoria){
//             case 1:
//                 valorIngresso = 1980.00;
//                 valorTotal = valor.quantidade_ingresso * valorIngresso;
//                 break;
//             case 2:
//                 valorIngresso = 1320.00;
//                 valorTotal = valor.quantidade_ingresso * valorIngresso;
//                 break;
//             case 3:
//                 valorIngresso = 880.00;
//                 valorTotal = valor.quantidade_ingresso * valorIngresso;
//                 break;
//             case 4:
//                 valorIngresso = 330.00;
//                 valorTotal = valor.quantidade_ingresso * valorIngresso;
//                 break;
//          }
//     }   

//     if(valor.tipo_de_jogo === 'IN' || 'in'){
//         valor.tipo_de_jogo = "Internacional";
//         valorIngresso *= 4.10;
//         valorTotal *= 4.10;

//         return `--- Dados da Compra---
// Nome do cliente: ${valor.nome}
// Tipo do jogo: ${valor.tipo_de_jogo}
// Etapa do jogo: ${valor.etapa_do_jogo}
// Categoria: ${valor.categoria}
// Quantidade de ingressos: ${valor.quantidade_ingresso} ingressos
// ---Valores---
// Valor do ingresso: U$${valorIngresso}
// Valor total: U$${valorTotal}`
//     }else{
//         valor.tipo_de_jogo = "Nacional";
//         return `--- Dados da Compra---
// Nome do cliente: ${valor.nome}
// Tipo do jogo: ${valor.tipo_de_jogo}
// Etapa do jogo: ${valor.etapa_do_jogo}
// Categoria: ${valor.categoria}
// Quantidade de ingressos: ${valor.quantidade_ingresso} ingressos
// ---Valores---
// Valor do ingresso: R$${valorIngresso}
// Valor total: R$${valorTotal}`
//     }  
// }

// console.log(retornarDadosIngresso(ingresso));
