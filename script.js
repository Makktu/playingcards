"use strict";

let theCards = [
    "2C",
    "2D",
    "2H",
    "2S",
    "3C",
    "3D",
    "3H",
    "3S",
    "4C",
    "4D",
    "4H",
    "4S",
    "5C",
    "5D",
    "5H",
    "5S",
    "6C",
    "6D",
    "6H",
    "6S",
    "7C",
    "7D",
    "7H",
    "7S",
    "8C",
    "8D",
    "8H",
    "8S",
    "9C",
    "9D",
    "9H",
    "9S",
    "10C",
    "10D",
    "10H",
    "10S",
    "JC",
    "JD",
    "JH",
    "JS",
    "QC",
    "QD",
    "QH",
    "QS",
    "KC",
    "KD",
    "KH",
    "KS",
    "AC",
    "AD",
    "AH",
    "AS",
];

let pickedCards = [];

const cardShow = document.querySelector(".card");

cardShow.addEventListener("click", () => {
    // pick random number from 0 to 51
    if (pickedCards.length < 52) {
        dealCard();
    } else {
        console.log("all cards picked");
    }
    // if number already picked, pick again
    // add number to picked numbers
    // display new card
});

const randomNumber = function (max) {
    return Math.floor(Math.random() * max);
};

const dealCard = function () {
    if (pickedCards.length >= 51) {
        console.log("all picked");
        return;
    }
    let newCard = randomNumber(51);
    pickedCards.forEach((card) => {
        if (card == newCard) dealCard();
    });
    pickedCards.push(newCard);

    newCard = theCards[newCard];
    console.log(newCard);
    cardShow.innerHTML = `<img class="card" src = "cards/${newCard}.jpg">`;
};
