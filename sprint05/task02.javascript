// 2. Save object { name: "Tom", age: 25 } to localStorage with key: "user"

//розвязок
const localStorage = require("./localStorage.js");
 const user = {
    name: "Tom",
    age: 25,
 };
localStorage.setItem('user', JSON.stringify(user));

//перевірка 
// console.log(JSON.parse(localStorage.getItem("user")).name === "Tom");
// console.log(JSON.parse(localStorage.getItem("user")).age === 25);
// console.log(localStorage.length === 1);
