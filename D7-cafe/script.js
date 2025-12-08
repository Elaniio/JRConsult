const pedidos = [
  { cliente: 'João', tipo: 'Cappuccino' },
  { cliente: 'Maria', tipo: 'Expresso' },
  { cliente: 'Lucas', tipo: 'Latte' },
  { cliente: 'Sofia', tipo: 'Expresso' },
];

const clientesExpresso = pedidos
  .filter(({ tipo }) => tipo === 'Expresso')   
  .map(({ cliente }) => cliente.toUpperCase()); 

const total = clientesExpresso.length;

alert(clientesExpresso, `Total: ${total}`);

