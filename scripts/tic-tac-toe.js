var gameOver = false;
var currentPlayer = 'X';
var totalMoves = 1;
var gameTied = false;
function placeMarker(spotID){
    if(!gameOver){
    var spot = document.getElementById(spotID);
    if(spot.innerHTML !== 'X' && spot.innerHTML !== 'O'){
        spot.innerHTML = currentPlayer;
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
        updateGameStatus();
    }
    else{
        gameOver = false;
        updateGameStatus();
    }
    if(!gameOver){
        if(totalMoves === 9){
            gameOver = true;
            gameTied = true
            updateGameStatus();
        }

    }

}

function updateGameStatus(){
    var statusBoard = document.getElementById('status');
    if(gameTied){
        statusBoard.innerHTML = 'It is a Tie'
    }
    else if(gameOver){
        statusBoard.innerHTML = 'Player ' + currentPlayer + ' Won';
    }
    else{
        statusBoard.innerHTML = 'It is Player ' + currentPlayer + '\'s turn'; 
    }
}
function showStatus(){
    var showStatusBoard = document.getElementById("status");
    var showButton = document.getElementById("sButton");
    
    if(showButton !== 'Start'){
        alert('fuck');
        showStatusBoard.style.display="none";
    }
    else{
        showStatusBoard.style.display="block";
    }
    if(gameOver){
        showButton.style.display="block";
        showButton.innerHTML = 'Replay';
    }
}