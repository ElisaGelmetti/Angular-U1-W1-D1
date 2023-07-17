const firstInput :HTMLInputElement = document.getElementById("player-1") as HTMLInputElement
const secondInput :HTMLInputElement = document.getElementById("player-2") as HTMLInputElement

const button :HTMLButtonElement = document.getElementById("button") as HTMLButtonElement
button.addEventListener("click", function(e){
    e.preventDefault()
    //Genero il numero casuale
    let randomNumber :number = Math.floor(Math.random() * (100 -1) +1)
    console.log("Il numero casuale è " + randomNumber)

    //Mi prendo i numeri in versione intera
    let firstNumber :number = parseInt(firstInput.value)
    let secondNumber :number = parseInt(secondInput.value)
    
    //Controllo se qualcuno ha indovinato
    if(firstNumber === randomNumber) 
        console.log("Il giocatore 1 ha indovinato il numero")
    else if(firstNumber === randomNumber) 
        console.log("Il giocatore 1 ha indovinato il numero")
    else
    {
        //Mi prendo la differenza
        firstNumber = randomNumber - firstNumber
        secondNumber = randomNumber - secondNumber

        //Se sono negativi, li rendo positivi
        if(firstNumber <= 0) firstNumber  *= -1
        if(secondNumber <= 0) secondNumber *= -1

        //Controllo qual è più il più vicino
        if(firstNumber < secondNumber) 
            console.log("Il giocatore 1 ha vinto con una differenza di " + firstNumber)
        else 
            console.log("Il giocatore 2 ha vinto con una differenza di " + secondNumber)
    }
})
