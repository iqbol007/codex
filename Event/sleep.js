document.getElementById('clicker').addEventListener('click', () => {
  console.log('clicked');
  const count = sleep(2000);
  console.log('clicked', Date.now(), count);
});

setTimeout(() => {
  console.log('TimeOut', Date.now());
}, 1000);

function sleep(time) {
  const endTime = Date.now() + time;
  let count = 0;
  while (true) {
    const current = Date.now();
    count++;
    if (current >= endTime) {
      break;
    }
  }
  return count;
}
