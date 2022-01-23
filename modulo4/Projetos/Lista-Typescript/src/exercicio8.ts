function renewDocument(dateOfBirth:string, idDateOfIssue:string):boolean{
    const arrayDateOfBirth:string[] = dateOfBirth.split("/") 
    const birth:Date = new Date(Number(arrayDateOfBirth[2]), Number(arrayDateOfBirth[1])-1, Number(arrayDateOfBirth[0]))

    const arrayIdDateOfIssue:string[] = idDateOfIssue.split("/")
    const issue:Date = new Date(Number(arrayIdDateOfIssue[2]), Number(arrayIdDateOfIssue[1])-1, Number(arrayIdDateOfIssue[0]))

    const currentyDate:Date = new Date()

    const age:number = Math.floor((currentyDate.valueOf() - birth.valueOf()) / 1000 / 60 / 60 / 24 / 365)
    const issueTime:number = Math.floor((currentyDate.valueOf() - issue.valueOf()) / 1000 / 60 / 60 / 24 / 365)
    
    console.log('Idade: ', age )
    console.log('Tempo de emissao: ', issueTime )

    if(age <= 20 && issueTime >= 5) {return true}
    if(age <= 50 && issueTime >= 15) {return true}
    if(age > 50 && issueTime >= 15) {return true}
    return false
}


console.log(renewDocument("06/12/1988", "01/01/2017"))