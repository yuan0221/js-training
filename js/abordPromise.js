// 题目：请求time的时间，没有响应就中断请求
function abordPromise(promise, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('abord!'), time);

    promise
      .then(res => resolve('success'))
      .catch(error => reject('error'))
  })
}


const sleep = new Promise(resolve => setTimeout(resolve, 3000));

abordPromise(sleep, 1000)
  .then(res => console.log(res))
  .catch(error => console.log(error))