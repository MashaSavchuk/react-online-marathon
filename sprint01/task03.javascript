3.	Implement the longestLogin(loginList) function, which takes an array of user logins loginList  and returns the longest login. If the logins of the same length are the longest in the array, the login element with the largest index is returned. Tip: You can use the reduce() method to solve the task.
Реалізуйте функцію LongLogin (loginList), яка бере масив входів користувачів loginList і повертає найдовший логін. Якщо входи однакової довжини є найдовшими в масиві, повертається елемент входу з найбільшим індексом. Порада: Ви можете використати метод reduce () для вирішення завдання.
Function examples:
longestLogin(["serg22", "tester_2", "Prokopenko", "guest"]);   //  Prokopenko
longestLogin(["user1", "user2", "333", "user4", "aa"]);   //  user4

//розвязок
function longestLogin(loginList){
  var longestWord = loginList.reduceRight(function(longest, currentWord) {
    if(currentWord.length > longest.length)
       return currentWord;
    else
       return longest;
  }, "");

  return longestWord;
}

//перевірка
console.log(longestLogin(["maxxx", "NewUser", "admin111" , "Administrator"]));
console.log(longestLogin(["User123", "Steven Dobson", "qwerty12345"]));
console.log(longestLogin(["Carl1999", "ivan@gmail.com", "nick-name"]));
console.log(longestLogin(["user1", "user2", "333", "user4", "aa"]));
console.log(longestLogin(["larian", "questttt", "longest_user_name", "Nick Nickson"]));
