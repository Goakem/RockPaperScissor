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

    // Human Score and Computer Score declaration and initialization
    let humanScore = 0;
    let computerScore = 0;

function playRound(humanChoice,computerChoice) {

    if ((humanChoice.toLowerCase() === 'rock') && (computerChoice === 'rock')) {

        console.log('It is a tie! You both pick Rock');

    } else if ((humanChoice.toLowerCase() === 'rock') && (computerChoice === 'paper' )){

        console.log('You lose paper beats rock');
        ++computerScore;

    } else if ((humanChoice.toLowerCase() === 'rock') && (computerChoice === 'scissors')) {

        console.log('You win! rock beats scissors');
        ++humanScore;

    } else if ((humanChoice.toLowerCase() === 'paper') && (computerChoice === 'rock')) {

        console.log('You win! paper beats rock');
        ++humanScore;

    } else if ((humanChoice.toLowerCase() === 'paper') && (computerChoice === 'paper')) {

        console.log('It is a tie! You both pick paper');

    } else if ((humanChoice.toLowerCase() === 'paper') && (computerChoice === 'scissors')) {

        console.log('You lose! scissors beats paper');
        ++computerScore;

    } else if ((humanChoice.toLowerCase() === 'scissors') && (computerChoice === 'rock')) {

        console.log('You lose! rock beats scissors');
        ++computerScore;

    } else if ((humanChoice.toLowerCase() === 'scissors') && (computerChoice === 'paper')) {

        console.log('You win! scissors beats paper');
        ++humanScore;

    } else if ((humanChoice.toLowerCase() === 'scissors') && (computerChoice === 'scissors')) {

        console.log('It is a tie! You both pick scissors');

    } else {

        console.log(`Pls pick between 'Rock' 'Paper' or 'Scissors'`);

    }

    console.log(`HumanScore: ${humanScore}`);
    console.log(`ComputerScore: ${computerScore}`);

}

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

rockButton.addEventListener('click', () => {
  console.log('rock was clicked!')
  let humanChoice = 'rock';
  playRound(humanChoice, getComputerChoice());
});

paperButton.addEventListener('click', () => {
  console.log('paper was clicked!')
  let humanChoice = 'paper';
  playRound(humanChoice, getComputerChoice());
});

scissorsButton.addEventListener('click', () => {
  console.log('scissors was clicked!')
  let humanChoice = 'scissors';
  playRound(humanChoice, getComputerChoice());
});
