// a) O typescript reclama, pois o tipo é string.

// b) Temos que usar o operador lógico OU que é o |.

// c) 

// type Pessoa = {
//     nome:string,
//     idade:number,
//     corFavorita:string
// }

// // const pessoa:{nome: string, idade:number, corFavorita:string} = {
// //     nome: "",
// //     idade: 0,
// //     corFavorita: ""
// // }

// // const professor:{nome: string, idade:number, corFavorita:string} = {
// //     nome: "",
// //     idade: 0,
// //     corFavorita: ""
// // }

// // const cliente:{nome: string, idade:number, corFavorita:string} = {
// //     nome: "",
// //     idade: 0,
// //     corFavorita: ""
// // }

// // const aluno:{nome: string, idade:number, corFavorita:string} = {
// //     nome: "",
// //     idade: 0,
// //     corFavorita: ""
// // }

// const pessoa:Pessoa = {
//     nome: "",
//     idade: 0,
//     corFavorita: ""
// }

// const professor:Pessoa = {
//     nome: "",
//     idade: 0,
//     corFavorita: ""
// }

// const cliente:Pessoa = {
//     nome: "",
//     idade: 0,
//     corFavorita: ""
// }

// const aluno:Pessoa = {
//     nome: "",
//     idade: 0,
//     corFavorita: ""
// }

// d) 

// enum CoresArcoIris {
//     AZUL = "AZUL",
//     AMARELO = "AMARELO",
//     ROSA = "ROSA", 
//     VERDE = "VERDE"
// }

// type Pessoa = {
//     nome:string,
//     idade:number,
//     corFavorita:CoresArcoIris
// }

// const pessoa:Pessoa = {
//     nome: "",
//     idade: 0,
//     corFavorita: CoresArcoIris.AZUL
// }

// const professor:Pessoa = {
//     nome: "",
//     idade: 0,
//     corFavorita: CoresArcoIris.AMARELO
// }

// const cliente:Pessoa = {
//     nome: "",
//     idade: 0,
//     corFavorita: CoresArcoIris.ROSA
// }

// const aluno:Pessoa = {
//     nome: "",
//     idade: 0,
//     corFavorita: CoresArcoIris.VERDE
// }