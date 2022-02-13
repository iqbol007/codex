/**
 * @CodeWars
 *The goal of this exercise is to convert a string to a new string where each character
 *in the new string is "(" if that character appears only once in the original string,
 *or ")" if that character appears more than once in the original string.
 *Ignore capitalization when determining if a character is a duplicate.
 *
 *Examples
 *
 *"din"      =>  "((("
 *"recede"   =>  "()()()"
 *"Success"  =>  ")())())"
 *"(( @"     =>  "))(("
 */

function duplicateEncoder(word) {
  let res = "";
  [...word.toLowerCase()].forEach((e) => {
    const firstIndex = word.indexOf(e);
    const lastIndex = word.lastIndexOf(e);
    if (firstIndex !== lastIndex && lastIndex > 0) {
      res += ")";
    } else {
      res += "(";
    }
  });
  return res;
}
console.log(duplicateEncoder("din"));
console.log(duplicateEncoder("recede"));
console.log(duplicateEncoder("Success"));
console.log(duplicateEncoder("(( @"));
console.log(duplicateEncoder("CodeWarrior")); //()(((())()) => (()))())())()(
console.log(duplicateEncoder("Supralapsarian")); //(()))())())()( => )()))()))))()(
