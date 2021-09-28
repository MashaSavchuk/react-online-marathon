// 1. Implement the getMin(arr) function, which takes an array of numbers arr and returns the smallest number 
// of the array. To solve the problem, you must use one of the methods to specify the context of this. 
// It is forbidden to use any cycles.
// Реалізуйте функцію getMin (arr), яка бере масив чисел arr і повертає найменше число масиву.
// Щоб вирішити проблему, потрібно використати один із методів, щоб визначити контекст цього. 
// Заборонено використовувати будь -які цикли.

//розвязок
function getMin(arr) {
  return Math.min.apply(null, arr);   
}

//або зі спред оператором
function getMin(arr) {
  return Math.min(...arr);   
}

//або з reduce
function getMin(arr) {
  return arr.reduce((prev, next) => prev > next ? next : prev);   
}

//перевірка
// console.log(getMin([12, 6, 22, 13, 7]));
// console.log(getMin([8, 0, 11, 24, 14, 9]));
// console.log(getMin([15, 26, 2, -3, 3, 33]));
// console.log(getMin([15, 0.26, 12, 8, 44, 22]));
// console.log(getMin([12, -10, 32, 0.5, -77, 0, -44]));
