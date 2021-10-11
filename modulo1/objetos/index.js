/*
//INTERPRETAÇÃO

1- a) Matheus Nachtergaele
      Virginia Cavendish
      Globo 14h

2- a)Juca, 3, SRD
     Juba, 3, SRD
     Jubo, 3, SRD

    b)Faz uma cópia da objeto

3- a)False
     Undefined

   b)Altura não foi declarada

*/

//ESCRITA

/*
//1-
//a)
const pessoa = {
    nome: "André",
    apelidos: ["Dé", "Deh", "Marks"]
}

function receberPessoa(obj){
    const nome = obj.nome;
    const apelidos = obj.apelidos;

    console.log(`Eu sou ${nome}, mas pode me chamar de: ${apelidos[0]}, ${apelidos[1]} ou ${apelidos[2]}`);
}

receberPessoa(pessoa);

//b)
const novaPessoa = {
    ...pessoa, 
    apelidos: ["A9", "Deh9", "Marks9"]
};

receberPessoa(novaPessoa);
*/

/*
//2-

//a)
const ele = {
    nome: "Neymar Jr",
    idade: 29,
    profissao: "Jogador de futebol"
}

const ela = {
    nome: "Jeniffer Aniston",
    idade: 52,
    profissao: "Atriz"
}

//b)
function imprimirEleEla(valor){
    const nome = valor.nome;
    const numNome = nome.length;
    const idade = valor.idade;
    const profissao = valor.profissao;
    const numProfissao = profissao.length;
    const resultado = `${nome}, ${numNome}, ${idade}, ${profissao}, ${numProfissao}`;

    return resultado;
};

console.log(imprimirEleEla(ele));
console.log(imprimirEleEla(ela));
*/


/*
//3-

//a)
const carrinho = [];

//b)
const banana = {
    nome : "Banana",
    disponibilidade: true
};

const uva = {
    nome : "Uva",
    disponibilidade: true
};

const abacaxi = {
    nome : "Abacaxi",
    disponibilidade: true
};

//c)
const adicionarFruta = valor =>{
    carrinho.push(valor);
};

adicionarFruta(banana);
adicionarFruta(uva);
adicionarFruta(abacaxi);

//d)
console.log(carrinho);
*/

//DESAFIO

/*
//1-
function pergUsuario(){
    const nomeUsuario = prompt("Qual o seu nome?");
    const idadeUsuario = prompt("Qual o sua idade?");
    const profissaoUsuario = prompt("Qual o sua profissao?");

    const usuario = {};
    usuario.nome = nomeUsuario;
    usuario.idade = idadeUsuario;
    usuario.profissao = profissaoUsuario;

    console.log(usuario);
    console.log(typeof usuario);
};

pergUsuario();
*/

/*
//2-
function compararFilmes(a, b){
   const antes = a.ano < b.ano;
   const igual = a.ano === b.ano;
   const apos = a.ano > b.ano;
   const msgAntes = "O primeiro filme foi lancado antes do que o segundo?";
   const msgIgual = "O primeiro filme foi lancado no mesmo ano do segundo?";
   const msgApos = "O primeiro filme foi lancado após o segundo?";

   return `${msgAntes} ${antes}
${msgIgual} ${igual}
${msgApos} ${apos}`;
}

const gladiador = {
    nome: "Gladiador",
    ano: 2000
};
const livroDeEli = {
    nome: "O livro de Eli",
    ano: 2015
};

console.log(compararFilmes(gladiador, livroDeEli));
*/


/*
//3-

//a)
// let carrinho = [];

//b)
const banana = {
    nome : "Banana",
    disponibilidade: true
};

const uva = {
    nome : "Uva",
    disponibilidade: true
};

const abacaxi = {
    nome : "Abacaxi",
    disponibilidade: true
};

// const adicionarFruta = valor =>{
//     carrinho.push(valor);
// };

function controlarEstoque(valor){
    valor.disponibilidade = false;
    return valor;
}

//c)
// adicionarFruta(banana);
// adicionarFruta(uva);
// adicionarFruta(abacaxi);

//d)
//console.log(carrinho);
console.log(controlarEstoque(uva));
*/