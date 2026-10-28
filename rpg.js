
const prompt = require("prompt-sync")();

// ===== CONTROLE DO JOGO =====
let local = "vilaDaMaganagem";
let jogando = true;
let fase = 1;

// ===== HEROI =====


console.log("  ==========================================       ")
console.log("       BEM VINDO A AVENTURA DE UM MAGANO           ")
console.log("  ==========================================       ")

let nome = prompt("Nome do heroi: ");
let vida = 100;
let pocoes = 2;
let inventario = [];

let aranhaDerrotada = false;
let guardiaoDerrotado = false;

// ===== DESENHOS =====
function desenharHeroi() {
  console.log("       O");
  console.log("      /|\\");
  console.log("      / \\");
}

function desenharAranha() {
  console.log("     ___  ");
  console.log("    ( | /");
  console.log("   ( o.o )");
  console.log("   / / | |");
}

function desenharGuardiao() {
  console.log("      .---.");
  console.log("     / x x \\");
  console.log("    |   ^   |");
  console.log("    | \\___/ |");
  console.log("     |_____|/");
  console.log("       / \\");
}

function desenharChefe() {
  console.log("   |    /\\_/\\\\");
  console.log("   _    ( O.O )");
  console.log("   |   /|  ^  |\\");
  console.log("   |  /_|_____|_\\");
  console.log("       /     \\");
  console.log("      /_______\\");
}

// ===== INTRODUCAO =====
console.log("\n================================");
console.log("     O FAROL DAS SOMBRAS");
console.log("================================");

desenharHeroi();

console.log("\n" + nome + ", a luz do farol se apagou.");
console.log("Monstros tomaram o caminho da costa.");
console.log("Sua missao e acender o farol!");

while (jogando && vida > 0) {

  console.log("\n--------------------------------");
  console.log("Heroi: " + nome);
  console.log("Vida: " + vida + "/100");
  console.log("Pocoes: " + pocoes);
  console.log("Fase: " + fase);
  console.log("--------------------------------");

  // ===== VILA =====
  if (local == "vilaDaMaganagem") {

    console.log("\n[VILA DOS MAGANOS]");
    console.log("   ~ ~ ~ ~ ~ ~ ~");
    console.log("      __");
    console.log("     /  \\");
    console.log("    /____\\");
    console.log("    | [] |");
    console.log("    |____|");

    console.log("\n1 - Ir para a floresta");
    console.log("2 - Ver inventario");
    console.log("3 - Sair do jogo");

    let escolha = prompt("> ");

    if (escolha == "1") {
      local = "floresta";

    } else if (escolha == "2") {
      console.log("Inventario: " + inventario);

    } else if (escolha == "3") {
      jogando = false;

    } else {
      console.log("Opcao invalida!");
    }

  // ===================================
  // FASE 1 - FLORESTA SOMBRIA
  // ===================================
  } else if (local == "floresta") {

    fase = 1;

    console.log("\n================================");
    console.log(" FASE 1: FLORESTA SOMBRIA");
    console.log("================================");

    console.log("    &          &   ")
    console.log("   &&&       &&&");
    console.log("  &&&&&     &&&&&");
    console.log("    ||       ||");
    console.log("    ||   .   ||");
    console.log("       /|\\");
    console.log("       / \\");
    console.log("================================");

    if (aranhaDerrotada == false) {

      console.log("\nUma aranha gigante bloqueia o caminho!");
      desenharAranha();

      let vidaAranha = 45;

      while (vidaAranha > 0 && vida > 0) {

        console.log("\nSua vida: " + vida);
        console.log("Vida da aranha: " + vidaAranha);

        console.log("1 - Atacar");
        console.log("2 - Usar pocao");

        let acao = prompt("> ");

        if (acao == "1") {

          let dano = Math.floor(Math.random() * 10) + 8;

          vidaAranha = vidaAranha - dano;

          console.log("\nVoce atacou e causou " + dano + " de dano!");

          if (vidaAranha > 0) {

            let ataqueAranha = Math.floor(Math.random() * 6) + 4;

            vida = vida - ataqueAranha;

            console.log("A aranha te atacou!");
            console.log("Voce perdeu " + ataqueAranha + " de vida.");
          }

        } else if (acao == "2") {

          if (pocoes > 0 && vida < 20) {

            vida = vida + 8;

            if (vida > 20) {
              vida = 20;
            }

            pocoes = pocoes - 1;

            console.log("Voce recuperou vida!");

          } else if (pocoes == 0) {

            console.log("Voce nao tem pocoes!");

          } else {

            console.log("Sua vida ja esta cheia!");
          }

        } else {

          console.log("Opcao invalida!");
        }
      }

      if (vida > 0) {

        console.log("\nVoce derrotou a aranha!");
        aranhaDerrotada = true;

        inventario.push("corda");

        console.log("Voce encontrou uma corda!");
        console.log("A corda foi adicionada ao inventario.");
      }
    }

    if (vida > 0 && aranhaDerrotada == true) {

      console.log("\nA floresta ficou silenciosa.");
      console.log("Uma ponte leva ate o farol.");

      console.log("\n1 - Seguir para a ponte");
      console.log("2 - Voltar para a vila");

      let escolha = prompt("> ");

      if (escolha == "1") {

        if (inventario.includes("corda")) {
          local = "ponte";
        }

      } else if (escolha == "2") {

        local = "vila";
      }
    }

  // ===================================
  // FASE 2 - PONTE AMALDICOADA
  // ===================================
  } else if (local == "ponte" ) {

    fase = 2;

    console.log("\n================================");
    console.log(" FASE 2: PONTE AMALDICOADA");
    console.log("================================");

    console.log("       |       |");
    console.log("  =====|=======|=====");
    console.log("  =====|=======|=====");
    console.log("  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~");
    console.log("        O");
    console.log("       /|\\");
    console.log("       / \\");
    console.log("================================");

    console.log("Voce atravessa usando a corda.");

    if (guardiaoDerrotado == false) {

      console.log("\nUm guardiao aparece na ponte!");
      desenharGuardiao();

      let vidaGuardiao = 50;

      while (vidaGuardiao > 0 && vida > 0) {

        console.log("\nSua vida: " + vida);
        console.log("Vida do guardiao: " + vidaGuardiao);

        console.log("1 - Atacar");
        console.log("2 - Usar pocao");

        let acao = prompt("> ");

        if (acao == "1") {

          let dano = Math.floor(Math.random() * 7) + 5;

          vidaGuardiao = vidaGuardiao - dano;

          console.log("Voce causou " + dano + " de dano!");

          if (vidaGuardiao > 0) {

            let ataqueGuardiao = Math.floor(Math.random() * 8) + 4;

            vida = vida - ataqueGuardiao;

            console.log("O guardiao atacou!");
            console.log("Voce perdeu " + ataqueGuardiao + " de vida.");
          }

        } else if (acao == "2") {

          if (pocoes > 0 && vida < 20) {

            vida = vida + 8;

            if (vida > 50) {
              vida = 50;
            }

            pocoes = pocoes - 1;

            console.log("Voce recuperou vida!");

          } else if (pocoes == 0) {

            console.log("Voce nao tem pocoes!");

          } else {

            console.log("Sua vida ja esta cheia!");
          }

        } else {

          console.log("Opcao invalida!");
        }
      }

      if (vida > 0) {

        console.log("\nO guardiao foi derrotado!");
        guardiaoDerrotado = true;

        inventario.push("amuleto");

        console.log("Voce recebeu um amuleto misterioso!");
      }
    }

    if (vida > 0 && guardiaoDerrotado == true) {

      console.log("\nO caminho para o farol esta livre!");

      console.log("1 - Ir para o farol");
      console.log("2 - Voltar para a floresta");

      let escolha = prompt("> ");

      if (escolha == "1") {
        local = "farol";

      } else if (escolha == "2") {
        local = "floresta";
      }
    }









  // ===================================
  // CHEFE FINAL - SENHOR DAS SOMBRAS
  // ===================================
  } else if (local == "farol" && inventario == "corda", "amuleto") {

    console.log("\n================================");
    console.log("       CHEFE FINAL");
    console.log("================================");

    console.log("A luz do farol esta quase apagada.");
    console.log("O SENHOR DAS SOMBRAS MAGANO surge!");
    desenharChefe();

    let vidaChefe = 30;

    while (vidaChefe > 0 && vida > 0) {

      console.log("\nSua vida: " + vida);
      console.log("Vida do chefe: " + vidaChefe);

      console.log("\n1 - Atacar");
      console.log("2 - Usar pocao");

      let acao = prompt("> ");

      if (acao == "1") {

        let dano = Math.floor(Math.random() * 5) + 5;

        // O amuleto aumenta o dano
        if (inventario.includes("amuleto")) {
          dano = dano + 3;
        }

        vidaChefe = vidaChefe - dano;

        console.log("\nVoce causou " + dano + " de dano!");

        if (vidaChefe > 0) {

          let ataqueChefe = Math.floor(Math.random() * 4) + 3;

          vida = vida - ataqueChefe;

          console.log("O chefe lancou uma sombra contra voce!");
          console.log("Voce perdeu " + ataqueChefe + " de vida.");
        }

      } else if (acao == "2") {

        if (pocoes > 0 && vida < 20) {

          vida = vida + 8;

          if (vida > 20) {
            vida = 20;
          }

          pocoes = pocoes - 1;

          console.log("Voce recuperou vida!");

        } else if (pocoes == 0) {

          console.log("Voce nao tem pocoes!");

        } else {

          console.log("Sua vida ja esta cheia!");
        }

      } else {

        console.log("Opcao invalida!");
      }
    }

    if (vida > 0) {

      console.log("\n================================");
      console.log("       VITORIA!");
      console.log("================================");
      
      
      console.log("           \_/        ")
      console.log("         \\ O /");
      console.log("           |");
      console.log("          / \\");

      console.log("\nO Senhor das Sombras foi derrotado!");
      console.log("Voce acendeu o farol da costa!");
      console.log("Os barcos conseguiram voltar para casa.");
      console.log("\nParabens, " + nome + "!");
    }

    jogando = false;
  }
}

// ===== FINAL DO JOGO =====
if (vida <= 0) {

  console.log("\n================================");
  console.log("           GAME OVER");
  console.log("================================");

  console.log("O heroi " + nome + " foi derrotado.");
}

console.log("\nFim da aventura!");
