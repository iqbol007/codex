// /**
//  * Все мы знаем о не явном привидении типов, и о том
//  * что в у не примитивных типов всегда берётся примитивное предстовление
//  * Например при матиматических операциях, значение могут быть следущими:
//  * [] -> '' or 0
//  * {} -> '[object Object]' or nothing
//  */

// // console.log("It's array " + array); // It's array 1,2,3,4,5
// // console.log(`It's array ${array}`); // It's array 1,2,3,4,5
// // console.log("It's array", +array); //  It's array NaN

// // Старый способ до появления Symbol
// let user01 = {
//   name: 'John',
//   money: 1000,

//   // для хинта равного "string"
//   toString() {
//     return `{name: '${this.name}'}`;
//   },

//   // для хинта равного "number" или "default"
//   valueOf() {
//     return this.money;
//   },
// };

// console.log(`${user01}`); // toString -> {name: "John"}
// console.log(+user01); // valueOf -> 1000
// console.log(user01 + 500); // valueOf -> 1500
// console.log(user01.toString()); // valueOf -> 1500

// /**
//  * Символ @toPrimitive принимает один параметр — hint, которым может быть
//  * number, string или default. hint указывает на тип возвращаемого значения.
//  * С помощю него мы можем усовершенствовать стандартное переобразование
//  * массива в примитивный вид:
//  */
// const array = [1, 2, 3, 4, 5];

// function arrayToPrimitive(hint) {
//   if (hint === 'number') {
//     return this.reduce((x, y) => x + y);
//   } else if (hint === 'string') {
//     return `[${this.join(', ')}]`;
//   } else {
//     // hint имеет значение по умолчанию
//     return this.toString();
//   }
// }

// array[Symbol.toPrimitive] = arrayToPrimitive;

// // преобразование по умолчанию. hint имеет значение default
// // console.log('array elements: ' + array); // array elements: 1,3,5
// // преобразуем массив в строку. hint является строкой
// // console.log(`array is ${array}`); // array is [1, 3, 5]
// // преобразуем массив в число. hint является числом
// // console.log(+array); // 9

// /**
//  * Метод @@toPrimitive используется для представления объекта в виде примитивного типа:
//  *
//  * При использовании оператора нестрогого (абстрактного) равенства: object == primitive
//  * При использовании оператора сложения/конкатенации: object + primitive
//  * При использовании оператора вычитания: object — primitive
//  * В различных ситуациях преобразования объекта в примитив: String(object), Number(object) и т.д.
//  * Алгоритм преобразований к примитивам следующий:
//  * Сначала вызывается метод obj[Symbol.toPrimitive](hint), если он существует.
//  * Иначе, если хинт равен "string"
//  *    происходит попытка вызвать obj.toString(), затем obj.valueOf(), смотря что есть.
//  * Иначе, если хинт равен "number" или "default"
//  * происходит попытка вызвать obj.valueOf(), затем obj.toString(), смотря что есть.
//  */

console.log('7110 / 100 * 100 === 7110', (7110 / 100) * 100);

console.log('7130 / 100 * 100 === 7130', (7130 / 100) * 100 === 7130);
