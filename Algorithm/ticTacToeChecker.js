/**
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
 */

function down(arr) {
  let reversed = [];
  for (let i = 0; i < arr.length; i++) {
    let m = [];
    for (let j = 0; j < arr.length; j++) {
      m.push(arr[j][i]);
    }
    reversed.push(m);
  }
  return reversed;
}

function left(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let m = [];
    for (let j = 0; j < arr.length; j++) {
      m.push(arr[i][j]);
    }
    result.push(m.reverse());
  }
  return result;
}

function isSolved(params = [[]]) {
  let diag = [];
  let win = 0;
  for (let i = 0; i < params.length; i++) {
    if (params[i].every((e) => e === 1)) {
      return 1;
    }
    if (params[i].every((e) => e === 2)) {
      return 2;
    }
    if (params[i].some((e) => e === 0)) {
      win = -1;
    }
    for (let j = 0; j < params.length; j++) {
      if (i === j) {
        diag.push(params[i][j]);
      }
    }
  }

  console.log(diag);
  if (diag.every((e) => e === 1)) {
    return 1;
  }
  if (diag.every((e) => e === 2)) {
    return 2;
  }
  if (diag.some((e) => e === 0)) {
    win = -1;
  }
  if (win !== 0) {
    return win;
  }
  diag = [];
  const l = left(params);
  for (let i = 0; i < l.length; i++) {
    if (l[i].every((e) => e === 1)) {
      win = 1;
    }
    if (l[i].every((e) => e === 2)) {
      win = 2;
    }
    if (l[i].some((e) => e === 0)) {
      win = -1;
    }
    for (let j = 0; j < l.length; j++) {
      if (i === j) {
        if (i === j) {
          diag.push(l[i][j]);
        }
      }
    }
  }
  if (win !== 0) {
    return win;
  }
  if (diag.every((e) => e === 1)) {
    return 1;
  }
  if (diag.every((e) => e === 2)) {
    return 2;
  }
  if (diag.some((e) => e === 0)) {
    win = -1;
  }
  if (win !== 0) {
    return win;
  }
  let d = down(params);
  for (let i = 0; i < d.length; i++) {
    if (d[i].every((e) => e === 1)) {
      return 1;
    }
    if (d[i].every((e) => e === 2)) {
      return 2;
    }
    if (d[i].some((e) => e === 0)) {
      win = -1;
    }
  }
  if (win !== 0) {
    return win;
  }

  return 0;
}

console.log(
  isSolved([
    [1, 2, 0],
    [0, 1, 2],
    [0, 0, 1],
  ])
);
