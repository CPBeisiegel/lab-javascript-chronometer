const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');


// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {

  printMinutes()
  printSeconds()
}

function printMinutes() {
 
  minDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0]
  minUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1]
 
}

function printSeconds() {
  
  secDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0]
  secUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1]
  
}

// ==> BONUS
function printMilliseconds() {

  //const valueMil = chronometer.computeTwoDigitNumber()
  //milDecElement
  //milUniElement
}

function printSplit() {
  // criar uma nova li - createElement
  // pegar o innerText da li e fazer um appendChild no split 
   const novoElementLi = document.createElement('li');
   novoElementLi.innerText = chronometer.split()
   splitsElement.appendChild(novoElementLi);

  
}

function clearSplits() {
  
   splitsElement.removeChild(splitsElement)
}

function setStopBtn() {
  
  chronometer.stop()

  btnLeftElement.innerText = 'START'
  btnLeftElement.classList.toggle('start')
  btnRightElement.innerText = 'RESET'
  btnRightElement.classList.toggle('reset')

  /* 
   btnLeftElement.textContent = 'STOP'
  btnLeftElement.classList.remove("start");
  btnLeftElement.classList.add("stop")
   */

}

function setSplitBtn() {
  // usar o split method e chama o printSplit 
  chronometer.split(printSplit)
  /* 
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.classList.remove("reset");
  btnRightElement.classList.add("split");
  */

}

function setStartBtn() {
  // usar o start method mas como

    chronometer.start(printTime);

    btnLeftElement.innerText = 'STOP'
    btnLeftElement.classList.toggle('stop')
    btnRightElement.innerText = 'SPLIT'
    btnRightElement.classList.toggle('split')

    /* 
    btnLeftElement.textContent = 'START';
    btnLeftElement.classList.remove("stop");
    btnLeftElement.classList.add("start");
    */

}

function setResetBtn() {
 
  chronometer.reset(printTime)

  /*
  btnRightElement.textContent = 'RESET';   
  btnRightElement.classList.remove("split");
  btnRightElement.classList.add("reset"); 
  */

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

   if(btnLeftElement.innerText === 'STOP') {
    setStopBtn()
  } else{ 
    setStartBtn()
  }
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  if(btnRightElement.innerText === 'RESET'){
    setResetBtn(clearSplits) 
   
  } else {
    setSplitBtn()
  }
  
});


// btnLeft é start parado e vira stop quando o cronometro esta rodando
// btnRight é reset parado e vira split quando o cronometro esta rodando

