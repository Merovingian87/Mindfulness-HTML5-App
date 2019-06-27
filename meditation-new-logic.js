let song = new Audio("calm-alarm.mp3");
let hitIt = function() {
  song.play();
};

let startTime;
let duration = 600;

showStartTime = function() {
  let startTime;
  let min0 = duration / 60;
  let sec0 = "00";


    min0 = (min0 < 10) ? "0" + min0 : min0;

  startTime = min0 + " : " + sec0;

  document.getElementById("MyTimerDisplay").innerText = startTime;
  document.getElementById("MyTimerDisplay").textContent = startTime;
}

function onMoreDuration() {
  duration += 120;
  showStartTime();
}

function onLessDuration() {
    showStartTime();
  duration -= 120;
  if (duration < 0) {
    duration = 120;
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
  let timer = minutes + ':' + seconds.toFixed(0)
  console.log(timer);
  document.getElementById("MyTimerDisplay").innerText = timer;
  document.getElementById("MyTimerDisplay").textContent = timer;

  let timerId = setTimeout(() => every1Second(), 1000);

  if (minutes < 0) {
    clearTimeout(timerId);
    // this.sec = 60;

    hitIt();
  }
}

function run() {
onStartPress();
setTimeout(every1Second,1000);
}
