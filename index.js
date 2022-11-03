const cardsEl = document.getElementById('cards-el');
const sumEl = document.getElementById('sum-el');
const messageEl = document.getElementById('message-el');
const playButton = document.getElementById('play-button');
const another_card = document.getElementById('another-card');
const play_again = document.getElementById('play-again');

let gameStarted = false;
let hasBlackjack = false;
let isAlive = true;
let message;
let sum;

function newCards() {
  const one = Math.floor(Math.random() * 10 + 2);
  const two = Math.floor(Math.random() * 10 + 2);
  sum = one + two;
  return { one, two };
}

function play() {
  playButton.setAttribute('hidden', true);
  const userCards = newCards();
  cardsEl.textContent = `Cards: ${userCards.one}, ${userCards.two}`;
  sumEl.textContent = `Sum: ${sum}`;
  startGame();
}

function anotherCard() {
  const randNum = Math.floor(Math.random() * 10 + 2);
  cardsEl.textContent += `, ${randNum}`;
  sum += randNum;
  sumEl.textContent = `Sum: ${sum}`;
  startGame();
}

function startGame() {
  // sum = userSum;
  if (sum <= 20) {
    message = 'Do you want to draw another card?';
    another_card.removeAttribute('hidden');
  } else if (sum === 21) {
    hasBlackjack = true;
    message = 'You have Blackjack. Do you want to play again?';
    another_card.setAttribute('hidden', true);
    play_again.removeAttribute('hidden');
  } else {
    message = 'Bust. Do you want to play again?';
    another_card.setAttribute('hidden', true);
    play_again.removeAttribute('hidden');
    isAlive = false;
    playing = false;
  }
  messageEl.textContent = message;
}

function reset() {
  cardsEl.textContent = '';
  sumEl.textContent = '';
}

function playAgain() {
  reset();
  const userCards = newCards();
  playButton.setAttribute('hidden', true);
  play_again.setAttribute('hidden', true);
  cardsEl.textContent += `Cards: ${userCards.one}, ${userCards.two}`;
  sumEl.textContent += `Sum: ${sum}`;
  startGame();
}

// if (hasBlackjack) {
//   console.log('Do you want to cash out?');
// } else if (isAlive) {
//   console.log('Do you want another card?');
// }
