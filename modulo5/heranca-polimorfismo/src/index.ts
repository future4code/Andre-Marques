// Heranca

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
// console.log(fabio.getIntroduceYourself())

// 5- Feito.
// console.log(fabio.getIntroduceYourself())


//Polimorfismo

export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
	// como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}

// 1- a) Todas. Nao. Porque as interfaces sao publicas.

const client: Client = {
  name: "Goli",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  }
}

// console.log(client.name)
// console.log(client.registrationNumber)
// console.log(client.consumedEnergy)
// console.log(client.calculateBill())

// 2 
export abstract class Place {
  constructor(protected cep: string) {}

	public getCep(): string {
		return this.cep;
  }
}

// a) Nao se pode instanciar uma classe abstrata.
// const place = new Place()

// b) para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

// 3- a) para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.
//    b) Place é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces
//    c) Place é abstrata porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.

export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    // Refere-se ao número de moradores da casa

    cep: string
  ) {
    super(cep);
  }

  public getResidentsQuantity (){
    return this.residentsQuantity
  }
}

export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }

  public getFloorsQuantity (){
    return this.floorsQuantity
  }
}

export class Industry extends Place {
  constructor(
    protected machinesQuantity: number, 
    // Refere-se à quantidade de máquinas do local 
    
    cep: string
		) {
	    super(cep);
  }

  public getMachinesQuantity (){
    return this.machinesQuantity
  }
}

const residence:Residence = new Residence(4, "13080080")
const commerce:Commerce = new Commerce(4, "13080085")
const industry:Industry = new Industry(4, "13080089")

console.log(residence.getCep())
console.log(commerce.getCep())
console.log(industry.getCep())