const pessoas = [
  { nome: "Ana", idade: 17 },
  { nome: "Bruno", idade: 22 },
  { nome: "Carla", idade: 15 },
  { nome: "Diego", idade: 19 },
]

const maioresDeIdade = pessoas.filter(function(pessoa) {
  return pessoa.idade >= 18
})

const nomesMaiusculos = maioresDeIdade.map(function(pessoa) {
  return pessoa.nome.toUpperCase()
})

console.log(nomesMaiusculos)
alert("Maiores de idade: " + nomesMaiusculos.join(", "))
