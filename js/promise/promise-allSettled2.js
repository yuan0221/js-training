function myAllSettled(promises) {

  return new Promise(resolve => {
    let res = [];
    let count = 0;

    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];

      promise.then(
        (response) => {
          res[i] = { status: 'fulfilled', value: response }
        },
        (error) => {
          res[i] = { status: 'rejected', reason: error }
        }
      )
        .finally(() => {
          if (++count === promises.length) resolve(res);
        })
    }
  })
}

function sleep(time, text) {
  return new Promise((resolve, reject) => setTimeout(() => {
    if (text === 2) reject('error');
    resolve(text);
  }, time));
}

myAllSettled([1, 2, 3].map(item => sleep(100, item))).then(result => console.log(result));