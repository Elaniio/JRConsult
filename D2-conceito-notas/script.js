const notas = [6.5, 7.2, 8.8, 9.5, 5.4, 10]

const notasBoas = notas.filter(function (nota) {
  return nota >= 7
})

const conceitos = notasBoas.map(function (nota) {
  if (nota >= 7 && nota < 9) {
    return "BOM"
  } else {
    return "EXCELENTE"
  }
})
console.log(conceitos)
alert("Conceitos: " + conceitos.join(", "))
