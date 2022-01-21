// pre-historia de 100.000AC à 4000AC
// idade antiga de 4000AC à 476DC
//idade media de 476DC à 1453DC
// idade moderna de 1453DC à 1789DC
// idade contemporanea de 1789DC ate hj

enum Sigla {
    AC = "AC",
    DC = "DC"
}

function idadeHistorica(ano:number, sigla:Sigla){
    if(ano < 100.000 || ano > 4000 && sigla === Sigla.AC){
        return "Pré-história"
    } else if(ano <= 4000 && sigla === Sigla.AC || ano < 476 && sigla === Sigla.DC){
        return "Idade antiga"
    } else if(ano >= 476 || ano < 1453 && sigla === Sigla.DC){
        return "Idade média"
    } else if(ano >= 1453 || ano < 1789 && sigla === Sigla.DC){
        return "Idade moderna"
    } else if(ano >= 1789 && sigla === Sigla.DC){
        return "Idade contemporanêa"
    }
}

console.log(idadeHistorica(256, Sigla.DC))