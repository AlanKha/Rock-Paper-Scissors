function getComputerChoice() {
    const selection = Math.floor(Math.random() * 3);
    switch(selection) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function findWinner(userInput, computerInput) {
    if (
        (userInput === 'Rock' && computerInput === 'Scissors') ||
        (userInput === 'Scissors' && computerInput === 'Paper') ||
        (userInput === 'Paper' && computerInput === 'Rock')
    ) {
        return `User Wins!\nUser chose ${userInput} and Computer chose ${computerInput}`;
    } else if (
        (computerInput === 'Rock' && userInput === 'Scissors') ||
        (computerInput === 'Scissors' && userInput === 'Paper') ||
        (computerInput === 'Paper' && userInput === 'Rock')
    ) {
        return `Computer Wins!\nUser chose ${userInput} and Computer chose ${computerInput}`;
    } else {
        return `It's a Tie!\nUser chose ${userInput} and Computer chose ${computerInput}`;
    }
}

function validateUserInput(userInput){
    if( userInput === 'Rock' || userInput === 'Paper' || userInput === 'Scissors'){
        return true;
    }
    else{
        console.log('Invalid Input! Please enter either Rock Paper or Scissors!');
        return false;
    }
}

const userInput = prompt('Please enter either Rock, Paper, or Scissors:');
const computerInput = getComputerChoice();

if(validateUserInput(userInput)){
    console.log(findWinner(userInput, computerInput));
}