const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Error!');
    }
};

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function determineWinner(userInput, computerChoice) {
    if (userInput === computerChoice) {
        return 'The game is a tie!';
    }
    if (userInput === 'rock') {
        if (computerChoice === 'paper') {
            return 'The Computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userInput === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The Computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userInput === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The Computer won!';
        } else {
            return 'You won!';
        }
    }
}

const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();