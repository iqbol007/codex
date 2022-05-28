function nextBigger(n) {
  if (n.toString().length === 1) {
    return -1;
  }
  let mutation = [...permutations(n.toString())].map((i) => +i).sort();
  return mutation[mutation.lastIndexOf(n) + 1] || -1;
}

function* permutations(s) {
  if (s.length > 1)
    for (let i = 0; i < s.length; i++)
      for (let t of permutations(s.slice(0, i) + s.slice(i + 1)))
        yield s.charAt(i) + t;
  else yield s;
}

console.log(nextBigger(2017));
