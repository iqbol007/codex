//################################################################################################
//Reflect
let user = {
  name: 'Вася',
};

user = new Proxy(user, {
  get(target, prop, receiver) {
    console.log(`GET ${prop}`);
    return Reflect.get(target, prop, receiver); // (1)
  },
  set(target, prop, val, receiver) {
    console.log(`SET ${prop}=${val}`);
    return Reflect.set(target, prop, val, receiver); // (2)
  },
});

let userName = user.name; // выводит "GET name"
user.name = 'Петя'; // выводит "SET name=Петя"

//################################################################################################
//Problem with receiver

let user = {
  _name: 'Гость',
  get name() {
    return this._name;
  },
};

let userProxy = new Proxy(user, {
  get(target, prop, receiver) {
    return target[prop]; // (*) target = user
  },
});

let admin = {
  __proto__: userProxy,
  _name: 'Админ',
};

// Ожидается: Админ
console.log(admin.name); // выводится Гость (?!?)

// Решение в Reflect

let user2 = {
  _name: 'Гость',
  get name() {
    return this._name;
  },
};

let userProxy2 = new Proxy(user, {
  get(target, prop, receiver) {
    // receiver = admin
    return Reflect.get(target, prop, receiver); // (*)
  },
  // Альтернатива
  //   get(target, prop, receiver) {
  //     return Reflect.get(...arguments);
  //   }
});

let admin2 = {
  __proto__: userProxy,
  _name: 'Админ',
};

console.log(admin.name); // Админ
