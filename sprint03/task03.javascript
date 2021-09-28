// 3. Create a Movie class, the constructor of which accepts 3 parameters: movie name, movie genre category and start year of startShow.
// The class has a watchMovie() method that returns a phrase and adds a movie name name parameter to it at the end. For example, "I watch the movie Titanic!"
// Create an instance of the movie1 class with the title of the movie "Titanic", the genre "drama" and 1997 release.
// Create an instance of the movie2 class with the title of the movie "Troya", the genre "historical" and the 2004 release.
// Створіть клас Movie, конструктор якого приймає 3 параметри: назву фільму, категорію жанру фільму та рік початку startShow.
// У класі є метод watchMovie (), який повертає фразу і додає до неї параметр назви фільму в кінці. Наприклад, "Я дивлюсь фільм Титанік!"
// Створіть екземпляр класу movie1 із назвою фільму "Титанік", жанром "драма" та випуском 1997 року.
// Створіть екземпляр класу movie2 з назвою фільму "Троя", жанром "історичний" та випуском 2004 року.

//розвязок
// const Checker = require('./Checker.js');
class Movie {
   constructor(name, category, startShow){
     this.name = name;
     this.category = category;
     this.startShow = startShow;
   }  
   watchMovie(){
     return `I watch the movie ${this.name}!`;
   }     
}
let movie1 = new Movie("Titanic", "drama", 1997);
let movie2 = new Movie("Troya", "historical", 2004);
