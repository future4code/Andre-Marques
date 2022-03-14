// 1- a) O construtor é a primeira coisa a acontecer quando uma classe é chamada. Se chamar-mos ou nao ele vai rodar.
//    b) Uma vez.
//    c) Através de getters e setters.

// type Transaction = {
//     description: string,
//     value: number,
//     date: string
//   }

// class UserAccount {
//     private cpf: string;
//     private name: string;
//     private age: number;
//     private balance: number = 0;
//     private transactions: Transaction[] = [];
  
//     constructor(
//        cpf: string,
//        name: string,
//        age: number,
//     ) {
//        console.log("Chamando o construtor da classe UserAccount")
//        this.cpf = cpf;
//        this.name = name;
//        this.age = age;
//     }
  
//   }

//   const user:UserAccount = new UserAccount("258.789.25-80", "André", 33)
//   console.log(user)

// 2-

class Transaction{
    private description: string;
    private value: number;
    private date: string;

    constructor(description:string, value:number, date:string){
        this.description = description
        this.value = value
        this.date = date
        }

    public getDescription():string{
        return this.description
    }

    public getValue():number{
        return this.value
    }

    public getDate():string{
        return this.date
    }
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }

  // 3- 

class Bank{
    private accounts:UserAccount[];

    constructor(accounts:UserAccount[]){
        this.accounts = accounts
    }

    public getAccounts():UserAccount[]{
        return this.accounts
    }
}
