// INTERPRETAÇÃO

/*
1- a) Vai imrpimir cada objeto com seu indice e o array original todo.

2- a) Vai imprimir um novo array apenas com os nomes.

3- a) Vai imprimir um novo array com os com os dados da Amanda e da Lais.

*/


// ESCRITA

//1-

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// //a)
// const arrayNomeDosPets = pets.map((pet) => {
//     return pet.nome;
// });

// //onsole.log(arrayNomeDosPets);

// //b)
// const arraySalsicha = pets.filter((pet) => {
//     return pet.raca === "Salsicha";
// });

// //console.log(arraySalsicha);

// //c)
// const arrayPoodles = pets.filter((pet) => {
//     return pet.raca === "Poodle";
// });

// const arrayPoodlesMensagem = arrayPoodles.map((arrayPoodles) => {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${arrayPoodles.nome}`
// });

// console.log(arrayPoodlesMensagem);

//2-

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

// //a)
// const novoArrayNome = produtos.map((produto) => {
//     return produto.nome;
// });

// // console.log(novoArrayNome);

// //b)
// const novoArrayNomePreco = produtos.map((produto) => {
//     return {nome: produto.nome, preco: (produto.preco - (produto.preco / 100) * 5).toFixed(2)};
// });

// console.log(novoArrayNomePreco);
// });

// console.log(novoArrayNomePreco);

//c)
// const arrayBebidas = produtos.filter((produto) => {
//     return produto.categoria === "Bebidas";
// });

// console.log(arrayBebidas);

// // d)
// const arrayYpe = produtos.filter((produto) => {
//     return produto.nome.includes("Ypê");
// });

// console.log(arrayYpe);

// //e)
// const arrayYpe = produtos.filter((produto) => {
//     return produto.nome.includes("Ypê");
// });

// const arrayMensagemYpe = arrayYpe.map((valor) => {
//     return `Compre ${valor.nome} por ${valor.preco.toFixed(2)}`;
// });

// console.log(arrayMensagemYpe);


//DESAFIO

//1-

// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//  ]

// //a)
//  const nomePokemons = pokemons.map((pokemon) => {
//     return pokemon.nome;
//  });

//  nomePokemons.sort();
//  console.log(nomePokemons);

// //b)
// const arrayTipoPokemons = pokemons.map((pokemon) => {
//     return pokemon.tipo;
// });

// const novoArrayTipoPokemons = [...new Set(arrayTipoPokemons)];

// console.log(novoArrayTipoPokemons);
