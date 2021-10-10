// 1. Add two pairs to localStorage:
// 1.	key: "login", value: "Tom12!"
// 2.	key: "token", value: "QhuR56Rw"

//розвязок
  const localStorage = require("./localStorage.js");
  localStorage.setItem("login", "Tom12!");
  localStorage.setItem("token", "QhuR56Rw");

//перевірка 
// console.log(localStorage.getItem("login") === "Tom12!");
// console.log(localStorage.getItem("token") === "QhuR56Rw");
// console.log(localStorage.length === 2);
