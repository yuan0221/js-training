function myRace(promises) {
  return new Promise((resolve, reject) => {
    for (promise of promises) {
      promise.then(resolve, reject);
    }
  })
}

function sleep(time) {
  return new Promise(resolve => setTimeout(() => resolve(time), time));
}

myRace([1000, 200, 300].map(item => sleep(item))).then(result => {
  console.log(result); // 200
})