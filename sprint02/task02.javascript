// 2.	The user enters as arguments the number of seconds, minutes, hours, days, weeks, months, years. 
// Output how many seconds are in all this.
// All parameters are optional. Consider 30 days in a month
// Користувач вводить як аргументи кількість секунд, хвилин, годин, днів, тижнів, місяців, років.
// Виведіть, скільки секунд у всьому цьому.
// Усі параметри необов’язкові. Розглянемо 30 днів на місяць

//розвязок
const howMuchSec = (seconds = 0, minutes = 0, hours = 0, days = 0, weeks = 0, months = 0, years = 0) => {
  const secRes = {
    minute : 60,
    hour   : 3600,
    day    : 86400,
    week   : 604800,
    month  : 2592000,
    year   : 31104000
  };
  return seconds + minutes*secRes.minute + hours*secRes.hour + days*secRes.day + weeks*secRes.week + months*secRes.month + years*secRes.year;
}

//перевірка
// console.log(howMuchSec(12, 3)); //192
// console.log(howMuchSec(1, 33, 22)); //81181
// console.log(howMuchSec(1, 33, 22, 66)); 
// console.log(howMuchSec()); //0
// console.log(howMuchSec(12, 3, 3, 3)); 
// console.log(howMuchSec(33, 33, 11));
