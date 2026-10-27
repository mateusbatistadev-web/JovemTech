let nome1 = "Ana"; let media1 = 8;

    if (media1 >= 6) {
         console.log(nome1 + ": Aprovado"); } 
    else { console.log(nome1 + ": Em recuperação"); }

let nome2 = "Bruno"; let media2 = 5;

if (media2 >= 6) {
     console.log(nome2 + ": Aprovado");
     } else
         { console.log(nome2 + ": Em recuperação"); }

let nome3 = "Carla"; let media3 = 6.5;

if (media3 >= 6) {
     console.log(nome3 + ": Aprovado");
     } else {
         console.log(nome3 + ": Em recuperação"); }

let nome4 = "Diego"; let media4 = 9;

if (media4 >= 6) {
     console.log(nome4 + ": Aprovado");
     } else {
         console.log(nome4 + ": Em recuperação"); }

let nome5 = "Eva"; let media5 = 4;

if (media5 >= 6) {
     console.log(nome5 + ": Aprovado");
     } else {
         console.log(nome5 + ": Em recuperação"); }

let nome6 = "Felipe"; let media6 = 7;

if (media6 >= 6) {
     console.log(nome6 + ": Aprovado");
     } else { console.log(nome6 + ": Em recuperação"); }

/////////////////////////////////////////////////////////////////////////////////////////



let alunos = [
    { nome: "Ana", media: 8 },
    { nome: "Bruno", media: 5 },
    { nome: "Carla", media: 6.5 },
    { nome: "Diego", media: 9 },
    { nome: "Eva", media: 4 },
    { nome: "Felipe", media: 7 }
];

alunos.forEach(aluno => {
    if (aluno.media >= 7) {
        console.log(aluno.nome + ": Aprovado");
    } else {
        console.log(aluno.nome + ": Reprovado");
    }
});