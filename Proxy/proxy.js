//################################################################################################
// Start Proxy
/**
 * Прокси – уникальное средство для настройки поведения объектов на самом низком уровне.
 */

let numbers = [1, 2, 3];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // значение по умолчанию
    }
  },
});

console.log(numbers[1]); // 1
console.log(numbers[123]); // 0 (нет такого элемента)

//################################################################################################

// Обман Object.keys
let proxyKeys = {};

proxyKeys = new Proxy(proxyKeys, {
  ownKeys(target) {
    // вызывается 1 раз для получения списка свойств
    return ['a', 'b', 'c'];
  },

  getOwnPropertyDescriptor(target, prop) {
    // вызывается для каждого свойства
    return {
      enumerable: true,
      configurable: true,
      /* ...другие флаги, возможно, "value: ..." */
    };
  },
});

console.log(Object.keys(proxyKeys)); // a, b, c

//################################################################################################
// Has
let range = {
  start: 1,
  end: 10,
};

customRange2 = new Proxy(customRange2, {
  has(target, prop) {
    return prop >= target.start && prop <= target.end;
  },
});

console.log(5 in customRange2); // true
console.log(50 in customRange2); // false
