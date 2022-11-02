const cards = document.getElementById('cards');
const cardSum = document.getElementById('sum');
const messageEl = document.getElementById('message-el');
const playButton = document.getElementById('play-button');
const another_card = document.getElementById('another-card');
const play_again = document.getElementById('play-again');

let gameStarted = false;
let hasBlackjack = false;
let isAlive = true;
let message;
let totalSum;

function newCards() {
  const one = Math.floor(Math.random() * 10 + 2);
  const two = Math.floor(Math.random() * 10 + 2);
  let sum = one + two;
  return { one, two, sum };
}

function play() {
  playButton.setAttribute('hidden', true);
  const userCards = newCards();
  cards.textContent = `Cards: ${userCards.one}, ${userCards.two}`;
  cardSum.textContent = `Sum: ${userCards.sum}`;
  totalSum = userCards.sum;
  startGame(totalSum);
}

function anotherCard() {
  const randNum = Math.floor(Math.random() * 10 + 2);
  cards.textContent += `, ${randNum}`;
  totalSum += randNum;
  cardSum.textContent = `Sum: ${totalSum}`;
  startGame(totalSum);
}

function startGame(userSum) {
  totalSum = userSum;
  if (userSum <= 20) {
    message = "You're still in";
    messageEl.textContent = message;
    another_card.removeAttribute('hidden');
  } else if (userSum === 21) {
    hasBlackjack = true;
    message = 'You won!';
    messageEl.textContent = message;
    another_card.setAttribute('hidden', true);
    play_again.removeAttribute('hidden');
  } else {
    message = 'You lost.';
    messageEl.textContent = message;
    another_card.setAttribute('hidden', true);
    play_again.removeAttribute('hidden');
    isAlive = false;
    playing = false;
  }
}

function reset() {
  cards.textContent = '';
  cardSum.textContent = '';
}

function playAgain() {
  reset();
  const userCards = newCards();
  totalSum = userCards.sum;
  playButton.setAttribute('hidden', true);
  play_again.setAttribute('hidden', true);
  cards.textContent += `Cards: ${userCards.one}, ${userCards.two}`;
  cardSum.textContent += `Sum: ${userCards.sum}`;
  startGame(userCards.sum);
}

// if (hasBlackjack) {
//   console.log('Do you want to cash out?');
// } else if (isAlive) {
//   console.log('Do you want another card?');
// }

// console.log(message);
// console.log('add', '5' + 2); // adds them - string operation
// console.log('sub', '5' - 2); // subs them - math operation
// console.log('add', 2 + '5'); // adds them
// console.log('sub', 2 - '5'); // subs them - math operation
