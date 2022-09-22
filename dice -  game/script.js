"use strict";

const Players1 = document.querySelector(".player--0");
const Players2 = document.querySelector(".player--1");
const ResetBtn = document.querySelector(".btn--new");
const DiceBtn = document.querySelector(".btn--roll");
const HoldBtn = document.querySelector(".btn--hold");
let player1 = document.getElementById("name--0").textContent;
let player1Curent = document.getElementById("current--0").textContent;
let player1Score = document.getElementById("score--0").textContent;
let player2 = document.getElementById("name--1").textContent;
let player2Curent = document.getElementById("current--1").textContent;
let player2Score = document.getElementById("score--1").textContent;
const diceRollImg = document.querySelector(".dice");

// Diceroller function
const diceroller = (number) => {
  switch (number) {
    case 1:
      diceRollImg.src = "./dice-1.png";
      break;

    case 2:
      diceRollImg.src = "./dice-2.png";
      break;

    case 3:
      diceRollImg.src = "./dice-3.png";
      break;

    case 4:
      diceRollImg.src = "./dice-4.png";
      break;

    case 5:
      diceRollImg.src = "./dice-5.png";
      break;

    case 6:
      diceRollImg.src = "./dice-6.png";
      break;

    default:
      break;
  }
};

ResetBtn.addEventListener("click", () => {
  location.reload();
});

// Check whoes turn it is
let curr1 = 0;
let curr2 = 0;

let total1 = 0;
let total2 = 0;

DiceBtn.addEventListener("click", () => {
  const randomNumber = Math.trunc(Math.random() * 6) + 1;
  diceroller(randomNumber);
  if (Players1.classList.contains("player--active")) {
    if (randomNumber !== 1) {
      curr1 += randomNumber;
      document.getElementById("current--0").textContent = curr1;
    } else {
      Players1.classList.remove("player--active");
      Players2.classList.add("player--active");
      curr1 = 0;
      document.getElementById("current--0").textContent = curr1;
    }
  } else {
    if (randomNumber !== 1) {
      curr2 += randomNumber;
      document.getElementById("current--1").textContent = curr2;
    } else {
      Players1.classList.add("player--active");
      Players2.classList.remove("player--active");
      curr2 = 0;
      document.getElementById("current--1").textContent = curr2;
    }
  }
});

HoldBtn.addEventListener("click", () => {
  if(curr1 > 1 || curr2 > 1){
    if (Players1.classList.contains("player--active")) {
      total1 = total1 + curr1;
      console.log(total1);
      if(total1 >= 100){
        document.querySelector('.popup_winner').classList.remove('hiddenpopup');
        document.querySelector('.winnerName').textContent = "Players1"
        document.getElementById('score--0').textContent = 100
        document.getElementById('score--1').textContent = 0
        setTimeout(() => {
          location.reload();
        }, 5000);
      }else{
        document.getElementById('score--0').textContent = total1
        curr1 = 0;
        document.getElementById("current--0").textContent = curr1;
        Players1.classList.remove("player--active");
        Players2.classList.add("player--active");
      }
    } else {
      Players1.classList.add("player--active");
      Players2.classList.remove("player--active");
      total2 = total2 + curr2;
      if(total2 >= 100){
        document.querySelector('.popup_winner').classList.remove('hiddenpopup');
        document.querySelector('.winnerName').textContent = "Players2"
        document.getElementById('score--1').textContent = 100
        console.log('winner is player 2');
        document.getElementById('score--0').textContent = 0
        setTimeout(() => {
          location.reload();
        }, 5000);
      }else{
        console.log(total2);
        document.getElementById('score--1').textContent = total2
        curr2 = 0;
        document.getElementById("current--1").textContent = curr2;
      }
    }
  }
});
