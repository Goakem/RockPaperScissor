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

// Compare human and computer Choice
    // If humanChoice is 'Rock' and computerChoice is Rock log "It is a tie! you both choose Rock" in the console

    //Else if humanChoice is 'Rock' and computerChoice is Paper log "You lose! Paper Beats Rock" in the console

    // Else if humanChoice is 'Rock' and computerChoice is Scissor log "You win! Rock beats Scissors" in the console 


    //If humanChoice is 'Paper' and computerChoice is 'Rock' log "You win! Paper beats Rock" in the console

    //Else if humanChoice is 'Paper' and computerChoice is 'Paper' log "It is a tie, you both choose Paper" in the console

    //Else if humanChoice is 'Paper' and computerChice is 'Scissor' log "You lose!, Scissors beats Paper"


    // If humanChoice is 'Scissors' and computerChoice is 'Rock' log "You lose!, Rock beats Scissors"

    // Else if humanChoice is 'Scissors' and computerChoice is 'Paper' log "You win!, Scissors beats Rock."

    // Else if humanChoice is 'Scissors' and computerChoice is 'Scissors' log "It is a tie!, You both choose Scissors"


// Print result