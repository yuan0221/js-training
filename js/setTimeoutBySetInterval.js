function setTimeoutBySetInterval(fn, time, ...args) {
  const timer = setInterval(() => {
    fn.apply(this, args);
    clearInterval(timer);
  }, time)
}

setTimeoutBySetInterval(() => console.log(1), 1000);