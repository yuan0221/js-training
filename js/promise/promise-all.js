function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let res = new Array(promises.length).fill(0);
    let count = 0;

    for (let i = 0; i < res.length; i++) {
      let p = promises[i];
      Promise.resolve(p).then(result => {
        res[i] = result;
        if (++count === res.length) resolve(res);
      })
    }

  })
}

function sleep(time, val) {
  return new Promise(resolve => setTimeout(() => {
    resolve(val);
    console.log(val);
  }, time));
}

const promises = [[1000, '1'], [500, '2'], [300, '3'], [400, '4']]
  .map(([time, val]) => sleep(time, val))

promiseAll(promises).then(res => console.log(res));