class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string,
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      public getIntroduceYourself(): string {
        return `Olá ${this.getName()}. Bom dia!`
    }
  }

// 1- a) Nao.
//    b) Apenas uma.

// const andre = new User(
//     "001",
//     "andre@gmail.com",
//     "André",
//     "123456"
// )

// console.log(andre)

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

  // 2- a) Apenas uma.
  //    b) Duas vezes.
const fabio = new Customer(
    "002",
    "fabio@gmail.com",
    "Fabio",
    "987654",
    "367 748 148 777"
)

//   console.log(fabio)

// 3- a) Nao, porque é um item privado e nao protected.
// console.log(fabio.id)
// console.log(fabio.email)
// console.log(fabio.name)
// console.log(fabio.password)
// console.log(fabio.creditCard)
// console.log(fabio.purchaseTotal)

// 4- 
console.log(fabio.getIntroduceYourself())