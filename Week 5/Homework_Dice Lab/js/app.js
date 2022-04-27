/*

Create a page where every time the user hits the "Roll Dice"
button, the screen randomly updates the two dice. Review the HTML and CSS code
included in the starter code. You will need to write only JavaScript
code to complete this exercise.

1) Create code that does the following:
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
*/
const rollDiceBtn = document.getElementById('roll-dice');

function randomNumber(number) {
  return Math.ceil(Math.random() * number);
}

// const random1 = randomNumber(6);
// const random2 = randomNumber(6);

// console.log(random1, random2); //confirm they're random and different

// * combine 'dice-' and random1 to form the CSS class name to use for the first
//   die, firstDie
// const firstDieClass = 'dice-' + randomNumber(6);

// * combine 'dice-' and random2 to form the CSS class name to use for the second
//   die, secondDie
// const secondDieClass = 'dice-' + randomNumber(6);

// * get the first die by ID and update the CSS class name to firstDie
const firstClassId = document.getElementById('first-die')


// * get the first die by ID and update the CSS class name to secondDie
const secondClassId = document.getElementById('second-die')

// 2) Create code that runs the function you created whenever the button with the
//    ID value 'roll-dice' is clicked.

rollDiceBtn.addEventListener('click', function () {
  firstClassId.className = 'dice-' + randomNumber(6);
  secondClassId.className = 'dice-' + randomNumber(6);
});
