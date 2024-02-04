function allSettled(promises) {
  return Promise.all(promises.map(promise => promise.then(
    value => ({ status: 'fulfilled', value }),
    reason => ({ status: 'rejected', reason })
  )));
}

function sleep(time, text) {
  return new Promise((resolve, reject) => setTimeout(() => {
    if(text === 2) reject('error')
    resolve(text);
  }, time));
}

allSettled([1, 2, 3].map(item => sleep(100, item))).then(result => {
  console.log(result);
})