function promiseAllWithConcurrent(promises, max) {
  return new Promise((resolve) => {
    const res = new Array(promises.length).fill(0);
    let count = 0;
    let index = 0;

    function step(i) {
      if (count === res.length) {
        resolve(res);
        return;
      }
      if (promises[index]) {
        promises[index]().then(result => {
          res[i] = result;
          count++;
          step(index);
        })
      }
      index++;
    }

    for (let i = 0; i < max; i++) {
      step(i);
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
  .map(([time, val]) => {
    return () => sleep(time, val);
  })

promiseAllWithConcurrent(promises, 2).then(res => console.log(res)); // 2 3 1 4

