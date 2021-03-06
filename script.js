let cardQuantity = prompt("Com quantas cartas deseja jogar? (Digite apenas números pares, de 4 a 14");

while (cardQuantity < 4 || cardQuantity > 14 || cardQuantity % 2 !== 0) {
    cardQuantity = prompt("Número digitado inválido. Por favor, digite novamente (apenas números pares, de 4 a 14");
}

cardSpread();

function cardSpread() {
    let backFaces = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];

    backFaces.sort(random);

    backFaces = backFaces.slice(0, cardQuantity / 2);
    backFaces = backFaces.concat(backFaces);

    backFaces.sort(random);

    for (let i = 0; i < backFaces.length; i++) {
        document.querySelector(".cards-container").innerHTML = document.querySelector(".cards-container").innerHTML +
            `<div class="card" id="${i}" data-identifier="card" onclick="flipCard(this); pairCheck(this)">
                <div class="front-face face">
                    <img  class="front-face" src="assets/front.png" data-identifier="front-face">
                </div>
                <div class="back-face face">
                    <img  src="assets/${backFaces[i]}.gif" data-identifier="back-face">
                </div>
            </div>`;
    }
}

async function pairCheck(clicked) {
    let selected = document.querySelector(".selected");

    if (selected !== null) {
        if (selected.children[1].children[0].isEqualNode(clicked.children[1].children[0]) && selected.id !== clicked.id) {
            selected.classList.add("paired");
            clicked.classList.add("paired");

            if (document.querySelectorAll(".paired").length == cardQuantity) {
                clearInterval(id);
                await sleep(400);

                alert(`Você ganhou em ${clicks} jogadas!\nTempo: ${zeroLeft(minutes, 2)}:${zeroLeft(seconds, 2)}`);

                await sleep(400);

                let restart = prompt("Deseja jogar novamente?");
                restart = restart.toLowerCase();

                if (restart == "sim") {
                    document.location.href = "";
                }
            }

            selected.classList.remove("selected");
        }
        else {
            let cardsArray = document.querySelectorAll(".card");

            for (let i = 0; i < cardsArray.length; i++) {
                cardsArray[i].classList.add("pointer-events-none");
            }

            if (selected.id !== clicked.id) {
                await sleep(1000);
                selected.children[0].classList.remove("flipped");
                selected.children[1].classList.remove("flipped");
                selected.classList.toggle("selected");

                clicked.children[0].classList.remove("flipped");
                clicked.children[1].classList.remove("flipped");
            }

            for (let i = 0; i < cardsArray.length; i++) {
                cardsArray[i].classList.remove("pointer-events-none");
            }
        }
    }
    else clicked.classList.toggle("selected");
}

function random() {
    return Math.random() - 0.5;
}

let clicks = 0;
function flipCard(clicked) {
    if (!clicked.classList.contains("paired")) {
        clicked.children[0].classList.add("flipped");
        clicked.children[1].classList.add("flipped");
        clicks++;
    }
}

let id = setInterval(clock, 1000);

let seconds = 0;
let minutes = 0;

function clock() {
    seconds++;

    if (seconds == 60) {
        minutes++;
        seconds = 0;
    }

    document.querySelector(".clock").innerHTML = `${zeroLeft(minutes, 2)}:${zeroLeft(seconds, 2)}`;
}

function zeroLeft(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
