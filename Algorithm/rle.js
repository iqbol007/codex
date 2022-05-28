/**
 * @BY_YANDEX
 * 
 * Дана строка (возможно, пустая), состоящая
 * из букв A-Z: AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
 * Нужно написать функцию RLE, которая на выходе даст строку вида: A4B3C2XYZD4E3F3A6B28
 * И сгенерирует ошибку, если на вход пришла невалидная строка.
 * Пояснения: Если символ встречается 1 раз, он остается без изменений;
 * Если символ повторяется более 1 раза, к нему добавляется количество повторений.
 */

// Немного не правильно

const RLE = (str) =>
  Object.entries(
    [...str].reduce(function (acc, curr) {
      if (acc[curr]) {
        return { ...acc, [curr]: acc[curr] + 1 };
      }
      return { ...acc, [curr]: 1 };
    }, {})
  )
    .map(([key, value]) => (value === 1 ? [key, ""] : [key, value]))
    .map((e) => e.join(""))
    .join("");

// console.log(RLE("AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"));
// result : A10B31C2XYZD4E3F3

// Resolved ✔
function RLE2(str) {
  let result = "";
  let slice = "";
  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    if (!slice.length) {
      slice = str[i];
      count = count + 1;
      continue;
    }
    if (slice.includes(str[i])) {
      count = count + 1;
    } else {
      if (count > 1) {
        slice += count;
      }
      result += slice;
      count = 1;
      slice = str[i];
    }
  }

  return result;
}

// console.log(RLE2("AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"));
// A4B3C2XYZD4E3F3A6B28