var totalPlays = 0;
var totalDraws = 0;
var playerScore = 0;
var computerScore = 0;
const totalPlaySpan = document.getElementById("total-plays");
const totalDrawSpan = document.getElementById("total-draws");
const playerScoreSpan = document.getElementById("playerScore");
const computerScoreSpan = document.getElementById("compScore");
const scoreBoardDiv = document.querySelector(".score");
const result_p = document.querySelector(".result > p");
const rockImage = document.getElementById("rock");
const paperImage = document.getElementById("paper");
const scissorsImage = document.getElementById("scissors");
const playActionDiv = document.querySelector(".play-action");
const resetbtn = document.getElementById("restart");


const playerNameChange = document.getElementById("player-name");
const playerName = document.getElementById("player-label");

// Option to change player name
playerNameChange.addEventListener('click', ()=>{
    var nameEntered = prompt("Enter Your Name");
    if(nameEntered && nameEntered.trim() != ''){
        playerName.innerHTML = nameEntered;
    } else {
        playerName.innerHTML = 'player';
    }
})

// reload page
resetbtn.addEventListener('click', () => {
    window.location.reload();
})

// get computer play choice
getCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomNum = (Math.floor(Math.random()*3));
    return options[randomNum];
}

// if player wins
win = (player, computer) => {
    const compChoice = getCompChoice();
    playerScore++;
    playerScoreSpan.innerHTML = playerScore;
    computerScoreSpan.innerHTML = computerScore;
    result_p.innerHTML = `You picked ${player} <br> computer picked ${computer} <br> YOU WIN!😊`;
    document.getElementById(player).classList.add('green-highlight');
    setTimeout(()=>{
        document.getElementById(player).classList.remove('green-highlight')
    }, 400);    
}

// if player loses
lose = (player, computer) => {
    const compChoice = getCompChoice();
    computerScore++;
    playerScoreSpan.innerHTML = playerScore;
    computerScoreSpan.innerHTML = computerScore;
    result_p.innerHTML = `You picked ${player} <br> computer picked ${computer} <br> YOU LOSE!😒`;
    document.getElementById(player).classList.add('red-highlight');
    setTimeout(()=>{
        document.getElementById(player).classList.remove('red-highlight')
    }, 400);
    
}

// if it's a tie game
draw = (player, computer) => {
    totalDraws++
    const compChoice = getCompChoice();
    totalDrawSpan.innerHTML = totalDraws;
    result_p.innerHTML = `You picked ${player} <br> computer picked ${computer} <br> IT'S A DRAW! TRY AGAIN.`;
    document.getElementById(player).classList.add('grey-highlight');
    setTimeout(()=>{
        document.getElementById(player).classList.remove('grey-highlight')
    }, 400);
    
}

// check winner
game = (playerChoice) => {
    totalPlays++
    totalPlaySpan.innerHTML = totalPlays;
    const compChoice = getCompChoice();
    switch (playerChoice + compChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(playerChoice, compChoice);
        break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(playerChoice, compChoice);
        break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(playerChoice, compChoice);
        break;
    }

}

function main() {
rockImage.addEventListener('click', ()=>{
    game('rock')
})

paperImage.addEventListener('click', ()=>{
    game('paper');
})

scissorsImage.addEventListener('click', ()=>{
    game('scissors');
})
}
main();