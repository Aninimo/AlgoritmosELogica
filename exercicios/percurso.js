const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Distância percorrida: ", (distancia) => {
    rl.question("Conbustível gasto: ", (combustivel) => {
        distancia = parseFloat(distancia);
        combustivel = parseFloat(combustivel);
        
        let comsumo = distancia / combustivel
       
        console.log(`Consumo médio: ${comsumo.toFixed(3)}`);
        rl.close();
    });
});
