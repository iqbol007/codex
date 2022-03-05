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

const snail = function (arr = [[]]) {};

// function reversArr(arr) {
//   let reversed = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       reversed.push(arr[j][i]);
//     }
//   }
//   return reversed;
// }

snail([
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
]);
