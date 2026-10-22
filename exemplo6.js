let jogoAtivo = false;

let acertos = 0;
let tentativas = 0;

let bombas = [];

const quantidadeBombas = 8;
const blocosParaVencer = 4;

function iniciar() {

    jogoAtivo = true;
    acertos = 0;
    tentativas = 0;
    bombas = [];

    for (let i = 1; i <= 30; i++) {

        const bloco = document.getElementById("col" + i);

        if (bloco) {

            bloco.innerHTML = "";
            bloco.className = "col";
            bloco.dataset.jogada = "false";

            bloco.onclick = function () {
                atacar(bloco);
            };
        }
    }

    criarBombas();

    console.log("Bombas escondidas:", bombas);
}

function criarBombas() {

    while (bombas.length < quantidadeBombas) {

        const posicao =
            Math.floor(Math.random() * 30) + 1;

        if (!bombas.includes(posicao)) {
            bombas.push(posicao);
        }
    }
}

function atacar(bloco) {

    if (!jogoAtivo) {
        return;
    }

    if (bloco.dataset.jogada === "true") {
        return;
    }

    bloco.dataset.jogada = "true";

    tentativas++;

    const numero =
        parseInt(bloco.id.replace("col", ""));

    if (bombas.includes(numero)) {

        bloco.classList.add("bomba");
        bloco.innerHTML = "💣";

        revelarBombas();

        jogoAtivo = false;

        setTimeout(function () {

            alert(
                "💥 GAME OVER! 💥\n\n" +
                "Você acertou uma bomba!\n\n" +
                "Blocos fechados: " + acertos + "\n" +
                "Tentativas: " + tentativas
            );

        }, 100);

        return;
    }

    bloco.classList.add("fechado");
    bloco.innerHTML = "🧱";

    acertos++;

    if (acertos >= blocosParaVencer) {

        jogoAtivo = false;

        for (let i = 1; i <= 30; i++) {

            const outroBloco =
                document.getElementById("col" + i);

            if (outroBloco) {
                outroBloco.onclick = null;
            }
        }

        setTimeout(function () {

            alert(
                "🏆 VITÓRIA! 🏆\n\n" +
                "Você conseguiu fechar a torre!\n\n" +
                "Blocos fechados: " + acertos + "\n" +
                "Tentativas: " + tentativas
            );

        }, 100);
    }
}

function revelarBombas() {

    bombas.forEach(function (numero) {

        const bloco =
            document.getElementById("col" + numero);

        if (bloco && bloco.dataset.jogada !== "true") {

            bloco.classList.add("bomba");
            bloco.innerHTML = "💣";
        }
    });
}
