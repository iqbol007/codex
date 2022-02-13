/**
 * Как статический метод реализуется в классе.
 * Как переопределить статический метод при наследовании
 * Как можно и как нельзя вызывать статические методы.
 */

class Triple {
  static #PRIVATE_STATIC_FIELD = 12; //can use it only in static methods

  static getField() {
    Animal.#PRIVATE_STATIC_FIELD += 12;
    return this.#PRIVATE_STATIC_FIELD;
  }

  
  static triple(n) {
    if (n === undefined) {
      n = 1;
    }
    return n * 3;
  }
}

class BiggerTriple extends Triple {
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}

console.log(Triple.triple()); // 3
console.log(Triple.triple(6)); // 18

var tp = new Triple();

console.log(BiggerTriple.triple(3));
// 81 (не затрагивается экземпляром родителя)

console.log(tp.triple());
// Выведет сообщение, что "tripple" не является
// функцией ('tp.tripple is not a function').
