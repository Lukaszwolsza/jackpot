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

// function settingColorOfBox(color){
    
//     for(let i = counter; i <= 20; i++){
//         if(color === "red"){
//             document.getElementById("color-box"+i).style.backgroundColor = "red";
//         } else if ( color === "black"){
//             document.getElementById("color-box"+i).style.backgroundColor = "black";
//         } else if ( color === "green"){
//             document.getElementById("color-box"+i).style.backgroundColor = "green";
//         }
//     }
//     counter++;
// }

//======================RANDOM NUMBERS===========================//
function randomColorWinner(){
    let resultOfRandom = Math.floor((Math.random() * 100) + 1);
    if(counter === 0){
        counter = 0;
        for(let i = 1; i < 18; i++){
            document.getElementById("color-box"+i).style.backgroundColor = transparent;
        }
    } else {
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
        
    }  
    counter++; 
    
}
//==============================================================//

let seconds = 1;
let timerToNewGame;
function timerToStartGame(){
    if(seconds > 0){
        seconds--;
        secondTimer.innerHTML = seconds;     
    }else {
        seconds = 1;
        randomColorWinner();
    }  
}

timerToNewGame = setInterval(timerToStartGame, 1000);

let defaultAmount = 0;
let currentBalance = defaultAmount;

// function getCurrentAmount(){
//     return parseInt(currentUserBalance.value);
// }

function getUserInputOnRed(){
    return parseInt(betOnRed.value);
}
function getUserInputOnBlack(){
    return parseInt(betOnBlack.value);
}
function getUserInputOnRed(){
    return parseInt(betOnGreen.value);
}

function writeAndOuput(value){
    currentUserBalance.textContent = value;
}

function makeBet(){
    const userBet = getUserInputOnRed();
    const userBalance = currentBalance;
    currentBalance -= userBet;
    writeAndOuput(userBalance);
}

btnToSend.addEventListener("click", makeBet);
