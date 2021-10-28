```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
   let num = 0;
    
    for(i = 0; i < arrayDeNumeros.length; i++){
      if(numeroEscolhido === arrayDeNumeros[i]){
        num = num + 1;
      }
    }
    if(num < 1){
        return "Número não encontrado";
      }
    return `O número ${numeroEscolhido} aparece ${num}x`;   
}
```