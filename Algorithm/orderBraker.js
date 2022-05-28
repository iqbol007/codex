/**
 * @CodeWars
 * Order Breaker
 * Вам дан массив чисел, расположенных по возрастанию, кроме одного. Найдите это число.
 * For Example: [1,2,3,4,17,5,6,7,8]
 * 17 is the only breaker.
 * For Example: [19,27,33,34,112,578,116,170,800]
 * 578 is the only breaker.
 */

const example = [19, 27, 33, 34, 112, 578, 116, 170, 800];

const findBreaker = (example) => {
  for (let i = 0; i < example.length; i++) {
    if (i > 0 && example[i - 1] > example[i]) {
      return example[i - 1] + ' is only the breaker';
    }
  }
};

console.log(findBreaker(example));
