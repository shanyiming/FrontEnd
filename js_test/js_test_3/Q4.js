let clicksLeft = 10;
let compteurVies = document.getElementById('lives');
compteurVies.innerText = clicksLeft;

let points = 0;
let compteurPoints = document.getElementById('points');
compteurPoints.innerText = points;

let start = document.getElementById('start');
let reset = document.getElementById('reset');
reset.disabled = true;

let first = document.getElementById('one');
let second = document.getElementById('two')
let third = document.getElementById('three');
let fourth = document.getElementById('four');
let fifth = document.getElementById('five');
let sixth = document.getElementById('six');
let seventh = document.getElementById('seven');
let eighth = document.getElementById('eight');
let ninth = document.getElementById('nine');

let holes = document.getElementsByTagName('div');

let game;
let lifeLost;

let spawnInRandomCell = function() {
// Make 3 moles appear in a random place and add the event listeners to the div
if (clicksLeft > 0) {
  clicksLeft--;
    compteurVies.innerText = clicksLeft;
    let arr = [];
    while(arr.length < 3){
        var r = Math.ceil(Math.random()*9);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    let randomNumber1 = arr[0];
    let randomNumber2 = arr[1];
    let randomNumber3 = arr[2];

    for (i = 0; i < holes.length; i++) {
      holes[i].addEventListener('click', moleDisappearsByClick)
    };
    for (place = 1; place < 10; place++) {
      if (place === randomNumber1 || place === randomNumber2 || place === randomNumber3) {
        holes[place - 1].classList.add('mole');
      };
    };
} else {
    clearInterval(game);
    reset.disabled = false;
  };
};


let moleDisappearsByClick = function(event) {
// Makes the mole disappear on click and adds a point
  if (this.classList.contains('mole')) {
    points++;
    compteurPoints.innerText = points;
  };
  first.classList.remove('mole');
  second.classList.remove('mole');
  third.classList.remove('mole');
  fourth.classList.remove('mole');
  fifth.classList.remove('mole');
  sixth.classList.remove('mole');
  seventh.classList.remove('mole');
  eighth.classList.remove('mole');
  ninth.classList.remove('mole');
  
  spawnInRandomCell();
};

let launch = function () {
  // Launches the game
  spawnInRandomCell();
  start.disabled = true;
};



let restart = function () {
  // Reset the lives and points
  reset.disabled = true;
  clicksLeft = 10;
  points = 0;
  compteurVies.innerText = clicksLeft;
  compteurPoints.innerText = points;
  launch();
};

start.addEventListener('click', launch);
reset.addEventListener('click', restart);