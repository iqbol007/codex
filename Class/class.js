class Animal {
  #classID = 1; // Скрытые свойства никак не наследуются
  color = '';
  weight = 0;

  get classID() {
    return this.#classID;
  }

  set classID(val) {
    this.#classID = val;
  }

  constructor(color, weight) {
    this.color = color;
    this.weight = weight;
  }
}
const animal = new Animal();

class Cat extends Animal {
  constructor(color, weight) {
    super(color, weight);
  }
}

const cat = new Cat('grey', 3);

console.log(cat.classID);
