const Nomes = ["ana","bruno", "Carla", "Diego", "Elisa", "fabio", "Miguel"]
const Medias = [7, 7, 8, 7, 9, 4, 7]

console.log(Nomes[3], "teve a media de :", Medias[3])
console.log(Nomes[3] + Medias[3])

for (let i = 0; i < Nomes.length; i = i + 1) {
   console.log("Voltas",  Nomes[i], i) 
}

//

for (let i = 0; i < Nomes.length; i = i + 1) {
    if (Medias[i] >= 7) {
        console.log(Nomes[i], "foi aprovado com média:", Medias[i]);
    } else {
        console.log(Nomes[i], "foi reprovado com média:", Medias[i]);
    }
}