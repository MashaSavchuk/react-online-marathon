// 6.	Suppose, you have an array of students:
// Припустимо, у вас є маса студентів:
// let students = [{
//   name: 'Anna',
//   languages: ['English', 'Ukrainian'],
//   age: 21
// }, {
//   name: 'Bob',
//   languages: ['Polish', 'Spanish'], 
//   age: 26 
// }, { 
//   name: 'Alice', 
//   languages: ['Italian', 'Russian'], 
//   age: 18 
// }]

// Please, implement a function getLanguages.
// The function takes an array of students as a first parameter and a condition on a student (function) getLanguages should return an array of languages from 
// students that satisfy a condition.
// Будь ласка, реалізуйте функцію getLanguages.
// Функція приймає масив студентів як перший параметр і умова для учня (функція) getLanguages повинен повернути масив мов від студентів, які задовольняють умові.

// For example:
// getLanguages(students, student => student.age < 26) should return
// ['English', 'Ukrainian',  'Italian', 'Russian']

// getLanguages(students, student => student.name === 'Alice') should return
// ['Italian', 'Russian']

// getLanguages(students) should return
// ['English', 'Ukrainian','Polish', 'Spanish', 'Italian', 'Russian']

//розвязок
const getLanguages = (students, condition = student => true) => {
    return students.reduce((accumulator, currentStudent) =>
        condition(currentStudent) ?
        [...accumulator, ...currentStudent.languages] : accumulator
        , []);
};

// перевірка
// console.log(getLanguages(students, student => student.age < 26));
// console.log(getLanguages(students, student => student.name === 'Alice'));
// console.log(getLanguages(students));
