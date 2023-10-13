// //** Функция с побочными эффектами */
// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// // Произошла мутация исходных данных - массива numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

// // Чистая функция (pure function)/
// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функция вернула новый массив с изменёнными данными
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// =====================================Метод map()====================================
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// console.log(planets);

// const planetsInUpperCase1 = planets.map(str => str.toUpperCase());
// console.log(planetsInUpperCase1);

// {
//   // =================Реалізація методу==================================
//   const arrayMap = (array, callback) => {
//     const newArr = [];
//     for (let i = 0; i < array.length; i += 1) {
//       const newElement = callback(array[i], i, array);
//       newArr.push(newElement);
//     }

//     return newArr;
//   };

//   const strToUpperCase = str => str.toUpperCase();
//   const planetsInUpperCase2 = arrayMap(planets, strToUpperCase);
//   console.log(planetsInUpperCase2);
// }

// =====================================Метод flatMap()====================================
// const students = [
//   { name: 'Mango', courses: ['математика', 'физика'] },
//   { name: 'Polly', courses: ['информатика', 'математика'] },
//   { name: 'Kiwi', courses: ['физика', 'биология'] },
//   { name: 'Alpha', courses: 'математика' },
// ];

// const studentsCourses1 = students.map(student => student.courses);
// console.log(studentsCourses1);

// const studentsCourses2 = students.flatMap(student => student.courses);
// console.log(studentsCourses2);

// {
//   // =================Реалізація методу==================================
//   const arrayFlatMap = (array, callback) => {
//     const newArr = [];

//     for (let i = 0; i < array.length; i += 1) {
//       const newItem = callback(array[i], i, array);
//       if (Array.isArray(newItem)) {
//         for (const item of newItem) {
//           newArr.push(item);
//         }
//       } else {
//         newArr.push(newItem);
//       }
//     }

//     return newArr;
//   };

//   const studentsCourses = arrayFlatMap(students, student => student.courses);
//   console.log(studentsCourses);
// }

// =====================================Метод filter()====================================

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value > 0);
// console.log(positiveValues);

// {
//   // =================Реалізація методу==================================
//   const arrayFilter = (array, callback) => {
//     const newArr = [];
//     for (let i = 0; i < array.length; i += 1) {
//       const isSelected = callback(array[i], i, array);

//       if (isSelected) {
//         newArr.push(array[i]);
//       }
//     }

//     return newArr;
//   };

//   console.log(arrayFilter(values, value => value > 0));
// }

// =====================================Метод find()====================================

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// console.log(colorPickerOptions.find(option => option.label === 'blue')); // { label: 'blue', color: '#2196F3' }
// console.log(colorPickerOptions.find(option => option.label === 'pink')); // { label: 'pink', color: '#E91E63' }
// console.log(colorPickerOptions.find(option => option.label === 'white')); // undefined

// =================Реалізація методу==================================
// {
//   const arrayFind = (array, callback) => {
//     let serchedElement;

//     for (let i = 0; i < array.length; i += 1) {
//       if (callback(array[i], i, array)) {
//         serchedElement = array[i];
//         break;
//       }
//     }

//     return serchedElement;
//   };

//   console.log(arrayFind(colorPickerOptions, option => option.label === 'blue'));
// }

//  =====================================Метод findIndex()====================================

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// console.log(colorPickerOptions.findIndex(option => option.label === 'pink')); // 3
// console.log(colorPickerOptions.findIndex(option => option.label === 'blue')); // 2
// console.log(colorPickerOptions.findIndex(option => option.label === 'white')); // -1

// {
//   // =================Реалізація методу==================================
//   const arrayFindIndex = (array, callback) => {
//     let serchedIndex;

//     for (let i = 0; i < array.length; i += 1) {
//       if (callback(array[i], i, array)) {
//         serchedIndex = i;
//         break;
//       }
//     }

//     return serchedIndex;
//   };

//   console.log(
//     arrayFindIndex(colorPickerOptions, option => option.label === 'blue'),
//   );
// }

//  =====================================Метод every()====================================
// // Все элементы больше либо равны нулю? - да
// [1, 2, 3, 4, 5].every(value => value >= 0); // true

// // Все элементы больше либо равны нулю? - нет
// [1, 2, 3, -10, 4, 5].every(value => value >= 0); // false

// {
//   // =================Реалізація методу==================================
//   const arrayEvery = (array, callback) => {
//     let result = true;
//     for (let i = 0; i < array.length; i += 1) {
//       if (!callback(array[i], i, array)) {
//         result = false;
//         break;
//       }
//     }

//     return result;
//   };

//   console.log(arrayEvery([1, 2, 3, 4], value => value >= 0));
// }

//=====================================Метод some()====================================
// // Есть хотя бы один элемент больше либо равный нулю? - да
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Есть хотя бы один элемент больше либо равный нулю? - да
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Есть хотя бы один элемент меньше нуля? - нет
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Есть хотя бы один элемент меньше нуля? - да
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// {
//   // =================Реалізація методу==================================
//   const arraySome = (array, callback) => {
//     let result = false;
//     for (let i = 0; i < array.length; i += 1) {
//       if (callback(array[i], i, array)) {
//         result = true;
//         break;
//       }
//     }

//     return result;
//   };

//   // Есть хотя бы один элемент больше либо равный нулю? - да
//   console.log(arraySome([1, 2, 3, 4], value => value >= 0));

//   // Есть хотя бы один элемент больше либо равный нулю? - да
//   console.log(arraySome([-7, -20, 3, -10, -14], value => value >= 0));

//   // Есть хотя бы один элемент меньше нуля? - нет
//   console.log(arraySome([1, 2, 3, 4, 5], value => value < 0));

//   //  Есть хотя бы один элемент меньше нуля? - да
//   console.log(arraySome([1, 2, 3, -10, 4, 5], value => value < 0));
// }
