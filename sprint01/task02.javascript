2. Write a function combineArray(arr1, arr2), which takes 2 arrays, and returns a new array consisting only of numeric elements of arrays arr1 and arr2.
Написати функцію combArray (arr1, arr2), яка бере 2 масиви та повертає новий   масив, що складається лише з числових елементів масивів arr1 та arr2.
Function example:
combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]));  // [12, 22, -8, 6, 15]

//розвязок
function combineArray(arr1, arr2){
  return (arr1.concat(arr2)).filter(Number.isInteger);
}

//перевірка
console.log(combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]));
console.log(combineArray([10, 20, 30], ["Data1", "Data2", "Data3", "Data4", "Data5"]));
console.log(combineArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
console.log(combineArray(['1', '2', '3', '4' ], ['first', 'second', 'third']));
