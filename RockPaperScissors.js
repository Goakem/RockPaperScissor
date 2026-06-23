// Get computerChoice
function getComputerChoice () {
    let computerChoice = Math.random();
    if (computerChoice <= 1/3) {
        computerChoice = 'rock';
    } else {
        if (computerChoice <= 2/3) {
            computerChoice = 'paper';
        } else {
            computerChoice = 'scissors';
        }
    } 
}

// Get humanChoice
function getHumanChoice () {
    let humanChoice = prompt('Enter Rock, Paper or Scissors:', '').toLowerCase();

    return humanChoice;
}

// Human Score and Computer Score declaration and initialization
let humanScore = 0;
let computerScore = 0;


//Creating a function to play a round of the game
function playRound(humanChoice,computerChoice) {

humanChoice = getHumanChoice();
computerChoice = getComputerChoice();

//  compare and give log the result on the console if any of the condition is met 
if ((humanChoice === 'rock') && (computerChoice === 'rock')) {
    console.log('It is a tie! You both pick Rock');
} else if ((humanChoice === 'rock') && (computerChoice === 'paper' )){
    console.log('You lose paper beats rock');
} else if ((humanChoice === 'rock') && (computerChoice === 'scissors')) {
    console.log('You win! rock beats scissors');
} else if ((humanChoice === 'paper') && (computerChoice === 'rock')) {
    console.log('You win! paper beats rock');
} else if ((humanChoice === 'paper') && (computerChoice === 'paper')) {
    console.log('It is a tie! You both pick paper');
} else if ((humanChoice === 'paper') && (computerChoice === 'scissors')) {
console.log('You lose! scissors beats paper');
} else if ((humanChoice === 'scissors') && (computerChoice === 'rock')) {
    console.log('You lose! rock beats scissors');
} else if ((humanChoice === 'scissors') && (computerChoice === 'paper')) {
    console.log('You win! scissors beats paper');
} else if ((humanChoice === 'scissors') && (computerChoice === 'scissors')) {
    console.log('It is a tie! You both pick scissors');
} else {
    console.log(`Pls pick between 'Rock' 'Paper' or 'Scissors'`);
}

}
playRound();