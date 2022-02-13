function* foo() {
  yield 1;
  const args = yield 2;
  console.log(args);
}
var fooIterator = foo();
console.log(fooIterator.next().value); // выведет 1
console.log(fooIterator.next().value); // выведет 2
fooIterator.next('aParam'); // приведёт к вызову console.log внутри генератора и к выводу 'aParam'

/////////////////////////////////////////////////////////////////////////////////////////////////

// function request(url) {
//   return function (callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function (e) {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           callback(null, xhr.response);
//         } else {
//           callback(xhr.status, null);
//         }
//       }
//     };
//     xhr.ontimeout = function () {
//       console.log('timeout');
//     };
//     xhr.open('get', url, true);
//     xhr.send();
//   };
// }
// function* list() {
//   const userGet = 'https://jsonplaceholder.typicode.com/users';

//   const users = yield request(userGet);
//   yield users;
// }

// try {
//   const iterator = list();
//   iterator.next().value(function handleUsersList(err, users) {
//     if (err) throw err;
//     const list = JSON.parse(users);
//     iterator.next(list);
//   });
//   console.log('list', iterator.next().value);
// } catch (e) {
//   console.error(e);
// }
// function* gen() {
//   let ask1 = yield '2 + 2 = ?';

//   console.log(ask1); // 4

//   let ask2 = yield '3 * 3 = ?';

//   console.log(ask2); // 9
// }

// let generator = gen();

// console.log(generator.next().value); // "2 + 2 = ?"

// console.log(generator.next(4).value); // "3 * 3 = ?"

// console.log(generator.next(9).done); // true

function* gen() {
  let users = yield fetch('https://jsonplaceholder.typicode.com/users');

  for (let i = 0; i < users.length; i++) {
    yield users[i];
  }
}

let generator = gen();

generator
  .next()
  .value.then((r) => r.json())
  .then((r) => {
    generator.next(r);
  });

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
