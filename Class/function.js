
function Animal(color, weight) {
  this.color = color;
  this.weight = weight;
  this.setColor = (_color) => {
    this.color = _color;
  };
}

function Cat(color, weight) {
  this.super(color, weight);
  this.getWeight = () => this.weight;
}

Cat.prototype = Animal.prototype;
Cat.prototype.super = Animal.prototype.constructor;

const cat = new Cat("red", 12);

console.log(cat);
