let cardQuantity = prompt("Com quantas cartas deseja jogar? (Digite apenas números pares, de 4 a 14");

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

    for (let i = 0; i < backFaces.length; i++) {
        firstPair.push(backFaces[i]);
    }

    backFaces.sort(random);

    for (let i = 0; i < backFaces.length; i++) {
        lastPair.push(backFaces[i]);
    }

    for (let i = 0; i < backFaces.length; i++) {
        document.querySelector(".cards-container").innerHTML = document.querySelector(".cards-container").innerHTML + `<div class="card" onclick="flipCard(this); pairCheck()">
            <img class="front-face face" src="assets/front.png" alt="">
            <img class="back-face face" src="assets/${firstPair[i]}.gif" alt="">
        </div>`;
        document.querySelector(".cards-container").innerHTML = document.querySelector(".cards-container").innerHTML + `<div class="card" onclick="flipCard(this) onclick="flipCard(this); pairCheck()">
            <img class="front-face face" src="assets/front.png" alt="">
            <img class="back-face face" src="assets/${lastPair[i]}.gif" alt="">
        </div>`;
    }
}

function pairCheck() {
    alert("A");
}

function random() {
    return Math.random() - 0.5;
}

function flipCard(clicked) {
    clicked.children[0].classList.toggle("flipped");
    clicked.children[1].classList.toggle("flipped");
}