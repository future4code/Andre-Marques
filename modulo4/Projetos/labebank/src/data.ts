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
    PAYMENTS = "Payments",
    TRANSFER ="Transfer to an account",
    RECEIVING = "Receiving from an account"
}

export let users:User[] = [
    {
        "name": "André",
        "cpf": "214.512.875-90",
        "dateOfBirth": "06/12/1988",
        "balance": 5000,
        "extract": []
    },
    {
        "name": "Lucas",
        "cpf": "214.512.875-91",
        "dateOfBirth": "06/12/1988",
        "balance": 5500,
        "extract": []
    },
    {
        "name": "Fabio",
        "cpf": "214.512.875-93",
        "dateOfBirth": "06/12/1988",
        "balance": 5500,
        "extract": []
    }
]

