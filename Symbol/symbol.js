//All you need to know about Symbol

// 1
// symbol always is unique
let s1 = Symbol('s');
let s2 = Symbol('s');

console.log('\n s1 === s2 is', s1 === s2);

//2
// symbol as key of object

const _password = Symbol('_password');

const user = {
  [_password]: 'secret',
};

console.log('\n user._password', user._password);
console.log('\n user[_password]', user[_password]);

/**
 * Символы, которые JavaScript обрабатывает особым образом, называются хорошо
 * известными символами (Well-known Symbols) spec: https://262.ecma-international.org/6.0/#sec-well-known-symbols.
 * Эти символы используются встроенными алгоритмами JavaScript.
 * Например,Symbol.iterator используется для перебора элементов массивов, строк.
 * Его также можно использовать для определения собственных функций-итераторов.
 */

/**
 * Использование хорошо известных символов в качестве ключей позволяет изменять поведение объектов.
 */

console.log(Object.getOwnPropertyNames(Symbol));
// [
//   'length',      'name',
//   'prototype',   'for',
//   'keyFor',      'asyncIterator',
//   'hasInstance', 'isConcatSpreadable',
//   'iterator',    'match',
//   'matchAll',    'replace',
//   'search',      'species',
//   'split',       'toPrimitive',
//   'toStringTag', 'unscopables'
// ]

/**
 * Он позволяет определять, как объект должен перебираться с помощью инструкции 
 * for-of или spread-оператора (и должен ли он перебираться вообще).
 */
