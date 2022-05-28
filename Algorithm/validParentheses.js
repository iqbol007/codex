/*
Valid Parentheses

Создайте функцию, которая принимает строку, 
состоящую из скобок, и возвращает true, 
ECMA все скобки закрыты правильно.

Примеры:
 "()"              =>  true
 ")(()))"          =>  false
 "("               =>  false
 "(())((()())())"  =>  true
*/

const example = ")(()))";

const validParentheses = (example) => {
  let openCount = 0;
  let closeCount = 0;
  let openItem = "(";
  for (let i = 0; i < example.length; i++) {
    if (example[i] === openItem) {
      openCount++;
    } else {
      closeCount++;
    }
  }
  return openCount === closeCount;
};

 console.log(validParentheses(example))

