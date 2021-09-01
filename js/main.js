'use strict';

const randomNumber = getRandomNumber(100);
console.log('El número aleatorio es', randomNumber);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
