// Full Proxy
function Person() {}

const personProxy = new Proxy(Person, {
  /**
   * внутренний метод [[HasProperty]]
   * что вызывает: оператор @in
   */
  has(target, prop) {},
  /**
   * внутренний метод [[Get]]
   * что вызывает: чтение свойства
   */
  get(target, prop, receiver) {},
  /**
   * внутренний метод [[Set]]
   * что вызывает: запись свойства
   */
  set(target, prop, receiver) {},

  /**
   * внутренний метод [[Construct]]
   * что вызывает: оператор @new
   */
  construct(target, thisArg, newTarget) {},
  /**
   * внутренний метод [[Call]]
   * что вызывает: вызов функции
   */
  apply(target, thisArg, argArray) {},
  /**
   * внутренний метод [[DefineOwnProperty]]
   * что вызывает: Object.defineProperty, Object.defineProperties
   */
  defineProperty(target, prop, attributes) {},
  /**
   * внутренний метод [[Delete]]
   * что вызывает: оператор @delete
   */
  deleteProperty: (target, prop) => {},
  /**
   * внутренний метод [[GetOwnProperty]]
   * что вызывает: Object.getOwnPropertyDescriptor, for..in, Object.keys/values/entries
   */
  getOwnPropertyDescriptor(target, prop) {},
  /**
   * внутренний метод [[GetPrototypeOf]]
   * что вызывает: Object.getPrototypeOf
   */
  getPrototypeOf(target) {},
  /**
   * внутренний метод [[IsExtensible]]
   * что вызывает: Object.isExtensible
   */
  isExtensible(target) {},
  /**
   * внутренний метод [[OwnPropertyKeys]]
   * что вызывает: Object.getOwnPropertyNames, Object.getOwnPropertySymbols, for..in, Object.keys/values/entries
   */
  ownKeys(target) {},
  /**
   * внутренний метод [[PreventExtensions]]
   * что вызывает: Object.preventExtensions
   */
  preventExtensions(target) {},
  /**
   * внутренний метод [[SetPrototypeOf]]
   * что вызывает: Object.setPrototypeOf
   */
  setPrototypeOf(target, v) {},
});
