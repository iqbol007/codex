/**
 * @BY_YANDEX
 *
 * Дан список интов, повторяющихся элементов в списке нет.
 * Нужно преобразовать это множество в строку, сворачивая соседние по числовому ряду числа в диапазоны.
 * Примеры:
 * [1,4,5,2,3,9,8,11,0] => "0-5,8-9,11"
 * [1,4,3,2] => "1-4"
 * [1,4] => "1,4"
 */
// не работает((
const range = (arr = []) => {
  const sorted = [...arr].sort((a, b) => a - b);
  let slice = [];
  let res = [];
  for (let i = 0; i < sorted.length; i++) {
    if (!slice.length) {
      slice.push(sorted[i]);
    } else {
      const max = slice[slice.length - 1];
      if (max + 1 < sorted[i]) {
        res.push(slice);
        slice = [];
        slice.push(sorted[i]);
      } else {
        slice.push(sorted[i]);
      }
      if (i === sorted.length - 1) {
        res.push(slice);
      }
    }
  }
  return res
    .map((arr) => {
      if (arr.length > 1) {
        const min = arr[0];
        const max = arr[arr.length - 1];
        return [min, max].join('-');
      }
      return `${arr[0]}`;
    })
    .join(',');
};

console.log(range([1, 4, 5, 2, 3, 9, 8, 11]));
