// trying to implement Promise.all
// https://bigfrontend.dev/problem/implement-Promise-all

function all(promises) {
  return new Promise((resolve, reject) => {
    if (!promises.length) {
      resolve([]);
    }

    let result = [];
    let allFinished = promises.length - 1;

    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((r) => {
          result[i] = r;
          if (!allFinished) {
            resolve(result);
          }
          allFinished = allFinished - 1;
        })
        .catch(reject);
    });
  });
}

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('result from first promise');
  }, 1000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('result from second promise');
  }, 1100);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('result from third promise');
  }, 1);
});

all([p1, p2, p3, 1, 2, 3, Promise.resolve(4), Promise.reject(5)]).then((r) => {
  console.log(r);
});
