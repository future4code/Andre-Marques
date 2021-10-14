// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  const resultado = Number(num1 + num2);

  return resultado;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite a altura do retângulo"));
  const largura = Number(prompt("Digite a largura do retângulo"));

  const area = altura * largura;

  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite o ano atual"));
  const anoDeNascimento = Number(prompt("Digiter seu ano de nascimento"));

  const idade = anoAtual - anoDeNascimento;

  console.log(idade);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = Number(peso / (altura*altura));
  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Digite o seu nome");
  const idade = Number(prompt("Digite sua idade"));
  const email = prompt("Digite o seu e-mail");

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email.trim()}.`);

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const coresFavoritas = [];
  
  coresFavoritas[0] = prompt("Digite sua primeira cor favorita");
  coresFavoritas[1] = prompt("Digite sua segunda cor favorita");
  coresFavoritas[2] = prompt("Digite sua terceira cor favorita");

  console.log(coresFavoritas);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const resultado = custo / valorIngresso;

  return resultado;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const tamanho = string1.length === string2.length;

  return tamanho;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroElemento = array[0];

  return primeiroElemento;
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoElemento = array[array.length - 1];

  return ultimoElemento;
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const troca = array[0];
  array[0] = array[array.length -1];
  array[array.length - 1] = troca;

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const comparar = string1.toLowerCase().includes(string2.toLowerCase());

  return comparar;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Informe o ano atual"));
  const anoNascimento = Number(prompt("Informe seu ano de nascimento"));
  const anoRg = Number(prompt("Informe o ano de emissão do seu RG"));

  const idade = anoAtual - anoNascimento;
  const idadeRg = anoAtual - anoRg;
  

  const resultado = (idade <= 20) && (idadeRg >= 5) || (idade > 20 && idade <= 50) && (idadeRg >= 10) || (idade > 50) && (idadeRg >= 15);

  console.log(resultado);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const n1 = ano % 400 === 0;
  const n2 = ano % 4 === 0;
  const n3 = ano % 100 === 0;
  
  const bissexto = n1 || (n2 && !n3) || (n1 && n2);

  return bissexto;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Você tem mais de 18 anos?");
  const grauEscolaridade = prompt("Você possui ensino médio completo?");
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?");

  const resposta = idade.includes("sim") && grauEscolaridade.includes("sim") && disponibilidade.includes("sim");

  console.log(resposta);

}