'use strict';
//const

const randomNumber = getRandomNumber(100);
console.log('El número aleatorio es', randomNumber);
const button = document.querySelector('.js-btn');
const textHint = document.querySelector('.js-hint');
const textCounter = document.querySelector('.js-counter');
const inputNumber = document.querySelector('.js-input');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
//counter
let counter = 0;
function writeTextCounter() {
  textCounter.innerHTML = `Número de intentos:` + (counter += 1);
}
//attempts
function writeNumber() {
  let writeHint = '';
  const number = parseInt(inputNumber.value);
  if (number <= 1 || number > 100) {
    writeHint = 'El número debe estar entre 1 y 100';
  } else if (number === randomNumber) {
    writeHint = '¡¡¡Has ganado campeona!!!';
  } else if (number > randomNumber) {
    writeHint = 'Demasiado alto';
  } else if (number < randomNumber) {
    writeHint = 'Demasiado bajo';
  } else if (number !== number) {
    writeHint = 'Tienes que introducir un número';
  }
  textHint.innerHTML = writeHint;
}

//function to handle listener
function handleClickButton(event) {
  event.preventDefault();
  writeTextCounter();
  writeNumber();
}

//event listener
button.addEventListener('click', handleClickButton);
