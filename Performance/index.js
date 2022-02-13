console.log('First', performance.now());

setTimeout(() => {
  console.log('Second', performance.now());
}, 0);

console.log('Third', performance.now());
