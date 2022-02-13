// /**
//  * По умолчанию оператор obj instanceof Constructor проверяет, имеется ли в
//  * цепочке прототипов obj объект Constructor.prototype. Рассмотрим пример:
//  */
// function Constructor() {
//   // ...
// }
// const obj1 = new Constructor();
// const objProto = Object.getPrototypeOf(obj1);

// objProto === Constructor.prototype; // true
// obj1 instanceof Constructor; // true
// obj1 instanceof Object; // true
// /**
//  * К счастью, у нас имеется возможность определить метод @@hasInstance для
//  * изменения поведения instanceof. obj instanceof Type является эквивалентом Type[Symbol.hasInstance](obj).
//  */
// class Iterable {
//   static [Symbol.hasInstance](obj) {
//     if (typeof obj[Symbol.iterator] === 'undefined') {
//       console.log('is not iterable');
//     }
//     return typeof obj[Symbol.iterator] === 'function';
//   }
// }

// const arr = [1, 3, 5];
// const str = 'Hi';
// const num = 21;

// // console.log(arr instanceof Iterable); // true
// // console.log(str instanceof Iterable); // true
// // console.log(num instanceof Iterable); // false

// class A {
//   static [Symbol.hasInstance](obj) {
//     console.log(obj);
//     return obj.__proto__.__proto__ === this.prototype;
//   }
// }
// class B extends A {
//   static [Symbol.hasInstance](obj) {
//     return obj.__proto__.__proto__ === this.prototype;
//   }
// }
// class C extends B {}

// const objC = new C();

// console.log(objC instanceof A);

class A {
  static [Symbol.hasInstance](obj) {
    return obj.__proto__ === this.prototype;
  }
}

const a = new A();

console.log(a instanceof A);

class K extends A {
  static [Symbol.hasInstance](obj) {
    return obj.__proto__ === this.prototype;
  }
}

const k = new K();

console.log(k instanceof A);
