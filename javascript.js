document.addEventListener("DOMContentLoaded", function() {
    const rockBtn = document.querySelector('#rock-button');
    const paperBtn = document.querySelector('#paper-button')
    const scissorsBtn = document.querySelector('#scissors-button')
    const resetBtn = document.querySelector('#reset-button')

    rockBtn.onclick = () => {
        computerChoice = getComputerChoice()
        updateScore('Rock', computerChoice);
    };
    paperBtn.onclick = () => {
        computerChoice = getComputerChoice()
        updateScore('Paper', computerChoice);
    }
    scissorsBtn.onclick = () => {
        computerChoice = getComputerChoice()
        updateScore('Scissors', computerChoice);
    }
    resetBtn.onclick = () =>{
        resetScoreboard();
    }

});

function resetScoreboard (){
    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');

    const result = document.querySelector('#result')
    const resultSubtext = document.querySelector('#result-subtext')

    playerScore.textContent = '0';
    computerScore.textContent = '0';

    result.textContent = 'Chose your weapon';
    resultSubtext.textContent = 'First to five wins the game';
}

function getComputerChoice() {
    const selection = Math.floor(Math.random() * 3);
    switch (selection) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function updateScore(choice, computerChoice) {
    if (
        (choice === 'Rock' && computerChoice === 'Scissors') ||
        (choice === 'Scissors' && computerChoice === 'Paper') ||
        (choice === 'Paper' && computerChoice === 'Rock')
    )
    {
        updateScoreboard('Player', computerChoice);
    } 
    else if (
        (computerChoice === 'Rock' && choice === 'Scissors') ||
        (computerChoice === 'Scissors' && choice === 'Paper') ||
        (computerChoice === 'Paper' && choice === 'Rock')
    ) 
    {
        updateScoreboard('Computer', computerChoice);
    } 
    else 
    {
        updateScoreboard('Tie', choice);
    }
}

function updateScoreboard(winner, selection) {
    const result = document.querySelector('#result')
    const resultSubtext = document.querySelector('#result-subtext')

    if (winner === 'Player') {
        const playerScore = document.querySelector('#player-score');
        const winSound = document.querySelector('#win-sound')

        playerScore.textContent = parseInt(playerScore.textContent) + 1;

        winSound.play()

        result.textContent = "You Win!"
        resultSubtext.textContent = `Computer chose ${selection}`

    }
    else if(winner === 'Computer'){
        const loseSound = document.querySelector('#lose-sound')
        const computerScore = document.querySelector('#computer-score')

        computerScore.textContent = parseInt(computerScore.textContent) + 1

        loseSound.play()

        result.textContent = "Computer Wins!"
        resultSubtext.textContent = `Computer Chose ${selection}`
    }
    else if(winner === 'Tie'){
        const tieSound = document.querySelector('#tie-sound');
        
        tieSound.play()

        result.textContent = "It's a Tie!"
        resultSubtext.textContent = `Both of you chose ${selection}`
    }
}