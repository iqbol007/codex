// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

/**
 *  [[ 1,  2,  3,  4 ],
 *  [  12, 13, 14, 5 ],
 *  [  11, 16, 15, 6 ],
 *  [  10, 9,  8,  7 ]]
 *
 *  4(right) 3(down) 3(left) 2(up) 2(right) 1(down) 1(left)
 *
 *  [[ 1, 2, 3 ],
 *  [  8, 9, 4 ],
 *  [  7, 6, 5 ]]
 *
 *  3(right) 2(down) 2(left) 1(up) 1(right)
 */

// function left(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let m = [];
//     for (let j = 0; j < arr.length; j++) {
//       m.push(arr[i][j]);
//     }
//     result.push(m.reverse());
//   }
//   return result;
// }

// function down(arr) {
//   let reversed = [];
//   for (let i = 0; i < arr.length; i++) {
//     let m = [];
//     for (let j = 0; j < arr.length; j++) {
//       m.push(arr[j][i]);
//     }
//     reversed.push(m);
//   }
//   return reversed;
// }

// function up(arr) {
//   let reversed = [];
//   for (let i = 0; i < arr.length; i++) {
//     let m = [];
//     for (let j = 0; j < arr.length; j++) {
//       m.push(arr[j][i]);
//     }
//     reversed.push(m.reverse());
//   }
//   return reversed;
// }

// function toMatrix(array) {
//   return array.map((row, i) =>
//     row.map((_, j) => ({ index: `${i}${j}`, value: array[i][j] }))
//   );
// }

// function getSteps(array) {
//   let count = [];
//   let selectionStep = array.length;
//   let steps = 0;
//   for (let i = 0; i < array.length + array.length - 1; i++) {
//     steps += 1;
//     if (i !== 0 && steps === 2) {
//       selectionStep -= 1;
//       steps = 0;
//     }
//     count.push(selectionStep);
//   }
//   return count;
// }
// const snail = function (array = [[]]) {
//   let direction = 0;
//   const arrRight = array;
//   const arrDown = down(array);
//   const arrUp = up(array);
//   const arrLeft = left(array);
//   const steps = getSteps(array);
//   const indexes = getIndexes(array.length);
//   const slices = getSlices(array.length, steps);
//   const result = [];
//   console.log(slices);
//   console.log(steps);
//   console.log(indexes);
//   console.log(arrRight);
//   console.log(arrDown);
//   console.log(arrLeft);
//   console.log(arrUp);
//   /**
//  * [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ]
//  */
//   for (let i = 0; i < steps.length; i++) {
//     const [a, b] = slices[i];
//     const index = indexes[i] - 1;
//     if (direction === 0) {
//       result.push(arrRight[index]?.slice(a, b));
//       direction++;
//       continue;
//     }
//     if (direction === 1) {
//       result.push(arrDown[index].slice(a, b));
//       direction++;
//       continue;
//     }
//     if (direction === 2) {
//       result.push(arrLeft[index].slice(a, b));
//       direction++;
//       continue;
//     }
//     if (direction === 3) {
//       result.push(arrUp[index].slice(a, b));
//       direction = 0;
//     }
//   }

//   return result.filter((f) => f.length).join();
//   //             3        2        2        1        1
//   // 3 x 3 = 1 (0-3), 3 (1-2), 3 (1-2), 1 (1-1), 2 (1-1)
//   //           1-2-3     4-5      6-7       8        9
//   //
//   //          3-2-2-1-1
//   //          1-3-3-1-2
//   //
//   //             4        3        3        2        2        1        1
//   // 4 x 4 = 1 (0-4), 4 (1-3), 4 (1-3), 1 (1-2)  2 (1-2)  3 (2-1)  3 (2-1)
//   //          1-2-3-4   5-6-7    8-9-10   11-12     13-14     15       16
//   //
//   //          4-3-3-2-2-1-1
//   //          1-4-4-1-2-3-3
//   //
//   //             5           4         4             3         3        2         2        1         1
//   // 5 x 5 = 1 (0-5)     5 (1-4)   5 (1-4)       1 (1-3)   2 (1-3)   4 (2-2)  4 (2-2)  2 (2-1)  3  (2,1)
//   //         1-2-3-4-5   6-7-8-9   10-11-12-13   14-15-16  17-18-19    20-21    22-23      24        25
//   //
//   //         5-4-4-3-3-2-2-1-1
//   //         1-5-5-1-2-4-4-2-3
//   //
//   //             6               5             5                  4               4             3          3          2         2        1       1
//   // 6 x 6 = 1 (0-6)         6 (1-5)       6 (1-5)            1 (1-4)         2 (1-4)       5 (2-3)    5 (2-3)    2 (2-2)   3 (2-2)  4 (3-1) 4 (3-1)
//   //         1-2-3-4-5-6     7-8-9-10-11    12-13-14-15-16    17-18-19-20     21-22-23-24   25-26-27   28-29-30     32-32     33-34      35     36
//   //
//   //        turns = N - 1
//   //        6-5-5-4-4-3-3-2-2-1-1
//   //        1-6-6-1-2-5-5-2-3-4-4
//   //                                 i = 1; n = 6;
//   //                                 -> [ i - N - N - i ]
//   //                                              i = 2; N - 1;
//   //                                                 -> [i - N - N - i]
//   // [ [ 0, 6 ],
//   //   [ 1, 5 ],
//   //   [ 1, 5 ],
//   //   [ 1, 4 ],
//   //   [ 1, 4 ],
//   //   [ 2, 3 ],
//   //   [ 2, 3 ],
//   //   [ 2, 2 ],
//   //   [ 2, 2 ],
//   //   [ 3, 1 ],
//   //   [ 3, 1 ] ]
// };

// function getSlices(N, counts = []) {
//   let res = [];
//   for (let i = 0; i < counts.length; i++) {
//     res.push([0, counts[i]]);
//   }
//   let xx = 0;
//   for (let x = 0; x < res.length - 1; x++) {
//     res[0][0] = 0;
//     if (x % 4 === 0) {
//       xx++;
//     }
//     res[x + 1][0] = xx;
//     res[x + 1][1] = res[x + 1][1] + xx;
//   }
//   res[0][0] = 0;
//   return res.slice(0, res.length);
// }

// function flat(array = [[]]) {
//   let res = [];
//   for (let i = 0; i < array.length; i++) {
//     res.push(...array[i]);
//   }
//   return res;
// }

// function getIndexes(N) {
//   let step = N;
//   let res = [];
//   for (let i = 0; i < N; i++) {
//     res.push([i + 1, step, step, i + 1]);
//     step -= 1;
//   }
//   console.log(N);
//   console.log(res.flat());
//   return flat(res).slice(0, N * 2 - 1);
// }

// console.log(
//   getSlices(
//     6,
//     getSteps([
//       [1, 2, 3, 4, 5, 6],
//       [20, 21, 22, 23, 24, 7],
//       [19, 32, 33, 34, 25, 8],
//       [18, 31, 36, 35, 26, 9],
//       [17, 30, 29, 28, 27, 10],
//       [16, 15, 14, 13, 12, 11],
//     ])
//   )
// );

// console.log(
//   snail([
//     [1, 2, 3, 4, 5],
//     [16, 17, 18, 19, 6],
//     [15, 24, 25, 20, 7],
//     [14, 23, 22, 21, 8],
//     [13, 12, 11, 10, 9],
//   ])
// );

// console.log(
//   snail([
//     [1, 2, 3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10, 9, 8, 7],
//   ])
// );

// console.log(
//   snail([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// SOLUTION ###############################################

function left(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let m = [];
    for (let j = 0; j < arr.length; j++) {
      m.push(arr[i][j]);
    }
    result.push(m.reverse());
  }
  return result;
}

function down(arr) {
  let reversed = [];
  for (let i = 0; i < arr.length; i++) {
    let m = [];
    for (let j = 0; j < arr.length; j++) {
      m.push(arr[j][i]);
    }
    reversed.push(m);
  }
  return reversed;
}

function up(arr) {
  let reversed = [];
  for (let i = 0; i < arr.length; i++) {
    let m = [];
    for (let j = 0; j < arr.length; j++) {
      m.push(arr[j][i]);
    }
    reversed.push(m.reverse());
  }
  return reversed;
}

function getSlices(N, counts = []) {
  let res = [];
  for (let i = 0; i < counts.length; i++) {
    res.push([0, counts[i]]);
  }
  let xx = 0;
  for (let x = 0; x < res.length - 1; x++) {
    res[0][0] = 0;
    if (x % 4 === 0) {
      xx++;
    }
    res[x + 1][0] = xx;
    res[x + 1][1] = res[x + 1][1] + xx;
  }
  res[0][0] = 0;
  return res.slice(0, res.length);
}

function getIndexes(N) {
  let step = N;
  let res = [];
  for (let i = 0; i < N; i++) {
    res.push([i + 1, step, step, i + 1]);
    step -= 1;
  }
  console.log(res);
  return flat(res).slice(0, N * 2 - 1);
}
function getSteps(array) {
  let count = [];
  let selectionStep = array.length;
  let steps = 0;
  for (let i = 0; i < array.length + array.length - 1; i++) {
    steps += 1;
    if (i !== 0 && steps === 2) {
      selectionStep -= 1;
      steps = 0;
    }
    count.push(selectionStep);
  }
  return count;
}
function flat(array = [[]]) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    res.push(...array[i]);
  }
  return res;
}
const snail = function (array = [[]]) {
  if (!array.toString()) {
    return [];
  }
  if (array.toString().length === 1) {
    return [+array.toString()];
  }
  let direction = 0;
  const arrRight = array;
  const arrDown = down(array);
  const arrUp = up(array);
  const arrLeft = left(array);
  const steps = getSteps(array);
  const indexes = getIndexes(array.length);
  const slices = getSlices(array.length, steps);
  const result = [];
  for (let i = 0; i < steps.length; i++) {
    const [a, b] = slices[i];
    const index = indexes[i] - 1;
    if (direction === 0) {
      result.push(arrRight[index].slice(a, b));
      direction++;
      continue;
    }
    if (direction === 1) {
      result.push(arrDown[index].slice(a, b));
      direction++;
      continue;
    }
    if (direction === 2) {
      result.push(arrLeft[index].slice(a, b));
      direction++;
      continue;
    }
    if (direction === 3) {
      result.push(arrUp[index].slice(a, b));
      direction = 0;
    }
  }

  return flat(result.filter((f) => f.length));
};

console.log(
  snail([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11],
  ])
);
