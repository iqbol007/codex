/**
 * @BY_YANDEX
 *
 * @const a = [1, 2, 3, 2, 0];
 * @const b = [5, 1, 2, 7, 3, 2];
 *
 * Нам нужно вернуть пересечение множеств, но с повторением элементов.
 *
 * Надо вернуть [1, 2, 2, 3] (порядок неважен)
 */

const a = [1, 2, 3, 2, 0];
const b = [5, 1, 2, 7, 3, 2];

function intersection(arr1, arr2) {
  let array1 = [];
  let array2 = [];
  let result = [];
  if (arr1.length <= arr2.length) {
    [array1, array2] = [arr2, arr1];
  } else {
    [array1, array2] = [arr1, arr2];
  }
  for (const iterator of array1) {
    if (array2.indexOf(iterator) !== -1) {
      result.push(iterator);
    }
  }
  return result.sort();
}

console.log(intersection(a, b));
