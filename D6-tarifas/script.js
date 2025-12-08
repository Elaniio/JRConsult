function calcularTarifa(idade, tipoUsuario) {
  const tarifaBase = 2.50;

  if (idade < 6) {
    return 0;
  }

  if (tipoUsuario === "estudante") {
    return tarifaBase * 0.5;
  }

  if (idade >= 60) {
    return tarifaBase * 0.7;
  }

  return tarifaBase;
}

let idade = Number(prompt("Digite sua idade:"));
let tipoUsuario = prompt("Digite o tipo de usuário (regular/estudante):").toLowerCase();

alert(calcularTarifa(idade, tipoUsuario));
