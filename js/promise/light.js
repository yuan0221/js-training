function sleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  })
}

function red() { console.log('red') }
function yellow() { console.log('yellow') }
function green() { console.log('green') }

async function go() {
  red();
  await sleep(1000);
  yellow();
  await sleep(300);
  green();
  await sleep(500);
  go();
}

go();