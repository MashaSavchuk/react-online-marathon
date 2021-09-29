// 5.	Please, implement a function combineFunctions that takes any number of functions as an argument and returns a function that is a composition of the arguments.
// Будь ласка, реалізуйте функцію combFunctions, яка приймає будь -яку кількість функцій як аргумент і повертає функцію, яка є складом аргументів.
// For example:
// negate = function(x){ return -x; };
// halve = function(x){ return x / 2; };
// square = function(x){ return x * x; };
// double = function(x){ return 2 * x; };
// combineFunctions(negate, halve, square) should return a function square(halve(negate(x)))
// combineFunctions(negate, double) should return a functiondouble(negate(x)))

//розвязок
const combineFunctions = (...fns) => (initialVal) => fns.reduce((val, fn) => fn(val), initialVal); 

// перевірка
// console.log(combineFunctions(x => x + x, x => x - 1, x => x = -x, x => 'Hello, ' + x)(5)); // Hello, -9
