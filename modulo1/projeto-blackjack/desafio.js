/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let usuario = [];
let computador = [];

function compararArray(valor){
   for(i = 0; i > valor.length; i++){
      if(valor[i].texto === valor[i + 1].texto){
         while(valor[i].texto === valor[i + 1].texto){
            valor.splice(i + 1, 1);
            valor.push(comprarCarta());
         }
      }
   }
}

function compararDoisArrays(valor1, valor2){
   for(i = 0; i < valor1.length; i++){
      for(j = 0; j < valor2.length; j++){
         if(valor1[i].texto === valor2[j].texto){
            while(valor1[i].texto === valor2[j].texto){
               valor2.splice(j, 1);
               valor2.push(comprarCarta());
            }
         }
      }
   }
}

function compararAs(valor){
   if(valor[0].texto.includes("A") === valor[1].texto.includes("A")){
      while(valor[0].texto.includes("A") === valor[1].texto.includes("A")){
         valor.pop();
         valor.push(comprarCarta());
      }
   }
}


function mostrarCarta(valor){
   let msg = "";
   for(i = 0; i < valor.length; i++){;
      msg += valor[i].texto;
   }
   return msg;
}

function valorTotalUsuario(valor){
   let somaUsuario = 0;
   for(i = 0; i < valor.length; i++){
      Number(somaUsuario += valor[i].valor);
   }
   return somaUsuario;
}

function valorTotalComputador(valor){
   let somaComputador = 0;
   for(i = 0; i < valor.length; i++){
      Number(somaComputador += valor[i].valor);
   }
   return somaComputador;
}

let textoArrayUsuario = usuario.map((valor) => {
   return valor.texto;
})

let textoArrayComputador = computador.map((valor) => {
   return valor.texto;
})

function compararTamanhoArray (valor1, valor2){
   if(valor1.lenght < valor2.lenght){
      valor1.push(comprarCarta());
   }
}

function saberVencedor(valor1, valor2){
   if(valorTotalUsuario(usuario) > valorTotalComputador(computador) && valorTotalUsuario(usuario) <= 21){
      return "Você ganhou!";
   } else if(valorTotalUsuario(usuario) < valorTotalComputador(computador) && valorTotalComputador < 21 && valorTotalUsuario(usuario) <= 21){
      return "Você ganhou!"
   } else if(valorTotalUsuario(computador) > valorTotalComputador(usuario) && valorTotalUsuario(computador <= 21)){
      return "O computador ganhou!";
   } else if(valorTotalUsuario(computador) < valorTotalComputador(usuario && valorTotalComputador < 21 && valorTotalUsuario(computador)) <= 21){
      return "O computador ganhou";
   } else if(valorTotalUsuario(usuario) > 21 && valorTotalComputador(computador)){
      return "Nenhum dos dois ganhou!"
   }
}

let bemVindo = confirm(`Bem vindo(a) ao jogo Black.
Deseja jogar uma rodada?`);

if(bemVindo === true){
 
   usuario.push(comprarCarta());
   usuario.push(comprarCarta());
   computador.push(comprarCarta());
   computador.push(comprarCarta());

   compararArray(usuario);
   compararArray(computador);
   compararAs(usuario);
   compararAs(computador);
   compararDoisArrays(usuario, computador);
   
   console.log(usuario);
   console.log(computador);
   console.log(valorTotalUsuario(usuario));
   console.log(valorTotalComputador(computador));
   // console.log(saberVencedor());

   let pergunta = confirm("Suas cartas sao " + mostrarCarta(usuario) + ". A carta do computador é " + computador[0].texto + "." +
   "\n" +
   "Deseja comprar mais uma carta?");

   if(pergunta === true){
        
      usuario.push(comprarCarta());
      var novoTextoArrayUsuario = [...new Set(usuario)];
      compararTamanhoArray(novoTextoArrayUsuario, usuario);
      compararDoisArrays(novoTextoArrayUsuario, computador);

      if(valorTotalUsuario(novoTextoArrayUsuario) > 21){
         //computador.push(comprarCarta());
         novoTextoArrayComputador = [...new Set(computador)];
         // compararTamanhoArray(novoTextoArrayComputador, computador);
         // compararDoisArrays(novoTextoArrayComputador, novoTextoArrayUsuario);
         alert("Usuario - Cartas " + mostrarCarta(novoTextoArrayUsuario) +" - Pontuacao: " + valorTotalUsuario(novoTextoArrayUsuario) +"." +
         "\n" +
         "Computador - Cartas " + mostrarCarta(novoTextoArrayComputador) + " - Pontuacao: " + valorTotalComputador(novoTextoArrayComputador) + "." +
         "\n" +
         saberVencedor(novoTextoArrayUsuario, novoTextoArrayComputador));

         if(valorTotalComputador(novoTextoArrayComputador) > 21){
            alert("Usuario - Cartas " + mostrarCarta(novoTextoArrayUsuario) +" - Pontuacao: " + valorTotalUsuario(novoTextoArrayUsuario) +"." +
            "\n" +
            "Computador - Cartas " + mostrarCarta(novoTextoArrayComputador) + " - Pontuacao: " + valorTotalComputador(novoTextoArrayComputador) + "." +
            "\n" +
            saberVencedor(novoTextoArrayUsuario, novoTextoArrayComputador));
         }
      }
   } else if(pergunta === false){
      alert("Usuario - Cartas " + mostrarCarta(usuario) +" - Pontuacao: " + valorTotalUsuario(usuario) +"." +
      "\n" +
      "Computador - Cartas " + mostrarCarta(computador) + " - Pontuacao: " + valorTotalComputador(computador) + "." +
      "\n" +
      saberVencedor(usuario, computador));
   } 

   console.log(novoTextoArrayUsuario);
   console.log(novoTextoArrayComputador);
   console.log(valorTotalUsuario(novoTextoArrayUsuario));
   console.log(valorTotalComputador(novoTextoArrayComputador));
   console.log(saberVencedor(novoTextoArrayUsuario, novoTextoArrayComputador));
}