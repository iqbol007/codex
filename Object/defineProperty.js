// Object descriptors

function createCounter() {
  const obj = {};
  var count = 0;
  Object.defineProperty(obj, "count", {
    get: function () {
      return count++;
    },
    set: function (v) {
      count = v;
      return true;
    },
    configurable: true,
    enumerable: true,
  });
  return obj;
}

const newCounter = createCounter();

console.log(newCounter.count); // 0
console.log(newCounter.count); // 1

console.log(Object.getOwnPropertyDescriptor(newCounter, "count"));

// {
//   get: [Function: get],
//   set: [Function: set],
//   enumerable: true,
//   configurable: true
// }