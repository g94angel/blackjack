const cardsEl = document.getElementById('cards-el');
const sumEl = document.getElementById('sum-el');
const messageEl = document.getElementById('message-el');
const playButton = document.getElementById('play-button');
const another_card = document.getElementById('another-card');
const play_again = document.getElementById('play-again');

function getRandomCard() {
  return Math.floor(Math.random() * 10 + 2);
}
const firstCard = getRandomCard();
const secondCard = getRandomCard();
let sum = firstCard + secondCard;

let cardsArray = [firstCard, secondCard];

let hasBlackjack = false;
let isAlive = true;
let message;

function startGame() {
  playButton.setAttribute('hidden', true);
  cardsEl.textContent = 'Cards:';
  // for (let i = 0; i < cardsArray.length; i++) {
  cardsEl.textContent += ` ${cardsArray[0]}, ${cardsArray[1]}`;
  //   sum += cardsArray[i];
  // }
  sumEl.textContent = `Sum: ${sum}`;
  renderGame();
}

function anotherCard() {
  const newCard = getRandomCard();
  cardsArray.push(newCard);
  cardsEl.textContent += `, ${cardsArray[cardsArray.length - 1]}`;
  console.log(newCard);

  sum += newCard;
  sumEl.textContent = `Sum: ${sum}`;
  renderGame();
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
