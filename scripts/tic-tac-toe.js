var gameOver = false;
var currentPlayer = 'X';
var totalMoves = 1;
var gameTied = false;
var buttonClick = false;
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
        showStatus();

    }
    else if(gameOver){
        statusBoard.innerHTML = 'Player ' + currentPlayer + ' Won';
        buttonClick = false;
        showStatus();
    }
    else{
        statusBoard.innerHTML = 'It is Player ' + currentPlayer + '\'s turn';
    }
}
function showStatus(){
    var showStatusBoard = document.getElementById("status");
    var showButton = document.getElementById("sButton");
    if(gameOver){
        showButton.style.display="block";
        showButton.innerHTML = 'Replay';
        buttonClick = false;
        }
        if(showButton.innerHTML === 'Replay'){
            buttonClick = false;
        }
        if(gameOver && showButton.innerHTML === 'Replay' && showButton.onclick){
            alert('Has the Button been Clicked? ' + buttonClick);
            reset();
        }
        
        
}
function reset(){
            gameOver = false;
            gameTied = false;
            currentPlayer = 'X';
            var s1 = document.getElementById('spot1');
            var s2 = document.getElementById('spot2');
            var s3 = document.getElementById('spot3');
            var s4 = document.getElementById('spot4');
            var s5 = document.getElementById('spot5');
            var s6 = document.getElementById('spot6');
            var s7 = document.getElementById('spot7');
            var s8 = document.getElementById('spot8');
            var s9 = document.getElementById('spot9');

            s1.style.color = '#61429d';
            s2.style.color = '#61429d';
            s3.style.color = '#61429d';
            s4.style.color = '#61429d';
            s5.style.color = '#61429d';
            s6.style.color = '#61429d';
            s7.style.color = '#61429d';
            s8.style.color = '#61429d';
            s9.style.color = '#61429d';
            
            s1.innerHTML = 1;
            s2.innerHTML = 2;
            s3.innerHTML = 3;
            s4.innerHTML = 4;
            s5.innerHTML = 5;
            s6.innerHTML = 6;
            s7.innerHTML = 7;
            s8.innerHTML = 8;
            s9.innerHTML = 9;

}