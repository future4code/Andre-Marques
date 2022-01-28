function nameAndDate(name:string, dateBirth:string):string{
    const newDate:string[] = dateBirth.split("/")
  
    return `Olá me chamo ${name}, nasci no dia ${newDate[0]} do mês ${newDate[1]} do ano de ${newDate[2]}`
}

console.log(nameAndDate("André", "06/12/1988"))
