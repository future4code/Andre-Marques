// a)

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) Usaria o comando "tsc exercicio4.js". Sim, caso estivesse na pasta src faria "tsc && node ./caminho pra pasta que quero receber/exercicio4.js"

// c) Usando o comando tsc.