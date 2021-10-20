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

 //1 - Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!".
function boasVindas (){
   console.log("Boas vindas ao jogo de Blackjack!");
}
boasVindas();

//2 - Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?".
let perguntaUsuario = confirm("Deseja iniciar uma nova rodada?");

//3 - Se o usuário responder cancel, imprime uma mensagem no console "O jogo acabou".

//4 - Se o usuário responder Ok, o programa deve iniciar uma nova rodada.  

//Começando uma rodada 

// A rodada consiste em sortear 2 cartas para cada jogador,
// definir a pontuação de cada jogador e informar o vencedor (usuário ou computador),
// ou empate, caso as pontuações sejam iguais.

//5 - Nós preparamos um método que permite sortear uma carta.
// Ele já está pronto e você só precisa invocá-lo.
// Cada carta sorteada é um objeto com duas propriedades:
// um texto que representa o que é escrito na carta;
// e um valor que mostra a pontuação da carta. 

// 6 - O programa deve mostrar, no console,
// as cartas e pontuação de cada jogador no formato mostrado abaixo

//7 - Além disso, deve indicar o vencedor ou um empate



while(perguntaUsuario === true){
   
   const compararNumero = (n) => {
      if(n[0].texto === n[1].texto){
         n.pop();
         n.push(comprarCarta());
      }
   }
   const compararNumero1 = (n, m) => {
      if(n[0] || n[1] === m[0]){
         m.splice(0, 1);
         m.push(comprarCarta());   
      } else if(n[0] || n[1] === m[1]){
         m.splice(1, 1);
         m.push(comprarCarta);  
      }
   }

   if(perguntaUsuario === false){
      console.log("O jogo acabou.");
   } else{
      let usuario = [];
      let computador = [];
      
      for(i = 0;i < 2; i++){
         usuario.push(comprarCarta());
         computador.push(comprarCarta());
      }
      
      compararNumero(usuario); 
      compararNumero(computador);
      compararNumero1(usuario, computador);

      let usuarioTotal = usuario[0].valor + usuario[1].valor;
      let computadorTotal = computador[0].valor + computador[1].valor;

      console.log(`Usuario - cartas : ${usuario[0].texto} ${usuario[1].texto} - pontuacao ${usuarioTotal}`);
      console.log(`Computador - cartas : ${computador[0].texto} ${computador[1].texto} - pontuacao ${computadorTotal}`);

      if((usuarioTotal === computadorTotal) && (usuarioTotal && computadorTotal) <= 21){
         console.log("Empate!");
      } else if((usuarioTotal > computadorTotal) && (usuarioTotal <= 21)){
         console.log("O usuário ganhou!");
      } else if((usuarioTotal < computadorTotal) && (computadorTotal <= 21)){
         console.log("O computador ganhou");
      } else{
         console.log("Ultrapassaram 21 pontos");
      }
   }
   
   perguntaUsuario = confirm("Deseja iniciar uma nova rodada?");
   console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - ");
   if(perguntaUsuario === false){
      console.log("O jogo acabou.");
   }
}
