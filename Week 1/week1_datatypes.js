let cheese = "brie";

cheese = "something else";

console.log(cheese);

const firstName = "Chris";
const lastName = "Whyte";

const fullName = firstName + " " + lastName;

console.log(fullName);

let age = 10;
age += 5;
console.log(age);
age -= 7;
console.log(age);

console.log(Math.floor(16.78));

console.log(Math.ceil(16.78));

console.log(Math.random());

console.log(Math.max(5, 10, 15, -20));

const personObject = { //const prevents redeclaring what personObject refers to, but not the contents of the object
  name: "Chris",
  age: 50,
  height: 25
}

let person2 = personObject; //refers to the same object

person2.age = 100; //modifies the object it refers to
console.log(personObject, person2); //modifies original object

person2.weight = 250;
console.log("This is the original person object with the modified properties and values:" + " " + JSON.stringify(personObject));

const names = [1, 2, 3];
console.log(names.length);
console.log(names[1]); //2