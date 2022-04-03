'use strict';

// GENERATE A RANDOM NUMBER UPTO 20
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// REFACTORING THE CODE "DON'T REPEAT YOURSELF!"
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const setNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const setWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

// EVENT LISTENER
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // WHEN THERE IS NO INPUT
  if (!guess) {
    displayMessage('😕 No number!');

    // WHEN INPUT CORRECT
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    setNumber(secretNumber);

    // MANIPULATING CSS
    displayBackground('#60b347');
    setWidth('30rem');

    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score = score - 1;
      setScore(score);
    } else {
      displayMessage('😓 You lost the game!');
      setScore(0);
    }
  }
});

// RESET THE GAME
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  setNumber('?');
  setScore(score);
  displayMessage('Start guessing...');
  displayBackground('#222');
  setWidth('15rem');
  document.querySelector('.guess').value = '';
});
