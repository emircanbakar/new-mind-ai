"use strict";
// var isSmoking // hoisting
// console.log('script is executed from script.js');
// alert('hello')

/* const pElement = document.getElementById('text');

console.log('pElement', pElement);

let name = 'patika';

console.log('jQuery', jQuery); */

/* var username = 'Caglayan';

let age = 29;

const lastname = 'Yanikoglu';

username = 'Mehmet';
age = 15;
// lastname = 'Deniz';

console.log(username);
console.log(age);
console.log(lastname); */

/* for (let i = 0; i < 5; i++) {
} */
/* for (var i = 0; i < 5; i++) {
}

console.log(i); */

// let isSmoking = false;
/* console.log(isSmoking);
var isSmoking = false;
var isSmoking = true; */

// 1. var and let can change. const can not.
// 2. let and const came with EC6 EcmaScript
// 3. var is global, let and const exist in only scope
// 4. Hoisting

/* const getNameArrow = () => {
  console.log('get name');
  console.log(name);
} */

// getName();
// getNameArrow();

/* function getName(name = 'caglayan') { // Hoisting
  console.log('get name');
  console.log(name);
}
 */

// string (primitive)
/* let name = 'caglayan';
const lastname = "yanikoglu";

const company = `Jotform`;

console.log(typeof name);
console.log(typeof lastname);
console.log(typeof company);

// number (primitive)
console.log('###');
const age = 15;
console.log(typeof age);

// boolean (primitive)
const isSmoking = false;
const isDriving = true;

console.log('###');

console.log(typeof isSmoking);
console.log(typeof isDriving);
 
// null and undefined
console.log('###');
var hobbies;

const car = null;
console.log(typeof hobbies);
console.log(typeof car);

// object (reference types) 
const user = {
  name: 'mehmet',
  age: 25
}

console.log(user);
console.log(typeof user);

// array (reference types) 
const users = ['yusuf', 'kaan', 'sefa'];

console.log(users);
console.log(typeof users); */

// primitive vs reference

/* let name = 'mehmet';

let nameCopy = name;

console.log('name', name);;
console.log('nameCopy', nameCopy);

nameCopy = 'yusuf';

console.log('###');
console.log('name', name);;
console.log('nameCopy', nameCopy); */

//

/* const users = ['nikolay', 'yusuf', 'özge'];

const copyUsers = users;

console.log('users', users);
console.log('copyUsers', copyUsers);

copyUsers.push('sefa'); // mutation

console.log('###');
console.log('users', users);
console.log('copyUsers', copyUsers); */

/* const users = ['nikolay', 'yusuf', 'özge'];

const copyUsers = [...users]; // ... -> EC6 spread..

console.log('users', users);
console.log('copyUsers', copyUsers);

copyUsers.push('sefa'); // mutation

console.log('###');
console.log('users', users);
console.log('copyUsers', copyUsers); */

const user = {
  name: "nikolay",
  age: 15,
  company: {
    name: "google",
  },
};

// DEEP VS SHALLOW COPY

// SHALLOW COPY
/* const copyUser = { ...user }; // ... -> EC6 spread..

console.log('user', user);
console.log('copyUser', copyUser);

copyUser.name = 'mehmet';
copyUser.company.name = 'amazon';

console.log('###');
console.log('user', user);
console.log('copyUser', copyUser); */

// DEEP COPY
// const copyUser = JSON.parse(JSON.stringify(user)); //  old school
/* const copyUser = structuredClone(user);

console.log('user', user);
console.log('copyUser', copyUser);

copyUser.name = 'mehmet';
copyUser.company.name = 'amazon';

console.log('###');
console.log('user', user);
console.log('copyUser', copyUser); */

/* const age = 19;
const canDrive = age > 18;
console.log(canDrive);

if (age > 18) {
  console.log('can drive')
} else {
  console.log('can not drive')
}
 */

/* const university = 'ankara';

switch (university) {
  case 'odtü':
    console.log('it is odtü');
    break
  case 'ankara':
    console.log('it is ankara');
    break
  default:
    console.log('none of them');
    break
} */

/* for (let i = 0; i <= 10; i++) {
  console.log(i);
} */
/* 
let count = 0;

while(count < 5) {
  console.log(' count it ', count);
  count = count + 1;
}
 */

/* let name = 'nikolay';

let greetingWord = 'Hello';

console.log(`${greetingWord} ${name}!`)

let name2 = 'cihat';

let greetingWord2 = 'selamlar';

console.log(`${greetingWord2} ${name2}!`) */

/* function sayGreetings(greetingWord, name) {
  console.log(`${greetingWord} ${name}!`)
} */

/* const sayGreetings = function(greetingWord, name) {
  console.log(`${greetingWord} ${name}!`)
} */

/* const sayGreetings = (greetingWord, name) => {
  console.log(`${greetingWord} ${name}!`)
}

sayGreetings('Hello', 'Nikolay');
sayGreetings('Hi', 'Yaşar'); */

// const users = ['emircan', 'furkan', 'hasan'];

/* const numbers = [1, 2, 3, 4, 5];

numbers.push(10);

// numbers.pop()

console.log(numbers);
console.log(numbers.length);
// console.log(numbers[3]);

console.log('##'); */

/* for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

console.log('##'); */

const numbers = [1, 2, 3, 4, 5];
/* numbers.forEach(item => {
  console.log(item);
})

console.log('##');

const doubleNumbers = numbers.map(item => {
  return item * 2;
})

console.log(numbers);
console.log(doubleNumbers); */

/* const oddNumbers = numbers.filter(number => {
  if (number % 2 === 0) {
    return false;
  }
  return true;
}) */
/* 
const oddNumbers = numbers.filter(number => number % 2 !== 0).map(item => item * 10)
console.log(oddNumbers.includes(10))

console.log(oddNumbers);

 */