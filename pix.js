
const prompt = require("prompt-sync")();

let valor = Number(prompt("Digite o valor do Pix: "));

while (valor <= 0 || isNaN(valor)) {
    console.log("Valor inválido, magano!!! Escreva novamente.");
    valor = Number(prompt("Digite o valor do Pix: "));
}

console.log("Pix de R$", valor.toFixed(2));
console.log("Sucesso!");
