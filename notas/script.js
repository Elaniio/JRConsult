const notas = [6.5, 7.2, 8.8, 9.5, 5.4, 10];

const conceitos = notas
  .filter(notas => notas >= 7)
  .map(notas => notas < 9 ? 'BOM' : 'EXCELENTE');

alert(conceitos);
