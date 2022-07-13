const array = [1, 0, 0, 1, 1, 1, 0];

let res = 0

for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
        continue;
    }
    let a = array[i]
    let b = array[i + 1]

    if (a > b) {
        res += b
    }
    if (b > a) {
        res += a
    }
    if (a === b) {
        res += b
    }
    i++
}

console.log(res)