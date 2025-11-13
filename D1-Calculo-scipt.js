const peso = parseFloat(prompt("Digite seu peso em kg:"));
const altura = parseFloat(prompt("Digite sua altura em metros:"));
const imc = peso / (altura * altura);

console.log("Seu IMC é: " + imc.toFixed(2));
alert("Seu IMC é: " + imc.toFixed(2));
