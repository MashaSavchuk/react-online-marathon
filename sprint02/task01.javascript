// 1.	The function filterByN receives an array of integers, a number and a parameter (greater, less). 
// Print a new array, where all elements will be greater/less than this number
// By default, the number is 0, the parameter is greater.
// Функція filterByN отримує масив цілих чисел, число та параметр (більший, менший). 
// Друк нового масиву, де всі елементи будуть більшими/меншими за це число
// За замовчуванням число 0, параметр більший.

//розвязок
const filterNums = (arr, num = 0, how = "greater") => { 
    return arr.filter(el => how == 'less' ? el < num : el > num);
}

//перевірка
// console.log(filterNums([-1, 2, 4, 0, 55, -12, 3], 11, 'greater'));  //[ 55]
// console.log(filterNums([-2, 2, 3, 0, 43, -13, 6], 6, 'less')); // [-2, 2, 3, 0, -13]
// console.log(filterNums([-2, 2, 3, 0, 43, -13, 6], -33, 'less')); //  []
// console.log(filterNums([-2, 2, 3, 0, 43, -13, 6])); // [2, 3, 43, 6]
// console.log(filterNums([-2, 2, 3, 0, 43, -13, 6], 23));  // [43]
