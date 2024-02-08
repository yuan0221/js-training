function myReject(reason) {
  return new Promise((resolve, reject) => reject(reason));
}

myReject('error reason').then(result => console.log(result));