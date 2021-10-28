
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

// function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// //console.log(checarDesigualdade(1, 2));

// // b-)Compare a igualdade entre a===b

// function checarIgualdade(a, b) {
//     //  Sua lógica aqui
//     return `No comparador de igualdade ${a} === ${b} é ${a === b}`
// }
// //console.log(checarIgualdade(2, 2));

// //c-)Faça uma função chamada "verificaSeEMaior"

// function verificaSeEMaior(a, b) {
    
//     return `No comparador de maior ${a} > ${b} é ${a > b}`
// }

// //console.log(verificaSeEMaior(321, 2156));


// // Exercício 2------------------------------------------------------------------------------------
// //Escreva true or false para as comparações abaixo:
// // exemplo 1>2 = false
// // a-) 1==='1'= //false
// // b-) 1=='1'= //true
// // c-) 'a'==='b'= //false
// // d-) 'b'>'a'= //true
// // e-) 0!==null= //true


// // // CONDICIONAIS

// // // Exercício 3------------------------------------------------------------------------------------

// const cadastro = () => {
//     const usuario = [];

//     //  Sua lógica aqui
//     const nomeUsuario = prompt("Digite seu nome:");
//     const anoNasc = prompt("Digite seu ano de nascimento:");
//     const senha = prompt("Digite sua senha:");
//     const nacionalidadeUsuario = prompt("Digite sua nacionalidade:");

//     anoAtual = 2021;

//     if((anoAtual - anoNasc > 18) && (senha.length > 5) && (nacionalidadeUsuario === 'brasileira' || nacionalidadeUsuario === 'Brasileira')){
//         usuario.anoDeNascimento = anoNasc;
//         usuario.senhaDoUsuario = senha;
//         usuario.nacionalidade = nacionalidadeUsuario;
//         usuario.nomeDoUsuario = nomeUsuario;
//     }
    
//     return usuario;
// }
// //console.log(cadastro());

// // Exercício 4-----------------------------------------------------------------------------------------------

// const login = () => {
//     const login = "labenu"
//     //  Sua lógica aqui
//     const senha = prompt("Digite sua senha;");

//     if(senha === login){
//         return 'Usuário logado';
//     } else{
//         return 'Senha inválida';
//     }
// }

// //console.log(login());

// // // Exercício 5----------------------------------------------------------------------------------------------------

// const primeiraDose = () => {

//     //  Sua lógica aqui
//     let tempo = "";
//     let data = new Date();
//     let novaData = data.toLocaleDateString();

//     Date.prototype.addDias = function(dias){
//         this.setDate(this.getDate() + dias)
//     }

//     const usuario = {
//         nome: prompt("Digite seu nome:"),
//         nomeVacina: prompt("Digite o nome da vacina:")
//     }
  

//     if(usuario.nomeVacina === 'coronavac'){
//         tempo = "28";
//         //data.addDias(28)
//         data.setDate(data.getDate() + tempo);
//         return `Olá ${usuario.nome}! A próxima dose da ${usuario.nomeVacina} é daqui a ${tempo} dias. Compareca no posto na data ${novaData}`
//     } else if(usuario.nomeVacina === 'astrazenica'){
//         tempo = "90";
//         //data.addDias(90);
//         data.setDate(data.getDate() + tempo);
//         return `Olá ${usuario.nome}! A próxima dose da ${usuario.nomeVacina} é daqui a ${tempo} dias. Compareca no posto na data ${novaData}`
//     } else if(usuario.nomeVacina === 'pfizer'){
//         tempo = "90";
//         //data.addDias(90);
//         data.setDate(data.getDate() + tempo);
//         return `Olá ${usuario.nome}! A próxima dose da ${usuario.nomeVacina} é daqui a ${tempo} dias. Compareca no posto na data ${novaData}`
//     }
// }
// console.log(primeiraDose())


// // LOOP+CONDICIONAL

// // Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui
//     for(usuario of usuarios){
//         if(nomeDoUsuario === usuario.nome){
//             usuario.imunizacao = 'completa';
//             return usuarios
//         }
//     }
// }
//console.log(segundaDose("Barbara"));

// // Exercício 7 --------------------------------------------------------------------------------------

// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//      //Sua lógica aqui
//     for(let usuario of usuarios){
//         if(usuario.imunizacao !== 'completa'){
//             console.log(`Olá ${usuario.nome}! Sua imunização está ${usuario.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`);
//         }
//     }
// }
// avisoAosAtrasados();


// // DESAFIO------------------------------------------------------------------------------------------

// const usuarios = [
//     {
//         nome: "Artur",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "pfizer",
//         imunizacao: "incompleta"
//     },
//     {
//         nome: "Bárbara",
//         ano: 1984,
//         nacionalidae: "brasileira",
//         senha: "labenu",
//         vacina: "astrazenica",
//         imunizacao: "completa"
//     },
//     {
//         nome: "Carlos",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "coronavac",
//         imunizacao: "incompleta"
//     }

// ]

// const cadastro = () => {
//     //  Sua lógica aqui
// }
// console.log(cadastro());

// const login = () => {
//     //  Sua lógica aqui
// }
// console.log(login());

// const primeiraDose = () => {
// //  Sua lógica aqui
// }
// console.log(primeiraDose())
// const segundaDose = (nomeDoUsuario) => {
//     //  Sua lógica aqui
// }
// console.log(segundaDose("ALGUM NOME AQUI"));

// const avisoAosAtrasados = () => {
//     //  Sua lógica aqui
// }
// console.log(avisoAosAtrasados());