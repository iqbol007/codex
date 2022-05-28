// /**
//  * Протокол "Итерируемый" позволяет JavaScript объектам определять
//  * или настраивать поведение перебора, например, то какие значения
//  * перебираются в конструкции for..of. Некоторые встроенные типы,
//  * такие как Array или Map, имеют поведение перебора по
//  * умолчанию, в то время как другие типы (такие как Object) его не имеют
//  *
//  *
//  * Для того, чтобы объект был итерируемым, в нем должен быть реализован метод
//  * @@iterator, т.е. этот объект (или любой из объектов из его prototype chain)
//  * должен иметь свойство с именем Symbol.iterator
//  */

let rangeObj = {
  from: 1,
  to: 5,

  // for..of range вызывает этот метод один раз в самом начале
  [Symbol.iterator]() {
    // ...он возвращает перебираемый объект:
    // далее for..of работает только с этим объектом, запрашивая следующие значения
    return {
      current: this.from,
      last: this.to,
      // next() вызывается при каждой итерации цикла for..of
      next() {
        // нужно вернуть значение как объект {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// при переборе объекта range будут выведены числа от range.from до range.to

console.log(...rangeObj);

// /**
//  * Создание итерируемого объекта можно упростить с помощью функции-генератора.
//  * Данная функция возвращает объект Generator, соответствующий протоколу перебора.
//  */

class Fibonacci {
  constructor(n) {
    this.n = n;
  }

  *[Symbol.iterator]() {
    let a = 0,
      b = 1,
      index = 0;
    while (index < this.n) {
      index++;
      let current = a;
      a = b;
      b = current + a;
      yield current;
    }
  }
}

const sequence = new Fibonacci(6);
const numbers = [...sequence];
console.log(numbers); // [0, 1, 1, 2, 3, 5]
