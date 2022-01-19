class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.currentTime++}, 1000)
   
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    // Tentar entender a solução usando padStart
      /* return String(value).padStart(10,"0") */
    
   if(value < 10){
      return '0' + value 
    } else{
      return String(value)
    }
  }

  stop() {
    // The global clearInterval() method cancels a timed,
    // repeating action which was previously established by a call to setInterval().
    clearInterval(this.intervalId)
  }

  reset() {
   this.currentTime = 0
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());

    return `${minutes}:${seconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
