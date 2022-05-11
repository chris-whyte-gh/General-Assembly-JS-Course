const rollDiceBtn = document.getElementById('roll-dice');

//instead of this
// function randomNumber(number) {
//   return Math.ceil(Math.random() * number);
// }

//this function will generate a number and classname and return both
const randomNumber = () => {
  const number = Math.ceil(Math.random() * 6);
  const className = `dice-${number}`;
  return { number, className };
}

//each item of the array, randomNumber function will run and the local variable number will store the value of number and className generated by randomNumber function.
const rollDice = () => {
  const dice = document.querySelectorAll('span'); //creates an array of all span elements
  dice.forEach(i => {
    const number = randomNumber();
    console.log(number);
    i.className = number.className; //picks the className property of current iteration and assigns it the value of .className stored on local variable const in previous line
  });
}

rollDiceBtn.addEventListener('click', rollDice);