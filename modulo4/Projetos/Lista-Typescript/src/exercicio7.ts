const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

type Estoque = {
    nome:string,
    quantidade:number,
    valorUnitario:number | string
}

const estoque:Estoque[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

function comparar(a:Estoque, b:Estoque):number{
    if(a.quantidade < b.quantidade){
        return -1
    } else if(a.quantidade > b.quantidade){
        return 1
    } else{
        return 0
    }
}

function retornarArray(array:Estoque[]):Estoque[]{
    array.sort(comparar)
    array.map((item) => {
        ajustaPreco(item.valorUnitario as number)
        return item
    })
    return array
}

console.log(retornarArray(estoque))
