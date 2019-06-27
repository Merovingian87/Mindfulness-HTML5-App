

let startTime;
let duration = 120;

function onMoreDuration() {
  duration = duration + 120;
}

function onLessDuration() {
  duration = duration - 120;
  if (duration < 0) {
    duration = 0;
  }
}

function onStartPress() {
    startTime = Date.now();
}

function every1Second() {
  let now = Date.now();
  let secondsPassed = (now - startTime) / 1000;
  let timeLeft = duration - secondsPassed;
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft - (minutes * 60);
  console.log(minutes + ':' + seconds);
}
