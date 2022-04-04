/*
1. Create a function that accepts a temperature value in Fahrenheit and converts it to Celsius.
   Note: Equation to convert F to C:
   C = (F - 32) / 1.8
   Test your function.
2. Create a second function that accepts a temperature value in Celsius and converts it to Fahrenheit.
   Note: Equation to convert C to F:
   F = 1.8 * C + 32
   Test your function.
BONUS 1: Update your functions to use the value entered in the text box on the web page, and to perform calculations only when the appropriate button is clicked:
	1.  Set the value of the temp variable to the value of the element with the id value 'temperature'.
	    (Hint: read about the document.querySelector() method.)
	2.  Set the appropriate function to run when each button is clicked.
		(Hint: read about the addEventListener() method.)
BONUS 2: Display the result of each calculation in the browser window rather than in the console:
	1.  At the end of each function, set the text of the element with the id value 'result' to the same text string you were previously logging to the console.
BONUS 3: Clear the contents of the text box after you've displayed your results, so a user can easily enter another temperature to convert. (Hint: Read about the 'value' property in JavaScript. What string value could you assign as the value of an input box that would give it no content to display?)
*/

'use strict';

const temp = 72;
// Step 1: Convert F to C
function convertFToC(temp) {
  console.log((temp - 32)/1.8);
}

convertFToC(temp);

//Step 2: Convert C to F
function convertCToF(temp) {
  console.log((1.8 * temp + 32));
}

convertCToF(temp);

//Bonus 1 - Still working on this, but wanted to submit before class
// document won't work in Node.js, so use browser 😎

//Using let since it can be changed by the user (I think that's how it works).
const userTempString = document.querySelector('#temperature');
const userTemp = parseInt(userTempString);
console.log(userTemp);


function convertUserFToC(userTemp) {
  console.log((userTemp - 32) / 1.8);
}

function convertUserCToF(userTemp) {
  console.log((1.8 * userTemp + 32));
}
//Is querySelector preferred over getElementById?
const buttonFToC = document.querySelector('#fahrenheit_to_celsius');
const buttonCToF = document.querySelector('#celsius_to_fahrenheit')

buttonFToC.addEventListener('click', convertUserFToC);
buttonCToF.addEventListener('click', convertUserCToF);


// buttonCToF.addEventListener('click', (userTemp) => convertCToF(function () {
//    console.log((1.8 * temp + 32));
// }));