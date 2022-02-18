/**
 * Your job is to write a function which increments a string, to create a new string.
 * If the string already ends with a number, the number should be incremented by 1.
 * If the string does not end with a number. the number 1 should be appended to the new string.
 * Examples:
 * foo -> foo1
 * foobar23 -> foobar24
 * foo0042 -> foo0043
 * foo9 -> foo10
 * foo099 -> foo100
 * Attention: If the number has leading zeros the amount of digits should be considered.
 */

// function incrementString(string) {
//   const [word, digit] = splitWordAndDigit(string);
//   const last = digit.slice(-1);
//   if (digit.length === 1) {
//     if (+last === 9) {
//       return word + 10;
//     } else {
//       return word + (+digit + 1);
//     }
//   }
//   const twoLast = digit.slice(-2);
//   if (+twoLast === 99) {
//     if (digit.length === 2) {
//       return word + 100;
//     }
//     return;
//   }
//   return word + (digit.slice(-2) + (twoLast + 1));
// }

// function splitWordAndDigit(string) {
//   return [string.match(/\D/g).join(''), string.replace(/\D/g, '')];
// }

// console.log(incrementString('foo'));

const calc = (str) => {
  return str.split('');
};

console.log(calc('001'));
