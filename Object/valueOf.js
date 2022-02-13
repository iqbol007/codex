const mass = {
  value: 1000,
  some: 'kg',
};

mass[Symbol.toPrimitive] = function (hint) {
  if (hint === 'number') {
    return this.value;
  }
  if (hint === 'string') {
    return this.some;
  }
};

console.log(mass + 1000);
