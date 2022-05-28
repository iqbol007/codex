/**
 * В простейшем виде декоратор — это способ оборачивания одного фрагмента кода в другой. 
 * Буквально — «декорирование» фрагмента кода.
 * 
 * Декораторы выполняются один раз при запуске программы,
 * декорируемый код заменяется возвращаемым значением.
 * 
 * Сейчас поддерживаемые типы декораторов — это декораторы классов и членов классов — свойств,
 * методов, геттеров и сеттеров
 */

function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Example {
  age = 0;

  @readonly
  name = 'John Doe';
}

const e = new Example();

e.age = 1;

e.name = 'John';
// TypeError: Cannot assign to read only property 'b' of object '#<Example>'

function log(target, name, descriptor) {
  const original = descriptor.value;
  if (typeof original === 'function') {
    descriptor.value = function (...args) {
      console.log(`Arguments: ${args}`);
      try {
        const result = original.apply(this, args);
        console.log(`Result: ${result}`);
        return result;
      } catch (e) {
        console.log(`Error: ${e}`);
        throw e;
      }
    };
  }
  return descriptor;
}

class Example2 {
  @log
  sum(a, b) {
    return a + b;
  }
}

const e2 = new Example2();
e2.sum(1, 2);
// Arguments: 1,2
// Result: 3

///////////////////////////////////////////////////////////////////////////////

function log(name) {
  return function decorator(t, n, descriptor) {
    const original = descriptor.value;
    if (typeof original === 'function') {
      descriptor.value = function (...args) {
        console.log(`Arguments for ${name}: ${args}`);
        try {
          const result = original.apply(this, args);
          console.log(`Result from ${name}: ${result}`);
          return result;
        } catch (e) {
          console.log(`Error from ${name}: ${e}`);
          throw e;
        }
      };
    }
    return descriptor;
  };
}

class Example3 {
  @log('some tag')
  sum(a, b) {
    return a + b;
  }
}

const e3 = new Example3();
e3.sum(1, 2);
// Arguments for some tag: 1,2
// Result from some tag: 3

/////////////////////////////////////////////////////////////////////////////////////

function log(Class) {
  return (...args) => {
    console.log(args);
    return new Class(...args);
  };
}

@log
class Example4 {
  constructor(name, age) {}
}

const e4 = new Example4('Graham', 34);
// [ 'Graham', 34 ]
console.log(e4);
// Example {}

/////////////////////////////////////////////////////////////////////////////////////////
// without decorator
class MyReactComponent extends React.Component {}
export default connect(mapStateToProps, mapDispatchToProps)(MyReactComponent);
// with decorator

@connect(mapStateToProps, mapDispatchToProps)
export class MyReactComponent extends React.Component {}
