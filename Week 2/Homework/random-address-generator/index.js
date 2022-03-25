'use strict';
/*
  Write code that generates random addresses
  Each time you run it, your program should log
  a new randomly-generated address to the console.

  Step 1:
    Create arrays that contain dummy data for each of the following:
    door number, street name, city name, and post code

  Step 2:
    Write code that randomly selects one item from each of these arrays, uses
    the selected values to construct a string containing a random address, and
    then logs the result to the console.

    HINT: You will need to use methods in JavaScript's Math object
    (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

  Step 3:
    Save your work, run the program in Node, and verify
    that a random address is logged.

  Step 4:
    Rerun the program again and verify that a different random address is logged.

  Example output:
    12 Dolphin Street, London , W11 2SE
*/

//Step 1: Created an array or objects to access each k:v pair
const addresses = [
  {
    door_number: 123,
    street_name: 'Fake Ave.',
    city_name: 'Atlanta',
    post_code: 12345,
  },
  {
    door_number: 4567,
    street_name: 'Politics Plaza',
    city_name: 'Washingon, DC',
    post_code: 90210,
  },
  {
    door_number: 321,
    street_name: 'Happy Circle',
    city_name: 'London',
    post_code: 338855,
  },
  {
    door_number: 1010,
    street_name: 'Wonderful Pl',
    city_name: 'Spain',
    post_code: 224466,
  },
  {
    door_number: 88220044,
    street_name: 'Santa Claus Lane',
    city_name: 'Mexico City',
    post_code: 10101,
  },
];

//Step 2 - random number generator
// const randomAddress = addresses[Math.floor(Math.random() * addresses.length)]
// console.log(randomAddress); //this just selects a random one

const randomNumber = () => {
  return Math.floor(Math.random() * addresses.length);
};
//console.log(randomNumber());

//console.log(addresses[(Math.floor(Math.random() * addresses.length))].door_number);
//console.log(addresses[(Math.floor(Math.random() * addresses.length))].street_name);
//console.log(addresses[randomNumber].city_name);
//console.log(addresses[randomNumber].post_code);

// console.log( //not using a function
//   addresses[Math.floor(Math.random() * addresses.length)].door_number +
//     ' ' +
//     addresses[Math.floor(Math.random() * addresses.length)].street_name +
//     ' ' +
//     addresses[Math.floor(Math.random() * addresses.length)].city_name +
//     ' ' +
//     addresses[Math.floor(Math.random() * addresses.length)].post_code,
// );


//using the function
console.log(
  addresses[randomNumber()].door_number +
    ' ' +
    addresses[randomNumber()].street_name +
    ' ' +
    addresses[randomNumber()].city_name +
    ' ' +
    addresses[randomNumber()].post_code
);


//Originally saved the function as a variable, but that gave me the same number each time, so it wasn't random. Making it a function did randomize the numbers. Is that the way to go?