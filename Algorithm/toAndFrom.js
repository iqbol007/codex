// // https://www.codewars.com/kata/590c3173cd3b99c467000a26
function toAndFrom(a, b, t) {
  let index = t;
  let direction = 0;
  let step = a;
  let result = [];
  if (a > b) {
    // if (a === b + 1) {
    //   if (t % 2 === 0) {
    //     return a;
    //   } else {
    //     return b;
    //   }
    // }
    // if (t < a && t > b && a - b > t) {
    //   return a - t;
    // }
    while (t + 1) {
      if (direction) {
        result.push(step--);

        if (step === b) {
          direction = 0;
          continue;
        }
      }
      if (!direction) {
        if (step === a) {
          direction = 1;
          continue;
        }
        result.push(step++);
        result.shift();
        index--;
      }
      t--;
    }
    if (index < 0) {
      index = 1;
    }
    return result[index];
  }
  while (t + 1) {
    if (direction) {
      result.push(step++);
      if (step === b) {
        direction = 0;
        continue;
      }
    }
    if (!direction) {
      if (step === a) {
        direction = 1;
        continue;
      }
      result.push(step--);
      result.shift();
      index--;
    }
    t--;
  }
  console.log(result);
  return result[index];
}

// console.log(toAndFrom(2, 4, 5)); //3
// console.log(toAndFrom(1, 5, 10)); //3
// console.log(toAndFrom(1, 10, 8)); //9
// console.log(toAndFrom(42, 150, 548)); //142
// console.log(toAndFrom(65, 5, 13)); //52
// console.log(toAndFrom(39, 38, 69)); //38
// console.log(toAndFrom(2, 4, 3)); //3
// console.log(toAndFrom(10, 4, 8)); //6

// function toAndFrom(a, b, t) {
//   let dir = 0;
//   let startPos = a;
//   let endPos = b - 1;

//   let step = startPos - 1;

//   while (t) {
//     if (a < b) {
//       if (step < endPos + 1 && !dir) {
//         step++;
//       } else {
//         dir = 1;
//       }
//       if (step > startPos && dir) {
//         step--;
//       } else {
//         dir = 0;
//        }
//       console.log(step);
//     }
//     if (b < a) {
//       if (step > endPos && !dir) {
//         step--;
//       } else {
//         dir = 1;
//       }
//       if (step < startPos && dir) {
//         step++;
//       } else {
//         dir = 0;
//       }
//     }
//     t--;
//   }
//   return step;
// }

