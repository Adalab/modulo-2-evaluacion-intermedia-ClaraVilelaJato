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
