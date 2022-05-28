// // #############################################################

function* generateSequence() {
  yield 1;
  yield 2;
  yield* [1, 2, 4];
  return;
}

let generator = generateSequence();

console.log(generator); // [object Generator]

console.log(generator.next()); // {value: 1, done: false}

console.log([...generateSequence()]); // [1, 2, 3]

// #############################################################

// // yield

function* gen() {
  let ask1 = yield '2 + 2 = ?';

  console.log(ask1); // 4

  let ask2 = yield '3 * 3 = ?';

  console.log(ask2); // 9
}

let generator2 = gen();

console.log(generator2.next().value); // "2 + 2 = ?"

console.log(generator2.next(4).value); // "3 * 3 = ?"

console.log(generator2.next(9).done); // true

// // throw

// function* gen() {
//   try {
//     let result = yield '2 + 2 = ?'; // (1)

//     console.log(
//       'Выполнение программы не дойдёт до этой строки, потому что выше возникнет исключение'
//     );
//   } catch (e) {
//     console.log(e); // покажет ошибку
//   }
// }

// let generator3 = gen();

// let question = generator3.next().value;

// generator3.throw(new Error('Ответ не найден в моей базе данных')); // (2)
