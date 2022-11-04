let player = {
  name: 'Angel',
  chips: 100,
};
let sum = 0;
let cardsArray = [];
let hasBlackjack = false;
let isAlive = false;
let message;

const cardsEl = document.getElementById('cards-el');
const sumEl = document.getElementById('sum-el');
const messageEl = document.getElementById('message-el');
const playerEl = document.getElementById('player-el');
const playButton = document.getElementById('play-button');
const another_card = document.getElementById('another-card');
const play_again = document.getElementById('play-again');
const cashOutEl = document.querySelector('#cash-out');

playerEl.textContent = `${player.name}: $${player.chips}`;

function getRandomCard() {
  const randomNum = Math.floor(Math.random() * 13 + 1);
  if (randomNum === 1) {
    return 11;
  } else if (randomNum > 10) {
    return 10;
  } else return randomNum;
}

function startGame() {
  isAlive = true;
  const firstCard = getRandomCard();
  const secondCard = getRandomCard();
  cardsArray = [firstCard, secondCard];
  sum = firstCard + secondCard;
  playButton.setAttribute('hidden', true);
  renderGame();
}

function anotherCard() {
  if (isAlive && !hasBlackjack) {
    const newCard = getRandomCard();
    sum += newCard;
    cardsArray.push(newCard);
    renderGame();
  }
}

function renderGame() {
  cardsEl.textContent = 'Cards: ';
  for (let i = 0; i < cardsArray.length; i++) {
    cardsEl.textContent += ` ${cardsArray[i]}`;
  }
  sumEl.textContent = `Sum: ${sum}`;
  if (sum <= 20) {
    message = 'Do you want to draw another card?';
    another_card.removeAttribute('hidden');
  } else if (sum === 21) {
    hasBlackjack = true;
    message = 'You have Blackjack! Do you want to cash out or play again?';
    another_card.setAttribute('hidden', true);
    cashOutEl.removeAttribute('hidden');
    // isAlive = false;
    play_again.removeAttribute('hidden');
  } else {
    message = 'Bust. Do you want to play again?';
    another_card.setAttribute('hidden', true);
    play_again.removeAttribute('hidden');
    isAlive = false;
  }
  messageEl.textContent = message;
}

function reset() {
  cardsArray = [];
  sum = 0;
  hasBlackjack = false;
  cardsEl.textContent = '';
  sumEl.textContent = '';
  play_again.setAttribute('hidden', true);
  cashOutEl.setAttribute('hidden', true);
  startGame();
  renderGame();
}

function playAgain() {
  reset();
}

function cashOut() {
  alert("Congrats, you're now a millionaire!");
  cashOutEl.setAttribute('hidden', true);
  reset();
}
