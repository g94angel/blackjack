const cardsEl = document.getElementById('cards-el');
const sumEl = document.getElementById('sum-el');
const messageEl = document.getElementById('message-el');
const playButton = document.getElementById('play-button');
const another_card = document.getElementById('another-card');
const play_again = document.getElementById('play-again');

function getRandomCard() {
  const randomNum = Math.floor(Math.random() * 13 + 1);
  if (randomNum === 1) return 11;
  else if (randomNum > 10) return 10;
  else return randomNum;
}

let hasBlackjack = false;
let isAlive = false;
let message;

function startGame() {
  isAlive = true;
  const firstCard = getRandomCard();
  const secondCard = getRandomCard();
  let sum = 0;
  let cardsArray = [firstCard, secondCard];
  playButton.setAttribute('hidden', true);
  cardsEl.textContent = 'Cards:';
  for (let i = 0; i < cardsArray.length; i++) {
    cardsEl.textContent += ` ${cardsArray[i]}`;
    sum += cardsArray[i];
  }
  sumEl.textContent = `Sum: ${sum}`;
  renderGame();
}

function anotherCard() {
  const newCard = getRandomCard();
  cardsArray.push(newCard);
  startGame();
}

function renderGame() {
  if (sum <= 20) {
    message = 'Do you want to draw another card?';
    another_card.removeAttribute('hidden');
  } else if (sum === 21) {
    hasBlackjack = true;
    message = 'You have Blackjack. Do you want to play again?';
    another_card.setAttribute('hidden', true);
    isAlive = false;
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
  cardsArray = [firstCard, secondCard];
  cardsEl.textContent = '';
  sumEl.textContent = '';
}

function playAgain() {
  reset();
  startGame();
  play_again.setAttribute('hidden', true);
  renderGame();
}

// if (hasBlackjack) {
//   console.log('Do you want to cash out?');
// } else if (isAlive) {
//   console.log('Do you want another card?');
// }
