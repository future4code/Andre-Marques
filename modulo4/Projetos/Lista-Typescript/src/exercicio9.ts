const palavra:string = ""

function anagramas(palavra:string):number{
    let soma:number = palavra.length
    for(let i = palavra.length; i > 1; i--){
        soma = soma * (i - 1)
    }
    return soma
}

console.log(anagramas("andre"))