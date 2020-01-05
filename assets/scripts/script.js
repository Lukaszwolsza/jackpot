let currentUserBalance = document.getElementById("currentBalance");
let amountOfWin = document.getElementById("amountOfWins");
let betOnRed = document.getElementById("color-select-red");
let betOnBlack = document.getElementById("color-select-black");
let betOnGreen = document.getElementById("color-select-green");
let winnerColor = document.getElementById("color-winner");
const btnToSend = document.getElementById("apply-your-choice");
let colorWinner = document.getElementById("color-winner");
let secondTimer = document.getElementById("seconds");
let colorBox = document.getElementById("color-box");

let counter = 1;
let seconds = 1;
let timerToNewGame;

//======================RANDOM NUMBERS===========================//
function randomColorWinner(){
    let resultOfRandom = Math.floor((Math.random() * 100) + 1);
        if(resultOfRandom > 0 && resultOfRandom < 49){
            colorWinner.style.color = "red";
            colorWinner.textContent = "red";    
            document.getElementById("color-box"+counter).style.backgroundColor = "red";
        } else if (resultOfRandom > 50 && resultOfRandom <= 100){
            colorWinner.style.color = "black";
            colorWinner.textContent = "black"; 
            document.getElementById("color-box"+counter).style.backgroundColor = "black";
        } else if (resultOfRandom === 49){
            colorWinner.style.color = "green";
            colorWinner.textContent = "green"; 
            document.getElementById("color-box"+counter).style.backgroundColor = "green";
        }         
    counter++;
    if(counter === 18){
        for(let i = 1; i <= 19; i++){
            document.getElementById("color-box"+i).style.backgroundColor = "transparent";
        }
        counter = 1;    
    }
}
//==============================================================//

function timerToStartGame(){
    if(seconds > 0){
        seconds--;
        secondTimer.innerHTML = seconds;     
    }else {
        seconds = 31;
        randomColorWinner();
    }  
}
timerToNewGame = setInterval(timerToStartGame, 1000);

function getUserInputOnRed(){
    return parseInt(betOnRed.value);
}
function getUserInputOnBlack(){
    return parseInt(betOnBlack.value);
}
function getUserInputOnGreen(){
    return parseInt(betOnGreen.value);
}
function writeAndOuput(value){
    currentUserBalance.textContent = value;
}
function makeBet(){
    const userBet = getUserInputOnRed();
    console.log(userBet);
   
    currentUserBalance += userBet;
    console.log(currentUserBalance);
    const currentValueOfPocket = currentUserBalance;
    writeAndOuput(currentValueOfPocket);
}
btnToSend.addEventListener("click", makeBet);