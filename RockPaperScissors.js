// Get computerChoice
function getComputerChoice () {
    let computerChoice = Math.random();
    if (computerChoice <= 1/3) {
        return computerChoice = 'rock';
    } else {
        if (computerChoice <= 2/3) {
            return computerChoice = 'paper';
        } else {
            return computerChoice = 'scissors';
        }
    } 
}

// Get humanChoice
function getHumanChoice () {
    let humanChoice = prompt('Enter Rock, Paper or Scissors:', '');

    return humanChoice;
}

// Human Score and Computer Score declaration and initialization
let humanScore = 0;
let computerScore = 0;


//Creating a function to play a round of the game
function playRound(humanChoice,computerChoice) {

//  compare and give log the result on the console if any of the condition is met
if (humanChoice === null) {
    console.log('You Cancelled the game')
}else if ((humanChoice.toLowerCase() === 'rock') && (computerChoice === 'rock')) {
    console.log('It is a tie! You both pick Rock');
} else if ((humanChoice.toLowerCase() === 'rock') && (computerChoice === 'paper' )){
    console.log('You lose paper beats rock');
} else if ((humanChoice.toLowerCase() === 'rock') && (computerChoice === 'scissors')) {
    console.log('You win! rock beats scissors');
} else if ((humanChoice.toLowerCase() === 'paper') && (computerChoice === 'rock')) {
    console.log('You win! paper beats rock');
} else if ((humanChoice.toLowerCase() === 'paper') && (computerChoice === 'paper')) {
    console.log('It is a tie! You both pick paper');
} else if ((humanChoice.toLowerCase() === 'paper') && (computerChoice === 'scissors')) {
console.log('You lose! scissors beats paper');
} else if ((humanChoice.toLowerCase() === 'scissors') && (computerChoice === 'rock')) {
    console.log('You lose! rock beats scissors');
} else if ((humanChoice.toLowerCase() === 'scissors') && (computerChoice === 'paper')) {
    console.log('You win! scissors beats paper');
} else if ((humanChoice.toLowerCase() === 'scissors') && (computerChoice === 'scissors')) {
    console.log('It is a tie! You both pick scissors');
} else {
    console.log(`Pls pick between 'Rock' 'Paper' or 'Scissors'`);
}

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);