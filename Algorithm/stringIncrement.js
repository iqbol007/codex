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
 * solutions: https://www.codewars.com/kata/54a91a4883a7de5d7800009c/solutions/javascript
 * my solution:
 */
console.log(incrementString('foo'));
console.log(incrementString('foobar23'));
console.log(incrementString('foo0042'));
console.log(incrementString('foo9'));
console.log(incrementString('foo099'));
console.log(incrementString('0'));

function incrementString(string) {
  const [word, digit] = splitWordAndDigit(string);
  return word + calc(digit);
}

function splitWordAndDigit(string) {
  let str = '';
  let digit = 0;
  if (string) {
    if (string.match(/\D/g)) {
      str = string.match(/\D/g).join('');
    }
    digit = string.replace(/\D/g, '');
  }
  return [str, digit];
}

function getZeroIndex(string) {
  for (let i = 0; i < string.length; i++) {
    if (+string[i] !== 0) {
      return i;
    }
  }
}

function calc(string) {
  if (!string) {
    return 1;
  }
  if (!+string) {
    return string.slice(0, -1) + 1;
  }
  let nonZero = string.slice(getZeroIndex(string));
  let zeros = string.slice(0, getZeroIndex(string));
  const [prevLength, calculated, calculatedLength] = increment(nonZero);
  const isLengthChanged = prevLength !== calculatedLength;
  if (isLengthChanged) {
    const difference = calculatedLength - prevLength;
    const newZeros = zeros.slice(0, zeros.length - difference);
    return newZeros + calculated;
  } else {
    return zeros + calculated;
  }
}

function increment(number) {
  let prevLength = number.length;
  let calculated = String(+number + 1);
  let calculatedLength = calculated.length;
  return [prevLength, calculated, calculatedLength];
}
