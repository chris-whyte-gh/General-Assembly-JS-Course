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

//Bonus
// document won't work in Node.js, so test in the browser 😎
//Is querySelector preferred over getElementById?

//when the page loads, its already interpreting a function. but the value doesn't exist, so it is null

//await user input, then parse string into number. explicitly return value

function getUserTemp() {
  const userTempString = document.querySelector('#temperature').value; 
  const userTemp = parseInt(userTempString);
  return userTemp;
}

function convertUserFToC() {
  const userTempInF = (getUserTemp() - 32) / 1.8;
  console.log(userTempInF);
  results.innerText = `Here is your temperature in Fahrenheit: ${userTempInF}F`;
  clear();
}

function convertUserCToF() {
  const userTempInC = (1.8 * getUserTemp() + 32);
  console.log(userTempInC);
  results.innerHTML = `Here is your temperature in Celsius: ${userTempInC}C`;
  clear();
}

//identify button elements
const buttonFToC = document.querySelector('#fahrenheit_to_celsius');
const buttonCToF = document.querySelector('#celsius_to_fahrenheit')

//listen for button click, then run appropriate function
buttonFToC.addEventListener('click', convertUserFToC);
buttonCToF.addEventListener('click', convertUserCToF);

//Should these be at the top of the script?
//query for results element
const results = document.querySelector('#result')
//clear out value after user submits somethihg
const clear = () => {
  document.querySelector('#temperature').value = null
};