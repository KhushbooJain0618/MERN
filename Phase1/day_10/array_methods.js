let a1 = [11, 12, 13];
let a2 = [21, 22, 23];
let a3 = [31, 32, 33];

let newArray = a1.concat(a2, a3);
console.log(newArray); // Output: [11, 12, 13, 21, 22, 23, 31, 32, 33]

let arr = [40, 50, 60, 70, 80];
arr.unshift(30); // Adds 30 at the beginning of the array
console.log(arr); // Output: [30, 40, 50, 60, 70, 80]

arr.shift(); // Removes the first element (30) from the array
console.log(arr); // Output: [40, 50, 60, 70, 80]

let numbers = [20, 50, 70, 80, 40];
let index = numbers.indexOf(70); // Finds the index of 70 in the array
console.log(index); // Output: 2

let fruits = ['apple', 'banana', 'cherry', 'date'];
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ['banana', 'cherry']

console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']



