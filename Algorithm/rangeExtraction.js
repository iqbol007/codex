const array = [
  -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
  19, 20,
];
// "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

function solution(array = []) {
  console.log(performance.now());
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        console.log(Math.pow(2, i) * Math.pow(3, j) * Math.pow(5, k));
      }
    }
  }
  console.log(performance.now());
}

console.log(solution(array));
