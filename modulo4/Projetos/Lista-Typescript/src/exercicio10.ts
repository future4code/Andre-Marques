const cpf:string = "369.265.548-70"

function validarCpf(cpf:string):boolean{
    const newCpf:string[] = cpf.split(".").join().split("-").join().split(",").join("").split("")
    let total:number = 0
    let j = 0
    let dv1:number = 0
    let dv2:number = 0

    for(let i:number = 10; i > 1; i--){
        if(j < newCpf.length - 2){
           total = total + (i * Number(newCpf[j]))
        }
        j++
    }

    if(total % 11 !== 0){
        dv1 = dv1 + (total % 11) 
        dv1 = 11 - dv1
        if(dv1 <= 10){
            dv1 = 0
        }
    }else {
        dv1 = dv1 + (total % 11)
    }
    
    if(dv1 < 10 && dv1 === Number(newCpf[newCpf.length - 2])){
        total = 0
        for(let i:number = 11; i > 1; i--){
            if(j < newCpf.length - 1){
               total = total + (i * Number(newCpf[j]))
            }
            j++
        }
        if(total % 11 !== 0){
            dv2 = dv2 + (total % 11) 
            dv2 = 11 - dv2
        }else {
            dv2 = dv2 + (total % 11)
        }
    }
    
    if(dv1 === Number(newCpf[newCpf.length - 2]) && dv2 === Number(newCpf[newCpf.length - 1])){
        return true
    } else {
        return false
    }
}

console.log(validarCpf("384.343.070-57"))

