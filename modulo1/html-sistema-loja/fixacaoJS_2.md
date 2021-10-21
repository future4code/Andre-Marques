```
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let valotTotal = 0;
  
  if(quantidade >= 12){
    valorTotal = 1.00 * quantidade;
  } else if(quantidade < 12){
    valorTotal = 1.30 * quantidade;
  }
  return valorTotal;
}
```