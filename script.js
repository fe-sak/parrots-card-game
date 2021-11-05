let cardQuantity = 14; /* prompt("Com quantas cartas deseja jogar? (Digite apenas números pares, de 4 a 14"); */

while (cardQuantity < 4 || cardQuantity > 14 || cardQuantity % 2 !== 0) {
    cardQuantity = prompt("Número digitado inválido. Por favor, digite novamente (apenas números pares, de 4 a 14");
}

cardSpread();


function cardSpread() {
    let backFaces = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];

    backFaces.sort(random);

    backFaces.length = cardQuantity / 2;

    let firstPair = [];
    let lastPair = [];

    firstPair = [...backFaces];

    backFaces.sort(random);

    lastPair = [...backFaces];

    for (let i = 0; i < backFaces.length; i++) {
        document.querySelector(".cards-container").innerHTML = document.querySelector(".cards-container").innerHTML +
            `<div class="card" id="a${i}" onclick="flipCard(this); pairCheck(this)">
                <div class="front-face face">
                    <img  class="front-face" src="assets/front.png" alt="">
                </div>
                <div class="back-face face">
                    <img  src="assets/${firstPair[i]}.gif" alt="">
                </div>
            </div>`;
        document.querySelector(".cards-container").innerHTML = document.querySelector(".cards-container").innerHTML +
            `<div class="card" id="b${i}" onclick="flipCard(this); pairCheck(this)">
                <div class="front-face face">
                    <img class="front-face" src="assets/front.png" alt="">
                </div>
                <div class="back-face face">
                    <img src="assets/${lastPair[i]}.gif" alt="">
                </div>
             </div>`;
    }
}

async function pairCheck(clicked) {
    let selected = document.querySelector(".selected");

    if (selected !== null) { //segunda carta ->
        if (selected.children[1].children[0].isEqualNode(clicked.children[1].children[0]) && selected.id !== clicked.id) {
            selected.classList.add("paired");
            clicked.classList.add("paired");

            selected.classList.remove("selected");
        }
        else {
            let cardsArray = document.querySelectorAll(".card");

            for (let i = 0; i < cardsArray.length; i++) {
                cardsArray[i].classList.add("pointer-events-none");
            }

            await sleep(1000);

            selected.children[0].classList.remove("flipped");
            selected.children[1].classList.remove("flipped");
            selected.classList.toggle("selected");

            clicked.children[0].classList.remove("flipped");
            clicked.children[1].classList.remove("flipped");

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

function flipCard(clicked) {
    if (!clicked.classList.contains("paired")) {
        clicked.children[0].classList.toggle("flipped");
        clicked.children[1].classList.toggle("flipped");
    }
}

function timeOut() {
    console.log("delay");
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
