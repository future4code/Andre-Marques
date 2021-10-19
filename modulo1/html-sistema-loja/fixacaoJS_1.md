```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
 
  const salario = 2000.00;
  const comissao = (valorTotalVendas / 100) * 5;
  const carroSalario = qtdeCarrosVendidos * 100;
  
  return salario + carroSalario + comissao;
}
```