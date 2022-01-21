function dnaToRna ():string{
    const dna:string = "ATTGCTGCGCATTAACGACGCGTA"
    const rna:string[]  = dna.split('')

    const newRna = rna.map((item) => {
        if(item === 'A'){
            item = 'U'
        } else if(item === 'T'){
            item = 'A'
        } else if(item === 'C'){
            item = 'G'
        }else if(item === 'G'){
            item = 'C'
        }
        return item
    })
    return newRna.join('')
}

console.log(dnaToRna())