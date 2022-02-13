console.log(i); // undefined
console.log(insideIF); // undefined

{
  for (var i = 0; i < 10; i++) {
    if (i > 4) {
      var insideIF = 4;
    }
  }
}

console.log(i); // 10
console.log(insideIF); // 4

console.log(x); // ReferenceError: x is not defined

//только функция в js может создовать новую область видимости

function multiply(a, b) {
  var x = 10;
  return a * b;
}
