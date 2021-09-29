// 4. The function takes any number of strings and returns the sum of their lengths.
// Функція бере будь -яку кількість рядків і повертає суму їх довжин.

//розвязок
const sumOfLen = (...str) => {
    return str.reduce((acc, el) => acc + el.length, 0); 
}

//розвязок
const sumOfLen = (...str) => str.join('').length; 
  
//розвязок
const sumOfLen = (...str) =>{
    const strSumOfLen = str.reduce(function(sum, current) {
      return sum + current.length;
    }, 0); 
    return strSumOfLen;
  }

//перевірка
// console.log(sumOfLen('hello', 'hi')); //7
// console.log(sumOfLen('hi')); //2
// console.log(sumOfLen()); //0
// console.log(sumOfLen('hello', 'hi', 'my name', 'is')); //16
// console.log(sumOfLen('hello', 'my name'));	
// console.log(sumOfLen('hello', 'my name', 'is'));	
// console.log(sumOfLen('hello', 'hi', 'my name', 'is'));
// console.log(sumOfLen('hello', 'hi', 'my name', 'is2'));
