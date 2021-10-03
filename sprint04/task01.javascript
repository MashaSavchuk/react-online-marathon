// 1.	Implement the getPromise(delay, message) function, which takes an integer number delay  
// (between 0 and 2000) and string message and returns a Promise that waits for specified amount of time (using delay argument) and resolves with the message.
// Реалізуйте функцію getPromise (затримка, повідомлення), яка приймає цілочисельну затримку 
// (від 0 до 2000) та рядкове повідомлення та повертає обіцянку, яка очікує на певний проміжок часу (за допомогою аргументу затримки) і розв'язується разом із повідомленням.

//розвязок
function getPromise(delay, message) {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(console.log('messege'));
        }, 2000);
      });
}

//перевірка	
// getPromise(2000, "hello").then(function(data) {
//     console.log(data);
// });
// const end = Date.now() + 3000;
//   while (Date.now() < end) {
//     const muchCompute = 1 + 2 + 3;
// }

// getPromise(2000, "world").then(function(data) {
//     console.log(data);
// });
// const end = Date.now() + 3000;
//   while (Date.now() < end) {
//     const muchCompute = 1 + 2 + 3;
// }
