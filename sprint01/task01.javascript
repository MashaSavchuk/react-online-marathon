1. Implement the getModifiedArray(array) function, which takes an arbitrary array, and returns an array with the value of the first element of the array equal to “Start”, the last element of the array equal to “End” and the rest of elements should be the same as in an initial array. The initial array should stay unchanged.
Реалізуйте функцію getModifiedArray (масив), яка приймає довільний масив і повертає масив зі значенням першого елемента масиву, що дорівнює “Start”, останній елемент масиву дорівнює “End” та решта елементів має бути таким же, як у початковому масиві. Початковий масив повинен залишатися незмінним.
Function example:
getModifiedArray([12, 6, 22, 0, -8])); // [‘Start’, 6, 22, 0, ‘End’]

//розвязок
function getModifiedArray(array) {
  const arr = [...array];
  arr[0] = 'Start';
  arr[arr.length - 1] = 'End';
  return arr;
}

//перевірка
console.log(getModifiedArray([12, 6, 22, 0, -8]));
console.log(getModifiedArray(["Kate", "Peter", "Mark", "Sam"]));
console.log(getModifiedArray([false, 10, 'mail', true, 20, 30]));
console.log(getModifiedArray([100, 200]));

const arr = [false, 10, 'mail', true, 20, 30];
getModifiedArray(arr)
console.log(arr);
  
const arr = [100, 200];
getModifiedArray(arr)
console.log(arr);

