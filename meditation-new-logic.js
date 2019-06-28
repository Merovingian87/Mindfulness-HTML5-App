let song = new Audio("calm-alarm.mp3");
let startTime;
let duration = 1200;
let switch1 = false;
let hitIt = function() {
  song.play();
};

showStartTime = function() {
  let startTime;
  let min0 = duration / 60;
  let sec0 = "00";


    min0 = (min0 < 10) ? "0" + min0 : min0;

  startTime = min0 + " : " + sec0;

  document.getElementById("MyTimerDisplay").innerText = startTime;
  document.getElementById("MyTimerDisplay").textContent = startTime;
}

function upTime() {
  if (switch1 === false) {
  duration += 300;
  showStartTime();
  }
}

function downTime() {
  if (switch1 === false) {
  duration -= 300;
    if (duration <= 0) {
      duration = 300;
    }
  showStartTime();
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
  let timer;
      if (minutes < 10 && seconds < 10) {
          timer = "0" + minutes + " : " + "0" + seconds.toFixed(0);
        } else if (minutes > 9 && seconds.toFixed(0) < 10) {
          timer = minutes + " : " + "0" + seconds.toFixed(0);
        } else if (minutes < 10 && seconds.toFixed(0) > 9){
          timer = "0" + minutes + " : " + seconds.toFixed(0);
          } else {
          timer = minutes + " : " + seconds.toFixed(0);
          };

  document.getElementById("MyTimerDisplay").innerText = timer;
  document.getElementById("MyTimerDisplay").textContent = timer;

  let timerId = setTimeout(() => every1Second(), 1000);

  if (minutes < 0) {
    clearTimeout(timerId);
    showStartTime();
    hitIt();
    switch1 = false;
  }
}

function turnOn() {
  if (switch1 === false) {
    switch1 = true;
    onStartPress();
    setTimeout(every1Second,1000);
  }
}
