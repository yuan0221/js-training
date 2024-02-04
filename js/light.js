function sleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  })
}

function red() { }
function yellow() { }
function green() { }

async function go() {
  red();
  await sleep(1000);
  yellow();
  await sleep(300);
  green();
  await sleep(500);
  run();
}

go();