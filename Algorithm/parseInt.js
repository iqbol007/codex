function getNumber(string) {
  switch (string) {
    case 'one':
      return 1;
    case 'two':
      return 2;
    case 'three':
      return 3;
    case 'four':
      return 4;
    case 'six':
      return 6;
    case 'seven':
      return 7;
    case 'eight':
      return 8;
    case 'nine':
      return 9;
    case 'ten':
      return 10;
    case 'eleven':
      return 11;
    case 'twelve':
      return 12;
    case 'thirteen':
      return 13;
    case 'fourteen':
      return 14;
    case 'fifteen':
      return 15;
    case 'sixteen':
      return 16;
    case 'seventeen':
      return 17;
    case 'eighteen':
      return 18;
    case 'nineteen':
      return 19;
    case 'twenty':
      return 20;
    case 'thirty':
      return 30;
    case 'forty':
      return 40;
    case 'fifty':
      return 50;
    case 'sixty':
      return 60;
    case 'seventy':
      return 70;
    case 'eighty':
      return 80;
    case 'ninety':
      return 90;
    case 'hundred':
      return 100;
    case 'thousand':
      return 1000;
    case 'million':
      return 1000000;
    default:
      return 0;
  }
}

function parseIntX(params) {
  let num = params
    .split(/[-,\s]/)
    .filter((f) => f !== 'and')
    .map((e) => getNumber(e))
    .map((n, i, arr) => (arr[i + 1] === 100 ? n * 100 : n === 100 ? 0 : n))
    .filter((f) => f);
  if (num.indexOf(1000) !== -1) {
    return num.reduce((a, b) => {
      if (b !== 1000) {
        return a + b;
      }
      return a * b;
    }, 0);
  }
  if (num.indexOf(1000000) !== -1) {
    return num.reduce((a, b) => {
      if (b !== 1000000) {
        return a + b;
      }
      return a * b;
    }, 0);
  }
  num = num.map((n, i, arr) => {
    if (arr[i + 2] === 1000) {
      let res = (n + arr[i + 1]) * 1000;
      arr[i + 1] = 0;
      return res;
    }
    if (n === 1000) {
      return 0;
    }
    return n;
  });
  num = num.filter((f) => f !== 1000);
  if (num.length === 1) {
    return num[0];
  }
  if (num.length === 2 && num[1] === 1000) {
    return num[0] * num[1];
  }

  return num.reduce((a, b) => a + b, 0);
}

// console.log(parseIntX('one'));
// console.log(parseIntX('twenty'));
// console.log(parseIntX('two hundred ninety six'));
// console.log(
//   parseIntX('seven hundred eighty-three thousand nine hundred and nineteen')
// );
// console.log(parseIntX('twenty-six thousand three hundred and fifty-nine'));
// console.log(parseIntX('one thousand three hundred and thirty-seven'));
//
// console.log(parseIntX('two thousand'));
//
console.log(parseIntX('one million'));
