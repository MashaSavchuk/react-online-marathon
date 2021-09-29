// 3.	Find the maximum interval between two consecutive numbers. Numbers are entered as arguments
// Знайдіть максимальний інтервал між двома послідовними числами. Числа вводяться як аргументи

//розвязок
const maxInterv = (...arr) => {
  let max = 0;
  let temp;

  for (let i = 0; i < arr.length - 1; i++) {
    temp = Math.abs(arr[i] - arr[i + 1]);
    max = Math.max(max, temp);
  }
  return max;
};

// //розвязок з reduce
const maxInterv = (...arr) => {
 return arr.reduce((acc, currentValue, index, array) => {
     let interval = array[index + 1] - currentValue;
     if (interval < 0) {
         interval = - interval;
     }
     return interval > acc ? interval : acc
 }, 0);
};

//перевірка
// console.log(maxInterv(3, 5, 2, 7)); //5
// console.log(maxInterv(3, 5, 2, 7, 11, 0, -2)); //11
// console.log(maxInterv(3, 5)); //2
// console.log(maxInterv(3)); //0
