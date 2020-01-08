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
const userLog = document.getElementById("userStatsMovement");

let userPocketValue = 5000; // user's wallet
currentUserBalance.textContent = userPocketValue;

let counter = 1;
let seconds = 30;
let timerToNewGame;

let arrayOfLogs = [];

//======================RANDOM NUMBERS===========================//
function randomColorWinner(){
    if(counter === 18){
        for(let i = 2; i < 18; i++){
            document.getElementById("color-box"+i).style.backgroundColor = "transparent";
        }
        counter = 1;
    }
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
function outputCurrentValue(value){
    currentUserBalance.textContent = value;
}
function showInLogsMove(value, color){  
    userLog.textContent = `User XYZ set ${value} coins on color ${color} !`;
    userLog.style.transition = "3s";
}
function makeBet(){
    const userBet = getUserInputOnRed();
    const currentUserPocket = userPocketValue;
    userPocketValue -= userBet;
    outputCurrentValue(userPocketValue);
    showInLogsMove(userBet, "red");
}
btnToSend.addEventListener("click", makeBet);
