function myAny(promises) {
  let count = 0;

  return new Promise((resolve, reject) => {
    for(promise of promises) {
      Promise.resolve(promise)
        .then(value => resolve(value))
        .catch(error => {
          count++;
          if(count === promises.length) reject(error);
        })
    }
  })
}

function sleep(time) {
  return new Promise((resolve, reject) => setTimeout(() => {
    // if(time === 200) reject('200 error')
    // if(time === 1000) reject('1000 error')
    // if(time === 300) reject('300 error')
    resolve(time)
  }, time));
}

myAny([1000, 200, 300].map(item => sleep(item))).then(result => {
  console.log(result); // 200
})