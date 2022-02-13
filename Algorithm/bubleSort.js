const bubbleSortArr = [2, 3, 0, 4, 1, 13, 43];

for (let i = 0; i < bubbleSortArr.length; ++i) {
  for (let j = 0; j < bubbleSortArr.length - j; ++j) {
    if (bubbleSortArr[j] > bubbleSortArr[j + 1]) {
      let temp = bubbleSortArr[j];
      bubbleSortArr[j] = bubbleSortArr[j + 1];
      bubbleSortArr[j + 1] = temp;
    }
  }
}

console.log(bubbleSortArr);
