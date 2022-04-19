var totalPlays = 0;
var totalDraws = 0;
var player1Score = 0;
var player2Score = 0;
const totalPlaySpan = document.getElementById("total-plays");
const totalDrawSpan = document.getElementById("total-draws");
const player1ScoreSpan = document.getElementById("player_1_score");
const player2ScoreSpan = document.getElementById("player_2_score");
const scoreBoardDiv = document.querySelector(".score");
const result_p = document.querySelector(".result > p");
const rockImage = document.getElementById("rock");
const paperImage = document.getElementById("paper");
const scissorsImage = document.getElementById("scissors");

const rockImage2 = document.getElementById("rock2");
const paperImage2 = document.getElementById("paper2");
const scissorsImage2 = document.getElementById("scissors2");

const playActionDiv = document.querySelector(".play-action");
const resetbtn = document.getElementById("restart");

// reload page
resetbtn.addEventListener('click', () => {
    window.location.reload();
})

function myFunction() {
    var first_choice = prompt('PLAYER 2 ENTER CHOICE: (rock, paper or scissors)');
    var secondChoice = first_choice.toLocaleLowerCase();
    return secondChoice

 }

function player_1_win(player1, player2) {
    player1Score++;
    player1ScoreSpan.innerHTML = player1Score;
    player2ScoreSpan.innerHTML = player2Score;
    result_p.innerHTML = `Player-1: ${player1} <br> Player-2: ${player2} <br> PLAYER-1 WINS!`
}

function player_2_win(player1, player2) {
    player2Score++;
    player2ScoreSpan.innerHTML = player2Score;
    result_p.innerHTML = `Player-1: ${player1} <br> Player-2: ${player2} <br> PLAYER-2 WINS!`
}

function tieGame(player1, player2) {
    totalDraws++;
    totalDrawSpan.innerHTML = totalDraws;
    result_p.innerHTML = `Player-1: ${player1} <br> Player-2: ${player2} <br> IT'S A TIE GAME! TRY AGAIN.`
}

    function checkWinner (firstChoice) {
        var secondChoice = myFunction();
        if(secondChoice){ // to increase total plays only if player 2 enters a value
            totalPlays++;
        }
        totalPlaySpan.innerHTML = totalPlays;
        switch (firstChoice + secondChoice) {
            case "rockscissors":
            case "paperrock":
            case "scissorspaper":
                player_1_win(firstChoice, secondChoice);
            break;
            case "rockpaper":
            case "paperscissors":
            case "scissorsrock":
                player_2_win(firstChoice, secondChoice);
            break;
            case "rockrock":
            case "paperpaper":
            case "scissorsscissors":
                tieGame(firstChoice, secondChoice);
            break;
            default:
                result_p.innerHTML = "PLAYER 2 PLEASE ENTER A VALID CHOICE."
        }
    }

    function main() {
    
        rockImage2.addEventListener('click', ()=>{
            checkWinner('rock');
        })
        
        paperImage2.addEventListener('click', ()=>{
            checkWinner('paper');
        })
        
        scissorsImage2.addEventListener('click', ()=>{
            checkWinner('scissors');
        })
    }
    
    main();