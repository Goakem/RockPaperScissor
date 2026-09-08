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
    let paraForResult = document.createElement('p');
    let paraForScore = document.createElement('p');

    if ((humanChoice.toLowerCase() === 'rock') && (computerChoice === 'rock')) {

       paraForResult.textContent = 'It is a tie! You both pick Rock';

    } else if ((humanChoice.toLowerCase() === 'rock') && (computerChoice === 'paper' )){

        paraForResult.textContent = 'You lose! paper beats rock';
        ++computerScore;

    } else if ((humanChoice.toLowerCase() === 'rock') && (computerChoice === 'scissors')) {

        paraForResult.textContent = 'You win! rock beats scissors';
        ++humanScore;

    } else if ((humanChoice.toLowerCase() === 'paper') && (computerChoice === 'rock')) {

        paraForResult.textContent = 'You win! paper beats rock';
        ++humanScore;

    } else if ((humanChoice.toLowerCase() === 'paper') && (computerChoice === 'paper')) {

        paraForResult.textContent = 'It is a tie! You both pick paper';

    } else if ((humanChoice.toLowerCase() === 'paper') && (computerChoice === 'scissors')) {

        paraForResult.textContent = 'You lose! scissors beats paper';
        ++computerScore;

    } else if ((humanChoice.toLowerCase() === 'scissors') && (computerChoice === 'rock')) {

        paraForResult.textContent = 'You lose! rock beats scissors';
        ++computerScore;

    } else if ((humanChoice.toLowerCase() === 'scissors') && (computerChoice === 'paper')) {

        paraForResult.textContent = 'You win! scissors beats paper';
        ++humanScore;

    } else if ((humanChoice.toLowerCase() === 'scissors') && (computerChoice === 'scissors')) {

        paraForResult.textContent = 'It is a tie! You both pick scissors';
        
    } 
    
    divForResult.appendChild(paraForResult);
    paraForScore.textContent = `Human Score: ${humanScore}
        Computer Score: ${computerScore}`;
    divForResult.appendChild(paraForScore);

    if((humanScore === 5) && (humanScore > computerScore)) {
        console.log("You win the game");
    } else if((computerScore === 5) && (computerScore > humanScore)){
        console.log("computer wins");
    }
}

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const divForResult = document.querySelector('.result');

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