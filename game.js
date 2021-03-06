console.log("lets play a game of tic tac toe!! lolS");
// declaring DOM elements
var newBtn = document.getElementById('newBtn');
var clrBtn = document.getElementById('clrBtn');
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var broadcast = document.getElementById('broadcast');
var winsPlayer1 = document.getElementById('winsPlayer1');
var winsPlayer2 = document.getElementById('winsPlayer2');
// DOM elements - playing field
var r1c1 = document.getElementById('r1c1');
var r2c1 = document.getElementById('r2c1');
var r3c1 = document.getElementById('r3c1');
var r1c2 = document.getElementById('r1c2');
var r2c2 = document.getElementById('r2c2');
var r3c2 = document.getElementById('r3c2');
var r1c3 = document.getElementById('r1c3');
var r2c3 = document.getElementById('r2c3');
var r3c3 = document.getElementById('r3c3');
// 3x3 matrix - nested array
var board = {
  r1c1 : null, r1c2 : null, r1c3: null,
  r2c1 : null, r2c2 : null, r2c3 : null,
  r3c1 : null, r3c2 : null, r3c3 : null,
}
var won = false; //boolean condition used to stop and reset game - thank you DT
var turns = 1; //used to alternate the symbols, players, and used to draw a tie
var symbol;
var player = { //storing symbols 'X's to player 1 and 'O's to 2
	one : 'X',
	two : 'O'
};
winsPlayer1 = 0;
winsPlayer2 = 0;

var displayWins = function(){
  document.getElementById("winsPlayer1").innerHTML = winsPlayer1;
  document.getElementById("winsPlayer2").innerHTML = winsPlayer2;
}

var newRound =  function() {
  console.log('RESET! LOL!')
  // setting all board values to null - thank you Hugh
  for (values in board) {
    board[values] = null;
  }
  // refreshing displays in HTML = thank you DT
  var x = document.querySelectorAll('li');
  // reset DOM list items
  for (var i=0 ; i < x.length ; i++){
      x[i].innerHTML = "."
  }
  won = false;
  turns = 1;
  document.getElementById('broadcast').innerHTML = "Next Round~! LOL~!"
}

var clearGame = function(){
  newRound();
  winsPlayer1 = 0;
  winsPlayer2 = 0;
  displayWins();
  document.getElementById('broadcast').innerHTML = "New Game~! LOL~"

}

var incrementTurn = function(){
	turns++;
	if (turns%2===0){ //even
		symbol = player.one
		console.log(symbol);
	} else { //odd
		symbol = player.two
		console.log(symbol);
	}
}

function squareIsVacant(key) {
  //evaluate true or false, if true return
  return board[key] === null;
}
var setMove = function(key){
      board[key]= symbol;
}
var printSquare= function(square){
  document.getElementById(square).innerHTML = symbol;
}

// dont forget to thank hugh
var checkWinner = function(symbol){
  if (((board.r1c1===symbol)&&(board.r1c2===symbol)&&(board.r1c3===symbol))||
  ((board.r2c1===symbol)&&(board.r2c2===symbol)&&(board.r2c3===symbol))||
  ((board.r3c1===symbol)&&(board.r3c2===symbol)&&(board.r3c3===symbol))||
  ((board.r1c1===symbol)&&(board.r2c1===symbol)&&(board.r3c1===symbol))||
  ((board.r1c2===symbol)&&(board.r2c2===symbol)&&(board.r3c2===symbol))||
  ((board.r1c3===symbol)&&(board.r2c3===symbol)&&(board.r3c3===symbol))||
  ((board.r1c1===symbol)&&(board.r2c2===symbol)&&(board.r3c3===symbol))||
  ((board.r1c3===symbol)&&(board.r2c2===symbol)&&(board.r3c1===symbol))){
    // this part is to determine winner, player 1 or 2, or X or O
    if (symbol === player.one){
      winsPlayer1++;
      if (player1.value===""){
      document.getElementById('broadcast').innerHTML =  player.one +" Wins!~ lol~!";
      }
      else{
      document.getElementById('broadcast').innerHTML = player1.value +" Wins!~ lol~!";
      }
    } else {
                winsPlayer2++;
                if (player2.value===""){
                document.getElementById('broadcast').innerHTML =  player.two +" Wins!~ lol~!";
                }
                else{
                document.getElementById('broadcast').innerHTML = player2.value +" Wins!~ lol~!";
                }
    }
    // when winner is decided, we display accumulated winer and disable playing field with boolean
    won = true;
    console.log("someone Won!");
    displayWins();

  } else if(turns ===10 ){
    //tie - thank you wolf - once all 9 fields are filled, you would have reached turn number 10
            document.getElementById('broadcast').innerHTML = "It's a tie! lol~!"
            won = true; // once again, disable playing field with boolean
  } else{
        //do nothing - no wins yet continue checking for winner babe
  };
}

newBtn.addEventListener('click',newRound);
clrBtn.addEventListener('click',clearGame);

r1c1.addEventListener('click', function(){
  if (won) {
      return;
    }
    if(squareIsVacant('r1c1')){
        incrementTurn();
        setMove('r1c1');
        printSquare('r1c1');
        checkWinner(symbol);
        console.log(turns);
      }
});
r2c1.addEventListener('click', function(){
  if (won) {
    return;
    }
    if(squareIsVacant('r2c1')){
          incrementTurn();
          setMove('r2c1');
          printSquare('r2c1');
          checkWinner(symbol);
      }
});
r3c1.addEventListener('click', function(){
  if (won) {
    return;
  }
    if(squareIsVacant('r3c1')){
          incrementTurn();
          setMove('r3c1');
          printSquare('r3c1');
          checkWinner(symbol);
      }
});
r1c2.addEventListener('click', function(){
if (won) {
  return;
}
  if(squareIsVacant('r1c2')){
      incrementTurn();
      setMove('r1c2');
      printSquare('r1c2');
      checkWinner(symbol);
    }
  });
r2c2.addEventListener('click', function(){
  if (won) {
    return;
  }
    if(squareIsVacant('r2c2')){
        incrementTurn();
        setMove('r2c2');
        printSquare('r2c2');
        checkWinner(symbol);
      }
});
r3c2.addEventListener('click', function(){
  if (won) {
    return;
  }
    if(squareIsVacant('r3c2')){
        incrementTurn();
        setMove('r3c2');
        printSquare('r3c2');
        checkWinner(symbol);
      }
});
r1c3.addEventListener('click', function(){
  if (won) {
    return;
    }
    if(squareIsVacant('r1c3')){
        incrementTurn();
        setMove('r1c3');
        printSquare('r1c3');
        checkWinner(symbol);
      }
});
r2c3.addEventListener('click', function(){
  if (won) {
    return;
    }
    if(squareIsVacant('r2c3')){
        incrementTurn();
        setMove('r2c3');
        printSquare('r2c3');
        checkWinner(symbol);
      }
});
r3c3.addEventListener('click', function(){
  if (won) {
    return;
    }
    if(squareIsVacant('r3c3')){
        incrementTurn();
        setMove('r3c3');
        printSquare('r3c3');
        checkWinner(symbol);
      }
});
