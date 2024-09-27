const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Base do retângulo: ", (base) => {
    rl.question("Altura do retângulo: ", (altura) => {
        base = parseFloat(base);
        altura = parseFloat(altura);
       
        let area = base * altura;
        let perimetro = 2 * (base + altura); 
        let diagonal = Math.sqrt(base ** 2 + altura ** 2);
       
        console.log(`Área: ${area.toFixed(4)}`);
        console.log(`Perímetro: ${perimetro.toFixed(4)}`);
        console.log(`Diagonal: ${diagonal.toFixed(4)}`);
        rl.close();
    });
});
