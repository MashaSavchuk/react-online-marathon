// 2. We have the product() function, you can see it on the snapshot below. This product() function 
// finds the product of its arguments and also uses this object for the initial value of the product.
// Please, create a new function getProduct()  that, no matter how it is called, will be always bound 
// to a particular this value. getProduct() should be created from the original product() function and 
// work with the same logic, but should pass two additional arguments – 2 and 3 – to the original function, 
// every time getProduct() is called.
// Object this for getProduct() function you should also define by yourself. Look at snapshot for 
// clues what it should be.
// У нас є функція product (), її можна побачити на знімку нижче. Ця функція product () знаходить добуток 
// своїх аргументів, а також використовує цей об’єкт для початкового значення продукту.
// Будь ласка, створіть нову функцію getProduct (), яка, як би її не викликали, завжди буде прив’язана 
// до певного цього значення. getProduct () має бути створено з вихідної функції product () і працювати 
// з тією ж логікою, але має передавати два додаткові аргументи - 2 і 3 - до вихідної функції кожного разу, 
// коли викликається getProduct ().
// Заперечте цьому для функції getProduct (), яку ви також повинні визначити самостійно. 
// Подивіться на знімок, щоб дізнатися, що це має бути.

//розвязок
const product = function() {
  return [].reduce.call(arguments, function(res, elem) {
    return res * elem;
  }, this.product);
};
const contextObj = {
  product: 10
};
const getProduct = product.bind(contextObj, 2, 3);

//або 
// const getProduct = product.bind({product: 10}, 2, 3);

// //перевірка	
// console.log(getProduct(4, 5));
// console.log(getProduct(6, 7));
// console.log(getProduct(0, 7));
// console.log(getProduct(6, 0));
// console.log(getProduct(-5, 5));
