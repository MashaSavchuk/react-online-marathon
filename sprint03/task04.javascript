// 4. Implement the Student class, the constructor of which accepts 2 parameters fullName - the name and surname of the student, direction - the direction in which he studies.
// Create a showFullName() method that returns the student's first and last name.
// Create a nameIncludes(data) method that, using the showFullName() method, checks 
// for the text data argument in the student’s name and returns true if a match is found or false if not found.
// Create a static studentBuilder() method that returns a new instance of the class named ‘Ihor Kohut’ and the direction ‘qc’.
// Create a getter and setter direction() to read and specify the direction field.
// Create an instance of class stud1 named 'Ivan Petrenko' and direction 'web'.
// Create an instance of class stud2 named 'Sergiy Koval' and direction 'python'.
// Create an instance of the stud3 class named ‘Ihor Kohut’ and the direction ‘qc’ using the static studentBuilder() method.
// Реалізуйте клас Student, конструктор якого приймає 2 параметри fullName - ім’я та прізвище студента, напрямок - напрямок, у якому він навчається.
// Створіть метод showFullName (), який повертає ім’я та прізвище учня.
// Створіть метод nameIncludes (data), який за допомогою методу showFullName () перевіряє аргумент 
// текстових даних в імені учня і повертає true, якщо збіг знайдено, або false, якщо не знайдено.
// Створіть статичний метод studentBuilder (), який повертає новий екземпляр класу з назвою «Ігор Когут» та напрямок «qc».
// Створіть геттер та сетер -напрямок (), щоб прочитати та вказати поле напрямку.
// Створіть екземпляр класу stud1 з назвою 'Іван Петренко' та напрямок 'web'.
// Створіть екземпляр класу stud2 під назвою 'Сергій Коваль' та напрямок 'python'.
// Створіть екземпляр класу stud3 з назвою «Ігор Когут» та напрямок «qc» за допомогою статичного методу studentBuilder ().

// Usage example:
// const stud1 = new Student('Ivan Petrenko', 'web');
// stud1.nameIncludes('Ivan');   // true
// stud1.nameIncludes('Denysenko'); // false

//розвязок
class Student {
    constructor(fullName, direction) {
        this._fullName = fullName;
        this._direction = direction;
    }
    showFullName() {
        return this._fullName;
    }
    nameIncludes(data) {
        return this.showFullName().includes(data);
    }
    static studentBuilder() {
        return new Student("Ihor Kohut", "qc");
    }
    get direction() {
        return this._direction;
    }
    set direction(newDirection) {
        this._direction = newDirection;
    }
}
const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koval', 'python');
const stud3 = Student.studentBuilder();

//перевірка
// console.log(stud1.nameIncludes('Ivan'));
// console.log(stud1.nameIncludes('Petrenko'));
// console.log(stud1.nameIncludes('Ihor'));
// console.log(stud2.nameIncludes('Sergiy'));
// console.log(stud2.nameIncludes('Koval'));
// console.log(stud2.nameIncludes('Ivan'));
// console.log(stud3.nameIncludes('Ihor'));
// console.log(stud3.nameIncludes('Kohut'));
// console.log(stud3.nameIncludes('Petrenko'));
// console.log(stud1.showFullName());
// console.log(stud2.showFullName());
// console.log(stud3.showFullName());
// console.log(Student.studentBuilder());
// console.log(stud1.direction);
// console.log(stud2.direction);
// console.log(stud3.direction);
