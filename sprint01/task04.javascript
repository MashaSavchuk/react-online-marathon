// 4.	Implement the processArray(arr, factorial) function, which takes the first parameter of the array arr, and the second parameter the function factorial and processes each element of the array arr with the function factorial, returning a new array (the source array arr does not change)
// The function factorial(n) calculates and returns the factorial of the number n. For example factorial(4) returns 24.
// Реалізуйте функцію processArray (arr, factorial), яка приймає перший параметр масиву arr, а другий параметр - функціональний фактор і обробляє кожен елемент масиву arr з функцією factorial, повертаючи новий масив (вихідний масив arr не змінюється)
// Функція факториал (n) обчислює та повертає факториал числа n. Н-д, факториал (4) повертає 24.
// Example
// // determines the factorial of the number n
// function factorial(n) { // your code}; 
// processArray([1, 2, 3, 4, 5], factorial); // [1, 2, 6, 24, 120]

  //розвязок
function factorial(n) {
  if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
function processArray(arr, factorial) {
  return arr.map((item)=> factorial(item));
}
  
//розвязок
function factorial(n) {
    let res =  1;
    for (let i = 1; i <= n; i++ ){
      res *= i;
    }
    return res;
}
function processArray(arr, factorial) {
  return arr.map(factorial);
}
  
//перевірка
// console.log(processArray([1, 2, 3, 4, 5, 6], factorial));
// console.log(processArray([6, 5, 4, 3, 2, 1], factorial));
// console.log(processArray([0, 9, 4, 12], factorial));  
// console.log(processArray([9, 8, 13, 22], factorial));
// console.log(processArray([], factorial));
// const arr = [2, 4, 6];
// console.log(processArray(arr, factorial));
// console.log(arr);
