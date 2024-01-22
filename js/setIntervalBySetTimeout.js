function setIntervalBySetTimeout(fn, time, ...args) {
  let cleaned = false;

  function task() {
    setTimeout(() => {
      if(!cleaned) fn.apply(this, args);
      task();
    }, time)
  }

  task();

  return () => cleaned = true;
}

const clean = setIntervalBySetTimeout(() => console.log('1'), 1000);

setTimeout(() => clean(), 5000);