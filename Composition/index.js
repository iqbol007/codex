// Composition

const a = (x) => x + 2;
const b = (x) => x * 3;

console.log(a(b(5))); // 17

///////////////////////////////////////////////////////////////////////////////////////////////

const upperCase = (str) => str.toUpperCase();
const exclaim = (str) => `${str}!`;
const repeat = (str) => `${str} `.repeat(3);

console.log(
  repeat(exclaim(upperCase('I love coding'))) // I LOVE CODING! I LOVE CODING! I LOVE CODING!
);

/////////////////////////////////////////////////////////////////////////////////////////////////

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const withСompose = compose(repeat, exclaim, upperCase);

console.log(withСompose('I love coding')); // I LOVE CODING! I LOVE CODING! I LOVE CODING!

//////////////////////////////////////////////////////////////////////////////////////////////////
