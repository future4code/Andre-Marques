// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    function comparar(n1, n2){
        return n1 - n2;
    }
    for(i = 0; i < array.length; i++){
        comparar();
    }
    return array.sort(comparar);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let retornarPares = array.filter((valor) => {
        if(valor % 2 === 0){
            return valor;
        }
    })
    return retornarPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let pares = array.filter((valor) => {
        return valor % 2 === 0;
    })
    let elevarADois = pares.map((valor) => {
        return valor * valor;
    })
    return elevarADois;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] > maior){
            maior = array[i];
        }
    }
    return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let obj = {};

    if(num1 > num2){
        obj.maiorNumero = num1;
        if(num1 % num2 === 0){
            obj.maiorDivisivelPorMenor = true; 
       } else{
           obj.maiorDivisivelPorMenor = false;
       }
    } else if(num1 < num2){
        obj.maiorNumero = num2;
        if(num2 % num1 === 0){
            obj.maiorDivisivelPorMenor =  true;
        }else{
            obj.maiorDivisivelPorMenor = false;
        }
    }else if(num1 === num2){
        obj.maiorNumero = num1;
        obj.maiorDivisivelPorMenor = true;
    }
    if(num1 - num2 < 0){
        obj.diferenca = (num1 - num2) * (-1);
    } else{
        obj.diferenca = num1 - num2;
    }

    return obj;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arrayPar = [];
    for(i = 0; i < n * 2; i++){
        if(i % 2 === 0){
            arrayPar.push(i);
        }
   }
   return arrayPar;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let triangulo = "";

    if((ladoA === ladoB) && (ladoA === ladoC)){
        triangulo = "Equilátero";
    } else if((ladoA === ladoB) && (ladoA !== ladoC) || (ladoA === ladoC) && (ladoA !== ladoB) || (ladoB !== ladoA) && (ladoB === ladoC)){
        triangulo = "Isósceles";
    } else if((ladoA !== ladoB) && (ladoA !== ladoC) && (ladoB !== ladoC)){
        triangulo = "Escaleno";
    }
    return triangulo;
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    function comparar(n1, n2){
        return n1 - n2;
    }
    for(i = 0; i < array.length; i++){
        comparar();
    }
    array.sort(comparar);

    return [array[array.length - 2], array[1]];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

   return "Venha assistir ao filme " + filme.nome + ", de " + filme.ano + ", dirigido por " + filme.diretor + " e estrelado por " + filme.atores.join(", ") + ".";
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let anonimo = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return anonimo;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let pessoasPermitidas = pessoas.filter((pessoa) => {
       
       return pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5;
   })
   return pessoasPermitidas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoPermitidas = pessoas.filter((pessoa) => {

        return pessoa.idade <= 14 || pessoa.idade > 60 || pessoa.altura < 1.5;   
    })
    return pessoasNaoPermitidas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    return contas.map((n) => {
        let sum = n.compras.reduce((a, b) => a + b, 0);
        let total = n.saldoTotal;
        return {...n, saldoTotal: total - sum, compras: []}
    })
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

    function comparar(n1, n2){
        if(n1.nome < n2.nome){
            return -1;
        }
        if(n1.nome > n2.nome){
            return 1;
        }
        return 0;
    }
    
    return consultas.sort(comparar);
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

    return consultas.sort((n1, n2) =>{
        return new Date(n1.dataDaConsulta.split("/").reverse()).getTime() 
        - new Date(n2.dataDaConsulta.split("/").reverse()).getTime();
    });
}