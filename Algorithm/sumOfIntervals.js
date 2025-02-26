//sumIntervals( [
// [1, 5],
// [10, 20],
// [1, 6],
// [16, 19],
// [5, 11]
//] ) => 19

const intervals = [
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11]
];

console.log(intervals.indexOf([1, 6]))

function sumOfIntervals(array = []) {
    array = array.sort(([, a], [, b]) => a - b);
    const result = array
    if (result.length % 2 !== 0) result.push([0, 0])
    for (let i = 0, j = result.length / 2; i < result.length, j < result.length; i++, j++) {
        // leftJoin(result[i], result[j], result)
        // rightJoin(result[i], result[j], result)
        // innerJoin(result[i], result[j], result)
    }
    console.log(mergeArrays(array))
}

// [1, 5], // [16, 19],
// [10, 20], // [5, 11]
// [1, 6], // [0, 0]

// 1. Sorting

// [1, 5],  // [16, 19],
// [1, 6],  // [10, 20],
// [5, 11], // [0, 0],

// 2. Recursive merge

// Merged some = true

// Pivot = [1, 5] (smallest interval) change pivot if it's merged
// New merged value

// [1, 5],  // [16, 19],
// [1, 6],  // [10, 20],
// [5, 11], // [0, 0],

// [1, 5]  [1, 6] => [1, 6]

let merged = true;

function mergeArrays(array = []) {
    if (!merged) return array;
    for (let i = 0; i < array.length; i++) {
        const [a, b] = array[i];
        for (let j = 0; j < array.length; j++) {
            if (i === j) continue;
            const [c, d] = array[j];
            if (a <= c && b >= d) {
                array.splice(i, 2)
                const newArr = [[a, d], ...array];
                merged = true;
                return mergeArrays(newArr)
            } else {
                merged = false;
            }
        }
    }
}


sumOfIntervals(intervals)