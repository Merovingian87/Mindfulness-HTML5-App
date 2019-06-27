let testTimer = new Timer;
let b;

let song = new Audio("calm-alarm.mp3");
let hitIt = function() {
  song.play();
};

function Timer() {
  this.min = 10;
  this.sec = 60;
  this.minSet = [undefined,undefined];
  this.duration = 600;
  this.startTime;

  this.showStartTime = function() {
    let startTime;
    let min0 = this.minSet.length;
    let sec0 = this.sec;
      if (this.sec = 60) {
        sec0 = 0;
      };

      min0 = (min0 < 10) ? "0" + min0 : min0;
      sec0 = (sec0 < 10) ? "0" + sec0 : sec0;

    startTime = min0 + " : " + sec0;

    document.getElementById("MyTimerDisplay").innerText = startTime;
    document.getElementById("MyTimerDisplay").textContent = startTime;
  }

  this.upTimer = function() {
    this.min++;
    this.duration += 60;
    this.minSet.push(b);
    this.showStartTime();
  }

  this.downTimer = function() {
    this.min--;
    this.duration -= 60;
    this.minSet.pop(b);
    this.showStartTime();
  }

  this.startSession = function () {
    this.startTime = Date.now();
    setTimeout(this.startTimer,1000);
  }

  this.startTimer = function() {
    let now = Date.now();
    let secondsPassed = ((now - this.startTime) / 1000);
    let timeleft = this.duration - secondsPassed;
    let minutes = Math.floor(timeleft / 60);
    let seconds = timeleft - (minutes * 60);

    timer = minutes + ':' + seconds;

    document.getElementById("MyTimerDisplay").innerText = timer;
    document.getElementById("MyTimerDisplay").textContent = timer;

    let timerId = setTimeout(() => this.startTimer(), 1000);

        if (minutes < 0) {
          clearTimeout(timerId);
          // this.sec = 60;
          this.showStartTime();
          hitIt();
        }
  }
}
