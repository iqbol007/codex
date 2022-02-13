'use strict';
/**
 * Строгий режим превращает некоторые прощавшиеся ранее ошибки в исключения.
 * JavaScript был разработан с расчётом на низкий порог вхождения, и временами он
 * придаёт заведомо ошибочным операциям семантику нормального кода. Иногда это
 * помогает срочно решить проблему, а иногда это создаёт худшие проблемы в будущем.
 * Строгий режим расценивает такие ошибки как ошибки времени выполнения, для того
 * чтобы они могли быть обнаружены и исправлены в обязательном порядке.
 *
 * Во-первых, строгий режим делает невозможным случайное создание глобальных переменных.
 * В обычном JavaScript опечатка в имени переменной во время присваивания приводит к
 * созданию нового свойства глобального объекта, и выполнение продолжается
 * (хотя в современном JavaScript оно, вероятно, аварийно завершится в дальнейшем).
 * Присваивания, которые могут случайно создать глобальную переменную, в строгом
 * режиме выбрасывают исключение:
 *
 */

jack = 12;

console.log(jack); // ReferenceError: jack is not defined

// (Если убрать use strict код выше сработает)

// Присваивание значения глобальной переменной, защищённой от записи
var undefined = 5; // выдаст TypeError
var Infinity = 5; // выдаст TypeError

// Присваивание значения свойству, защищённому от записи
var obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
obj1.x = 9; // выдаст TypeError

// Присваивание значения свойству, доступному только для чтения
var obj2 = {
  get x() {
    return 17;
  },
};
obj2.x = 5; // выдаст TypeError

// Задание нового свойства нерасширяемому объекту
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = 'ohai'; // выдаст TypeError

/**
 * Во-вторых, строгий режим заставляет присваивания, которые всё равно
 * завершились бы неудачей, выбрасывать исключения. Например, NaN -- глобальная
 * переменная, защищённая от записи. В обычном режиме присваивание
 * NaN значения ничего не делает; разработчик не получает никакого сообщения об ошибке.
 * В строгом режиме присваивание NaN значения выбрасывает исключение.
 * Любое присваивание, которое в обычном режиме завершается неудачей (присваивание значения
 * свойству, защищённому от записи; присваивание значения свойству, доступному только на чтение;
 * присваивание нового свойства нерасширяемому объекту), в строгом режиме выбросит исключение:
 */

// Присваивание значения глобальной переменной, защищённой от записи
var undefined = 5; // выдаст TypeError
var Infinity = 5; // выдаст TypeError

// Присваивание значения свойству, защищённому от записи
var obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
obj1.x = 9; // выдаст TypeError

// Присваивание значения свойству, доступному только для чтения
var obj2 = {
  get x() {
    return 17;
  },
};
obj2.x = 5; // выдаст TypeError

// Задание нового свойства нерасширяемому объекту
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = 'ohai'; // выдаст TypeError

/**
 * В-третьих, в строгом режиме попытки удалить неудаляемые свойства
 * будут вызывать исключения (в то время как прежде такая попытка просто не имела бы эффекта):
 */

delete Object.prototype; // выдаст TypeError
