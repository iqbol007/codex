var x = 10;

function createFunction1() {
  var x = 20;
  return new Function('return x;'); // здесь |x| ссылается на глобальный |x|
}

function createFunction2() {
  var x = 20;
  function f() {
    return x; // здесь |x| ссылается на локальный |x| выше
  }
  return f;
}

function createFunction3() {
  return new Function(`
  let x = 0;
  for(let i = 0; i <= 100; i++){
    x+=i;
  }
  return x;
  `);
}

var f1 = createFunction1();
console.log(f1()); // 10
var f2 = createFunction2();
console.log(f2()); // 20
var f3 = createFunction3();
console.log(f3()); // 20

/**
 * Хотя этот код работает в браузерах, в окружении Node.js
 * вызов f1() приведёт к ошибке ReferenceError, потому что x не будет
 * найден. Это происходит из-за того, что область видимости верхнего уровня
 * в Node не является глобальной областью видимости, поэтому x ссылается
 * на локальную переменную в пределах текущего модуля.
 */
