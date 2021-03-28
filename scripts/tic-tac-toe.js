var gameOver = false;
var currentPlayer = 'X';
var totalMoves = 1;
var gameTied = false;
var buttonClick = false;
document.getElementById('sButton').addEventListener("click", startButtonClicked);


function placeMarker(spotID){
    if(buttonClick === true){   
    if(!gameOver){
    var spot = document.getElementById(spotID);
    if(spot.innerHTML !== 'X' && spot.innerHTML !== 'O'){
        spot.innerHTML = currentPlayer;
        spot.style.color = 'white';
    }
    else{
        placeMarker(spotID);
    }
}
    if(currentPlayerWon()){
        updateGameStatus();
    }
    else{
    if(currentPlayer === 'X' && !gameOver){
        currentPlayer = 'O';
    }
    else if(currentPlayer === 'O' && !gameOver){
        currentPlayer = 'X';
    }
    totalMoves++;
    updateGameStatus();
    }
    }
    else if(!gameOver){
        alert('Press Start to Play');
    }

    }

function currentPlayerWon(){
    var s1 = document.getElementById('spot1');
    var s2 = document.getElementById('spot2');
    var s3 = document.getElementById('spot3');
    var s4 = document.getElementById('spot4');
    var s5 = document.getElementById('spot5');
    var s6 = document.getElementById('spot6');
    var s7 = document.getElementById('spot7');
    var s8 = document.getElementById('spot8');
    var s9 = document.getElementById('spot9');

    if(s1.innerHTML === s2.innerHTML && s2.innerHTML === s3.innerHTML || s4.innerHTML === s5.innerHTML && s5.innerHTML === s6.innerHTML || s7.innerHTML === s8.innerHTML && s8.innerHTML === s9.innerHTML || s1.innerHTML === s4.innerHTML && s4.innerHTML === s7.innerHTML || s2.innerHTML === s5.innerHTML && s5.innerHTML === s8.innerHTML || s3.innerHTML === s6.innerHTML && s6.innerHTML === s9.innerHTML || s1.innerHTML === s5.innerHTML && s5.innerHTML === s9.innerHTML || s3.innerHTML === s5.innerHTML && s5.innerHTML === s7.innerHTML){
        gameOver = true;
        buttonClick = false;
        updateGameStatus();
    }
    else{
        gameOver = false;
        updateGameStatus();
    }
    if(!gameOver){
        if(totalMoves === 9){
            gameOver = true;
            gameTied = true;
            buttonClick = false;
            updateGameStatus();
        }
    }
}

function updateGameStatus(){
    var statusBoard = document.getElementById('status');
    if(gameTied){
        statusBoard.innerHTML = 'It is a Tie';
        buttonClick = false;
      
    }
    else if(gameOver){
        statusBoard.innerHTML = 'Player ' + currentPlayer + ' Won';
        buttonClick = false;
     
    }
    else{
        statusBoard.innerHTML = 'It is Player ' + currentPlayer + '\'s turn';
    }
}
function startButtonClicked(){
    document.getElementById('sButton').style.display='none';
    document.getElementById('status').style.display='block'
    buttonClick = true;
}