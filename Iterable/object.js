let obj1 = { firstName: 'John', secondName: 'Doe' };

function methodsIterator() {
  let index = 0;
  const methods = Object.values(this);
  return {
    next: () => ({
      done: index === methods.length,
      value: methods[index++],
    }),
  };
}

obj1[Symbol.iterator] = methodsIterator;

console.log(...obj1); // firstName John secondName Doe
