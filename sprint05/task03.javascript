// 3.	Remove pair from localStorage with key: "name"

//розвязок
  const localStorage = require("./localStorageWithData.js");
  localStorage.removeItem("name");

//перевірка
// console.log(localStorage.length === 1);
// console.log(localStorage.getItem("age") === "25");
