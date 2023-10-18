// Модуль 4. Занятие 8. Перебирающие методы массива
// Коллекция объектов для всех примеров с автомобилями
const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

console.table(cars);

// Example 1 - Метод map
// Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.

// Полная запись
// const getModels = cars => {
//   const models = cars.map(car => car.model);
//   return models;
// };

// Инлайн запись
// const getModels = cars => cars.map(car => car.model);

// console.table(getModels(cars));

//==================realization method.map()=====================

// const methodMap = (array, callback) => {
//   const newArray = [];

//   for (let i = 0; i < array.length; i += 1) {
//     const newItem = callback(array[i], i, array);
//     newArray.push(newItem);
//   }

//   return newArray;
// };

// Callback function выводит модели автомобилей
// const getModelsManual = function (car) {
//   return car.model;
// };

// => callback function
// const getModelsManual = car => car.model;

// console.table(methodMap(cars, getModelsManual));

// Инлайн запись
// console.table(methodMap(cars, car => car.model));

// Инлайн запись + Деструтуризация
// console.table(methodMap(cars, ({ model }) => model));

// ===============================================================================
// Example 2 - Метод map
// Пусть функция makeCarsWithDiscount возвращает новый массив объектов с изменным
// значением свойства price в зависимости от переданной скидки.

// const makeCarsWithDiscount = (cars, discount) => {
//   const carsWithDiscount = cars.map(car => ({
//     ...car,
//     price: car.price - car.price * discount,
//   }));

//   return carsWithDiscount;
// };

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

//==================realization method.map()=====================
// const methodMap = (array, callback) => {
//   const newArr = [];

//   for (let i = 0; i < array.length; i += 1) {
//     const newItem = callback(array[i], i, array);
//     newArr.push(newItem);
//   }
//   return newArr;
// };

// const calculateCarsPriceWithDiscount = car => {
//   const carPriceWithDiscount = {
//     ...car,
//     price: car.price - car.price * 0.2,
//   };

//   return carPriceWithDiscount;
// };

// console.table(methodMap(cars, calculateCarsPriceWithDiscount));
