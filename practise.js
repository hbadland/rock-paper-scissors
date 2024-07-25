function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"]
    const randomOption = Math.floor(Math.random() * choice.length);
    return choice[randomOption];
}
//console.log(getComputerChoice());

function getHumanChoice() {
    let humanInput = prompt("Rock, paper or scissors?").toLowerCase();

    while (!choices.includes(humanInput.toLowerCase())) {
        humanInput = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return humanInput;
}

let humanScore = 0;
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    //win condition
    const winCondition = {
        rock: 'scissors',
        paper: 'rock',
        stone: 'paper'
    };

    //check for tie
    if (humanChoice == computerChoice) {
        return 'Tie! Both are the same.'
    } else if (winCondition[humanChoice] === computerChoice) {
        return 'You win! $(humanChoice) beats $(computerChoice)';
    } else {
        return 'You lose! $(copmuterChoice) beats $(humanChoice)';
    }
}

//6. Playgame function
function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        if (result.startswith('You win!')) {
            humanScore++;
        } else if (result.startswith('You lose!')) {
            computerScore++;
        }
    }

    if (humanScore == 5) {
        console.log('You win')
    } else if (computerScore == 5) {
        console.log('You lose!')
    } else {
        console.log('Tie')
    }
}

playGame();