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
    
    // let result = '';

    if ((humanChoice.toLowerCase() === 'rock') && (computerChoice === 'rock')) {

       roundResult.textContent = 'It is a tie! You both pick Rock';

    } else if ((humanChoice.toLowerCase() === 'rock') && (computerChoice === 'paper' )){

        roundResult.textContent = 'You lose! paper beats rock';
        ++computerScore;

    } else if ((humanChoice.toLowerCase() === 'rock') && (computerChoice === 'scissors')) {

        roundResult.textContent = 'You win! rock beats scissors';
        ++humanScore;

    } else if ((humanChoice.toLowerCase() === 'paper') && (computerChoice === 'rock')) {

        roundResult.textContent = 'You win! paper beats rock';
        ++humanScore;

    } else if ((humanChoice.toLowerCase() === 'paper') && (computerChoice === 'paper')) {

        roundResult.textContent = 'It is a tie! You both pick paper';

    } else if ((humanChoice.toLowerCase() === 'paper') && (computerChoice === 'scissors')) {

        roundResult.textContent = 'You lose! scissors beats paper';
        ++computerScore;

    } else if ((humanChoice.toLowerCase() === 'scissors') && (computerChoice === 'rock')) {

        roundResult.textContent = 'You lose! rock beats scissors';
        ++computerScore;

    } else if ((humanChoice.toLowerCase() === 'scissors') && (computerChoice === 'paper')) {

        roundResult.textContent = 'You win! scissors beats paper';
        ++humanScore;

    } else if ((humanChoice.toLowerCase() === 'scissors') && (computerChoice === 'scissors')) {

        roundResult.textContent = 'It is a tie! You both pick scissors';
        
    } 
    
    const score = document.querySelector('.scorePara');

    score.textContent = `Human Score: ${humanScore} 
    computerScore ${computerScore}`;

    if((humanScore === 5) && (humanScore > computerScore)) {
        winner.textContent = "You win the game";
    } else if((computerScore === 5) && (computerScore > humanScore)){
        winner.textContent = "computer wins";
    }
}

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const divForResult = document.querySelector('.result');
const roundResult = document.querySelector('.resultPara');
const winner = document.querySelector('.winnerResult');

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