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
const btnToReset = document.getElementById("reset-logs");

let userPocketValue = 5000; // user's wallet
currentUserBalance.textContent = userPocketValue;

let BET_ON_COLOR_RED;
let BET_ON_COLOR_BLACK;
let BET_ON_COLOR_GREEN;

let counter = 1;
let seconds = 30;
let timerToNewGame;
let colorOfBetOutput;

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
    colorOfBetOutput = "red";
    return parseInt(betOnRed.value);
}
function getUserInputOnBlack(){
    colorOfBetOutput = "black";
    return parseInt(betOnBlack.value);
}
function getUserInputOnGreen(){
    colorOfBetOutput = "green";
    return parseInt(betOnGreen.value);
}

function colorOfBet(){
    if(betOnBlack.value != 0){
        return getUserInputOnBlack();
    } else if (betOnRed.value != 0){
        return getUserInputOnRed();
    } else if (betOnGreen.value != 0){
        return getUserInputOnGreen();
    }
}
function outputCurrentValue(value){
    currentUserBalance.textContent = value;
}
function showInLogsMove(value){  
    const outputInfoAboutBet = `User XYZ set ${value} coins on color ${colorOfBetOutput} !`;
    const addDiv = document.createElement("h5");
    addDiv.setAttribute("id", "dynamic-log-info");
    const addPositionInDiv = document.createTextNode(outputInfoAboutBet);
    addDiv.appendChild(addPositionInDiv);
    userLog.appendChild(addDiv);
}
function makeBet(){
    const userBet = colorOfBet();
    userPocketValue -= userBet;
    outputCurrentValue(userPocketValue);
    showInLogsMove(userBet, "red");  
}
function clearLogsBox(){
    
}


btnToSend.addEventListener("click", makeBet);
btnToReset.addEventListener("click", )
if(btnToSend){
    betOnGreen.value = "";
    betOnRed.value = "";
    betOnBlack.value = "";
}