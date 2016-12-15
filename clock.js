class Clock {
  constructor() {
    const currentTime = new Date();
    this.hours = currentTime.getHours();
    this.minutes = currentTime.getMinutes();
    this.seconds = currentTime.getSeconds();
    this.printTime();

    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    let hourString;
    let minuteString;
    let secondString;

    hourString = (this.hours < 10 ? `0${this.hours}` : `${this.hours}`);
    minuteString = (this.minutes < 10 ? `0${this.minutes}` : `${this.minutes}`);
    secondString = (this.seconds < 10 ? `0${this.seconds}` : `${this.seconds}`);

    console.log(`${hourString}:${minuteString}:${secondString}`);
  }

  _tick() {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes += 1;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours += 1;
    }
    if (this.hours === 24) {
      this.hours = 0;
    }
    Clock.prototype.printTime.call(this);
  }
}

const clock = new Clock();
