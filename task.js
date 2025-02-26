let n = 12;
let result = [];
for (let i = 1; i <= n; i++) {
  let strNum = i.toString();
  if (strNum.length > 1) {
    let sum = [...strNum].reduce(
      (computed, number) => Number(number) + computed,
      0
    );
    result.push(sum);
  } else {
    result.push(i);
  }
}

let num = 10;

console.log(num + 1);
console.log(num.toString() + 1);
