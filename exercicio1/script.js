let order;
let conta = 0;

while (conta <= 10) {
  order = prompt('Quer mais uma coxinha?');

  if (order === 's') {
    conta += 2.5;
    console.log(`Conta atual: ${conta}`);
  } else if (order === 'n') {
    console.log('Se quiser algo é só chamar :)');
  }
}

console.log(`Você comeu demais: Sua conta final é ${conta}`);
