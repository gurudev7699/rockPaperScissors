
console.log('hello Welcome to Rock Paper scissors');

const compVariable = ['rock', 'paper', 'scissors'];


function getComputerChoice() {
    const random = Math.floor(Math.random() * compVariable.length);
    const compChoice = compVariable[random];
    return compChoice;
}

let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;
const maxRounds = 5;



function playRound(humanChoice, computerChoice) {
    console.log('insire playround', 'human choice:', humanChoice, 'computer choice:', computerChoice)
    const choiceDisplay = document.querySelector("h1");
    const messageDisplay = document.querySelector('h4');
    choiceDisplay.textContent = "You choose: " + humanChoice + ". The Computer choice: " + computerChoice
    if (humanChoice === computerChoice) {
        messageDisplay.textContent = "Its a tie!"
        messageDisplay.setAttribute("style", "color: grey");
        return "Its a tie";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        messageDisplay.textContent = "You won"
        messageDisplay.setAttribute("style", "color: green");
        return "human Won"
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        messageDisplay.textContent = "You Lost"
        messageDisplay.setAttribute("style", "color: red");
        return "computer Won"
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        messageDisplay.textContent = "You Lost"
        messageDisplay.setAttribute("style", "color: red");
        return "computer Won"
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        messageDisplay.textContent = "You won"
        messageDisplay.setAttribute("style", "color: green");
        return "human Won"
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        messageDisplay.textContent = "You Lost"
        messageDisplay.setAttribute("style", "color: red");
        return "computer Won"
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        messageDisplay.textContent = "You won"
        messageDisplay.setAttribute("style", "color: green");
        return "human Won"
    }
  
     
}


let roundResult
const container = document.querySelector('.container');

const scoreDiv = document.createElement('div');
container.appendChild(scoreDiv);

const humanScoreDisplay = document.querySelector(".human_score");
const computerScoreDisplay = document.querySelector(".computer_score");

function updateScore (roundResult) {
    if (roundResult === 'human Won') {
        humanScore += 1;
    } else if (roundResult === 'computer Won') {
        computerScore += 1;
    }
    humanScoreDisplay.textContent = "Your score is: " + humanScore;
    computerScoreDisplay.textContent = "Computer score is " + computerScore;

 }

function handleButtonClick(humanChoice) {
    if (roundCounter < maxRounds) {
        roundCounter++;
        const roundResult = playRound(humanChoice, getComputerChoice());
        console.log(roundResult);
        updateScore(roundResult);
        if (roundCounter === maxRounds) {
            const finalMessage = document.createElement('h2');
            if (humanScore > computerScore) {
                finalMessage.textContent = "Game Over! You won the game!";
                finalMessage.style.color = "green";
            } else if (humanScore < computerScore) {
                finalMessage.textContent = "Game Over! The computer won the game!";
                finalMessage.style.color = "red";
            } else {
                finalMessage.textContent = "Game Over! It's a tie!";
                finalMessage.style.color = "grey";
            }
            document.querySelector('.container').appendChild(finalMessage);
        }
    }
}

document.getElementById('rock').addEventListener('click', () => handleButtonClick('rock'));
document.getElementById('paper').addEventListener('click', () => handleButtonClick('paper'));
document.getElementById('scissors').addEventListener('click', () => handleButtonClick('scissors'));









