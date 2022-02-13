const objAccessor = {
  _name: '',
  get name() {
    return this._name;
  },
  set name(value) {
    this._name = value;
    // return true;
  },
};
objAccessor.name = 12;
console.log(objAccessor);
