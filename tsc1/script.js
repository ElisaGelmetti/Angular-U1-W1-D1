"use strict";
const firstInput = document.getElementById("player-1");
const secondInput = document.getElementById("player-2");
const button = document.getElementById("button");
button.addEventListener("click", function (e) {
  e.preventDefault();
  //Genero il numero casuale
  let randomNumber = Math.floor(Math.random() * 99 + 1);
  console.log("Il numero casuale è " + randomNumber);
  //numeri interi
  let firstNumber = parseInt(firstInput.value);
  let secondNumber = parseInt(secondInput.value);
  //Controllo se qualcuno ha indovinato
  if (firstNumber === randomNumber)
    console.log("Il giocatore 1 ha indovinato il numero");
  else if (firstNumber === randomNumber)
    console.log("Il giocatore 1 ha indovinato il numero");
  else {
    firstNumber = randomNumber - firstNumber;
    secondNumber = randomNumber - secondNumber;
    //Se sono negativi, li rendo positivi
    if (firstNumber <= 0) firstNumber *= -1;
    if (secondNumber <= 0) secondNumber *= -1;
    //Controllo qual è più il più vicino
    if (firstNumber < secondNumber)
      console.log(
        "Il giocatore 1 ha vinto con una differenza di " + firstNumber
      );
    else
      console.log(
        "Il giocatore 2 ha vinto con una differenza di " + secondNumber
      );
  }
});
