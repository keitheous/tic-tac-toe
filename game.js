console.log("lets play a game of tic tac toe!!");

var r1c1 = document.getElementById('r1c1');
var r2c1 = document.getElementById('r2c1');
var r3c1 = document.getElementById('r3c1');

var r1c2 = document.getElementById('r1c2');
var r2c2 = document.getElementById('r2c2');
var r3c2 = document.getElementById('r3c2');

var r1c3 = document.getElementById('r1c3');
var r2c3 = document.getElementById('r2c3');
var r3c3 = document.getElementById('r3c3');

var count = 1;
var draw;
var XorO = function(){
  count++;
if (count%2 == 0){
  draw = 'O'
} else draw = 'X';
}


r1c1.addEventListener('click', function(){
  XorO();
  console.log('r1c1 clicked!');
  document.getElementById('r1c1').innerText = draw;
});
r2c1.addEventListener('click', function(){
  XorO();
  console.log('r2c1 clicked!');
  document.getElementById('r2c1').innerText = draw;
});
r3c1.addEventListener('click', function(){
  XorO();
  console.log('r3c1 clicked!');
  document.getElementById('r3c1').innerText = draw;
});

r1c2.addEventListener('click', function(){
  XorO();
  console.log('r1c2 clicked!');
  document.getElementById('r1c2').innerText = draw;
});
r2c2.addEventListener('click', function(){
  XorO();
  console.log('r2c2 clicked!');
  document.getElementById('r2c2').innerText = draw;
});
r3c2.addEventListener('click', function(){
  XorO();
  console.log('r3c2 clicked!');
  document.getElementById('r3c2').innerText = draw;
});

r1c3.addEventListener('click', function(){
  XorO();
  console.log('r1c3 clicked!');
  document.getElementById('r1c3').innerText = draw;
});
r2c3.addEventListener('click', function(){
  XorO();
  console.log('r2c3 clicked!');
  document.getElementById('r2c3').innerText = draw;
});
r3c3.addEventListener('click', function(){
  XorO();
  console.log('r3c3 clicked!');
  document.getElementById('r3c3').innerText = draw;
});
