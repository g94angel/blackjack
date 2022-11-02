const randomNumber1 = Math.floor(Math.random() * 10 + 2);
const randomNumber2 = Math.floor(Math.random() * 10 + 2);
const sum = randomNumber1 + randomNumber2;
let hasBlackjack = false;
let isAlive = true;

let message;

if (sum <= 20) {
  message = "You're still in";
} else if (sum === 21) {
  hasBlackjack = true;
  message = 'You won!';
} else {
  message = 'You lost.';
  isAlive = false;
}

// if (hasBlackjack) {
//   console.log('Do you want to cash out?');
// } else if (isAlive) {
//   console.log('Do you want another card?');
// }

console.log(message);
console.log('add', '5' + 2); // adds them - string operation
console.log('sub', '5' - 2); // subs them - math operation
console.log('add', 2 + '5'); // adds them
console.log('sub', 2 - '5'); // subs them - math operation
