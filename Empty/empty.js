// Пустая инструкция используется, когда инструкция не нужна, хотя 
// синтаксис JavaScript будет предполагать её.
var arr = [1, 2, 3];

// Приравняет все значения массива к 0
for (i = 0; i < arr.length; arr[i++] = 0) /* выражения */ ;

console.log(arr)
// [0, 0, 0]