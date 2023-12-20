let firstName: string = "Dylan";
//firstName = 33;

const json = JSON.parse("55");

console.log(typeof json);

const names: string[] = []; //arrays

names.push("Dylan");
names.push("Sanjib");

const car: string[] = [];
//const car: readonly string[] = [];

car.push("Buggati");

console.log(car);
console.log(names);

const numbers = [1,2,3];

numbers.push(4);

console.log(numbers);

numbers.push("2");

let head: number = numbers[0];

console.log("the head is " + head);

let ourTuple: [number, string, boolean] = [33, "Sanjib", true];
//let ourTuple: readonly [number, string, boolean] = [33, "Sanjib", true];

ourTuple.push("another message");

console.log(ourTuple);

