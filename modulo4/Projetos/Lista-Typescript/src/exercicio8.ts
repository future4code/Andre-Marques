type Data = {
    dateOfBirth:string,
    idDateOfIssue:string
}

function renewDocument(dateOfBirth:string, idDateOfIssue:string){
    const data = new Date().getTime() 
    const newDate = new Date(dateOfBirth).getTime()
    const newDate1 = new Date(idDateOfIssue).getTime()
    const anos = (newDate - newDate) * 3.16887385E-11
    console.log(anos)
  
    
    // return data - newDate
}

// console.log(renewDocument("06/12/1988", "01/01/2017"))
renewDocument("06/12/1988", "01/01/2017")