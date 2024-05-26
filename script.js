
console.log('hello Welcome to Rock Paper scissors');

const compVariable = ['rock', 'paper', 'scissors'];


function getComputerChoice() {
    const random = Math.floor(Math.random() * compVariable.length);
    const compChoice = compVariable[random];
    return compChoice;
}

function getHumanChoice() {
    const userChoice = prompt("Choose a value for Rock, paper, scissors");

    if (userChoice.toLocaleLowerCase() === "rock") {
        return "rock"
    } else if (userChoice.toLocaleLowerCase() === "paper") {
        return "paper"
    } else if (userChoice.toLocaleLowerCase() === "scissors") {
        return "scissors"
    } else {
        console.log("Please enter a valid option between Rock or Paper or Scissors")
        return getHumanChoice();
    }
}




let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Its a tie";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        return "human Won"
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        return "computer Won"
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        return "computer Won"
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return "human Won"
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        return "computer Won"
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return "human Won"
    }
}



for (let i = 1; i < 6; i++) {
    const userinput = getHumanChoice();
    const computerInput = getComputerChoice();
    console.log('Human choice:', userinput, 'Computer choice:', computerInput);
    let roundResult = playRound(userinput, computerInput);
    if (roundResult === 'human Won') {
        humanScore += 1;
    } else if (roundResult === 'computer Won') {
        computerScore += 1;
    }
    console.log(`At the end of round ${i}, the user score is ${humanScore}, the computer score is ${computerScore}, and the winner of round is ${roundResult}`);
}

function finalResult(human, computer) {
    if (human === computer) {
        return "Its a tie, Try again"
    } else if (human > computer) {
        return "You win"
    } else {
        return "computer win"
    }
}



console.log('The final result of 5 rounds is', finalResult(humanScore, computerScore));