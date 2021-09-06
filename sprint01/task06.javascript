6. Please, implement a function accountPatients that takes a count of free beds in a hospital and returns two functions:
the first one for adding a patient
the second one for discharging a patient
accountPatients should keep track of free beds in a hospital and every time when a patient is admitted or discharged, print the count to the console like in examples:
A patient was discharged, 54 beds are available
A patient was admitted, 34 beds are available
When there are no beds available, 
Can not admit a patient, no beds available should be printed
When there is an attempt to discharge a patient when there are no patients,
There are no patients to discharge should be printed
Будь ласка, реалізуйте функцію accountPatients, яка займає кількість вільних ліжок у лікарні та повертає дві функції:
перший для додавання пацієнта
другий - для виписки пацієнта
accountPatients повинні відстежувати вільні ліжка в лікарні і кожного разу, коли пацієнт надходить або виписується, друкує рахунок на консолі, як у прикладах:
Пацієнта виписали, є 54 ліжка
Пацієнт поступив, є 34 ліжка
Коли ліжок немає,
Не можу прийняти пацієнта, не слід надрукувати ліжка
При спробі виписати пацієнта, коли пацієнтів немає,
Немає пацієнтів для виписки, їх слід надрукувати

//розвязок
function accountPatients(freeBeds) {
  let freeBedsCounter = freeBeds;
    
  const admit = () => {
    if (freeBedsCounter < 1) {
      console.log("Can not admit a patient, no beds available");
    } else {
      freeBedsCounter -= 1;
      console.log(`A patient was admitted, ${freeBedsCounter} beds are available`);
    }
  };
  const discharge = () => {
    if (freeBedsCounter === freeBeds) {
      console.log("There are no patients to discharge");
    } else {
      freeBedsCounter += 1;
      console.log(`A patient was discharged, ${freeBedsCounter} beds are available`);
    }
  };
  return [admit, discharge];
}

//перевірка
const [admit, discharge] = accountPatients(100);
admit();
admit();
discharge();

const [admit, discharge] = accountPatients(3);
admit();
admit();
admit();
admit();
discharge();
discharge();
discharge();
discharge();
