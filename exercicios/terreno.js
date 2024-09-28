const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a largura do terreno: ", (largura) => {
    rl.question("Digite o comprimento do terreno: ", (comprimento) => {
      rl.question("Digite o valor do metro quadrado: ", (valor) => {
          largura = parseFloat(largura);
          comprimento = parseFloat(comprimento);
          valor = parseFloat(valor);
       
          let area = largura * comprimento;
          let preco = comprimento * valor;
       
          console.log(`Área: ${area.toFixed(2)}`);
          console.log(`Perço: ${preco.toFixed(2)}`);
          rl.close();
      })
    });
});
