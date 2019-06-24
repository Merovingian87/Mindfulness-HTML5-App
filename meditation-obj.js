let testTimer = new Timer;
let b;

let song = new Audio("calm-alarm.mp3");
let hitIt = function() {
  song.play();
};

function Timer() {
  this.min = 2;
  this.sec = 60;
  this.minSet = [undefined,undefined];

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
    this.minSet.push(b);
    this.showStartTime();
  }

  this.downTimer = function() {
    this.min--;
    this.minSet.pop(b);
    this.showStartTime();
  }

  this.startTimer = function() {
    let sect;

    if (this.sec == 60 || this.sec == 0) {
      this.min--;
    };
    if (this.sec < 1) {
      this.sec = 60;
    }
    this.sec--;
    if (this.sec == 60) {
    sect = "00";
  } else {
    sect = this.sec;
  }

  let timer;
          if (this.min < 10 && sect < 10) {
      timer = "0" + this.min + " : " + "0" + sect;
    } else if (this.min > 9 && sect < 10) {
       timer = this.min + " : " + "0" + sect;
    } else if (this.min < 10 && sect > 9){
       timer = "0" + this.min + " : " + sect;
    } else {
       timer = this.min + " : " + sect;
    };

    document.getElementById("MyTimerDisplay").innerText = timer;
    document.getElementById("MyTimerDisplay").textContent = timer;

    let timerId = setTimeout(() => this.startTimer(), 1000);

        if (this.min < 0) {
          clearTimeout(timerId);
          this.min = this.minSet.length;
          this.sec = 60;
          this.showStartTime();
          hitIt();
        }
  }

  // this.stopTimer = function() {
  //   let timerId = setTimeout(() => this.startTimer(), 1000);
  //   clearTimeout(timerId);
  // }
}
