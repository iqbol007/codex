// Метод @@toStringTag используется Object.prototype.toString()
// Спецификация определяет значения, возвращаемые Object.prototype.toString() по умолчанию, для многих типов
// https://262.ecma-international.org/6.0/#sec-object.prototype.tostring

console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
console.log(Object.prototype.toString.call(null)); // [object Null]
console.log(Object.prototype.toString.call([1, 4])); // [object Array]
console.log(Object.prototype.toString.call('Hello')); // [object String]
console.log(Object.prototype.toString.call(15)); // [object Number]
console.log(Object.prototype.toString.call(true)); // [object Boolean]
// Function, Arguments, Error, Date, RegExp и т.д.
console.log(Object.prototype.toString.call({})); // [object Object]
// Эти типы не имеют свойства Symbol.toStringTag,
// поскольку алгоритм Object.prototype.toString() оценивает их особым образом.

console.log('\n\n');

class SimpleClass {}

console.log(Object.prototype.toString.call(new SimpleClass())); // [object Object]

class MyTypeClass {
  constructor() {
    this[Symbol.toStringTag] = 'MyType';
  }
}

console.log(Object.prototype.toString.call(new MyTypeClass())); // [object Object]

const obj22 = {};

console.log(obj22[Symbol.toStringTag]);
