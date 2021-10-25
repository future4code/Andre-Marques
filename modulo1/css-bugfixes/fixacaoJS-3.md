```
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
    let media = "";
    let valorMedia = 0;
    ex *= 1;
    p1 *= 2;
    p2 *= 3;

    valorMedia = ((ex + p1 + p2) / 6).toFixed(2);
    
    if(valorMedia >= 9){
      media = "A";
    }
    if(valorMedia < 9 && valorMedia >= 7.5){
      media = "B";
    }
    if(valorMedia < 7.5 && valorMedia >= 6){
      media = "C";
    }
    if(valorMedia < 6){
      media = "D";
    }
    return media;
}
```