  
    console.log('hello Welcome to Rock Paper scissors');

    const compVariable = ['rock', 'paper', 'scissors'];
  

    function getComputerChoice() {
        const random = Math.floor(Math.random() *compVariable.length);
        console.log(random)
        const compChoice = compVariable[random];
        return compChoice;
    }

function getHumanChoice() {
    const userChoice = prompt("Choose a value for Rock, paper, scissors");
    return userChoice.toLocaleLowerCase();
}

 
 

let humanScore= 0;
let computerScore=0;

function playRound (humanChoice, computerChoice) {
if (humanChoice === computerChoice) {
   return "Its a tie";
} else if (humanChoice=== "rock" && computerChoice === "scissors") {
    return "human Won"
}else if (humanChoice=== "rock" && computerChoice === "paper") {
    return "computer Won"
}else if (humanChoice=== "paper" && computerChoice === "scissors") {
    return "computer Won"
}else if (humanChoice=== "paper" && computerChoice === "rock") {
    return "human Won"
}else if (humanChoice=== "scissors" && computerChoice === "rock") {
    return "computer Won"
}else if (humanChoice=== "scissors" && computerChoice === "paper") {
    return "human Won"
}
}



for (let i =0 ; i<5 ; i++ ) {
    const userinput = getHumanChoice();
    const computerInput = getComputerChoice(); 
    let roundResult = playRound(userinput, computerInput)
    if (roundResult=== 'human Won') {
        humanScore += 1; 
    } else if (roundResult === 'computer Won') {
        computerScore+=1;
    }
}

function finalResult (human, computer) {
    if(human===computer) {
        return "Its a tie, Try again"
    }else if (human > computer) {
        return "You win"
    }else {
        return "computer win"
    }
}



console.log('The final result of 5 rounds is', finalResult(humanScore, computerScore) )