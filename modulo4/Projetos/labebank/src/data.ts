type Transaction = {
    amount:number,
    date:string,
    description:Description
}


type User = {
    name:string,
    cpf:string,
    dateOfBirth:string,
    balance:number,
    extract: Transaction[],
}

export enum Description {
    DEPOSIT = "Deposit in cash",
    OTHERS = "Payments"
}

export let users:User[] = []