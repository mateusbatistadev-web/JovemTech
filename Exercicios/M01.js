
const prompt = require("prompt-sync")();

let SelecaoAno = Number(prompt("Digite o ano: "));

if (SelecaoAno % 400 === 0 || (SelecaoAno % 4 === 0 && SelecaoAno % 100 !== 0)) {
    console.log("O ano é bissexto!");
} else {
    console.log("O ano não é bissexto!");
}
