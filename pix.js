let saldo = Number(prompt("Digite o saldo:"));
let valor = Number(prompt("Digite o valor do Pix:"));
let hora = Number(prompt("Digite a hora (0 a 23):"));

if (valor <= 0) {
    console.log("Valor inválido");
} else if (valor > saldo) {
    console.log("Saldo insuficiente");
} else if ((hora >= 20 || hora < 6) && valor > 1000) {
    console.log("Bloqueado: limite noturno");
} else {
    saldo = saldo - valor;
    console.log(`Pix enviado. Saldo: R$ ${saldo.toFixed(2)}`);
}