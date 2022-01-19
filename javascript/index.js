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
  // printMilliseconds
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

  while (splitsElement.firstChild) {
    splitsElement.removeChild(splitsElement.firstChild);
  }
  
}

function setStopBtn() {
  
 chronometer.stop()

  btnLeftElement.innerText = 'START'
  btnLeftElement.classList.toggle('start')
  btnLeftElement.classList.toggle('stop')
  btnRightElement.innerText = 'RESET'
  btnRightElement.classList.toggle('reset')
  btnRightElement.classList.toggle('split')

  
 /*   btnLeftElement.textContent = 'STOP'
  btnLeftElement.classList.remove("start");
  btnLeftElement.classList.add("stop") */
   

}

function setSplitBtn() {
  // usar o split method e chama o printSplit 
  printSplit(chronometer.split)
  
  
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.classList.remove("reset");
  btnRightElement.classList.add("split");
  

}

function setStartBtn() {
  // usar o start method mas como

    chronometer.start(printTime);

    btnLeftElement.innerText = 'STOP'
    btnLeftElement.classList.toggle('stop')
    btnLeftElement.classList.toggle('start')
    btnRightElement.innerText = 'SPLIT'
    btnRightElement.classList.toggle('split') 
    btnRightElement.classList.toggle('reset') 

    /* 
    btnLeftElement.textContent = 'START';
    btnLeftElement.classList.remove("stop");
    btnLeftElement.classList.add("start");
    */

}

function setResetBtn() {
 
  chronometer.reset();
  minUni.innerText = 0;
  minDec.innerText = 0;
  secUni.innerText = 0;
  secDec.innerText = 0;

  clearSplits()
 
  /*
  btnRightElement.textContent = 'RESET';   
  btnRightElement.classList.remove("split");
  btnRightElement.classList.add("reset"); 
  */

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

   if(btnLeftElement.innerText === 'START') {
    //chronometer.start(printTime);
    setStartBtn()
  } else{ 
    //chronometer.stop()
    setStopBtn()
  }
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  if(btnRightElement.innerText === 'RESET'){
    setResetBtn() 
   
  } else {
    setSplitBtn()
  }
  
});


// btnLeft é start parado e vira stop quando o cronometro esta rodando
// btnRight é reset parado e vira split quando o cronometro esta rodando

