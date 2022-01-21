import { Type } from "typescript";

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nomeDoFilme:string,
    anoLancamento:number,
    generoFilme:GENERO,
    pontuacao:number | undefined | null
}

function dadosFilme(nome:string, anoLancamento:number, generoFilme:GENERO, pontuacao?:number):Filme{
    const dados:Filme = {
        nomeDoFilme: nome,
        anoLancamento: anoLancamento,
        generoFilme: generoFilme,
        pontuacao: pontuacao
    }
    return dados
}

console.log(dadosFilme("Velozes e Furiosos", 2010, GENERO.ACAO, 50))